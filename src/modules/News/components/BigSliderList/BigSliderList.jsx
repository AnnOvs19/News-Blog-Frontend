import React, { useEffect, useState } from 'react';
import BigSliderItem from '../BigSliderItem/BigSliderItem';


import "./bigSliderList.scss"

const BigSliderList = ({ newsData }) => {
    const [pages, setPages] = useState(newsData);
    const [offset, setOffset] = useState(0)
    let newOffset = 0;
    let maxOffset = 0;

    function scrollRight() {
        newOffset = offset - 1200;
        maxOffset = -(1200 * (pages.length - 1));
        setOffset(Math.max(newOffset, maxOffset));
        if (newOffset < maxOffset) {
            setOffset(0)
        }
    }

    setTimeout(() => {
        scrollRight()
    }, 7000);

    return (
        <div className='bigSliderList'>
            <div className='bigSliderList__array' style={{
                transform: `translateX(${offset}px)`,
            }}>
                {pages?.map((news) => {
                    return (
                        <BigSliderItem newsData={news} />
                    )
                })}
            </div>

        </div>
    );
};

export default BigSliderList;