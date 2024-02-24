import React from "react";

import NewsItem from "../NewsItem/NewsItem";
import { useSelector } from "react-redux";
import { getPosts, getSearchPosts, getTagPosts } from "../../store/newsSlise";

import "./newsList.scss";
import { Link } from "react-router-dom";

const NewsList = () => {
  const posts = useSelector(getPosts);

  const filterTags = useSelector(getTagPosts);
  const filterSearch = useSelector(getSearchPosts);

  return (
    <div className="newsList">
      <div className="newsList__array">
        {filterTags.length > 0
          ? filterTags?.map((news, index) => {
              return (
                <Link to={`/post/${news.id}`} key={index}>
                  <NewsItem newsData={news} key={index} />
                </Link>
              );
            })
          : posts?.map((news, index) => {
              return (
                <Link to={`/post/${news.id}`} key={index}>
                  <NewsItem newsData={news} key={index} />
                </Link>
              );
            })}

        {/* {filterSearch?.map((news, index) => {
          return (
            <Link to={`/post/${news.id}`} key={index}>
              <NewsItem newsData={news} key={index} />
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default NewsList;
