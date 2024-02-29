import React, { useEffect } from "react";

import "./profileUser.scss";
import ProfileUserHead from "../ProfileUserHead/ProfileUserHead";
import ProfileUserList from "../ProfileUserList/ProfileUserList";
import MiniSliderList from "../../../../components/MiniSlider/MiniSliderList/MiniSliderList";
import { getUserData, setUserPosts } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fethGetPostsUser } from "../../api/fetchGetPostUser";
import { getPosts } from "../../../News/store/newsSlise";

const ProfileUser = (props) => {
  const allPosts = useSelector(getPosts);

  const arrMiniSlider = allPosts.filter((item, index) => index < 30);

  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  useEffect(() => {
    fethGetPostsUser(user.id)
      .then((res) => {
        dispatch(setUserPosts(res.reverse()));
      })
      .catch((res) => alert(res.massage));
  }, []);

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
