import React from "react";
import { user } from "../../store/mockUser";

import BaseButton from "../../../../ui/BaseButton/BaseButton";

import mockImg from "../../../../assets/images/backgroundNews.jpg";
import Like from "../../../../assets/icons/Like.svg";
import "./profileUserItem.scss";

const ProfileUserItem = ({ newsData, userName }) => {
  const pathImage = `http://localhost:6868/${newsData.img}`;
  return (
    <div className="profileUserItem">
      <div className="profileUserItem__content">
        <div className="profileUserItem__content-head">
          <div className="head-user">
            <img className="img-user" src={user.avatar} alt="#" />
            <div className="head-user__title">
              <h5 className="base-subtitle">{userName}</h5>
              <span className="base-subtitle">
                {new Date(newsData.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="head-like">
            <img className="img-like" src={Like} alt="#" />
            {/* Колво лайков должно приходить с сервера, пока замокано */}
            <span>455</span>
          </div>
        </div>
        <h3 className="base-title">{newsData.title}</h3>
        <p className="base-text">{newsData.content.substring(0, 230)}...</p>
      </div>
      <img
        className="img-news"
        src={newsData.img ? pathImage : mockImg}
        alt="#"
      />
      <div className="profileUserItem__buttons">
        <BaseButton styles={"buttons-delete"}>Delete a post</BaseButton>
        <BaseButton styles={"buttons-edit"}>Edit the post</BaseButton>
      </div>
    </div>
  );
};

export default ProfileUserItem;
