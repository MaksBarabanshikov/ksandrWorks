package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"net/url"
	"time"
)

// os.("HTTP_PROXY", "http://151.106.13.219:1080")
type RespAccounts struct {
	Accounts []Page `json:"data"`
}

type Page struct {
	PageId string `json:"id"`
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

type CommentsReplyFront struct {
	Com string
	Rep string
}

var RecievedFile string

//var PostsIds = []CurrentPostType{{"18156954172144798"}} //include ids of posts, last one is a current id
var Blocks = []CommentsReplyFront{}

//type MediaToShow struct {
//	Id           string `json:"id"`
//	Caption      string `json:"caption"`
//	LikeCount    int16  `json:"like_count"`
//	CommentCount int16  `json:"comments_count"`
//	TimeStampIg  string `json:"timestamp"`
//	Username     string `json:"username"`
//	MediaURL     string `json:"media_url"`
//	Children     string `json:"children"`
//}

//var proxyUrl, _ = url.Parse("http://50.207.253.118:80")
//Transport: &http.Transport{Proxy: http.ProxyURL(proxyUrl)}//Proxy

var MyClient = http.Client{}                    //Client to do requests
var Graph = "https://graph.facebook.com/v14.0/" //First part of each Request

var AccessToken = "" //AccessToken from File, see each request
var UserId = ""
var MyId CurrentPostType

//Read Access_token from file.
func ReadAccess(c *gin.Context) {

	var BodyAccessId AcsessIdRecieve
	if err := c.BindJSON(&BodyAccessId); err != nil {
		log.Fatal()
	}

	AccessToken = BodyAccessId.AccessBody
	UserId = BodyAccessId.UserIdBody

	fmt.Println(AccessToken, UserId)
	c.IndentedJSON(http.StatusCreated, BodyAccessId)

}

//Return ID os Instagram account
func GetInstaId(Token string, UserId string) string {
	if Token == "" || UserId == "" {
		log.Fatal("There is no token or UserID to find Pages")
	}
	MyPage, err := MyClient.Get(Graph + UserId + "/accounts?access_token=" + Token)
	//time.Sleep(15 * time.Second)
	if err != nil {
		fmt.Println(err)
		return "Error in GetInstaId request"
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(MyPage.Body)

	bodyPage, err := ioutil.ReadAll(MyPage.Body)
	if err != nil {
		log.Fatal(err)
	}

	var response RespAccounts
	json.Unmarshal(bodyPage, &response)

	var MyPageId string

	for _, a := range response.Accounts {

		MyPageId = a.PageId
	}
	fmt.Println("Page id", MyPageId)

	if Token == "" || MyPageId == "" {
		log.Fatal("there is no token or PageId to find instagram_business_account")
	}

	respIgAccount, err := MyClient.Get("https://graph.facebook.com/v14.0/" + MyPageId + "?fields=instagram_business_account&access_token=" + Token)

	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(respIgAccount.Body)

	bodyIgAccount, err := ioutil.ReadAll(respIgAccount.Body)
	if err != nil {
		log.Fatal(err)
	}

	var responseIg RespIgAcconts
	json.Unmarshal(bodyIgAccount, &responseIg)

	fmt.Println("inst id", responseIg.IgAccounts.MyInstagramId)

	return responseIg.IgAccounts.MyInstagramId
}

//Return full data about user's current Post
func GetMediaToShow(IdIg string, Token string) []byte {
	if IdIg == "" || Token == "" {
		log.Fatal("There is no Id of Ig account or token to get media")
	}
	respMedias, err := MyClient.Get(Graph + IdIg + "/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,children{media_url}&access_token=" + Token)

	//17841404572467898/media?fields=id,caption,like_count,comments_count,username,media_url,timestamp,comments,children{media_url,comments}&access_token=EAAH3gvyh1AsBAFTY0Bz3LTCzwoiDSOaYsIX01Fp4ll2eaH20KSOn6S2JmA9qmtLDeR7z5aMI5WHNLiwPp02af6dgGlG4TTIAgraTxeVKq6c38JKeQIZCMfJw42586Of30Lu0ScDWPeMcXykc5aKbsZCNPbJ1HX3kQCpTHjP8zqiZBI46v4qcZCkqXiWANrX0KocrXeg38gfVmaXFHeHHkpEDpsY13OgZD

	if err != nil {
		fmt.Println(err)

	}
	defer respMedias.Body.Close()

	bodyMedias, err := ioutil.ReadAll(respMedias.Body)
	if err != nil {
		log.Fatal(err)
	}

	//fmt.Println("Данные постов", bodyMedias)
	return bodyMedias
}

//Creating json to GET method
func GetPosts(c *gin.Context) {
	var MyInstagramAccount = GetInstaId(AccessToken, UserId)
	var Posts = GetMediaToShow(MyInstagramAccount, AccessToken)
	c.JSON(200, Posts)
	fmt.Println("Данные поcтов должны отправится")
	return
}

//Recieving an ID of IG post from POST method and put it into PostsIds slice
func PostId(c *gin.Context) {
	//var MyId CurrentPostType
	if err := c.BindJSON(&MyId); err != nil {
		return
	}

	//PostsIds = append(PostsIds, MyId)
	c.IndentedJSON(http.StatusCreated, MyId)
	//fmt.Println("Id первого поста должен добавится в слайс")
}

//Recieving an File with Hashtags from POST Method and save it on computer
func GettingFile(c *gin.Context) {

	var BodyFile FileRecieve
	if err := c.BindJSON(&BodyFile); err != nil {
		return
	}

	RecievedFile = BodyFile.FileBody

	c.IndentedJSON(http.StatusCreated, BodyFile)

}

func Sorting() string {
	var SortedList = RecievedFile
	return SortedList
}

func GetSortedList(c *gin.Context) {
	c.JSON(200, Sorting)
	fmt.Println("Отсортированный лист хештегов")
	return
}

//Creating:
//1.Comment at current post from PostsIds slice
//2.Reply with ReplyBody(list of HashtagAmount Hashtags) parameter to current Id Comment
//3.Deleting Comment
func Hashtaging(ReplyBody string, CommentBody string) {

	if ReplyBody == "" || CommentBody == "" {
		log.Fatal("There is no Reply or Comment to do the process")
	}
	CommentValues := url.Values{}
	CommentValues.Add("message", CommentBody)      //Body of first comment
	CommentValues.Add("access_token", AccessToken) //accesstoken

	//var ReallyPost = PostsIds[len(PostsIds)-1]
	var CurrentIDPost = MyId.Id

	time.Sleep(4 * time.Second)

	//Post method send request to create a comment Params=CommentValues
	comment, err := MyClient.PostForm(Graph+CurrentIDPost+"/comments?", CommentValues)

	if err != nil {
		fmt.Println(err)
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(comment.Body)

	bodyComment, err := ioutil.ReadAll(comment.Body)
	if err != nil {
		log.Fatal(err)
	}

	var CurrentComment CommentR

	json.Unmarshal(bodyComment, &CurrentComment)

	fmt.Println("post id", CurrentIDPost)
	if CurrentComment.CommentId == "" {
		fmt.Println("Fail of creating comment")
	} else {
		fmt.Println("comment id")
		fmt.Println(CurrentComment.CommentId)
	}

	//MyComment := CurrentComment.CommentId

	ReplyValues := url.Values{}
	ReplyValues.Add("message", ReplyBody) //Body of Reply
	ReplyValues.Add("access_token", AccessToken)

	time.Sleep(4 * time.Second)

	//Post method send request to create a Reply Params=ReplyValues
	reply, err := MyClient.PostForm(Graph+CurrentComment.CommentId+"/replies", ReplyValues)

	if err != nil {
		fmt.Println(err)
		return
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(reply.Body)

	bodyReply, err := ioutil.ReadAll(reply.Body)
	if err != nil {
		log.Fatal(err)
	}

	var currentReply ReplyR

	json.Unmarshal(bodyReply, &currentReply)

	if currentReply.ReplyId == "" {
		log.Fatal("Fail of creating reply")
	} else {
		log.Println(currentReply.ReplyId)
	}
	//DelValues := url.Values{}
	//ReplyValues.Add("message", "#swissdeam")
	//ReplyValues.Add("access_token", accessToken)
	time.Sleep(3 * time.Second)

	UrlDel := Graph + CurrentComment.CommentId + "?access_token=" + AccessToken

	//Delete method send request to delete a comment
	DelComment, err := http.NewRequest("DELETE", UrlDel, nil)

	if err != nil {
		fmt.Println(err)
		return
	}
	//+"%access_token="+accessToken

	RespDelComment, err := http.DefaultClient.Do(DelComment)
	if err != nil {
		log.Fatal(err)
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {

		}
	}(RespDelComment.Body)
	bodyDelComment, err := ioutil.ReadAll(RespDelComment.Body)
	if err != nil {
		log.Fatal(err)
	}

	var currentDel DelR

	json.Unmarshal(bodyDelComment, &currentDel)

	fmt.Println("status of delete", currentDel.DelStatus)

}

//add all blocks in Blocks slice with CommentsReplyFront struct for Post method to use comment and reply in process
func PostCommentReply(c *gin.Context) {

	var MyBlock CommentsReplyFront
	if err := c.BindJSON(&MyBlock); err != nil {
		return
	}

	Blocks = append(Blocks, MyBlock)
	c.IndentedJSON(http.StatusCreated, MyBlock)
}

//Random func for time-waiting between requests
func random(min, max int) int {
	rand.Seed(time.Now().Unix())
	if min > max {
		return min
	} else {
		return rand.Intn(max-min) + min
	}
}

//main Process of Handling a slice of Hashtags and sending them by blocks to Hastaging to post in account
func Process() {
	//Creating

	var CurrentReplyBody = ""
	var CurrentCommentBody = ""
	for T := 0; T < len(Blocks); T = T + 1 {
		if Blocks[T].Rep == "" || Blocks[T].Com == "" {
			log.Fatal("There is no comment or reply to use ")
		}
		CurrentReplyBody = Blocks[T].Rep
		CurrentCommentBody = Blocks[T].Com

		time.Sleep(60 * time.Second)
		Hashtaging(CurrentReplyBody, CurrentCommentBody)

	}

}

func main() {

	route := gin.Default()
	route.POST("/api/hashtags/get-access-id", ReadAccess)
	route.GET("/api/hashtags/all-instagram-posts", GetPosts)
	route.POST("/api/hashtags/file-of-hashtags", GettingFile)
	route.GET("/api/hashtags/sorted-hashtags", GetSortedList)
	route.POST("/api/hashtags/get-post-id", PostId)
	route.POST("/api/hashtags/all-blocks", PostCommentReply)
	//route.Run("localhost:3000") // listen and serve on 0.0.0.0:8080
	route.RunTLS(":3000", "C:/Users/HP/example.com+5.pem", "C:/Users/HP/example.com+5-key.pem")
	Process()
}
