import React from 'react';

import "./newsItem.scss";

const NewsItem = ({ newsData }) => {
    return (
        <div className='newsItem'>
            <img src={newsData.img} alt="#" />
            <div className='newsItem__content'>
                <div>
                    <span className='base-text' >By</span>
                    <h5 className='base-subtitle'>{newsData.autor}</h5>
                    <span className='base-text' >| {newsData.date}</span>
                </div>
                <h3 className='base-title'>{newsData.title}</h3>
                <p className='base-text'>{newsData.content.substring(0, 260)}...</p>
            </div>
        </div>

    );
};

export default NewsItem;