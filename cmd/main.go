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
}

//var proxyUrl, _ = url.Parse("http://50.207.253.118:80")
//Transport: &http.Transport{Proxy: http.ProxyURL(proxyUrl)}//Proxy

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

var CurErrMsg ErrMsg
var PageErr ErrMsg
var IgEr ErrMsg
var MediaEr ErrMsg

//ReadAccess Read Access_token from file.
func ReadAccess(c *gin.Context) {

	var BodyAccessId AcsessIdRecieve
	if err := c.BindJSON(&BodyAccessId); err != nil {
		c.IndentedJSON(424, gin.H{"message": "Попробуйте снова, используя VPN"})
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
	json.Unmarshal(bodyPage, &responsePage)

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
	c.IndentedJSON(200, CurrentSession.MyPageId)
	log.Println(CurrentSession.MyPageId)
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
	json.Unmarshal(bodyIgAccount, &responseIg)

	log.Println("inst id", responseIg.IgAccounts.MyInstagramId)

	IgEr = ErrMsg{code: 200, msg: "You got ig id"}

	return responseIg.IgAccounts.MyInstagramId
}

//GetMediaToShow Return full data about user's current Post
func GetMediaToShow(IdIg string, Token string) []MediaToShow {
	if IdIg == "" || Token == "" {
		log.Println("Отсутствуют ID бизнесс-аккаунта Instagram или AccessToken to get media")
		MediaEr = ErrMsg{code: 424, msg: "Отсутствуют ID бизнесс-аккаунта Instagram или AccessToken to get media"}
		return nil
	}
	respMedias, err := MyClient.Get(Graph + IdIg + "/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,children{media_url}&access_token=" + Token)
	if err != nil {
		fmt.Println(err)
		MediaEr = ErrMsg{code: 504, msg: "Ошибка при получении постов бизнесс-аккаунта Instagram, попробуйте снова используя VPN или обновите AccessToken"}
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
	json.Unmarshal(bodyMedias, &responseMedia)

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
		c.IndentedJSON(520, gin.H{"message": "something went wrong with delivery id of Post"})
		return
	}
	CurrentSession.MyId = BodyMyId.Id
	if CurrentSession.MyId == "" {
		c.IndentedJSON(424, gin.H{"message": "Выберите пост с которым хотите работать"})
		return
	}
	CurrentSession.CurrentBlock = 0
	c.IndentedJSON(200, CurrentSession.MyId)
	log.Println("Post ID", CurrentSession.MyId)
}

//GettingFile Recieving an File with Hashtags from POST Method and save it on computer
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
func Hashtaging(ReplyBody string, CommentBody string) {

	if ReplyBody == "" || CommentBody == "" {
		log.Println("Отсутствуют Комментарий или Ответ чтобы начать процесс")
		CurErrMsg = ErrMsg{code: 424, msg: "Отсутствуют Комментарий или Ответ чтобы начать процесс"}
		return
	}
	CommentValues := url.Values{}
	CommentValues.Add("message", CommentBody)                     //Body of first comment
	CommentValues.Add("access_token", CurrentSession.AccessToken) //accesstoken

	//var ReallyPost = PostsIds[len(PostsIds)-1]
	if CurrentSession.MyId == "" {
		log.Println("Отсутствует ID поста чтобы начать процесс")
		CurErrMsg = ErrMsg{code: 424, msg: "Отсутствует ID поста чтобы начать процесс"}
		return
	}
	var CurrentIDPost = CurrentSession.MyId

	time.Sleep(4 * time.Second)

	//Post method send request to create a comment Params=CommentValues
	comment, err := MyClient.PostForm(Graph+CurrentIDPost+"/comments?", CommentValues)

	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при попытке создать комментарий, попробуйте снова используя VPN или обновите AccessToken"}
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with comment in hashtags(1)"}
			return
		}
	}(comment.Body)

	bodyComment, err := ioutil.ReadAll(comment.Body)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with comment in hashtags(2)"}
		return
	}

	json.Unmarshal(bodyComment, &CurrentComment)

	log.Println("post id", CurrentIDPost)
	if CurrentComment.CommentId == "" {
		log.Println("Ошибка при попытке создать комментарий")
		//CurrentComment.CommentId = "Fail of creating comment"
		CurErrMsg = ErrMsg{code: 424, msg: "Ошибка при попытке создать комментарий"}
		return
	} else {
		log.Println("comment id", CurrentComment.CommentId)
	}

	//MyComment := CurrentComment.CommentId

	ReplyValues := url.Values{}
	ReplyValues.Add("message", ReplyBody) //Body of Reply
	ReplyValues.Add("access_token", CurrentSession.AccessToken)

	time.Sleep(4 * time.Second)

	//Post method send request to create a Reply Params=ReplyValues
	reply, err := MyClient.PostForm(Graph+CurrentComment.CommentId+"/replies", ReplyValues)

	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при попытке создать ответ, попробуйте снова используя VPN или обновите AccessToken"}
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with Reply in hashtags(1)"}
			return
		}
	}(reply.Body)

	bodyReply, err := ioutil.ReadAll(reply.Body)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with Reply in hashtags(2)"}
		return
	}

	json.Unmarshal(bodyReply, &currentReply)

	if currentReply.ReplyId == "" {
		log.Println("Ошибка при попытке создать ответ")
		//currentReply.ReplyId = "Fail of creating reply"
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при попытке создать ответ"}
		return
	} else {
		log.Println("Reply Id", currentReply.ReplyId)
	}
	//DelValues := url.Values{}
	//ReplyValues.Add("message", "#swissdeam")
	//ReplyValues.Add("access_token", accessToken)
	time.Sleep(3 * time.Second)

	UrlDel := Graph + CurrentComment.CommentId + "?access_token=" + CurrentSession.AccessToken

	//Delete method send request to delete a comment
	DelComment, err := http.NewRequest("DELETE", UrlDel, nil)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при удалении комментария, попробуйте снова используя VPN или обновите AccessToken(1)"}
		return
	}

	RespDelComment, err := http.DefaultClient.Do(DelComment)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при удалении комментария, попробуйте снова используя VPN или обновите AccessToken(2)"}
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with Delete in hashtags(2)"}
			return
		}
	}(RespDelComment.Body)
	bodyDelComment, err := ioutil.ReadAll(RespDelComment.Body)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with Delete in hashtags(2)"}
		return
	}

	json.Unmarshal(bodyDelComment, &currentDel)

	if currentDel.DelStatus == false {
		log.Println("Ошибка при удалении комментария")
		CurErrMsg = ErrMsg{code: 504, msg: "Ошибка при удалении комментария"}
		return
	} else {
		log.Println("status of delete", currentDel.DelStatus)
	}

	CurErrMsg = ErrMsg{code: 200, msg: "everything is ok with that block"}

	return
}

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
		c.IndentedJSON(424, gin.H{"message": "Отсутствуют блоки"})
		return
	}
	c.IndentedJSON(200, CurrentSession.Blocks)
	log.Println(CurrentSession.Blocks)
}

