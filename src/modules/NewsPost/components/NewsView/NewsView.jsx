import React, { useEffect, useState } from "react";

import mockImg from "../../../../assets/images/backgroundNews.jpg";
import like from "../../../../assets/icons/Like.svg";
import { fetchSetLikes } from "../../api/fetchSetLikes";
import { useSelector } from "react-redux";
import { getUserData } from "../../../Profile/store/userSlice";
import { fetchRemoveLikes } from "../../api/fetchRemoveLikes";
import { Link } from "react-router-dom";

const NewsView = ({ data }) => {
  //получаем данные о юзере
  const user = useSelector(getUserData);

  //Проверка: лайкал ли юзер раньше этот пост
  let userLikes = "";

  //Проверка авторизации юзера; если он авторизован - ищем его лайк в массиве лайков
  if (user) {
    userLikes = data.likes.find((item) => item.userId == user.id);
  }

  //Состаяние тронутого лайка
  const [touchLike, setTouchLike] = useState(false);
  //Состояние количества лайков
  const [countLikes, setCountLikes] = useState(data.likes.length);

  //Путь к изображению поста
  const pathImage = `http://localhost:6868/${data.img}`;
  //Перенос строк
  const arrStr = data.content.split("\n").map((str) => <p>{str}</p>);

  //Проверка - если юзер авторизован, то он может добавить и снять лайк
  function setLike() {
    if (user) {
      const dataLike = {
        userId: user.id,
        postId: data.id
      };

      if (!touchLike) {
        //Если лайк был нетронут и юзер на него нажал, то отправляем запрос и добавляем количество лайков
        setTouchLike(true);
        fetchSetLikes(dataLike).then((res) => res);
        setCountLikes(countLikes + 1);
      } else {
        setTouchLike(false);
        fetchRemoveLikes(dataLike).then((res) => res);
        setCountLikes(countLikes - 1);
      }
    }
  }

  //Проверка: если юзер лайкал этот пост раньше, то лайк считается тронутым
  useEffect(() => {
    if (userLikes) {
      setTouchLike(true);
    } else {
      setTouchLike(false);
    }
  }, []);

  return (
    <div className="newsPost-box__content">
      <img src={data.img ? pathImage : mockImg} alt="#" />
      <div className="newsPost-box__content-head">
        <span className="base-text">By</span>
        <Link to={`/profile/user/${data.userId}`}>
          <h5 className="base-subtitle">{data.user.name}</h5>
        </Link>

        <span className="base-text">
          | {new Date(data.createdAt).toLocaleDateString()}
        </span>
        <div className="newsPost-box__like">
          <img src={like} alt="#" onClick={setLike} />
          <span>{countLikes}</span>
        </div>
      </div>

      <h3 className="base-title">{data.title}</h3>
      <div className="base-text">{arrStr}</div>
    </div>
  );
};

export default NewsView;
