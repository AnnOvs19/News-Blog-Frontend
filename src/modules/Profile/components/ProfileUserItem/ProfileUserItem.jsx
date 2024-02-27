import React, { useState } from "react";
import { user } from "../../store/mockUser";

import BaseButton from "../../../../ui/BaseButton/BaseButton";

import emptyAvatar from "../../../../assets/images/backgroundAvatar.jpg";
import mockImg from "../../../../assets/images/backgroundNews.jpg";
import Like from "../../../../assets/icons/Like.svg";
import "./profileUserItem.scss";
import { deletePost } from "../../api/deletePost";
import { useDispatch } from "react-redux";
import { deletePostUser } from "../../store/userSlice";
import ModalNotice from "../../../../components/ModalNotice/ModalNotice";
import { Link } from "react-router-dom";

const ProfileUserItem = ({ newsData, userName, userAvatar }) => {
  const pathImage = `http://localhost:6868/${newsData.img}`;
  const pathAvatar = `http://localhost:6868/${userAvatar}`;

  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(deletePostUser(newsData.id));
    deletePost(newsData.id)
      .then((res) => {
        alert(res.massage);
      })
      .catch((res) => {
        alert(res.massage);
      });
  }

  return (
    <div className="profileUserItem">
      <div className="profileUserItem__content">
        <div className="profileUserItem__content-head">
          <div className="head-user">
            <img
              className="img-user"
              src={userAvatar ? pathAvatar : emptyAvatar}
              alt="#"
            />
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
        <BaseButton styles={"buttons-delete"} onClick={deleteItem}>
          Delete a post
        </BaseButton>
        <Link to={`/article/${newsData.id}`}>
          <BaseButton styles={"buttons-edit"}>Edit the post</BaseButton>
        </Link>
      </div>
    </div>
  );
};

export default ProfileUserItem;
