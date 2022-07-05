package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"hashtags/pkg/logging"
	"io"
	"io/ioutil"
	"log"
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

//var AccessToken = "" //AccessToken from File, see each request
//var UserId = ""
//var MyId string = ""
//var MyPageId string = ""
//var NewStore = []string{}

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
		c.IndentedJSON(424, gin.H{"message": "Try again"})
		return
	}

	CurrentSession.AccessToken = BodyAccessId.AccessBody
	CurrentSession.UserId = BodyAccessId.UserIdBody

	log.Println(CurrentSession.AccessToken, CurrentSession.UserId)
	if CurrentSession.AccessToken == "" || CurrentSession.UserId == "" {
		c.IndentedJSON(424, gin.H{"message": "There is no AccessToken or UserId, try login again using VPN"})
		CurrentSession.AccessToken = ""
		CurrentSession.UserId = ""
		return
	}
	c.IndentedJSON(http.StatusCreated, BodyAccessId)

}

//GetPage Return the whole list of fb pages of current UserId
func GetPage(Token string, UserId string) []Page {
	if Token == "" || UserId == "" {
		log.Println("There is no token or UserID to find Pages")
		PageErr = ErrMsg{code: 424, msg: "There is no token or UserID to find Pages"}
		return nil
	}
	MyPage, err := MyClient.Get(Graph + UserId + "/accounts?access_token=" + Token)
	//time.Sleep(15 * time.Second)
	if err != nil {
		log.Println(err)
		PageErr = ErrMsg{code: 504, msg: "Fail to get Page, try proxy or refresh access token"}
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
			c.IndentedJSON(424, gin.H{"message": "There is no Pages associated with this FB account"})
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
		c.IndentedJSON(424, gin.H{"message": "Cant get PageId"})
		return
	}
	CurrentSession.MyPageId = BodyPageIdRecieve.IdPageFb
	c.IndentedJSON(200, CurrentSession.MyPageId)
	log.Println(CurrentSession.MyPageId)
}

