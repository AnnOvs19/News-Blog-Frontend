import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import { getUserData, setUser } from "../../../Profile/store/userSlice";
import { updateUser } from "../../api/updateUser";

import BaseInput from "../../../../ui/BaseInput/BaseInput";
import FileInput from "../../../../ui/FileInput/FileInput";
import BaseButton from "../../../../ui/BaseButton/BaseButton";

import avatarEmpty from "../../../../assets/images/backgroundAvatar.jpg";

import "./editProfileForm.scss";

const EditProfileForm = () => {
  const user = useSelector(getUserData);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [avatar, setAvatar] = useState("");
  const [imageUser, setImageUser] = useState("");

  const pathAvatar = `http://localhost:6868/${user.avatar}`;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [statusDirty, setStatusDirty] = useState(false);

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [statusError, setStatusError] = useState();

  const [disable, setDisable] = useState(false);

  const [formValid, setFormValid] = useState(true);

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formValid) {
      formData.append("id", user.id);

      if (user.email != email) {
        formData.append("email", email);
      }

      updateUser(formData).then((res) => {
        dispatch(setUser(jwtDecode(res.token)));
        nav("/profile");
      });
    }
  }

  function handleAddAvatar({ target: { files } }) {
    const loadedImage = files[0];
    setAvatar(URL.createObjectURL(loadedImage));
    setImageUser(loadedImage);
  }

  function nameHandler(e) {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Имя не должно быть меньше 2х символов");
      if (!e.target.value) {
        setNameError("Строка с именем не может быть пустой");
      }
    } else {
      setNameError("");
    }
  }

  function emailHandler(e) {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан неверный адрес почты");
    } else {
      setEmailError("");
    }
  }

  function statusHandler(e) {
    setStatus(e.target.value);
    if (e.target.value.length > 100) {
      setStatusError("Статус должен быть не более 100 символов");
      if (!e.target.value) {
        setStatusError("Строка с статусом не может быть пустой");
      }
    } else {
      setStatusError("");
    }
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;

      case "email":
        setEmailDirty(true);
        break;

      case "status":
        setStatusDirty(true);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (nameError || emailError || statusError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [nameError, emailError, statusError]);

  return (
    <div className="editProfileForm">
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="editProfileForm-box"
      >
        <h2 className="base-title">Edit a profile</h2>

        <div className="editProfileForm-box__content">
          <div className="editProfileForm-box__content-img">
            {avatar ? (
              <img src={avatar} alt="#" />
            ) : (
              <img src={user.avatar ? pathAvatar : avatarEmpty} alt="#" />
            )}

            <BaseButton styles={"avatarBtn"} type="button">
              <FileInput
                accept="image/*"
                onChange={handleAddAvatar}
                name={"img"}
              >
                Edit photo
              </FileInput>
            </BaseButton>
          </div>

          <div className="editProfileForm-box__content-info">
            <div className="info">
              <p>Your name</p>
              <BaseInput
                onChange={(e) => nameHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={name}
                invalid={nameDirty && nameError}
                name={"name"}
                type={"text"}
                placeholder={"Name"}
              />
              <span className={nameError ? "error-span" : ""}>
                {nameDirty && nameError && nameError}
              </span>
            </div>

            <div className="info">
              <p>Your mail</p>
              <BaseInput
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={email}
                invalid={emailDirty && emailError}
                type={"email"}
                placeholder={"E-mail"}
              />
              <span className={emailError ? "error-span" : ""}>
                {emailDirty && emailError && emailError}
              </span>
            </div>
            <div className="info">
              <p>Your status</p>
              <BaseInput
                onChange={(e) => statusHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={status}
                invalid={statusDirty && statusError}
                name={"status"}
                type={"text"}
                placeholder={"Status"}
              />
              <span className={statusError ? "error-span" : ""}>
                {statusDirty && statusError && statusError}
              </span>
            </div>
          </div>
        </div>
        <div className="editProfileForm-box__bottom">
          <BaseButton styles={"cancelBtn"} type="button">
            <Link to={"/profile"}>Cancel</Link>
          </BaseButton>

          <BaseButton
            disabled={!formValid && disable}
            styles={disable ? "saveBtn disableForm" : "saveBtn"}
            type="submit"
          >
            Save data
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
