package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"hashtags/pkg/logging"
	"io"
	"io/ioutil"
	"log"
	"math"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type RespAccounts struct {
	Accounts []Page `json:"data"`
}

type Page struct {
	PageId   string `json:"id"`
	PageName string `json:"name"`
}

type RespIgAcconts struct {
	IgAccounts BuisAccounts `json:"instagram_business_account"`
}

type BuisAccounts struct {
	MyInstagramId string `json:"id"`
}

type CommentR struct {
	CommentId string `json:"id"`
}

type ReplyR struct {
	ReplyId string `json:"id"`
}

type DelR struct {
	DelStatus bool `json:"success"`
}

type CurrentPostType struct {
	Id string `json:"id"`
}

type FileRecieve struct {
	FileBody string `json:"file"`
}

type AcsessIdRecieve struct {
	AccessBody string `json:"accessToken"`
	UserIdBody string `json:"userId"`
}
type PageIdRecieve struct {
	IdPageFb string `json:"fbpage"`
}

type IDtoLogout struct {
	UserIdLog string `json:"userID"`
}

type CommentsReplyFront struct {
	Com string `json:"text1"`
	Rep string `json:"text2"`
}

type Allblocks struct {
	ListOfBlocks []CommentsReplyFront `json:"data"`
}

type AllMediaToShow struct {
	PostsOfAccount []MediaToShow `json:"data"`
}

var RecievedFile string

//var PostsIds = []CurrentPostType{{"18156954172144798"}} //include ids of posts, last one is a current id

type MediaToShow struct {
	Id           string            `json:"id"`
	Caption      string            `json:"caption"`
	LikeCount    int16             `json:"like_count"`
	CommentCount int16             `json:"comments_count"`
	TimeStampIg  string            `json:"timestamp"`
	Username     string            `json:"username"`
	MediaURL     string            `json:"media_url"`
	Children     ChildrenMediaData `json:"children"`
}

type ChildrenMediaData struct {
	MediaKidList []MediaKid `json:"data"`
}

type MediaKid struct {
	KidUrl string `json:"media_url"`
	KidId  string `json:"id"`
}

type Status struct {
	StatusText    int     `json:"status"`
	StatusComment string  `json:"commentId"`
	StatusReply   string  `json:"replyId"`
	StatusDelete  bool    `json:"deleteStatus"`
	StatusPercent float64 `json:"percent"`
	IsEnd         bool    `json:"isEnd"`
	Done          bool    `json:"done"`
	Method        string  `json:"method"`
}

var MyClient = http.Client{}                    //Client to do requests
var Graph = "https://graph.facebook.com/v14.0/" //First part of each Request

var CurrentSession struct {
	AccessToken        string
	UserId             string
	MyPageId           string
	MyInstagramAccount string
	MyId               string
	NewStore           []string
	Blocks             []CommentsReplyFront
	CurrentBlock       int
	Posts              []MediaToShow
	StatusOfProcess    Status
}

var CurrentComment CommentR
var currentReply ReplyR
var currentDel DelR
var Percent float64

type ErrMsg struct {
	code int
	msg  string
}

var PageErr ErrMsg
var IgEr ErrMsg
var MediaEr ErrMsg

func roundFloat(val float64, precision uint) float64 {
	ratio := math.Pow(10, float64(precision))
	return math.Round(val*ratio) / ratio
}

//ReadAccess Read Access_token from file.
func ReadAccess(c *gin.Context) {

	var BodyAccessId AcsessIdRecieve
	if err := c.BindJSON(&BodyAccessId); err != nil {
		c.IndentedJSON(424, gin.H{"message": "Попробуйте снова"})
		return
	}

	CurrentSession.AccessToken = BodyAccessId.AccessBody
	CurrentSession.UserId = BodyAccessId.UserIdBody

	log.Println(CurrentSession.AccessToken, CurrentSession.UserId)
	if CurrentSession.AccessToken == "" || CurrentSession.UserId == "" {
		c.IndentedJSON(424, gin.H{"message": "Отсутствуют AccessToken или UserId, попробуйте войти используя VPN"})
		CurrentSession.AccessToken = ""
		CurrentSession.UserId = ""
		return
	}
	c.IndentedJSON(200, BodyAccessId)

}

