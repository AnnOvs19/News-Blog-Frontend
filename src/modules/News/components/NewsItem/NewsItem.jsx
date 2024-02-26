import React from "react";

import mockImg from "../../../../assets/images/backgroundNews.jpg";
import like from "../../../../assets/icons/Like.svg";

import "./newsItem.scss";

const NewsItem = ({ newsData }) => {
  const pathImage = `http://localhost:6868/${newsData.img}`;
  return (
    <div className="newsItem">
      <img src={newsData.img ? pathImage : mockImg} alt="#" />
      <div className="newsItem__content">
        <div>
          <span className="base-text">By</span>
          <h5 className="base-subtitle">{newsData.user.name}</h5>
          <span className="base-text">
            | {new Date(newsData.createdAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="base-title">{newsData.title}</h3>
        <p className="base-text">{newsData.content.substring(0, 260)}...</p>
      </div>
      {newsData.likes.length > 0 ? (
        <div className="newsItem__like">
          <img src={like} alt="#" />
          <p>{newsData.likes.length}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewsItem;
