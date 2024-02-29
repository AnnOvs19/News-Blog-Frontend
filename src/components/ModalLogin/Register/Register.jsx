import React, { useEffect, useState } from "react";
import BaseInput from "../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../ui/BaseButton/BaseButton";
import { useDispatch } from "react-redux";
import { auth, setUser } from "../../../modules/Profile/store/userSlice";
import {
  registration,
  registrationUser
} from "../../../modules/Profile/api/registrationUser";
import { useNavigate } from "react-router-dom";

const Register = ({ setActive }) => {
  //Хук для навигации по сайту
  const nav = useNavigate();

  const dispatch = useDispatch();

  //Состояние имени, емейла и пароля, изначально пустое
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Состояние отвечающее за ситуацию, когда пользователь прикоснулся к инпуту и ничего не ввёл
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  //Отработка ошибок
  const [nameError, setNameError] = useState(
    "Строка с именем пользователя не может быть пустой"
  );
  const [emailError, setEmailError] = useState(
    "Строка с почтой не может быть пустой"
  );
  const [passwordError, setPasswordError] = useState(
    "Строка с поролем не может быть пустой"
  );

  //Состояние кнопки отправки кнопки
  const [disable, setDisable] = useState(true);

  //Валидность формы
  const [formValid, setFormValid] = useState(false);

  //Валидация имени, если строка с именем пустая или имя меньше двух символов, возвращаем ошибку
  function nameHandler(e) {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Имя должно быть длиннее 2 символов");
      if (!e.target.value) {
        setNameError("Строка с именем не может быть пустой");
      }
    } else {
      setNameError("");
    }
  }

  //Валидация емайла, если value не соответствует регулярному выражению, то возвращаем ошибку
  function emailHandler(e) {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан неверный адрес почты");
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
      case "name":
        setNameDirty(true);
        break;

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

  //Если есть хоть одна ошибка из трёх, форма не валидна, а кнопка заблокирована. Если ошибок нет - кнопка валидна
  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [nameError, emailError, passwordError]);

  //Асинхронная функция для создания нового юзер
  async function userCreate() {
    if (formValid) {
      const data = {
        name: name,
        email: email,
        password: password
      };

      //Закрытие модального окна после нажатия кнопки
      setActive(false);

      //Функция регистрации
      registrationUser(data)
        .then((res) => {
          if (res) {
            //Декодирование токена
            dispatch(setUser(res));
            //Пользователь авторизован!
            dispatch(auth(true));
            nav("/");
            alert("Вы зарегестрированы!");
          }
        })
        .catch((res) => {
          alert(res.message);
          setActive(false);
        });
    }
  }

  return (
    <>
      <form className="body__register">
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
          onClick={(e) => {
            e.preventDefault();
            userCreate();
          }}
          disabled={!formValid && disable}
          styles={disable ? "modal-btn disable" : "modal-btn"}
        >
          Register
        </BaseButton>
      </form>
    </>
  );
};

export default Register;