func RefreshAccess(c *gin.Context) {

	var BodyAccessId AcsessIdRecieve
	if err := c.BindJSON(&BodyAccessId); err != nil {
		c.IndentedJSON(424, gin.H{"message": "Попробуйте снова, используя VPN"})
		return
	}

	CurrentSession.AccessToken = BodyAccessId.AccessBody

	log.Println("refreshed", CurrentSession.AccessToken)
	if CurrentSession.AccessToken == "" {
		c.IndentedJSON(424, gin.H{"message": "Отсутствует AccessToken, попробуйте обновить используя VPN"})
		return
	}
	c.IndentedJSON(200, BodyAccessId)

}

//GetPage Return the whole list of fb pages of current UserId
func GetPage(Token string, UserId string) []Page {
	if Token == "" || UserId == "" {
		log.Println("Отсутствуют AccessToken или UserId чтобы найти страницы")
		PageErr = ErrMsg{code: 424, msg: "Отсутствуют AccessToken или UserId чтобы найти страницы"}
		return nil
	}
	MyPage, err := MyClient.Get(Graph + UserId + "/accounts?access_token=" + Token)
	//time.Sleep(15 * time.Second)
	if err != nil {
		log.Println(err)
		PageErr = ErrMsg{code: 504, msg: "Ошибка при получении страниц, попробуйте снова используя VPN"}
		return nil
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			PageErr = ErrMsg{code: 520, msg: "something went wrong with getting pages, try again(1)"}
			return
		}
	}(MyPage.Body)

	bodyPage, err := ioutil.ReadAll(MyPage.Body)
	if err != nil {
		log.Println(err)
		PageErr = ErrMsg{code: 520, msg: "something went wrong with getting pages, try again(2)"}
		return nil
	}

	var responsePage RespAccounts
	marsher := json.Unmarshal(bodyPage, &responsePage)
	if marsher != nil {
		PageErr = ErrMsg{code: 401, msg: "Обновите Акссесс токен(from get page) "}
		return nil
	}

	PageErr = ErrMsg{code: 200, msg: "You got a pages"}

	return responsePage.Accounts
}

//GetListOfPages Creating json for GET method
func GetListOfPages(c *gin.Context) {
	var Pages = GetPage(CurrentSession.AccessToken, CurrentSession.UserId)
	if len(Pages) == 0 {
		if PageErr.code != 200 {
			c.IndentedJSON(PageErr.code, gin.H{"message": PageErr.msg})
			return
		} else {
			c.IndentedJSON(424, gin.H{"message": "Нет страниц, привязанных к этому аккаунту Facebook"})
			return
		}
	}
	c.JSON(200, Pages)
	log.Println("Данные страниц должны отправится")
	log.Println(Pages)
	return
}

//PageId Recieving an ID of FB page from POST method
func PageId(c *gin.Context) {
	var BodyPageIdRecieve PageIdRecieve
	if err := c.BindJSON(&BodyPageIdRecieve); err != nil {
		c.IndentedJSON(424, gin.H{"message": "Ошибка при получении ID страницы, попробуйте снова"})
		return
	}
	CurrentSession.MyPageId = BodyPageIdRecieve.IdPageFb
	if CurrentSession.MyPageId == "" {
		c.IndentedJSON(424, gin.H{"message": "Ошибка при получении ID страницы, попробуйте снова"})
		return
	}
	c.IndentedJSON(200, CurrentSession.MyPageId)
	log.Println(CurrentSession.MyPageId)
	return
}

