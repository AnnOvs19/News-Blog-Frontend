import React from "react";

import "./miniSliderItem.scss";
import mockImg from "../../../assets/images/backgroundNews.jpg";

const MiniSliderItem = ({ newsData }) => {
  const pathImage = `http://localhost:6868/${newsData.img}`;
  return (
    <div className="miniSlider-item">
      <img src={newsData.img ? pathImage : mockImg} alt="#" />
      <div className="miniSlider-item__content">
        <div>
          <span className="base-text">By</span>
          <h5 className="base-subtitle">{newsData.user.name}</h5>
          <span className="base-text">
            | {new Date(newsData.createdAt).toLocaleDateString()}
          </span>
        </div>
        <h1 className="base-title">{newsData.title}</h1>
        <p className="base-text">{newsData.content.substring(0, 140)}...</p>
      </div>
    </div>
  );
};

export default MiniSliderItem;
