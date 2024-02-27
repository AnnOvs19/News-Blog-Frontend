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
  const [bigSlider, setBigSlider] = useState([]);
  const [miniSlider, setMiniSlider] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchGetPosts().then((response) => {
      if (response.status) {
        const arrBigSlider = response.posts
          .reverse()
          .filter((item, index) => item.id % 2 == 0 && index < 30);
        const arrMiniSlider = response.posts.filter(
          (item, index) => item.id % 2 !== 0 && index < 30
        );
        setBigSlider(arrBigSlider);
        setMiniSlider(arrMiniSlider);
        dispatch(loadPosts(response.posts.sort((a, b) => b.id - a.id)));
      }
    });
  }, []);

  return (
    <div>
      <BigSliderList newsData={bigSlider} />
      <Filters />
      <NewsList />
      <MiniSliderList newsData={miniSlider} />
    </div>
  );
};

export default News;
