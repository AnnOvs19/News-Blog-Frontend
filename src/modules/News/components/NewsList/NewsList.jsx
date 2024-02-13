import React from "react";

import NewsItem from "../NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { getPosts } from "../../store/newsSlise";

import "./newsList.scss";
import { Link } from "react-router-dom";

const NewsList = (props) => {
  const posts = useSelector(getPosts);
  return (
    <div className="newsList">
      <div className="newsList__array">
        {posts?.map((news, index) => {
          return (
            <Link to={`/post/${news.id}`}>
              <NewsItem newsData={news} key={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