//GetInstaId Return ID os Instagram account
func GetInstaId(Token string) string {

	if Token == "" || CurrentSession.MyPageId == "" {
		log.Println("Отсутствуют AccessToken или UserId чтобы найти бизнесс-аккаунт Instagram")
		IgEr = ErrMsg{code: 424, msg: "Отсутствуют AccessToken или UserId чтобы найти бизнесс-аккаунт Instagram"}
		return ""
	}

	respIgAccount, err := MyClient.Get("https://graph.facebook.com/v14.0/" + CurrentSession.MyPageId + "?fields=instagram_business_account&access_token=" + Token)
	if err != nil {
		log.Println(err)
		IgEr = ErrMsg{code: 504, msg: "Ошибка при получении бизнесс-аккаунта Instagram, попробуйте снова используя VPN"}
		return ""
	}

	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			IgEr = ErrMsg{code: 520, msg: "something went wrong  with getting ig id(1)"}
			return
		}
	}(respIgAccount.Body)

	bodyIgAccount, err := ioutil.ReadAll(respIgAccount.Body)
	if err != nil {
		log.Println(err)
		IgEr = ErrMsg{code: 520, msg: "something went wrong  with getting ig id(2)"}
		return ""
	}

	var responseIg RespIgAcconts
	marsher := json.Unmarshal(bodyIgAccount, &responseIg)
	if marsher != nil {
		PageErr = ErrMsg{code: 401, msg: "Обновите свой AccessToken (перелогинтесь)"}
		return ""
	}

	//if responseIg.IgAccounts.MyInstagramId == "" {
	//	IgEr = ErrMsg{code: 424, msg: "Ошибка при получении бизнесс-аккаунта Instagram, попробуйте снова используя VPN"}
	//	return ""
	//}

	log.Println("inst id", responseIg.IgAccounts.MyInstagramId)

	IgEr = ErrMsg{code: 200, msg: "You got ig id"}

	return responseIg.IgAccounts.MyInstagramId
}

//GetMediaToShow Return full data about user's current Post
func GetMediaToShow(IdIg string, Token string) []MediaToShow {
	if IdIg == "" || Token == "" {
		log.Println("Отсутствуют ID бизнесс-аккаунта Instagram или AccessToken для получения постов")
		MediaEr = ErrMsg{code: 424, msg: "Отсутствуют ID бизнесс-аккаунта Instagram или AccessToken для получения постов"}
		return nil
	}
	respMedias, err := MyClient.Get(Graph + IdIg + "/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,children{media_url}&access_token=" + Token)
	if err != nil {
		fmt.Println(err)
		MediaEr = ErrMsg{code: 504, msg: "Ошибка при получении постов бизнесс-аккаунта Instagram, попробуйте снова используя VPN"}
		return nil
	}
	defer respMedias.Body.Close()
	//17841404572467898/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,comments,children{media_url,comments}&access_token=EAAH3gvyh1AsBAFTY0Bz3LTCzwoiDSOaYsIX01Fp4ll2eaH20KSOn6S2JmA9qmtLDeR7z5aMI5WHNLiwPp02af6dgGlG4TTIAgraTxeVKq6c38JKeQIZCMfJw42586Of30Lu0ScDWPeMcXykc5aKbsZCNPbJ1HX3kQCpTHjP8zqiZBI46v4qcZCkqXiWANrX0KocrXeg38gfVmaXFHeHHkpEDpsY13OgZD

	bodyMedias, err := ioutil.ReadAll(respMedias.Body)
	if err != nil {
		log.Println(err)
		MediaEr = ErrMsg{code: 520, msg: "something went wrong with getting medias"}
		return nil
	}

	var responseMedia AllMediaToShow
	marsher := json.Unmarshal(bodyMedias, &responseMedia)
	if marsher != nil {
		PageErr = ErrMsg{code: 401, msg: "Обновите свой AccessToken (перелогинтесь)"}
		return nil
	}

	log.Println("media", responseMedia)

	MediaEr = ErrMsg{code: 200, msg: "You got media"}

	//fmt.Println("Данные постов", bodyMedias)
	return responseMedia.PostsOfAccount
}

//GetPosts Creating json to GET method
func GetPosts(c *gin.Context) {
	CurrentSession.MyInstagramAccount = GetInstaId(CurrentSession.AccessToken)
	if CurrentSession.MyInstagramAccount == "" {
		if IgEr.code != 200 {
			c.IndentedJSON(IgEr.code, gin.H{"message": IgEr.msg})
			return
		} else {
			c.IndentedJSON(424, gin.H{"message": "Привяжите свой бизнес-аккаунт Instagram к текущей странице, или выберите другую страницу"})
			return
		}
	}
	CurrentSession.Posts = GetMediaToShow(CurrentSession.MyInstagramAccount, CurrentSession.AccessToken)
	if len(CurrentSession.Posts) == 0 {
		if MediaEr.code != 200 {
			c.IndentedJSON(MediaEr.code, gin.H{"message": MediaEr.msg})
			return
		} else {
			c.IndentedJSON(424, gin.H{"message": "В привязанном бизнес-аккаунте Instagram отсутсвуют посты"})
			return
		}
	}
	c.JSON(200, CurrentSession.Posts)
	return
}

