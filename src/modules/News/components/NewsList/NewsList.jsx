import React from "react";

import NewsItem from "../NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { getPosts, getTagPosts } from "../../store/newsSlise";

import "./newsList.scss";
import { Link } from "react-router-dom";

const NewsList = () => {
  const posts = useSelector(getPosts);

  const filterTags = useSelector(getTagPosts);

  console.log(filterTags);
  console.log(posts);

  return (
    <div className="newsList">
      <div className="newsList__array">
        {posts?.map((news, index) => {
          return (
            <Link to={`/post/${news.id}`} key={index}>
              <NewsItem newsData={news} key={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
