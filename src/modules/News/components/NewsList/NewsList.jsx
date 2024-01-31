import React from 'react';


import "./newsList.scss"
import { newsArray } from '../../store/newsArray';
import NewsItem from '../../../../components/NewsItem/NewsItem';

const NewsList = (props) => {
    return (
        <div className='newsList'>
            <div className='newsList__array'>
                {newsArray?.map((news) => {
                    return (
                        <NewsItem newsData={news} />
                    )
                })}
            </div>
        </div>
    );
};

export default NewsList;