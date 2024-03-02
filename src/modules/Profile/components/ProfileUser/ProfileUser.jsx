import React, { useEffect } from "react";

import "./profileUser.scss";
import ProfileUserHead from "../ProfileUserHead/ProfileUserHead";
import ProfileUserList from "../ProfileUserList/ProfileUserList";
import MiniSliderList from "../../../../components/MiniSlider/MiniSliderList/MiniSliderList";
import {
  getUserData,
  setUnknowUser,
  setUserPosts
} from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fethGetPostsUser } from "../../api/fetchGetPostUser";
import { getPosts } from "../../../News/store/newsSlise";
import { useParams } from "react-router-dom";
import { getPtofileUnknowUser } from "../../api/getPtofileUnknowUser";

const ProfileUser = (props) => {
  //Полчение всех постов из редакса для мини слайдера
  const allPosts = useSelector(getPosts);

  //ID для определения страницы юзера(своя или другого пользователя)
  const { id } = useParams();

  //Получение и фильтрация постов для мини слайдера
  const arrMiniSlider = allPosts.filter((item, index) => index < 30);

  const dispatch = useDispatch();
  //Получение данных о юзере
  const user = useSelector(getUserData);

  //Получение постов авторизованного юзера при обновлении
  useEffect(() => {
    fethGetPostsUser(user.id)
      .then((res) => {
        //Запись постов юзера в стор
        dispatch(setUserPosts(res.reverse()));
      })
      .catch((res) => alert(res.massage));
  }, []);

  //Получение профиля стороннего неизвестного юзера при переходе по ссылке
  useEffect(() => {
    if (id) {
      getPtofileUnknowUser(id)
        //Запись в стор данных о стороннем пользователе
        .then((res) => dispatch(setUnknowUser(res)))
        .catch((res) => alert(res.massage));
    }
  }, [id]);

  return (
    <div>
      <ProfileUserHead />
      <ProfileUserList
        userName={user.name}
        userAvatar={user.avatar}
        userId={user.id}
      />
      <MiniSliderList newsData={arrMiniSlider} />
    </div>
  );
};

export default ProfileUser;
