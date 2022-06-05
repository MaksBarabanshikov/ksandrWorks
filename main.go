package main

import (
	"encoding/json"
	"fmt"
	"github.com/fatih/color"

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

type CommentsReplyFront struct {
	Com string
	Rep string
}

var NewStore = []string{}
var NewHashList = []string{}
var PostsIds = []CurrentPostType{{"18156954172144798"}}

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

var MyClient = http.Client{}
var Graph = "https://graph.facebook.com/v14.0/"
var FirstComment string = "Wed"

func ReadAccess() string {
	var TokenFile, err = os.Open("access.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer TokenFile.Close()

	var AccessByte, _ = os.ReadFile("access.txt")
	return string(AccessByte)
}

var AccessToken = ReadAccess()

func GetInstaId(Token string) string {
	MyPage, err := MyClient.Get(Graph + "me/accounts?access_token=" + Token)
	//time.Sleep(15 * time.Second)
	if err != nil {
		fmt.Println(err)
		return "Error in GetInstaId request"
	}
	defer MyPage.Body.Close()

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

	//if err != nil {
	//	fmt.Println(err)
	//	return
	//}
	defer respIgAccount.Body.Close()

	bodyIgAccount, err := ioutil.ReadAll(respIgAccount.Body)
	if err != nil {
		log.Fatal(err)
	}

	var responseIg RespIgAcconts
	json.Unmarshal(bodyIgAccount, &responseIg)

	fmt.Println("inst id", responseIg.IgAccounts.MyInstagramId)

	return responseIg.IgAccounts.MyInstagramId
}

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

var MyInstagramAccount = GetInstaId(AccessToken)
var Posts = GetMediaToShow(MyInstagramAccount, AccessToken)

func GetPosts(c *gin.Context) {
	c.JSON(200, Posts)
	fmt.Println("Данные поcтов должны отправится")
	return
}

func PostId(c *gin.Context) {
	var MyId CurrentPostType
	if err := c.BindJSON(&MyId); err != nil {
		return
	}

	PostsIds = append(PostsIds, MyId)
	c.IndentedJSON(http.StatusCreated, MyId)
	//fmt.Println("Id первого поста должен добавится в слайс")
}

func GettingFile(c *gin.Context) {
	File, _ := c.FormFile("file")
	log.Println(File.Filename)
	log.Println(File.Size)

}

func CreateHash() {

	littleFile, err := os.Open("Filetst.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	defer littleFile.Close()

	BigFile, _ := os.ReadFile("Filetst.txt")
	MyAllHes := strings.Split(string(BigFile), " ")
	var NewHash string
	for i := 0; i < len(MyAllHes); i++ {
		NewHash = MyAllHes[i]
		NewStore = append(NewStore, NewHash)
	}

	fmt.Println("хэштеги прочитались и добавились в слайс")
}

//func InputHash(ListHash string) string {
//
//	NewTemp := strings.Split(ListHash, " ")
//	for i := 0; i < len(NewTemp); i++ {
//		var NewHashIt string
//		NewHashIt = NewTemp[i]
//		NewHashList = append(NewHashList, NewHashIt)
//	}
//	var RealReplyBody string
//	for K := 1; K <= len(NewTemp)-1; K = K + 2 {
//		RealReplyBody = RealReplyBody + "#" + NewTemp[K-1] + " #" + NewTemp[K] + " "
//	}
//	return RealReplyBody
//}
func Hashtaging(ReplyBody string) {

	CommentValues := url.Values{}
	CommentValues.Add("message", FirstComment)
	CommentValues.Add("access_token", AccessToken)

	var ReallyPost = PostsIds[len(PostsIds)-1]
	var CurrentIDPost = ReallyPost.Id

	time.Sleep(4 * time.Second)

	comment, err := MyClient.PostForm(Graph+CurrentIDPost+"/comments?", CommentValues)

	if err != nil {
		fmt.Println(err)
		return
	}
	defer comment.Body.Close()

	bodyComment, err := ioutil.ReadAll(comment.Body)
	if err != nil {
		log.Fatal(err)
	}

	var CurrentComment CommentR

	json.Unmarshal(bodyComment, &CurrentComment)

	fmt.Println("post id", CurrentIDPost)
	fmt.Println("comment id", CurrentComment.CommentId)
	//MyComment := CurrentComment.CommentId

	ReplyValues := url.Values{}
	//UtfReplays:=strings.split(ReplyBody, " ")
	NewTemp := strings.Split(ReplyBody, " ")
	var RealReplyBody string = ""
	for K := 1; K < len(NewTemp)-1; K = K + 2 {
		RealReplyBody = RealReplyBody + "#" + NewTemp[K-1] + " #" + NewTemp[K] + " "
	}

	fmt.Println(RealReplyBody)

	ReplyValues.Add("message", RealReplyBody)
	ReplyValues.Add("access_token", AccessToken)

	time.Sleep(4 * time.Second)

	reply, err := MyClient.PostForm(Graph+CurrentComment.CommentId+"/replies", ReplyValues)

	if err != nil {
		fmt.Println(err)
		return
	}
	defer reply.Body.Close()

	RealReplyBody = ""

	bodyReply, err := ioutil.ReadAll(reply.Body)
	if err != nil {
		log.Fatal(err)
	}

	var currentReply ReplyR

	json.Unmarshal(bodyReply, &currentReply)

	//fmt.Println("repli json", bodyReply)
	color.Green(string(currentReply.ReplyId))

	//DelValues := url.Values{}
	//ReplyValues.Add("message", "#swissdeam")
	//ReplyValues.Add("access_token", accessToken)
	time.Sleep(3 * time.Second)

	UrlDel := Graph + CurrentComment.CommentId + "?access_token=" + AccessToken

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

	defer RespDelComment.Body.Close()
	bodyDelComment, err := ioutil.ReadAll(RespDelComment.Body)
	if err != nil {
		log.Fatal(err)
	}

	var currentDel DelR

	json.Unmarshal(bodyDelComment, &currentDel)

	fmt.Println("status of delete", currentDel.DelStatus)

}

func GetCommentReply(c *gin.Context) {
	c.JSON(200, TransportFunc)
	fmt.Println("Данные коммента и реплая должны отправится")
	return
}

func TransportFunc(ReplyforFront string, CommentforFront string) {
	var Transport CommentsReplyFront
	Transport.Rep = ReplyforFront
	Transport.Com = CommentforFront
	//fmt.Println("Данные поcтов должны поместиться в транспорт")
	return
}

func random(min, max int) int {
	rand.Seed(time.Now().Unix())
	if min > max {
		return min
	} else {
		return rand.Intn(max-min) + min
	}
}

func main() {

	//route := gin.Default()

	//route.GET("/hashtags", GetPosts)

	//fmt.Println("Данные поcтов отправились")
	//time.Sleep(10 * time.Second)
	//route.POST("/hashtags/get-post-id", PostId)
	//fmt.Println("получил ид поста")
	//route.POST("/hashtags/file-of-hashtags", GettingFile)
	//route.Run() // listen and serve on 0.0.0.0:8080

	//fmt.Println("начинаем создавать комменты")
	ReadAccess()
	CreateHash()

	for T := 1; T < len(NewStore)-1; T = T + 24 {

		var CurrentReplyBody = ""
		for U := T; U < T+24; U = U + 2 {
			CurrentReplyBody = CurrentReplyBody + NewStore[U-1] + " " + NewStore[U] + " "
			//fmt.Println("S in", S)
		}

		//var s time.Duration = time.Duration(random(5, 10))
		//time.Sleep(s * time.Second)
		//fmt.Println(FirstComment, len(CurrentReplyBody))

		Hashtaging(CurrentReplyBody)

		//GetReplyAndComment(CurrentReplyBody, CommentF)
		//route.GET("/hashtags/side-list", GetCommentReply)
		//fmt.Println("Данные коммента и реплая отправились")
	}
	////message := "first"

}
