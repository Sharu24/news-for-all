import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";

import NewsNavbar from "./components/Navbar";
import Search from "./components/Search";
import News from "./components/News";
import Article from "./components/Article";

function App() {
  const apiKey = "0ca53f93621b4e0cb60b865c677ad37e";
  const [news, setNews] = useState([]);
  const [randomNews, setRandomNews] = useState([]);
  const [editorsNews, setEditorsNews] = useState([]);
  const [pageSize, setPageSize] = useState(9);
  const [searchText, setSearchText] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [article, setArticle] = useState(null);

  const getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=${pageSize}&apiKey=${apiKey}`;
    const urlRandom = `https://newsapi.org/v2/everything?language=en&q=random&pageSize=${pageSize}&apiKey=${apiKey}`;
    const urlPicks = `https://newsapi.org/v2/everything?language=en&domains=%27bbc.co.uk,%20techcrunch.com,%20engadget.com%27&sortBy=popularity&pageSize=${pageSize}&apiKey=${apiKey}`;

    const resNews = await axios.get(url);
    const resRandomNews = await axios.get(urlRandom);
    const resEditorsNews = await axios.get(urlPicks);
    console.log(resNews.data.articles.length);
    setNews(resNews.data.articles);
    setRandomNews(resRandomNews.data.articles);
    setEditorsNews(resEditorsNews.data.articles);
  };

  const getNewsByFilter = async () => {
    if (!searchText && !country && !category && !source) {
      getNews();
    } else if (searchText) {
      console.log("hello, ", searchText);
      const url = `https://newsapi.org/v2/everything?q='${searchText}'&apiKey=${apiKey}`;
      const res = await axios.get(url);
      setNews(res.data.articles);
    } else {
      console.log(country, category, source);
      let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${apiKey}`;
      if (source) {
        url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
      } else if (country && category) {
        url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
      } else if (country) {
        url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
      } else if (category) {
        url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
      }
      const res = await axios.get(url);
      setNews(res.data.articles);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    getNewsByFilter();
  }, [searchText, country, category, source]);

  const handleSearchText = evt => {
    setSearchText(evt.target.value);
    setCountry("");
    setCategory("");
    setSource("");
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <NewsNavbar />
        {article && <Redirect to="/article" />}
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Search
                searchText={searchText}
                handleSearchText={handleSearchText}
                clearSearchText={clearSearchText}
                country={country}
                setCountry={setCountry}
                category={category}
                setCategory={setCategory}
                source={source}
                setSource={setSource}
              />
              {news && news.length > 0 && (
                <News
                  news={news}
                  setArticle={setArticle}
                  randomNews={randomNews}
                  editorsNews={editorsNews}
                />
              )}
            </React.Fragment>
          )}
        />
        <Route
          path="/article"
          render={() => <Article article={article} setArticle={setArticle} />}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
