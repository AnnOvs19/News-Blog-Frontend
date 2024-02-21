import React, { useEffect } from "react";

import "./profileUser.scss";
import ProfileUserHead from "../ProfileUserHead/ProfileUserHead";
import ProfileUserList from "../ProfileUserList/ProfileUserList";
import MiniSliderList from "../../../../components/MiniSlider/MiniSliderList/MiniSliderList";
import { newsArray } from "../../../News/store/newsArray";
import { getUserData, setUserPosts } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fethGetPostUser } from "../../api/fetchGetPostUser";

const ProfileUser = (props) => {
  //С помощью редакса или бэка сделать фильтрацию новостей в слайдерах
  const arrMiniSlider = newsArray.filter((item, index) => index < 9);

  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  useEffect(() => {
    fethGetPostUser(user.id)
      .then((res) => {
        dispatch(setUserPosts(res));
      })
      .catch((res) => alert(res.massage));
  }, []);

  return (
    <div>
      <ProfileUserHead />
      <ProfileUserList userName={user.name} />
      <MiniSliderList newsData={arrMiniSlider} />
    </div>
  );
};

export default ProfileUser;
