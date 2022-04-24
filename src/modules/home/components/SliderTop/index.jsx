import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import { useRef } from "react";
import TextLineThrough from "components/TextLineThrough/index";

import image1 from "assets/images/slider_top/Skull - 63533.mp4";
import image2 from "assets/images/slider_top/h1-slide-3-1.jpg";
import image3 from "assets/images/slider_top/h1-slide-2-1.jpg";

SwiperCore.use([Autoplay]);

const SliderTop = () => {
  const swiperRef = useRef(null);

  const handleClickPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleClickNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const sliderImages = [
    {
      id: 1,
      // eslint-disable-next-line jsx-a11y/alt-text
      img: (
        <video autoplay="autoplay" loop muted>
          <source src={image1} type="video/mp4" />
        </video>
      ),
    },
    {
      id: 1,
      // eslint-disable-next-line jsx-a11y/alt-text
      img: <img src={image2} alt="image2" />,
    },
    {
      id: 1,
      // eslint-disable-next-line jsx-a11y/alt-text
      img: <img src={image3} alt="image3" />,
    },
  ];

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={16}
        effect="fade"
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
        loop
        // autoplay={{
        //   delay: 5000,
        // }}
      >
        {sliderImages.map((image) => {
          return <SwiperSlide key={image.id}>{image.img}</SwiperSlide>;
        })}
        <div className="slider-top__nav-custom">
          <button className="swiper-slide-prev" onClick={handleClickPrev}>
            <TextLineThrough color="white">Prev</TextLineThrough>
          </button>
          <span></span>
          <button className="swiper-slide-next" onClick={handleClickNext}>
            <TextLineThrough color="white">Next</TextLineThrough>
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default SliderTop;
