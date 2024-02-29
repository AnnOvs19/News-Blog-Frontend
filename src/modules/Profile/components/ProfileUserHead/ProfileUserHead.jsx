import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import headProfileEdite from "../../../../assets/icons/headProfileEdite.svg";
import emptyAvatar from "../../../../assets/images/backgroundAvatar.jpg";

import {
  auth,
  getAuth,
  getUnknowUser,
  getUserData,
  setUser
} from "../../store/userSlice";
import BaseButton from "../../../../ui/BaseButton/BaseButton";

import "./profileUserHead.scss";

const ProfileUserHead = () => {
  //Получение данных из редакса о авторизации, информации о юзере, информации о стороннем пользователе
  const isAuth = useSelector(getAuth);
  const user = useSelector(getUserData);
  const unknowUser = useSelector(getUnknowUser);
  const dispatch = useDispatch();

  //ID для определения страницы юзера(своя или другого пользователя)
  const { id } = useParams();

  //Записываем путь к аватару юзера/стороннего юзера
  const pathAvatar = `http://localhost:6868/${id ? unknowUser.avatar : user.avatar}`;

  function logOut() {
    localStorage.clear();
    dispatch(setUser(null));
    dispatch(auth(false));
    nav("/");
  }

  const nav = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      nav("/");
    }
  }, []);

  return (
    <div className="profileUserHead">
      <div className="profileUserHead-box">
        <img
          className="img-avatar"
          src={user.avatar ? pathAvatar : emptyAvatar}
          alt="#"
        />
        <div className="profileUserHead-box__content">
          <div>
            <h2 className="base-title">{id ? unknowUser.name : user.name}</h2>
            {id ? (
              ""
            ) : (
              <Link to={"/profile/edit"}>
                <img
                  className="img-editProfile"
                  src={headProfileEdite}
                  alt="#"
                />
              </Link>
            )}
          </div>

          <p className="base-subtitle">{id ? unknowUser.email : user.email}</p>
          <span className="base-text">
            {id
              ? unknowUser.status
              : user.status
                ? user.status
                : "The user has not added his status"}
          </span>
          {id ? (
            ""
          ) : (
            <BaseButton styles={"logoutButton"} onClick={logOut}>
              Logout
            </BaseButton>
          )}
        </div>
      </div>
      <div className="profileUserHead-colorLine">
        <div className="profileUserHead-colorLine__violet"></div>
        <div className="profileUserHead-colorLine__yellow"></div>
      </div>
    </div>
  );
};

export default ProfileUserHead;
