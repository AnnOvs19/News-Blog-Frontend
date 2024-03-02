import React, { useEffect, useState } from "react";
import dropdownArrow from "../../assets/icons/dropdownArrow.svg";
import "./dropdown.scss";
import { useSelector } from "react-redux";
import { getTags } from "../../modules/News/store/newsSlise";

const Dropdown = ({ type, categories, text, selectIndex }) => {
  //Получение тегов из редакса
  const tags = useSelector(getTags);

  //Состояния для отображения того или иного дропдауна, и открытия-закрытия
  const [selected, setSelected] = useState(text);
  const [open, setOpen] = useState(false);

  //Открытие и закрытие дропдауна
  function toggle() {
    if (open == true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  //Вешаем на весь документ слушатель событий и при клике вызываем функцию closeByClickOut
  function initListeners() {
    document.addEventListener("click", closeByClickOut);
  }

  //При нажатии на любое место в документе, дропдаун закрывается
  function closeByClickOut(event) {
    //event.path - путь к элементу в дом,дереве, composedPath() возвращает путь события, представляющий собой массив объектов, на которых будут вызваны обработчики событий
    const path = event.path || (event.composedPath && event.composedPath());

    //Если пути к дропдауну нет, то мы его закрываем
    if (
      event &&
      !path.find(
        (div) =>
          div.classList && div.classList.contains(`dropdown-type-${type}`)
      )
    ) {
      setOpen(false);
    }
  }

  useEffect(() => {
    initListeners();
  }, []);

  return (
    <div
      className={`dropdown dropdown-type-${type}`}
      onClick={() => {
        toggle();
      }}
    >
      <div className="dropdown-head">
        <h4 className="head-text">{selected}</h4>
        <img
          className={open ? "activeArrow" : ""}
          src={dropdownArrow}
          alt="#"
        />
      </div>

      <div className={open ? "dropdown-content activeDd" : "dropdown-content"}>
        {type == 0 ? (
          <div className="dropdown-content__categories">
            <div
              className="categories-item"
              onClick={() => {
                setSelected("Show new posts");
                selectIndex(1);
              }}
            >
              Show new posts
            </div>
            <div
              className="categories-item"
              onClick={() => {
                setSelected("Show old posts");
                selectIndex(2);
              }}
            >
              Show old posts
            </div>
            <div
              className="categories-item"
              onClick={() => {
                setSelected("Popular posts");
                selectIndex(3);
              }}
            >
              Popular posts
            </div>
          </div>
        ) : (
          <div className="dropdown-content__tags">
            {Array.isArray(tags) &&
              tags.map((itemTag, index) => {
                return (
                  <div
                    className="tags-item"
                    onClick={() => {
                      setSelected(itemTag.name);
                      selectIndex(itemTag.id);
                    }}
                    key={index}
                  >
                    #{itemTag.name}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