//PostId Recieving an ID of IG post from POST method
func PostId(c *gin.Context) {
	var BodyMyId CurrentPostType
	if err := c.BindJSON(&BodyMyId); err != nil {
		c.IndentedJSON(520, gin.H{"message": "Попробуйте снова"})
		return
	}
	CurrentSession.MyId = BodyMyId.Id
	if CurrentSession.MyId == "" {
		c.IndentedJSON(424, gin.H{"message": "Выберите пост с которым хотите работать"})
		return
	}
	ClearTempData()
	CurrentSession.CurrentBlock = 0
	c.IndentedJSON(200, CurrentSession.MyId)
	log.Println("Post ID", CurrentSession.MyId)
}

//GettingFile get file from frontend to sorting
func GettingFile(c *gin.Context) {

	var BodyFile FileRecieve
	if err := c.BindJSON(&BodyFile); err != nil {
		c.IndentedJSON(520, gin.H{"message": "Ошибка при отправке файла, попробуйте снова"})
		return
	}

	RecievedFile = BodyFile.FileBody

	log.Println("file recieved", RecievedFile)
	c.IndentedJSON(200, BodyFile)

}

func Sorting() []string {
	var sortedList []string
	sortedList = strings.Split(RecievedFile, " ")
	var NewHash string
	for i := 0; i < len(sortedList); i++ {
		if sortedList[i] != "" {
			NewHash = "#" + sortedList[i]
			CurrentSession.NewStore = append(CurrentSession.NewStore, NewHash)
		}
	}

	log.Println("file *sorted*")
	return CurrentSession.NewStore

}

func GetSortedList(c *gin.Context) {
	var SortedListGet = Sorting()
	c.JSON(200, SortedListGet)
	CurrentSession.NewStore = []string{}
	log.Println("Отсортированный лист хештегов)")
	return
}

//Hashtaging Creating: 1.Comment at current post from PostId method 2.Reply with ReplyBody parameter to current Id Comment  3.Deleting Comment

//PostCommentReply add all blocks in Blocks slice with CommentsReplyFront struct for Post method to use comment and reply in process
func PostCommentReply(c *gin.Context) {

	var MyBlocks Allblocks
	if err := c.BindJSON(&MyBlocks); err != nil {
		c.IndentedJSON(424, gin.H{"message": "Произошла ошибка при отправке блоков"})
		return
	}

	CurrentSession.Blocks = MyBlocks.ListOfBlocks

	//Blocks = append(Blocks, CurrentBlock)
	if len(CurrentSession.Blocks) == 0 {
		c.IndentedJSON(424, gin.H{"message": "Чтобы запустить процесс - загрузите список с хештегами или загрузите их вручную"})
		return
	}
	c.IndentedJSON(200, CurrentSession.Blocks)
	log.Println(CurrentSession.Blocks)
}

func StatusGet(cr *gin.Context) {
	cr.JSON(200, CurrentSession.StatusOfProcess)
	return
}

func ClearTempData() {
	CurrentSession.StatusOfProcess.StatusText = 0
	CurrentSession.StatusOfProcess.StatusComment = ""
	CurrentSession.StatusOfProcess.StatusReply = ""
	CurrentSession.StatusOfProcess.StatusDelete = false
	CurrentSession.StatusOfProcess.StatusPercent = 0
	CurrentSession.StatusOfProcess.IsEnd = false
	CurrentSession.StatusOfProcess.Done = false
	CurrentSession.StatusOfProcess.Method = ""
	return
}

func ExitProcess(c *gin.Context) {
	log.Println("делаю Done из ExitProcess")
	CurrentSession.StatusOfProcess.Done = true
	return
}

