import React, { useEffect, useState } from "react";
import BigSliderItem from "../BigSliderItem/BigSliderItem";

import "./bigSliderList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BigSliderList = ({ newsData }) => {
  return (
    <div className="bigSliderList">
      <Swiper
        autoplay={{
          delay: 6500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        loop={true}
        speed={1500}
      >
        {newsData?.map((news, index) => {
          return (
            <SwiperSlide key={index}>
              <BigSliderItem newsData={news} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BigSliderList;
