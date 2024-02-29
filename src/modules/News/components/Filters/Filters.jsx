import React, { useEffect, useState } from "react";

import "./filters.scss";
import BaseInput from "../../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { fetchGetTypes } from "../../api/fetchGetTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFiltersSearch,
  clearFiltersTag,
  filterSearchPosts,
  filterTagPosts,
  getPosts,
  getSearchPosts,
  getTagPosts,
  loadPosts,
  loadSearchPosts,
  loadTagPosts,
  loadTags
} from "../../store/newsSlise";

const Filters = () => {
  //Получение из редакса массивов всех постов/отсортированных постов по категориям и по поиску
  const allPosts = useSelector(getPosts);
  const tagPosts = useSelector(getTagPosts);
  const searchPosts = useSelector(getSearchPosts);

  const dispatch = useDispatch();

  //Очищение массива по поиску, выбор категории по id
  function selectedTags(id) {
    dispatch(clearFiltersSearch());
    dispatch(filterTagPosts(id));
  }

  //Очищение массива по тегам, поиска по содержимому(названию)
  function searchNews(value) {
    dispatch(filterTagPosts());
    dispatch(filterSearchPosts(value));
  }
  //Сортировка трёх массивов по последним новостям
  function sortNewPosts(allPosts, tagPosts, searchPosts) {
    const sortArrayPosts = allPosts.sort((a, b) => b.id - a.id);
    const sortArrayTagPosts = tagPosts.sort((a, b) => b.id - a.id);
    const sortArraySearchPosts = searchPosts.sort((a, b) => b.id - a.id);

    dispatch(loadPosts(sortArrayPosts));
    dispatch(loadTagPosts(sortArrayTagPosts));
    dispatch(loadSearchPosts(sortArraySearchPosts));
  }

  //Сортировка трёх массивов по старым новостям
  function sortOldPosts(allPosts, tagPosts, searchPosts) {
    const sortArrayPosts = allPosts.sort((a, b) => a.id - b.id);
    const sortArrayTagPosts = tagPosts.sort((a, b) => a.id - b.id);
    const sortArraySearchPosts = searchPosts.sort((a, b) => a.id - b.id);

    dispatch(loadPosts(sortArrayPosts));
    dispatch(loadTagPosts(sortArrayTagPosts));
    dispatch(loadSearchPosts(sortArraySearchPosts));
  }

  //Сортировка трёх массивов по лайкам
  function sortPopularPosts(allPosts, tagPosts, searchPosts) {
    const sortArrayPosts = allPosts.sort(
      (a, b) => b.likes.length - a.likes.length
    );
    const sortArrayTagPosts = tagPosts.sort(
      (a, b) => b.likes.length - a.likes.length
    );
    const sortArraySearchPosts = searchPosts.sort(
      (a, b) => b.likes.length - a.likes.length
    );

    dispatch(loadPosts(sortArrayPosts));
    dispatch(loadTagPosts(sortArrayTagPosts));
    dispatch(loadSearchPosts(sortArraySearchPosts));
  }

  //Выбор метода сортировки новостей
  function checkCategory(id) {
    const copyAllPosts = [...allPosts];
    const copyTagPosts = [...tagPosts];
    const copySearchPosts = [...searchPosts];
    switch (id) {
      case 1:
        sortNewPosts(copyAllPosts, copyTagPosts, copySearchPosts);
        break;

      case 2:
        sortOldPosts(copyAllPosts, copyTagPosts, copySearchPosts);
        break;

      case 3:
        sortPopularPosts(copyAllPosts, copyTagPosts, copySearchPosts);
        break;

      default:
        break;
    }
  }

  //Получение типов новостей и отчистка фильров при каждом обновлении
  useEffect(() => {
    fetchGetTypes().then((res) => {
      dispatch(loadTags(res));
    });
    dispatch(clearFiltersSearch());
    dispatch(clearFiltersTag());
  }, []);

  return (
    <div className="filters">
      <div className="filters-box">
        <div className="filters-box__search">
          <BaseInput
            styles={"filters-box__search-input"}
            placeholder="Search through all publications"
            type={"text"}
            name={"search"}
            onChange={(event) => searchNews(event.target.value)}
          />
          <BaseButton styles={"filters-box__search-button"}>Search</BaseButton>
        </div>
        <div className="filters-box__dropdown">
          <Dropdown
            type={0}
            text={"Sorting by date"}
            selectIndex={checkCategory}
          />
          <Dropdown
            type={1}
            text={"Sorting by tags"}
            selectIndex={selectedTags}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
