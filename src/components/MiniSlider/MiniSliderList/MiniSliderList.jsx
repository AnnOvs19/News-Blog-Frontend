import React, { useState } from 'react';

import MiniSliderItem from '../MiniSliderItem/MiniSliderItem';
import sliderArrowRight from "../../../assets/icons/sliderArrowRight.svg"
import sliderArrowLeft from "../../../assets/icons/sliderArrowLeft.svg"
import "./miniSliderList.scss"


const MiniSliderList = ({ newsData }) => {
    const [pages, setPages] = useState(newsData);
    const [offset, setOffset] = useState(0)

    function handleLeftArrow() {
        const newOffset = offset + 310;
        setOffset(Math.min(newOffset, 0));

    }

    function handleRightArrow() {
        const newOffset = offset - 310;
        const maxOffset = -(310 * (pages.length - 1));
        setOffset(Math.max(newOffset, maxOffset));

        if (newOffset < maxOffset) {
            setOffset(0)
        }
    }

    return (
        <div className='miniSliderList'>
            <img className='slider-arrow' src={sliderArrowLeft} alt="#" onClick={handleLeftArrow} />
            <div className='miniSliderList-box'>
                <div className="miniSliderList-box__array" style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    {pages?.map((news) => {
                        return (
                            <MiniSliderItem newsData={news} />
                        )
                    })}

                </div>
            </div>
            <img className='slider-arrow' src={sliderArrowRight} alt="#" onClick={handleRightArrow} />
        </div>
    );
};

export default MiniSliderList;