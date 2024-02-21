import React, { useEffect, useState } from "react";
import BaseInput from "../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../ui/BaseButton/BaseButton";
import { useDispatch } from "react-redux";
import { auth, setUser } from "../../../modules/Profile/store/userSlice";
import {
  registration,
  registrationUser
} from "../../../modules/Profile/api/registrationUser";

const Register = ({ setActive }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState(
    "Строка с именем пользователя не может быть пустой"
  );
  const [emailError, setEmailError] = useState(
    "Строка с почтой не может быть пустой"
  );
  const [passwordError, setPasswordError] = useState(
    "Строка с поролем не может быть пустой"
  );

  const [disable, setDisable] = useState(true);

  const [formValid, setFormValid] = useState(false);

  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [nameError, emailError, passwordError]);

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

  function emailHandler(e) {
    setEmail(e.target.value);
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан неверный адрес почты");
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

  async function userCreate() {
    if (formValid) {
      const data = {
        name: name,
        email: email,
        password: password
      };
      setActive(false);

      //Функция регистрации
      registrationUser(data)
        .then((res) => {
          if (res) {
            //Декодирование токена
            dispatch(setUser(res));
            //Пользователь авторизован!
            dispatch(auth(true));
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
