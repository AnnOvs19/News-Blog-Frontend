import React, { useState } from "react";

import "./modalLogin.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const ModalLogin = ({ active, setActive }) => {
  // Состояние для переключения логина или регистрации
  const [activeTab, setActiveTab] = useState(0);

  return (
    //Следующая запись для скрытия модалки по нажатию на фон
    <div
      className={active ? "modalLogin activeModal" : "modalLogin"}
      onClick={() => setActive(false)}
    >
      <div className="modalLogin-content" onClick={(e) => e.stopPropagation()}>
        <div className="head">
          <div className="head__login" onClick={() => setActiveTab(0)}>
            <h3
              className={activeTab == 0 ? "base-title activeTab" : "base-title"}
            >
              Sign in
            </h3>
          </div>
          <div className="head__register" onClick={() => setActiveTab(1)}>
            <h3
              className={activeTab == 1 ? "base-title activeTab" : "base-title"}
            >
              New account
            </h3>
          </div>
        </div>
        <div className="body">
          {activeTab == 0 ? (
            <Login setActive={setActive} />
          ) : (
            <Register setActive={setActive} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
