import React from "react";

import NewsItem from "../NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { getPosts } from "../../store/newsSlise";

import "./newsList.scss";

const NewsList = (props) => {
  const posts = useSelector(getPosts);
  return (
    <div className="newsList">
      <div className="newsList__array">
        {posts?.map((news, index) => {
          return <NewsItem newsData={news} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NewsList;
