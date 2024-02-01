import React from 'react';

import MiniSliderItem from '../MiniSliderItem/MiniSliderItem';
import "./miniSliderList.scss"


const MiniSliderList = ({ newsData }) => {
    const [pages, setPages] = useState(newsData);
    const [offset, setOffset] = useState(0)

    return (
        <div className='miniSliderList'>
            <div className="miniSliderList__array">
                {pages?.map((news) => {
                    return (
                        <MiniSliderItem newsData={news} />
                    )
                })}
            </div>
        </div>
    );
};

export default MiniSliderList;