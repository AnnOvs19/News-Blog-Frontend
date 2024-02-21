import React, { useState, useEffect } from "react";
import { fetchGetPosts } from "../../api/fetchGetPosts";
import { useDispatch } from "react-redux";
import { loadPosts } from "../../store/newsSlise";

import Filters from "../Filters/Filters";
import NewsList from "../NewsList/NewsList";
import { newsArray } from "../../store/newsArray";
import BigSliderList from "../BigSliderList/BigSliderList";
import MiniSliderList from "../../../../components/MiniSlider/MiniSliderList/MiniSliderList";

import "./news.scss";

const News = ({}) => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    fetchGetPosts().then((response) => {
      if (response.status) {
        setData(response);
        dispatch(loadPosts(response.posts.sort((a, b) => b.id - a.id)));
      }
    });
  }, []);

  //С помощью редакса или бэка сделать фильтрацию новостей в слайдерах
  const arrBigSlider = newsArray.filter(
    (item, index) => item.id % 2 == 0 && index < 10
  );
  const arrMiniSlider = newsArray.filter((item, index) => index < 9);

  return (
    <div>
      <BigSliderList newsData={arrBigSlider} />
      <Filters />
      <NewsList />
      <MiniSliderList newsData={arrMiniSlider} />
    </div>
  );
};

export default News;
