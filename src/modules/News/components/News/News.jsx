import React from 'react';

import Filters from '../Filters/Filters';
import NewsList from '../NewsList/NewsList';
import ModalNotice from '../../../../components/ModalNotice/ModalNotice';
import { newsArray } from '../../store/newsArray';
import BigSliderList from '../BigSliderList/BigSliderList';
import MiniSliderList from '../../../../components/MiniSlider/MiniSliderList/MiniSliderList';

import "./news.scss"
import BaseButton from '../../../../ui/BaseButton/BaseButton';
import { Link } from 'react-router-dom';



const News = (props) => {
    //С помощью редакса или бэка сделать фильтрацию новостей в слайдерах
    const arrBigSlider = newsArray.filter((item, index) => item.id % 2 == 0 && index < 10);
    const arrMiniSlider = newsArray.filter((item, index) => index < 9);


    return (
        <div>
            <BigSliderList newsData={arrBigSlider} />
            <Filters />
            <NewsList />
            <MiniSliderList newsData={arrMiniSlider} />
            <Link to={"/profile"}><BaseButton>Перейти в профиль</BaseButton></Link>

        </div>
    );
};

export default News;