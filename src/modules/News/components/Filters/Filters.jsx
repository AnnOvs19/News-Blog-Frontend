import React, { useEffect, useState } from "react";

import "./filters.scss";
import BaseInput from "../../../../ui/BaseInput/BaseInput";
import BaseButton from "../../../../ui/BaseButton/BaseButton";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { fetchGetTypes } from "../../api/fetchGetTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFiltersSearch,
  filterSearchPosts,
  filterTagPosts,
  getPosts,
  loadPosts,
  loadTags
} from "../../store/newsSlise";

const Filters = () => {
  const posts = useSelector(getPosts);

  const dispatch = useDispatch();

  const [tags, setTags] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchGetTypes().then((res) => {
      dispatch(loadTags(res));
    });
  }, []);

  function selectedTags(id) {
    setTags(id);
    dispatch(clearFiltersSearch());
    dispatch(filterTagPosts(id));
  }

  function searchNews(value) {
    dispatch(filterTagPosts());
    dispatch(filterSearchPosts(value));
  }

  function sortNewPosts() {
    const copyPosts = [...posts];
    const sortArrayPosts1 = copyPosts.sort((a, b) => b.id - a.id);
    dispatch(loadPosts(sortArrayPosts1));
  }

  function sortOldPosts() {
    const copyPosts = [...posts];
    const sortArrayPosts2 = copyPosts.sort((a, b) => a.id - b.id);
    dispatch(loadPosts(sortArrayPosts2));
  }

  function sortPopularPosts() {
    const copyPosts = [...posts];
    const sortArrayPosts3 = copyPosts.sort(
      (a, b) => b.likes.length - a.likes.length
    );
    dispatch(loadPosts(sortArrayPosts3));
  }

  function checkCategory(id) {
    switch (id) {
      case 1:
        sortNewPosts();
        break;

      case 2:
        sortOldPosts();
        break;

      case 3:
        sortPopularPosts();
        break;

      default:
        break;
    }
  }

  return (
    <div className="filters">
      <div className="filters-box">
        <div className="filters-box__search">
          <BaseInput
            styles={"filters-box__search-input"}
            placeholder="Enter your query in the search bar"
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
