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
  const [pages, setPages] = useState(newsData);

  return (
    <div className="miniSliderList">
      <div className="miniSliderList-box">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={5}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          {pages?.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <MiniSliderItem newsData={news} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MiniSliderList;
