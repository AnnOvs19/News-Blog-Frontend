import React from 'react';

import Filters from '../Filters/Filters';
import NewsList from '../NewsList/NewsList';
import ModalNotice from '../../../../components/ModalNotice/ModalNotice';
import { newsArray } from '../../store/newsArray';
import BigSliderList from '../BigSliderList/BigSliderList';

import "./news.scss"


const News = (props) => {

    const arrBigSlider = newsArray.filter((item, index) => item.id % 2 == 0 && index < 10)

    return (
        <div>
            <BigSliderList newsData={arrBigSlider} />
            <Filters />
            <NewsList />
        </div>
    );
};

export default News;