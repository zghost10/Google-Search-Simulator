package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/gin-gonic/gin"
)

type Result struct {
	Title    string `json:"title"`
	Link     string `json:"link"`
	Snippet  string `json:"snippet"`
	Position int    `json:"position"`
}

func getData(query string, locale string, lang string) []Result {
	url := strings.Join([]string{"https://www.google.com/search?q=", strings.Join(strings.Split(query, " "), "+"), "&gl=", locale, "&hl=", lang}, "")
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatal(err)
	}

	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36")

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	list := []Result{}
	c := 0
	doc.Find("div.g").Each(func(i int, result *goquery.Selection) {
		title := result.Find("h3").First().Text()
		link, _ := result.Find("a").First().Attr("href")
		snippet := result.Find(".VwiC3b").First().Text()

		list = append(list, Result{
			Title:    title,
			Link:     link,
			Snippet:  snippet,
			Position: c + 1,
		})

		c++
	})

	return list
}

type Query struct {
	query  string
	locale string
	lang   string
}

func search(c *gin.Context) {
	queryParams := Query{}
	if err := c.BindQuery(&queryParams); err != nil {
		c.JSON(400, gin.H{"error": "Missing variables"})
	}
	c.IndentedJSON(http.StatusOK, getData(c.Query("query"), c.Query("locale"), c.Query("lang")))
}

func main() {
	router := gin.Default()
	router.GET("/search", search)

	router.Run("0.0.0.0:5000")
}
