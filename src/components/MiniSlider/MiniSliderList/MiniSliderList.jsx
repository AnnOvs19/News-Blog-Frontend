import React, { useState } from 'react';

import MiniSliderItem from '../MiniSliderItem/MiniSliderItem';
import sliderArrowRight from "../../../assets/icons/sliderArrowRight.svg"
import sliderArrowLeft from "../../../assets/icons/sliderArrowLeft.svg"
import "./miniSliderList.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';


const MiniSliderList = ({ newsData }) => {
    const [pages, setPages] = useState(newsData);

    return (
        <div className='miniSliderList'>
            <div className='miniSliderList-box'>
                <Swiper navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={5}
                    breakpoints={{


                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        639: {
                            slidesPerView: 2,
                        },
                        865: {
                            slidesPerView: 2
                        },
                        1000: {
                            slidesPerView: 4
                        },
                        1500: {
                            slidesPerView: 4
                        },
                        1700: {
                            slidesPerView: 4
                        }



                        // 640: {
                        //     slidesPerView: 2,
                        //     spaceBetween: 20,
                        // },
                        // 768: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 40,
                        // },
                        // 1024: {
                        //     slidesPerView: 4,
                        //     spaceBetween: 30,
                        // },
                    }}>

                    {pages?.map((news) => {
                        return (
                            <SwiperSlide>
                                <MiniSliderItem newsData={news} />
                            </SwiperSlide>

                        )
                    })}

                </Swiper>
            </div>
        </div>
    );
};

export default MiniSliderList;