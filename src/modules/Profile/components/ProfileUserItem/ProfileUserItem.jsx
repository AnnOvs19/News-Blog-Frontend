import React, { useState } from "react";

import BaseButton from "../../../../ui/BaseButton/BaseButton";

import emptyAvatar from "../../../../assets/images/backgroundAvatar.jpg";
import mockImg from "../../../../assets/images/backgroundNews.jpg";
import Like from "../../../../assets/icons/Like.svg";
import "./profileUserItem.scss";
import { deletePost } from "../../api/deletePost";
import { useDispatch } from "react-redux";
import { deletePostUser } from "../../store/userSlice";
import { Link, useParams } from "react-router-dom";

const ProfileUserItem = ({ newsData, userName, userAvatar }) => {
  //Путь к изображениям новости и аватара юзера
  const pathImage = `http://localhost:6868/${newsData.img}`;
  const pathAvatar = `http://localhost:6868/${userAvatar}`;

  //ID для определения страницы юзера(своя или другого пользователя)
  const { id } = useParams();

  const dispatch = useDispatch();

  //Удаление поста юзера
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
            <span>{newsData.likes.length}</span>
          </div>
        </div>
        <Link to={`/post/${newsData.id}`}>
          <h3 className="base-title">{newsData.title.substring(0, 47)}...</h3>
        </Link>

        <p className="base-text">{newsData.content.substring(0, 230)}...</p>
      </div>
      <img
        className="img-news"
        src={newsData.img ? pathImage : mockImg}
        alt="#"
      />
      {id ? (
        ""
      ) : (
        <div className="profileUserItem__buttons">
          <BaseButton styles={"buttons-delete"} onClick={deleteItem}>
            Delete a post
          </BaseButton>
          <Link to={`/article/${newsData.id}`}>
            <BaseButton styles={"buttons-edit"}>Edit the post</BaseButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileUserItem;
