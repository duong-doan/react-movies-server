import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DATA_SECTION_COMMENTS } from "../store/constants";

function SectionComment({ children }) {
  const handleSlideChange = () => {};

  return (
    <div className="section-comment">
      <div className="column-middle"></div>
      <div className="section-comment__wrapper">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          className="mySwiper"
          loop
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000,
          }}
        >
          {DATA_SECTION_COMMENTS.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.des}</p>
                <div>
                  <img src={item.img} alt="" />
                  <div>
                    <h4>{item.actor}</h4>
                    <span>{item.subDes}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {children}
      </div>
    </div>
  );
}

export default SectionComment;
