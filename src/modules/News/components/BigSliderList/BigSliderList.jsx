import React, { useEffect, useState } from 'react';
import BigSliderItem from '../BigSliderItem/BigSliderItem';

import "./bigSliderList.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BigSliderList = ({ newsData }) => {
    const [pages, setPages] = useState(newsData);

    return (
        <div className='bigSliderList'>
            <Swiper autoplay={{
                delay: 6500,
                disableOnInteraction: false,
            }} modules={[Autoplay]} loop={true} speed={1500}>

                {pages?.map((news) => {
                    return (
                        <SwiperSlide>
                            <BigSliderItem newsData={news} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>

    );
};

export default BigSliderList;