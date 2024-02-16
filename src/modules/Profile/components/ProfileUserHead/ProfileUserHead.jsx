import React, { useEffect } from "react";

import headProfileEdite from "../../../../assets/icons/headProfileEdite.svg";
import "./profileUserHead.scss";
import MockUser from "../../../../assets/images/mockUser.png";
import { user } from "../../store/mockUser";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, getUserData } from "../../store/userSlice";

const ProfileUserHead = () => {
  //useSelector помогает получить значения из store
  const isAuth = useSelector(getAuth);
  const user = useSelector(getUserData);

  const nav = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      nav("/");
    }
  }, []);

  return (
    <div className="profileUserHead">
      <div className="profileUserHead-box">
        <img className="img-avatar" src={MockUser} alt="#" />
        <div className="profileUserHead-box__content">
          <div>
            <h2 className="base-title">{user.name}</h2>
            <Link to={"/profile/edit"}>
              <img className="img-editProfile" src={headProfileEdite} alt="#" />
            </Link>
          </div>

          <p className="base-subtitle">{user.email}</p>
          <span className="base-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </span>
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
