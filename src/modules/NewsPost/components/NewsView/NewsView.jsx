import React from "react";
import mockImg from "../../../../assets/images/backgroundNews.jpg";

const NewsView = ({ data }) => {
  const pathImage = `http://localhost:6868/${data.img}`;

  return (
    <div className="newsPost-box__content">
      <img src={data.img ? pathImage : mockImg} alt="#" />
      <div className="newsPost-box__content-head">
        <span className="base-text">By</span>
        <h5 className="base-subtitle">{data.user.name}</h5>
        <span className="base-text">
          | {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>
      <h3 className="base-title">{data.title}</h3>
      <p className="base-text">{data.content}...</p>
    </div>
  );
};

export default NewsView;
