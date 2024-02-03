import React from 'react';

import "./bigSliderItem.scss"
import BaseButton from '../../../../ui/BaseButton/BaseButton';

const BigSliderItem = ({ newsData }) => {
    return (
        <div className='bigSlider-item'>
            <div className="bigSlider-item__content">
                <h1>{newsData.title}</h1>
                <div>
                    <span className='base-text' >By</span>
                    <h5 className='base-subtitle'>{newsData.autor}</h5>
                    <span className='base-text' >| {newsData.date}</span>
                </div>
                <p>{newsData.content.substring(0, 200)}...</p>
                <BaseButton>Read more</BaseButton>
            </div>
            <img src={newsData.img} alt="#" />
        </div>
    );
};

export default BigSliderItem;