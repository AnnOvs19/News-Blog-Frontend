import React, { useEffect, useState } from "react";
import BaseInput from "../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../ui/BaseButton/BaseButton";
import { useDispatch } from "react-redux";
import { auth, setUser } from "../../../modules/Profile/store/userSlice";
import { loginUser } from "../../../modules/Profile/api/loginUser";
import { useNavigate } from "react-router-dom";

const Login = ({ setActive }) => {
  //Хук для навигации по сайту
  const nav = useNavigate();

  //Состояние емейла и пароля, изначально пустое
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Состояние отвечающее за ситуацию, когда пользователь прикоснулся к инпуту и ничего не ввёл
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  //Отработка ошибок
  const [emailError, setEmailError] = useState(
    "Строка с почтой не может быть пустой"
  );
  const [passwordError, setPasswordError] = useState(
    "Строка с поролем не может быть пустой"
  );

  //Состояние кнопки отправки формы
  const [disable, setDisable] = useState(true);

  //Валидность формы
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  //Валидация емайла, если value не соответствует регулярному выражению, то возвращаем ошибку
  function emailHandler(e) {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан некорректный адрес почты");
    } else {
      setEmailError("");
    }
  }

  //Валидация пароля, если пароль меньше 5 и длиннее 20 символов, возвращаем ошибку, если строка пустая - возвращаем ошибку
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

  //Если человек дотронулся инпута и ничего не записал, перезаписываем состаяния
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

  //Если форма валидна активируем кнопку
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [emailError, passwordError]);

  //Асинхронная функция для входа в кабинет
  async function logIn() {
    //Если форма валидна, отправляем на сервер следующий объект
    if (formValid) {
      const data = {
        email: email,
        password: password
      };

      //Закрытие модального окна после нажатия кнопки
      setActive(false);

      //Функция входа
      loginUser(data)
        .then((res) => {
          if (res) {
            //Запись данных о юзере в стор
            dispatch(setUser(res));
            //Пользователь авторизован!
            dispatch(auth(true));
            nav("/");
            alert("Добро пожаловать!");
          }
        })
        .catch((res) => {
          alert(res);
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