func Exit(c *gin.Context) {
	var BodyUserIdLog IDtoLogout
	if err := c.BindJSON(&BodyUserIdLog); err != nil {
		c.IndentedJSON(424, gin.H{"message": "User ID не пришел"})
		log.Println("userid перед выходом", BodyUserIdLog.UserIdLog)
		return
	} else {
		CurrentSession.AccessToken = ""
		CurrentSession.UserId = ""
		CurrentSession.MyPageId = ""
		CurrentSession.MyInstagramAccount = ""
		CurrentSession.Posts = []MediaToShow{}
		CurrentSession.MyId = ""
		CurrentSession.NewStore = []string{}
		CurrentSession.Blocks = []CommentsReplyFront{}
		CurrentSession.CurrentBlock = 0
		CurrentSession.StatusOfProcess = Status{
			StatusText:    0,
			StatusComment: "",
			StatusReply:   "",
			StatusDelete:  false,
			StatusPercent: 0,
			IsEnd:         false,
		}
		ClearTempData()
		c.IndentedJSON(200, gin.H{"message": CurrentSession})
		return
	}

}

func Commenting(c *gin.Context) {

	CurrentSession.StatusOfProcess.Method = "Com"
	CurrentSession.StatusOfProcess.Done = false
	if CurrentSession.StatusOfProcess.IsEnd == true {
		CurrentSession.StatusOfProcess.Method = ""
		ClearTempData()
		return
	}
	if CurrentSession.CurrentBlock == 0 {
		ClearTempData()
	}

	CommentBody := CurrentSession.Blocks[CurrentSession.CurrentBlock].Com

	if CommentBody == "" {
		log.Println("Отсутствуют Комментарий чтобы начать процесс")
		c.IndentedJSON(424, gin.H{"message": "Отсутствуют Комментарий или Ответ чтобы начать процесс"})
		return
	}
	CommentValues := url.Values{}
	CommentValues.Add("message", CommentBody)                     //Body of first comment
	CommentValues.Add("access_token", CurrentSession.AccessToken) //accesstoken

	if CurrentSession.MyId == "" {
		log.Println("Отсутствует ID поста чтобы начать процесс")
		c.IndentedJSON(424, gin.H{"message": "Отсутствует ID поста чтобы начать процесс"})
		return
	}

	//Post method send request to create a comment Params=CommentValues
	comment, err := MyClient.PostForm(Graph+CurrentSession.MyId+"/comments?", CommentValues)
	if err != nil {
		log.Println(err)
		c.IndentedJSON(504, gin.H{"message": "Ошибка при попытке создать комментарий, попробуйте снова используя VPN "})
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			c.IndentedJSON(520, gin.H{"message": "Something went wrong with comment in hashtags(1)"})
			return
		}
	}(comment.Body)

	bodyComment, err := ioutil.ReadAll(comment.Body)
	if err != nil {
		log.Println(err)
		c.IndentedJSON(520, gin.H{"message": "Something went wrong with comment in hashtags(2)"})
		return
	}

	marsher := json.Unmarshal(bodyComment, &CurrentComment)
	if marsher != nil {
		log.Println("Обновите свой AccessToken (перелогинтесь) и процесс продолжится с блока на котором остановился (from comment)")
		c.IndentedJSON(401, gin.H{"message": "Обновите свой AccessToken и процесс продолжится с блока на котором остановился (from comment)"})
		return
	}

	log.Println("post id", CurrentSession.MyId)
	if CurrentComment.CommentId == "" {
		log.Println("Ошибка при попытке создать комментарий")
		c.IndentedJSON(424, gin.H{"message": "Ошибка при попытке создать комментарий"})
		return
	}

	log.Println("comment id", CurrentComment.CommentId)
	log.Println("comment body", CommentBody)
	log.Println("method", CurrentSession.StatusOfProcess.Method)
	CurrentSession.StatusOfProcess.StatusComment = CurrentComment.CommentId

	if CurrentSession.StatusOfProcess.Done == true {
		log.Println("Выход по кнопке")
		c.IndentedJSON(200, CurrentComment.CommentId)
		CurrentSession.StatusOfProcess.Method = "Rep"
		return
	}
	log.Println("Выход по окончанию")
	CurrentSession.StatusOfProcess.Method = "Rep"
	return

}
func Replying(c *gin.Context) {
	CurrentSession.StatusOfProcess.Done = false

	ReplyBody := CurrentSession.Blocks[CurrentSession.CurrentBlock].Rep

	if ReplyBody == "" {
		log.Println("Отсутствует ответ чтобы начать процесс")
		c.IndentedJSON(424, gin.H{"message": "Отсутствует ответ чтобы начать процесс"})
		return
	}

	ReplyValues := url.Values{}
	ReplyValues.Add("message", ReplyBody) //Body of Reply
	ReplyValues.Add("access_token", CurrentSession.AccessToken)

	time.Sleep(4 * time.Second)

	//Post method send request to create a Reply Params=ReplyValues
	reply, err := MyClient.PostForm(Graph+CurrentComment.CommentId+"/replies", ReplyValues)
	if err != nil {
		log.Println(err)
		c.IndentedJSON(504, gin.H{"message": "Ошибка при попытке создать ответ, попробуйте снова используя VPN."})
		return
		//user turn on VPN and restart->Reply
	}

	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			c.IndentedJSON(520, gin.H{"message": "Something went wrong with Reply in hashtags(1)"})
			return
			//restart->REPLY
		}
	}(reply.Body)

	bodyReply, err := ioutil.ReadAll(reply.Body)
	if err != nil {
		log.Println(err)
		c.IndentedJSON(520, gin.H{"message": "Something went wrong with Reply in hashtags(2)"})
		return
		//restart->REPLY
	}

	marsherR := json.Unmarshal(bodyReply, &currentReply)
	if marsherR != nil {
		log.Println("Обновите AccessToken и процесс продолжится с  блока на котором остановился (from reply).")
		c.IndentedJSON(401, gin.H{"message": "Обновите AccessToken и процесс продолжится с  блока на котором остановился (from reply)."})
		return
		//User REFRESH Token and restart->REPLY
	}

	if currentReply.ReplyId == "" {
		log.Println("Ошибка при попытке создать ответ, у текущего поста не должно быть хештегов. Пожалуйста, проверьте свой аккаунт инстаграмм и удалите комментарий с хештегами и нажмите <<Возобновить>>")
		c.IndentedJSON(504, gin.H{"message": "Ошибка при попытке создать ответ, у текущего поста не должно быть хештегов. Пожалуйста, проверьте свой аккаунт инстаграмм и удалите комментарий с хештегами и попробуйте снова"})
		return
		//User delete hashtags and restart->REPLY
	}
	log.Println("Reply Id", currentReply.ReplyId)
	log.Println("Reply body", ReplyBody)
	log.Println("method", CurrentSession.StatusOfProcess.Method)
	if CurrentSession.StatusOfProcess.Done == true {
		log.Println("Выход по кнопке")
		c.IndentedJSON(200, gin.H{"message": "Комментарий не был удален, возобновите процесс чтобы закончить с текущим блоком"})
		CurrentSession.StatusOfProcess.Method = "Del"
		return
	}

	CurrentSession.StatusOfProcess.StatusReply = currentReply.ReplyId
	CurrentSession.StatusOfProcess.Method = "Del"
	return

}

