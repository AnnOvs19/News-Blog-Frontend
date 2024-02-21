import React from "react";

import "./profileUserList.scss";
import ProfileUserItem from "../ProfileUserItem/ProfileUserItem";
import { newsArray } from "../../../News/store/newsArray";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserPosts } from "../../store/userSlice";

const ProfileUserList = ({ userName }) => {
  const posts = useSelector(getUserPosts);

  return (
    <div className="profileUserList">
      <div className="profileUserList__array">
        <div className="profileUserList__array-head">
          <h1 className="base-tile">My posts</h1>
          <Link to={"/article"}>
            <BaseButton>Create a new post</BaseButton>
          </Link>
        </div>
        {posts.length > 0 ? (
          posts?.map((news, index) => {
            return (
              <Link to={`/post/${news.id}`} key={index}>
                <ProfileUserItem
                  newsData={news}
                  userName={userName}
                  key={index}
                />
              </Link>
            );
          })
        ) : (
          <div className="emtyPosts">You don't have any publications yet!</div>
        )}
      </div>
    </div>
  );
};

export default ProfileUserList;
