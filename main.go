package main

import (
	"encoding/json"
	"fmt"
	"github.com/fatih/color"
	"io"

	"github.com/gin-gonic/gin"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"net/url"
	"os"
	"strings"
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

type CommentsReplyFront struct {
	Com string
	Rep string
}

var NewStore = []string{} //include hashtags divided by words as elements
var RecievedFile string
var PostsIds = []CurrentPostType{{"18156954172144798"}} //include ids of posts, last one is a current id

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
var HashtagAmount = 24                          //Amount of hashtags per one replie
var MyClient = http.Client{}                    //Client to do requests
var Graph = "https://graph.facebook.com/v14.0/" //First part of each Request
var FirstComment = "Wed"                        //first comment
var AccessToken = ReadAccess()                  //AccessToken from File, see each request
var MyInstagramAccount = GetInstaId(AccessToken)
var Posts = GetMediaToShow(MyInstagramAccount, AccessToken)

//Read Access_token from file.
func ReadAccess() string {
	var TokenFile, err = os.Open("access.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer func(TokenFile *os.File) {
		err := TokenFile.Close()
		if err != nil {

		}
	}(TokenFile)

	var AccessByte, _ = os.ReadFile("access.txt")
	return string(AccessByte)
}

//Return ID os Instagram account
func GetInstaId(Token string) string {
	MyPage, err := MyClient.Get(Graph + "me/accounts?access_token=" + Token)
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
	c.JSON(200, Posts)
	fmt.Println("Данные поcтов должны отправится")
	return
}

//Recieving an ID of IG post from POST method and put it into PostsIds slice
func PostId(c *gin.Context) {
	var MyId CurrentPostType
	if err := c.BindJSON(&MyId); err != nil {
		return
	}

	PostsIds = append(PostsIds, MyId)
	c.IndentedJSON(http.StatusCreated, MyId)
	//fmt.Println("Id первого поста должен добавится в слайс")
}

//Recieving an File with Hashtags from POST Method and save it on computer
func GettingFile(c *gin.Context) {
	//File, _ := c.FormFile("file")
	//log.Println(File.Filename)
	//log.Println(File.Size)
	var BodyFile FileRecieve
	if err := c.BindJSON(&BodyFile); err != nil {
		return
	}

	RecievedFile = BodyFile.FileBody
	c.IndentedJSON(http.StatusCreated, BodyFile)

}

//Reading file with Hashtags and putting them into NewStore slice
func CreateHash() {

	//littleFile, err := os.Open("Filetst.txt")
	//if err != nil {
	//	fmt.Println(err)
	//	os.Exit(1)
	//}
	//defer func(littleFile *os.File) {
	//	err := littleFile.Close()
	//	if err != nil {
	//
	//	}
	//}(littleFile)
	//
	//BigFile, _ := os.ReadFile("Filetst.txt")
	MyAllHes := strings.Split(string(RecievedFile), " ")
	var NewHash string
	for i := 0; i < len(MyAllHes); i++ {
		NewHash = MyAllHes[i]
		NewStore = append(NewStore, NewHash)
	}

	//fmt.Println("хэштеги прочитались и добавились в слайс")

}

//Creating:
//1.Comment at current post from PostsIds slice
//2.Reply with ReplyBody(list of HashtagAmount Hashtags) parameter to current Id Comment
//3.Deleting Comment
func Hashtaging(ReplyBody string) {

	CommentValues := url.Values{}
	CommentValues.Add("message", FirstComment)     //Body of first comment
	CommentValues.Add("access_token", AccessToken) //accesstoken

	var ReallyPost = PostsIds[len(PostsIds)-1]
	var CurrentIDPost = ReallyPost.Id

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
		color.Red(string("Fail of creating comment"))
	} else {
		fmt.Println("comment id")
		color.Blue(string(CurrentComment.CommentId))
	}

	//MyComment := CurrentComment.CommentId

	ReplyValues := url.Values{}

	//adding a "#" to each word in body of reply
	NewTemp := strings.Split(ReplyBody, " ")
	var RealReplyBody = ""
	for K := 1; K < len(NewTemp)-1; K = K + 2 {
		RealReplyBody = RealReplyBody + "#" + NewTemp[K-1] + " #" + NewTemp[K] + " "
	}

	fmt.Println(RealReplyBody)

	ReplyValues.Add("message", RealReplyBody) //Body of Reply
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

	RealReplyBody = ""

	bodyReply, err := ioutil.ReadAll(reply.Body)
	if err != nil {
		log.Fatal(err)
	}

	var currentReply ReplyR

	json.Unmarshal(bodyReply, &currentReply)

	//fmt.Println("repli json", bodyReply)
	if currentReply.ReplyId == "" {
		color.Red(string("Fail of creating reply"))
		return
	} else {
		color.Green(string(currentReply.ReplyId))
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

//Put current Comment and its Replie to Struct
func TransportFunc(ReplyforFront string, CommentforFront string) {
	var Transport CommentsReplyFront
	Transport.Rep = ReplyforFront
	Transport.Com = CommentforFront
	//fmt.Println("Данные поcтов должны поместиться в транспорт")
	return
}

//Creating json(from CommentsReplyFront struct) for GET method to show current Post and its Reply
func GetCommentReply(c *gin.Context) {
	c.JSON(200, TransportFunc)
	fmt.Println("Данные коммента и реплая должны отправится")
	return
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
func Process(HashtagsPerPost int) {
	//Creating
	for T := 1; T < len(NewStore)-1; T = T + HashtagsPerPost {

		//Creating Replie with HashtagAmount hashtags
		var CurrentReplyBody = ""
		for U := T; U < T+HashtagsPerPost; U = U + 2 {
			CurrentReplyBody = CurrentReplyBody + NewStore[U-1] + " " + NewStore[U] + " "
			//fmt.Println("S in", S)
		}

		time.Sleep(60 * time.Second)
		Hashtaging(CurrentReplyBody)

		//GetReplyAndComment(CurrentReplyBody, CommentF)
		//route.GET("/hashtags/side-list", GetCommentReply)
		//fmt.Println("Данные коммента и реплая отправились")
	}

}

func main() {

	route := gin.Default()
	//route.GET("/hashtags", GetPosts)
	//route.POST("/hashtags/get-post-id", PostId)
	route.POST("/hashtags/file-of-hashtags", GettingFile)
	route.Run() // listen and serve on 0.0.0.0:8080

	ReadAccess()
	CreateHash()
	Process(HashtagAmount)

}
