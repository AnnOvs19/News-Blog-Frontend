import React from "react";

import "./bigSliderItem.scss";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import mockImg from "../../../../assets/images/backgroundNews.jpg";

const BigSliderItem = ({ newsData }) => {
  const pathImage = `http://localhost:6868/${newsData.img}`;
  return (
    <div className="bigSlider-item">
      <div className="bigSlider-item__content">
        <h1>{newsData.title}</h1>
        <div>
          <span className="base-text">By</span>
          <h5 className="base-subtitle">{newsData.user.name}</h5>
          <span className="base-text">
            | {new Date(newsData.createdAt).toLocaleDateString()}
          </span>
        </div>
        <p>{newsData.content.substring(0, 200)}...</p>
        <BaseButton>Read more</BaseButton>
      </div>
      <img src={newsData.img ? pathImage : mockImg} alt="#" />
    </div>
  );
};

export default BigSliderItem;