//Random func for time-waiting between requests
//func random(min, max int) int {
//	rand.Seed(time.Now().Unix())
//	if min > max {
//		return min
//	} else {
//		return rand.Intn(max-min) + min
//	}
//}

func StatusGet(cr *gin.Context) {
	if CurrentSession.StatusOfProcess.StatusText == 0 {
		cr.JSON(102, gin.H{"message": "waiting"})
	} else {
		if CurrentSession.StatusOfProcess.IsEnd == true {
			cr.JSON(204, CurrentSession.StatusOfProcess)
			return
		} else {
			cr.JSON(200, CurrentSession.StatusOfProcess)
		}
	}
}

//type Exiter interface {
//}
//
func ClearTempData() {
	CurrentSession.StatusOfProcess = Status{
		StatusText:    0,
		StatusComment: "",
		StatusReply:   "",
		StatusDelete:  false,
		StatusPercent: 0,
		IsEnd:         false,
	}
	CurrentSession.Blocks = []CommentsReplyFront{}
	CurrentSession.MyId = ""

}

//type ginnic gin.HandlerFunc
//
//func (Handler ginnic) AbortProcess() {
//
//	Handler
//}
//var Curhandler ginnic = Process
func ExitProcess(c *gin.Context) {
	CurrentSession.Blocks = []CommentsReplyFront{}
	CurrentSession.MyId = ""
	c.Abort()
	//Curhandler.AbortProcess()

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
		c.IndentedJSON(200, gin.H{"message": CurrentSession})
		return
	}

}

