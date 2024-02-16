import React, { useEffect, useState } from "react";
import BaseInput from "../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../ui/BaseButton/BaseButton";
import { useDispatch } from "react-redux";
import {
  auth,
  setToken,
  setUser
} from "../../../modules/Profile/store/userSlice";
import { jwtDecode } from "jwt-decode";

const Login = ({ setActive }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState(
    "Строка с почтой не может быть пустой"
  );
  const [passwordError, setPasswordError] = useState(
    "Строка с поролем не может быть пустой"
  );

  const [disable, setDisable] = useState(true);

  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [emailError, passwordError]);

  function emailHandler(e) {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан некорректный адрес почты");
    } else {
      setEmailError("");
    }
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 5 || e.target.value > 20) {
      setPasswordError("Пароль должен быть длиннее 5, и не более 20 символов");
      if (!e.target.value) {
        setPasswordError("Строка с поролем не может быть пустой");
      }
    } else {
      setPasswordError("");
    }
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  }

  async function logIn() {
    const URL = "http://localhost:6868/api/user/login";

    if (formValid) {
      const data = {
        email: email,
        password: password
      };
      setActive(false);

      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.token) {
            //Запись токена
            dispatch(setToken(res.token));
            //Декодирование токена
            dispatch(setUser(jwtDecode(res.token)));
            //Пользователь авторизован!
            dispatch(auth(true));
            //Сохранение токена в localStorage
            localStorage.setItem("token", res.token);
            alert("Добро пожаловать!");
          } else {
            alert(res.message);
          }
        })
        .catch((res) => {
          alert(res.message);
          setActive(false);
        });
    }
  }

  return (
    <div className="body__login">
      <BaseInput
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={email}
        invalid={emailDirty && emailError}
        name={"email"}
        type={"email"}
        placeholder={"E-mail"}
      />
      <span className={emailError ? "error-span" : ""}>
        {emailDirty && emailError && emailError}
      </span>

      <BaseInput
        onChange={(e) => passwordHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={password}
        invalid={passwordDirty && passwordError}
        name={"password"}
        type={"password"}
        placeholder={"Password"}
      />
      <span className={passwordError ? "error-span" : ""}>
        {passwordDirty && passwordError && passwordError}
      </span>

      <BaseButton
        disabled={!formValid && disable}
        styles={disable ? "modal-btn disable" : "modal-btn"}
        onClick={logIn}
      >
        Log in
      </BaseButton>
    </div>
  );
};

export default Login;
