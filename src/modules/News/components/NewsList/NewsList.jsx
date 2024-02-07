import React from "react";

import "./newsList.scss";
import { newsArray } from "../../store/newsArray";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = (props) => {
  return (
    <div className="newsList">
      <div className="newsList__array">
        {newsArray?.map((news, index) => {
          return <NewsItem newsData={news} key={index} />;
        })}
      </div>
    </div>
  );
};

export default NewsList;