//If Replying is 200 ->
func Deliting(c *gin.Context) {
	CurrentSession.StatusOfProcess.Done = false

	UrlDel := Graph + CurrentComment.CommentId + "?access_token=" + CurrentSession.AccessToken
	//Delete method send request to delete a comment
	DelComment, err := http.NewRequest("DELETE", UrlDel, nil)
	if err != nil {
		log.Println("Ошибка при удалении комментария, попробуйте снова используя VPN (1)")
		c.IndentedJSON(504, gin.H{"message": "Ошибка при удалении комментария, попробуйте снова используя VPN (1)"})
		return
	}

	RespDelComment, err := http.DefaultClient.Do(DelComment)
	if err != nil {
		log.Println("Ошибка при удалении комментария, попробуйте снова используя VPN (2)")
		c.IndentedJSON(504, gin.H{"message": "Ошибка при удалении комментария, попробуйте снова используя VPN (2)"})
		return
	}
	defer func(Body io.ReadCloser) {
		err = Body.Close()
		if err != nil {
			log.Println("Something went wrong with Delete in hashtags(2)")
			c.IndentedJSON(520, gin.H{"message": "Something went wrong with Delete in hashtags(2)"})
			return
		}
	}(RespDelComment.Body)

	bodyDelComment, err := ioutil.ReadAll(RespDelComment.Body)
	if err != nil {
		log.Println("Something went wrong with Delete in hashtags(1)")
		c.IndentedJSON(520, gin.H{"message": "Something went wrong with Delete in hashtags(1)"})
		return
	}

	marsherDel := json.Unmarshal(bodyDelComment, &currentDel)
	if marsherDel != nil {
		log.Println("обновите AccessToken и нажмите <<Возобновить>> (from get Del)")
		c.IndentedJSON(401, gin.H{"message": "обновите AccessToken и нажмите <<Возобновить>>"})
		return
	}

	if currentDel.DelStatus == false {
		log.Println("Ошибка при удалении комментария")
		c.IndentedJSON(504, gin.H{"message": "Ошибка при удалении комментария"})
		return
	}
	log.Println("status of delete", currentDel.DelStatus)
	log.Println("method", CurrentSession.StatusOfProcess.Method)

	Percent = float64(CurrentSession.CurrentBlock+1) / float64(len(CurrentSession.Blocks))

	if CurrentSession.CurrentBlock == len(CurrentSession.Blocks)-1 {
		c.IndentedJSON(201, currentDel.DelStatus)
		CurrentSession.StatusOfProcess.IsEnd = true
		CurrentSession.StatusOfProcess.StatusDelete = currentDel.DelStatus
		CurrentSession.StatusOfProcess.StatusPercent = math.Round(Percent * 100)
		CurrentSession.Blocks = []CommentsReplyFront{}
		CurrentSession.CurrentBlock = 0
		return
	}

	if CurrentSession.StatusOfProcess.Done == true {
		c.IndentedJSON(200, gin.H{"message": "выход по кнопке из Deleting"})
		CurrentSession.StatusOfProcess.StatusPercent = roundFloat(Percent, 2)
		CurrentSession.StatusOfProcess.Method = "Com"
		return
	}
	CurrentSession.StatusOfProcess.StatusText = CurrentSession.CurrentBlock + 1
	CurrentSession.StatusOfProcess.StatusDelete = currentDel.DelStatus
	CurrentSession.StatusOfProcess.StatusPercent = math.Round(Percent * 100)
	CurrentSession.StatusOfProcess.Method = "Com"
	CurrentSession.CurrentBlock = CurrentSession.CurrentBlock + 1
	return
}

