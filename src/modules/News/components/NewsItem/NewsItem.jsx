import React from "react";
import mockImg from "../../../../assets/images/backgroundNews.jpg";
import "./newsItem.scss";

const NewsItem = ({ newsData }) => {
  return (
    <div className="newsItem">
      <img src={newsData.img ? newsData.img : mockImg} alt="#" />
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
    </div>
  );
};

export default NewsItem;
