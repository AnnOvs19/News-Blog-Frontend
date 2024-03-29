import React, { useState } from "react";
import { Link } from "react-router-dom";

import userIcon from "../../assets/icons/userIcon.svg";
import headerLogo from "../../assets/icons/Logo.svg";

import "./header.scss";

import BaseButton from "../../ui/BaseButton/BaseButton";
import ModalLogin from "../ModalLogin/ModalLogin";
import { useSelector } from "react-redux";
import { getAuth, getUserData } from "../../modules/Profile/store/userSlice";

const Header = () => {
  //Состояние для модального окна
  const [modalActive, setModalActive] = useState(false);
  //Состояние для меню при адаптации
  const [menuStatus, setMenuStatus] = useState(false);
  //Получаем статус аунтификации из стора
  const isAuth = useSelector(getAuth);
  //Получаем объект юзера из стора
  const userData = useSelector(getUserData);

  //Функция для открытия и закрытия меню
  function toggleMenu() {
    if (menuStatus == false) {
      setMenuStatus(true);
    } else {
      setMenuStatus(false);
    }
  }

  return (
    <header className="header">
      <div className="header-box">
        <Link to={"/"}>
          <img src={headerLogo} alt="#" />
        </Link>
        <nav
          className={
            menuStatus ? "header-box__nav showMenu" : "header-box__nav"
          }
        >
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>About Us</li>
            <li>Contact us</li>
          </ul>

          {isAuth && userData ? (
            <>
              <Link to={"/profile"}>
                <div className="header-box__nav-user">
                  <img src={userIcon} alt="@" />
                </div>
              </Link>
            </>
          ) : (
            <BaseButton
              styles={"header-box__nav-btn"}
              onClick={() => setModalActive(true)}
            >
              Log in
            </BaseButton>
          )}

          <ModalLogin active={modalActive} setActive={setModalActive} />
        </nav>
        <button
          className={menuStatus ? "burger active" : "burger"}
          onClick={toggleMenu}
        ></button>
      </div>
    </header>
  );
};

export default Header;
