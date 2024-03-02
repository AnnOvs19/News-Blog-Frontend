import React, { useEffect, useState } from "react";

import "./profileUserList.scss";
import ProfileUserItem from "../ProfileUserItem/ProfileUserItem";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUnknowUser,
  getUserPosts,
  setUserPosts
} from "../../store/userSlice";
import { fethGetPostsUser } from "../../api/fetchGetPostUser";
import ReactPaginate from "react-paginate";

const ProfileUserList = ({ userName, userAvatar, userId }) => {
  //Получение данных из редакса: посты юзера, информация о стороннем пользователе
  const unknowUser = useSelector(getUnknowUser);
  const posts = useSelector(getUserPosts);
  const dispatch = useDispatch();

  //ID для определения страницы юзера(своя или другого пользователя)
  const { id } = useParams();

  //Количество постов отображающихся за раз
  const itemPreventPage = 3;

  //Массив постов
  const [items, setItems] = useState([]);
  //Текущие посты для отображения
  const [currentItems, setCurrentItems] = useState([]);
  //Количество страниц
  const [pageCount, setPageCount] = useState(0);
  //Шаг смещения отображаемых элементов
  const [itemOffset, setItemOffset] = useState(0);

  //Рендер постов авторизованного юзера
  function renderUserPosts() {
    setItems(posts);
    //Складываем шаг смещения и количество постов на странице
    const endOffset = itemOffset + itemPreventPage;
    //Нарезка постов для одной страницы
    setCurrentItems(posts.slice(itemOffset, endOffset));
    //Подсчёт страниц
    setPageCount(Math.ceil(posts.length / itemPreventPage));
  }

  //Рендер постов стороннего юзера
  function renderUnknowUserPosts() {
    const arr = unknowUser.posts;
    if (Array.isArray(arr)) {
      setItems(arr);
      const endOffset = itemOffset + itemPreventPage;
      setCurrentItems(arr.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(arr.length / itemPreventPage));
    }
  }

  //Заполнение и подсчёт состояний для пагинации, начальный рендер
  useEffect(() => {
    if (id) {
      renderUnknowUserPosts();
    } else {
      renderUserPosts();
    }
  }, [posts]);

  //Отслеживание клика переключения страниц
  function handlePageClick(event) {
    //event.selected - выбранный номер страницы
    const newOffset = (event.selected * itemPreventPage) % items.length;
    setItemOffset(newOffset);
  }

  //Рендер при переключении страниц, вызывается при изменении itemOffset
  useEffect(() => {
    const endOffset = itemOffset + itemPreventPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemPreventPage));
  }, [itemOffset, itemPreventPage]);

  //Запрос постов юзера
  useEffect(() => {
    fethGetPostsUser(userId)
      .then((res) => {
        dispatch(setUserPosts(res));
      })
      .catch((res) => alert(res.massage));
  }, [dispatch]);

  return (
    <div className="profileUserList">
      <div className="profileUserList__array">
        <div className="profileUserList__array-head">
          <h1 className="base-tile">{id ? "Publications" : "My posts"}</h1>

          {id ? (
            ""
          ) : (
            <Link to={"/article"}>
              <BaseButton>Create a new post</BaseButton>
            </Link>
          )}
        </div>

        {items?.length > 0 ? (
          currentItems?.map((news, index) => {
            return (
              <ProfileUserItem
                newsData={news}
                userName={id ? unknowUser.name : userName}
                userAvatar={id ? unknowUser.avatar : userAvatar}
                key={index}
              />
            );
          })
        ) : (
          <div className="emtyPosts">You don't have any publications yet!</div>
        )}
      </div>

      <ReactPaginate
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="back"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
        previousClassName="pagination__item"
        previousLinkClassName="pagination__link"
        nextClassName="pagination__item"
        nextLinkClassName="pagination__link"
        breakLabel="..."
        breakClassName="pagination__item"
        breakLinkClassName="pagination__link"
        containerClassName="pagination"
        activeClassName="activeBtnPag"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ProfileUserList;