//func Process(c *gin.Context) {
//	if CurrentSession.CurrentBlock == 0 {
//		ClearTempData()
//	}
//	CurrentSession.StatusOfProcess.Done = false
//
//	if CurrentSession.AccessToken == "" {
//		c.JSON(424, gin.H{"message": "Для процесса нужен AccessToken"})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if CurrentSession.UserId == "" {
//		c.JSON(424, gin.H{"message": "Для процесса нужен UserId"})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if CurrentSession.MyPageId == "" {
//		c.JSON(424, gin.H{"message": "Для процесса нужен MyPageId"})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if CurrentSession.MyInstagramAccount == "" {
//		c.JSON(424, gin.H{"message": "Для процесса нужен MyInstagramAccount"})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if len(CurrentSession.Posts) == 0 {
//		c.JSON(424, gin.H{"message": "Для процесса нужен Posts "})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if CurrentSession.MyId == "" {
//		c.JSON(424, gin.H{"message": "Для процесса нужен Post Id"})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//	if len(CurrentSession.Blocks) == 0 {
//		c.JSON(424, gin.H{"message": "Для процесса нужны blocks "})
//		CurrentSession.Blocks = []CommentsReplyFront{}
//		return
//	}
//
//	for T := CurrentSession.CurrentBlock; T < len(CurrentSession.Blocks); T = CurrentSession.CurrentBlock + 1 {
//		CurrentSession.CurrentBlock = T
//		if CurrentSession.Blocks[T].Rep == "" || CurrentSession.Blocks[T].Com == "" {
//			c.JSON(424, gin.H{"message": "Блок пустой"})
//			CurrentSession.Blocks = []CommentsReplyFront{}
//			return
//		}
//
//		if CurrentSession.StatusOfProcess.Done == true {
//			log.Println("выход по кнопке1")
//			c.JSON(200, gin.H{"status": "процесс окончен по кнопке1"})
//			CurrentSession.Blocks = []CommentsReplyFront{}
//			return
//		}
//
//		log.Println(T, CurrentSession.CurrentBlock, "до hashtaging")
//
//		//Hashtaging(CurrentReplyBody, CurrentCommentBody)*/
//		if CurErrMsg.code != 200 {
//			c.JSON(CurErrMsg.code, gin.H{"message": CurErrMsg.msg})
//			CurrentSession.Blocks = []CommentsReplyFront{}
//			log.Println("выход из Process из-за ошибки")
//			return
//		}
//
//		Percent = float64(T+1) / float64(len(CurrentSession.Blocks))
//
//		CurrentSession.StatusOfProcess.StatusText = T + 1
//		CurrentSession.StatusOfProcess.StatusComment = CurrentComment.CommentId
//		CurrentSession.StatusOfProcess.StatusReply = currentReply.ReplyId
//		CurrentSession.StatusOfProcess.StatusDelete = currentDel.DelStatus
//		CurrentSession.StatusOfProcess.StatusPercent = math.Round(Percent * 100)
//
//		log.Println(T, CurrentSession.CurrentBlock, "после hashtaging")
//		/////BUTTON
//		if CurrentSession.StatusOfProcess.Done == true {
//			if (T + 1) == len(CurrentSession.Blocks) {
//				CurrentSession.StatusOfProcess.IsEnd = true
//			}
//			CurrentSession.CurrentBlock = CurrentSession.CurrentBlock + 1
//			time.Sleep(20 * time.Second)
//			log.Println("выход по кнопке2")
//			c.JSON(200, gin.H{"status": "процесс окончен по кнопке2"})
//			CurrentSession.Blocks = []CommentsReplyFront{}
//			return
//		}
//
//		///IS END
//		if (T + 1) == len(CurrentSession.Blocks) {
//			CurrentSession.StatusOfProcess.IsEnd = true
//			log.Println("статус процесса", CurrentSession.StatusOfProcess)
//			log.Println("выход из Process по окончанию")
//			CurrentSession.CurrentBlock = 0
//			c.JSON(200, gin.H{"status": "процесс окончен"})
//			CurrentSession.Blocks = []CommentsReplyFront{}
//			return
//
//		} else {
//			CurrentSession.StatusOfProcess.IsEnd = false
//			time.Sleep(60 * time.Second)
//		}
//
//	}
//
//	c.JSON(CurErrMsg.code, gin.H{"message": CurErrMsg.msg})
//	CurrentSession.Blocks = []CommentsReplyFront{}
//	return
//}

