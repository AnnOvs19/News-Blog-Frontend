import React from 'react';

import "./miniSliderItem.scss"

const MiniSliderItem = ({ newsData }) => {
    return (
        <div className='miniSlider-item'>
            <img src={newsData.img} alt="#" />
            <div className='miniSlider-item__content'>
                <div>
                    <span className='base-text' >By</span>
                    <h5 className='base-subtitle'>{newsData.autor}</h5>
                    <span className='base-text' >| {newsData.date}</span>
                </div>
                <h1 className='base-title'>{newsData.title}</h1>
                <p className='base-text'>{newsData.content.substring(0, 150)}...</p>
            </div>
        </div>
    );
};

export default MiniSliderItem;