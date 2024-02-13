import React, { useState } from "react";
import modalError from "../../assets/icons/modalError.svg";
import modalCheck from "../../assets/icons/modalCheck.svg";
import modalNotice from "../../assets/icons/modalNotice.svg";

import "./modalNotice.scss";

const ModalNotice = ({ type, text }) => {
  const [active, setActive] = useState(true);

  setTimeout(() => {
    setActive(false);
  }, 10000);

  return (
    <div className={active ? "modalNotice activeModalNotice" : "modalNotice"}>
      <div className="modalNotice-content">
        {type == "info" ? <img src={modalNotice} alt="#" /> : ""}
        {type == "ok" ? <img src={modalCheck} alt="#" /> : ""}
        {type == "error" ? <img src={modalError} alt="#" /> : ""}

        <p className="base-text">{text}</p>
      </div>
    </div>
  );
};

export default ModalNotice;