func main() {
	logger := logging.GetLogger()
	logger.Info("starting router")

	certfile := ".cert/cert.pem"
	keyfile := ".cert/key.pem"

	route := gin.Default()
	route.POST("/api/hashtags/get-access-id", ReadAccess)
	route.POST("/api/hashtags/refresh-access", RefreshAccess)
	route.GET("/api/hashtags/get-pages", GetListOfPages)
	route.POST("/api/hashtags/current-fb-page", PageId)
	route.GET("/api/hashtags/all-instagram-posts", GetPosts)
	route.POST("/api/hashtags/file-of-hashtags", GettingFile)
	route.GET("/api/hashtags/sorted-hashtags", GetSortedList)
	route.POST("/api/hashtags/post-id", PostId)
	route.POST("/api/hashtags/all-blocks", PostCommentReply)
	route.GET("/api/hashtags/process/comment", Commenting)
	route.GET("/api/hashtags/process/reply", Replying)
	route.GET("/api/hashtags/process/delete", Deliting)
	route.GET("/api/hashtags/process/status", StatusGet)
	route.GET("/api/hashtags/process/exit", ExitProcess)
	route.POST("/api/hashtags/exit", Exit)
	//route.Run("localhost:3000") // listen and serve on 0.0.0.0:8080
	err := route.RunTLS(":8080", certfile, keyfile)

	if err != nil {
		return
	}

}
