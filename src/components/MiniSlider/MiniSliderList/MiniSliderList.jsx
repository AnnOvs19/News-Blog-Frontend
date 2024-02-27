import React, { useState } from "react";

import MiniSliderItem from "../MiniSliderItem/MiniSliderItem";
import sliderArrowRight from "../../../assets/icons/sliderArrowRight.svg";
import sliderArrowLeft from "../../../assets/icons/sliderArrowLeft.svg";
import "./miniSliderList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const MiniSliderList = ({ newsData }) => {
  return (
    <div className="miniSliderList">
      <div className="miniSliderList-box">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            639: {
              slidesPerView: 1
            },

            820: {
              slidesPerView: 3
            },
            865: {
              slidesPerView: 1
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
          }}
        >
          {newsData?.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <MiniSliderItem newsData={news} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MiniSliderList;