//GetInstaId Return ID os Instagram account
func GetInstaId(Token string) string {

	if Token == "" || CurrentSession.MyPageId == "" {
		log.Println("there is no token or PageId to find instagram_business_account")
		IgEr = ErrMsg{code: 424, msg: "there is no token or PageId to find instagram_business_account"}
		return ""
	}

	respIgAccount, err := MyClient.Get("https://graph.facebook.com/v14.0/" + CurrentSession.MyPageId + "?fields=instagram_business_account&access_token=" + Token)
	if err != nil {
		log.Println(err)
		IgEr = ErrMsg{code: 504, msg: "Fail to get Instagram account, try proxy or refresh access token"}
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
		log.Println("There is no Id of Ig account or token to get media")
		MediaEr = ErrMsg{code: 424, msg: "There is no Id of Ig account or token to get media"}
		return nil
	}
	respMedias, err := MyClient.Get(Graph + IdIg + "/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,children{media_url}&access_token=" + Token)
	if err != nil {
		fmt.Println(err)
		MediaEr = ErrMsg{code: 504, msg: "Fail to get Instagram account's media, try proxy or refresh access token"}
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
			c.IndentedJSON(204, gin.H{"message": "There is no B.Instagram account associated with this Page"})
			return
		}
	}
	CurrentSession.Posts = GetMediaToShow(CurrentSession.MyInstagramAccount, CurrentSession.AccessToken)
	if len(CurrentSession.Posts) == 0 {
		if MediaEr.code != 200 {
			c.IndentedJSON(MediaEr.code, gin.H{"message": MediaEr.msg})
			return
		} else {
			c.IndentedJSON(204, gin.H{"message": "There is no Posts in this Instagram account"})
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
		c.IndentedJSON(424, gin.H{"message": "Post was not selected"})
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
		c.IndentedJSON(520, gin.H{"message": "something went wrong with delivery file of hashtags"})
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
		log.Println("There is no Reply or Comment to do the process")
		CurErrMsg = ErrMsg{code: 424, msg: "There is no Reply or Comment to do the process"}
		return
	}
	CommentValues := url.Values{}
	CommentValues.Add("message", CommentBody)                     //Body of first comment
	CommentValues.Add("access_token", CurrentSession.AccessToken) //accesstoken

	//var ReallyPost = PostsIds[len(PostsIds)-1]
	if CurrentSession.MyId == "" {
		log.Println("There is no PostID to do the process")
		CurErrMsg = ErrMsg{code: 424, msg: "There is no PostID to do the process"}
		return
	}
	var CurrentIDPost = CurrentSession.MyId

	time.Sleep(4 * time.Second)

	//Post method send request to create a comment Params=CommentValues
	comment, err := MyClient.PostForm(Graph+CurrentIDPost+"/comments?", CommentValues)

	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Fail of creating comment, try proxy or refresh access"}
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err)
			CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with comment in hashtags"}
			return
		}
	}(comment.Body)

	bodyComment, err := ioutil.ReadAll(comment.Body)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 520, msg: "Something went wrong with comment in hashtags"}
		return
	}

	json.Unmarshal(bodyComment, &CurrentComment)

	log.Println("post id", CurrentIDPost)
	if CurrentComment.CommentId == "" {
		log.Println("Fail of creating comment")
		//CurrentComment.CommentId = "Fail of creating comment"
		CurErrMsg = ErrMsg{code: 424, msg: "Fail of creating comment"}
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
		CurErrMsg = ErrMsg{code: 504, msg: "Fail of creating reply, try proxy or refresh access"}
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
		log.Println("Fail of creating reply, try proxy or refresh access")
		//currentReply.ReplyId = "Fail of creating reply"
		CurErrMsg = ErrMsg{code: 504, msg: "Fail of creating reply, try proxy or refresh access"}
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
		CurErrMsg = ErrMsg{code: 504, msg: "Fail of deleting comment, try proxy or refresh access(1)"}
		return
	}

	RespDelComment, err := http.DefaultClient.Do(DelComment)
	if err != nil {
		log.Println(err)
		CurErrMsg = ErrMsg{code: 504, msg: "Fail of deleting comment, try proxy or refresh access(2)"}
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
		log.Println("There is no comment to delete")
		CurErrMsg = ErrMsg{code: 504, msg: "There is no comment to delete, try proxy or refresh access"}
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
		c.IndentedJSON(424, gin.H{"message": "something went wrong in delivery blocks"})
		return
	}

	CurrentSession.Blocks = MyBlocks.ListOfBlocks

	//Blocks = append(Blocks, CurrentBlock)
	if len(CurrentSession.Blocks) == 0 {
		c.IndentedJSON(424, gin.H{"message": "There is no blocks to work with"})
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

//Process main of Handling a slice of Hashtags and sending them by blocks to Hastaging to post in account
func Process(c *gin.Context) {

	if CurrentSession.AccessToken == "" {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.AccessToken to use"})
		ClearTempData()
		return
	}
	if CurrentSession.UserId == "" {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.UserId to use"})
		ClearTempData()
		return
	}
	if CurrentSession.MyPageId == "" {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.MyPageId to use"})
		ClearTempData()
		return
	}
	if CurrentSession.MyInstagramAccount == "" {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.MyInstagramAccount to use"})
		ClearTempData()
		return
	}
	if len(CurrentSession.Posts) == 0 {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.Posts to use"})
		ClearTempData()
		return
	}
	if CurrentSession.MyId == "" {
		c.JSON(424, gin.H{"message": "There is no CurrentSession.MyId to use"})
		ClearTempData()
		return
	}

	for T := CurrentSession.CurrentBlock; T < len(CurrentSession.Blocks); T = T + 1 {
		if CurrentSession.Blocks[T].Rep == "" || CurrentSession.Blocks[T].Com == "" {
			//log.Fatal("There is no comment or reply to use ")
			c.JSON(424, gin.H{"message": "There is no comment or reply to use"})
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
		CurrentSession.StatusOfProcess.StatusPercent = Percent * 100
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
	//route.GET("/api/hashtags/process/exit", ExitProcess)
	//route.Run("localhost:3000") // listen and serve on 0.0.0.0:8080
	err := route.RunTLS(":8080", certfile, keyfile)

	if err != nil {
		return
	}

}
