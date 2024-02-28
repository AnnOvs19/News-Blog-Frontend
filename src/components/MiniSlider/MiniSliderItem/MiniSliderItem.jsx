import React from "react";

import "./miniSliderItem.scss";
import mockImg from "../../../assets/images/backgroundNews.jpg";
import { Link } from "react-router-dom";

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
        <Link to={`/post/${newsData.id}`}>
          <h1 className="base-title">{newsData.title.substring(0, 33)}...</h1>
        </Link>

        <p className="base-text">{newsData.content.substring(0, 140)}...</p>
      </div>
    </div>
  );
};

export default MiniSliderItem;
