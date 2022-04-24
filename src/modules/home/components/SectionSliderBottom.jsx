import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "assets/images/slider_top/port-1-img-1.jpg";
import Image2 from "assets/images/slider_top/port-1-img-2.jpg";
import Image3 from "assets/images/slider_top/port1-img-4.jpg";
import Image4 from "assets/images/slider_top/home-1-rev-video-background.jpg";

const SectionSliderBottom = () => {
  const handleSlideChange = (e) => {
    console.log(e.realIndex);
  };
  return (
    <div className="slider-bottom__wrapper" style={{ height: "300px" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        className="mySwiper"
        centeredSlidesBounds
        loop
        centeredSlides
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img src={Image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionSliderBottom;
