import React, { useEffect, useState } from "react";

import NewsItem from "../NewsItem/NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getSearchPosts, getTagPosts } from "../../store/newsSlise";

import "./newsList.scss";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import arrow from "../../../../assets/icons/dropdownArrow.svg";

const NewsList = () => {
  //Получение постов из редакса
  const posts = useSelector(getPosts);

  //Получение массивов отфильтрованных постов по тегам и поиску
  const filterTags = useSelector(getTagPosts);
  const filterSearch = useSelector(getSearchPosts);

  //Количество постов отображающихся за раз
  const itemPreventPage = 6;

  //Массив постов
  const [items, setItems] = useState([]);
  //Текущие посты для отображения
  const [currentItems, setCurrentItems] = useState([]);
  //Количество страниц
  const [pageCount, setPageCount] = useState(0);
  //Шаг смещения отображаемых элементов
  const [itemOffset, setItemOffset] = useState(0);

  //Заполнение и подсчёт состояний для пагинации, начальный рендер
  useEffect(() => {
    setItems(posts);
    const endOffset = itemOffset + itemPreventPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemPreventPage));
  }, [posts]);

  //Рендер при переключении страниц
  useEffect(() => {
    const endOffset = itemOffset + itemPreventPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemPreventPage));
  }, [itemOffset, itemPreventPage]);

  //Отслеживание клика переключения страниц
  function handlePageClick(event) {
    const newOffset = (event.selected * itemPreventPage) % items.length;
    setItemOffset(newOffset);
  }

  return (
    <div className="newsList">
      <div className="newsList__array">
        {filterTags.length > 0
          ? filterTags?.map((news, index) => {
              return (
                <Link to={`/post/${news.id}`} key={index}>
                  <NewsItem newsData={news} key={index} />
                </Link>
              );
            })
          : filterSearch?.map((news, index) => {
              return (
                <Link to={`/post/${news.id}`} key={index}>
                  <NewsItem newsData={news} key={index} />
                </Link>
              );
            })}

        {filterSearch.length == 0 &&
          filterTags.length == 0 &&
          currentItems?.map((news, index) => {
            return (
              <Link to={`/post/${news.id}`} key={index}>
                <NewsItem newsData={news} key={index} />
              </Link>
            );
          })}
      </div>

      {currentItems.length < itemPreventPage ? (
        ""
      ) : (
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
      )}
    </div>
  );
};

export default NewsList;
