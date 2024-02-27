import React, { useEffect, useState } from "react";

import "./createEditePost.scss";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import BaseTextarea from "../../../../ui/BaseTextarea/BaseTextarea";
import FileInput from "../../../../ui/FileInput/FileInput";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import BaseInput from "../../../../ui/BaseInput/BaseInput";
import BackgroundNews from "../../../../assets/images/backgroundNews.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserData } from "../../../Profile/store/userSlice";
import { createPost } from "../../api/createPost";
import { fetchGetOne } from "../../../NewsPost/api/fetchGetOne";
import { getTags } from "../../../News/store/newsSlise";
import { editPost } from "../../api/editPost";

const CreateEditePost = (props) => {
  const user = useSelector(getUserData);

  const nav = useNavigate();

  const { id } = useParams();
  const [typeForm, setTypeForm] = useState(id ? 1 : 0);

  const [dataPost, setDataPost] = useState(null);

  const [selectedTagIndex, setSelectedTagIndex] = useState(null);

  //При создании дефолтное изображение
  const [bacgroundNews, setBacgroundNews] = useState(BackgroundNews);
  //Название изображения поста при редактировании
  const [nameImage, setNameImage] = useState(null);
  //Путь до изображения поста при редактировании
  const imageEdit = `http://localhost:6868/${nameImage}`;
  //Файл изображения для отправки на сервер
  const [imgData, setImgData] = useState(null);

  const [title, setTitle] = useState("");
  const [titleDirty, setTitleDirty] = useState(false);
  const [titleError, setTitleError] = useState(
    id ? "" : "Строка с заголовком статьи не может быть пустой"
  );

  const [textArea, setTextArea] = useState("");

  const [disable, setDisable] = useState(true);

  const [formValid, setFormValid] = useState(id ? true : false);

  function handleBacgroundNews(e) {
    e.preventDefault();
    const loadedImage = e.target.files[0];
    setImgData(e.target.files[0]);
    setBacgroundNews(URL.createObjectURL(loadedImage));
    setNameImage(null);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
    if (e.target.value.length < 2) {
      setTitleError("Заголовок не должен быть меньше 2х символов");
      if (!e.target.value) {
        setTitleError("Строка с заголовком статьи не может быть пустой");
      }
    } else {
      setTitleError("");
    }
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (titleError) {
      setFormValid(false);
      setDisable(true);
    } else {
      setFormValid(true);
      setDisable(false);
    }
  }, [titleError]);

  useEffect(() => {
    if (id) {
      fetchGetOne(id).then((res) => {
        setDataPost(res);
        setSelectedTagIndex(res.typeNewId);
        setTitle(res.title);
        setTextArea(res.content);
        setNameImage(res.img);
      });
    }
  }, []);

  function createFormData(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    //Данные о id юзера получаем из стора, typeId новости из дропдауна
    formData.append("userId", user.id);
    formData.append("typeId", selectedTagIndex);
    formData.append("img", imgData);

    if (formValid) {
      if (typeForm == 0) {
        createPost(formData).then((res) => {
          nav("/profile");
        });
      } else {
        editPost(formData, id).then((res) => {
          nav("/profile");
        });
      }
    }
  }

  return (
    <div className="createArticle">
      <div className="createArticle-box">
        <h2 className="base-title">
          {typeForm == 0 ? "Create post" : "Edit Post"}
        </h2>
        <div className="createArticle-box__content">
          <form
            onSubmit={(e) => {
              createFormData(e);
            }}
            className="createArticle-box__content-info"
          >
            <Dropdown
              type={1}
              text={"Select new tag"}
              selectIndex={setSelectedTagIndex}
            />
            <img
              className="img-backgroundNews"
              src={
                typeForm == 1
                  ? nameImage
                    ? imageEdit
                    : bacgroundNews
                  : bacgroundNews
              }
              alt="#"
            />
            <BaseButton>
              <FileInput
                accept="image/*"
                onChange={(e) => handleBacgroundNews(e)}
              >
                Edit photo
              </FileInput>
            </BaseButton>
            <div className="info">
              <p>Title of article</p>
              <BaseInput
                onChange={(e) => titleHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={title}
                invalid={titleDirty && titleError}
                name={"title"}
                type={"text"}
                placeholder={"Your title"}
                styles={"postInput"}
              />
              <span className={titleError ? "error-span" : ""}>
                {titleDirty && titleError && titleError}
              </span>
            </div>
            <div className="info">
              <p>Your text</p>
              <BaseTextarea
                name={"content"}
                placeholder={"Your text"}
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              />
            </div>

            <BaseButton styles={"cancelBtn"}>
              <Link to={"/profile"}>Cancel</Link>
            </BaseButton>

            <BaseButton
              type={"submit"}
              disabled={!formValid && disable}
              styles={disable ? "disableForm" : ""}
            >
              Create post
            </BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEditePost;