//Process main of Handling a slice of Hashtags and sending them by blocks to Hastaging to post in account
func Process(c *gin.Context) {

	if CurrentSession.AccessToken == "" {
		c.JSON(424, gin.H{"message": "Для процесса нужен AccessToken"})
		ClearTempData()
		return
	}
	if CurrentSession.UserId == "" {
		c.JSON(424, gin.H{"message": "Для процесса нужен UserId"})
		ClearTempData()
		return
	}
	if CurrentSession.MyPageId == "" {
		c.JSON(424, gin.H{"message": "Для процесса нужен MyPageId"})
		ClearTempData()
		return
	}
	if CurrentSession.MyInstagramAccount == "" {
		c.JSON(424, gin.H{"message": "Для процесса нужен MyInstagramAccount"})
		ClearTempData()
		return
	}
	if len(CurrentSession.Posts) == 0 {
		c.JSON(424, gin.H{"message": "Для процесса нужен Posts "})
		ClearTempData()
		return
	}
	if CurrentSession.MyId == "" {
		c.JSON(424, gin.H{"message": "Для процесса нужен Post Id"})
		ClearTempData()
		return
	}

	for T := CurrentSession.CurrentBlock; T < len(CurrentSession.Blocks); T = T + 1 {
		if CurrentSession.Blocks[T].Rep == "" || CurrentSession.Blocks[T].Com == "" {
			//log.Fatal("There is no comment or reply to use ")
			c.JSON(424, gin.H{"message": "Блок пустой"})
			ClearTempData()
			return
		}
		var CurrentReplyBody = ""
		var CurrentCommentBody = ""
		CurrentReplyBody = CurrentSession.Blocks[T].Rep
		CurrentCommentBody = CurrentSession.Blocks[T].Com

		Hashtaging(CurrentReplyBody, CurrentCommentBody)
		if CurErrMsg.code != 200 {
			c.JSON(CurErrMsg.code, gin.H{"message": CurErrMsg.msg})
			ClearTempData()
			return
		}

		Percent = float64(T+1) / float64(len(CurrentSession.Blocks))

		CurrentSession.StatusOfProcess.StatusText = T + 1
		CurrentSession.StatusOfProcess.StatusComment = CurrentComment.CommentId
		CurrentSession.StatusOfProcess.StatusReply = currentReply.ReplyId
		CurrentSession.StatusOfProcess.StatusDelete = currentDel.DelStatus
		CurrentSession.StatusOfProcess.StatusPercent = math.Round(Percent * 100)
		CurrentSession.CurrentBlock = T
		if (T + 1) == len(CurrentSession.Blocks) {
			CurrentSession.StatusOfProcess.IsEnd = true
			log.Println("статус процесса", CurrentSession.StatusOfProcess)
			ClearTempData()
			CurrentSession.CurrentBlock = 0
			c.JSON(200, gin.H{"status": "процесс окончен"})
			return

		} else {
			CurrentSession.StatusOfProcess.IsEnd = false
			time.Sleep(60 * time.Second)
		}

	}

	return
}

func main() {
	logger := logging.GetLogger()
	logger.Info("starting router")

	certfile := ".cert/cert.pem"
	keyfile := ".cert/key.pem"

	route := gin.Default()
	route.POST("/api/hashtags/get-access-id", ReadAccess)
	route.GET("/api/hashtags/get-pages", GetListOfPages)
	route.POST("/api/hashtags/current-fb-page", PageId)
	route.GET("/api/hashtags/all-instagram-posts", GetPosts)
	route.POST("/api/hashtags/file-of-hashtags", GettingFile)
	route.GET("/api/hashtags/sorted-hashtags", GetSortedList)
	route.POST("/api/hashtags/post-id", PostId)
	route.POST("/api/hashtags/all-blocks", PostCommentReply)
	route.GET("/api/hashtags/process", Process)
	route.GET("/api/hashtags/process/status", StatusGet)
	route.POST("/api/hashtags/process/exit", ExitProcess)
	route.POST("/api/hashtags/exit", Exit)
	//route.Run("localhost:3000") // listen and serve on 0.0.0.0:8080
	err := route.RunTLS(":8080", certfile, keyfile)

	if err != nil {
		return
	}

}
