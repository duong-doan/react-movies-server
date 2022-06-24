import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from 'assets/images/slider_top/testimonial-image-1-53x53.jpg';
import Image2 from 'assets/images/slider_top/testimonial-image-2-53x53.jpg';
import Image3 from 'assets/images/slider_top/user-2-53x53.jpg';

function SectionComment({ children }) {
  const handleSlideChange = () => {};

  return (
    <div className='section-comment'>
      <div className='column-middle'></div>
      <div className='section-comment__wrapper'>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          className='mySwiper'
          loop
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide>
            <div>
              <h2>"An Intense Experience"</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                placeat nostrum excepturi molestias quia quo facilis minus
                autem. In sunt possimus quasi officia nulla amet debitis aliquam
                impedit dolor corporis.
              </p>
              <div>
                <img src={Image2} alt='' />
                <div>
                  <h4>ROBERT SHUMAN</h4>
                  <span>The Guardian</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2>"Visualy Over-powering"</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                placeat nostrum excepturi molestias quia quo facilis minus
                autem. In sunt possimus quasi officia nulla amet debitis aliquam
                impedit dolor corporis.
              </p>
              <div>
                <img src={Image1} alt='' />
                <div>
                  <h4>AMANDA GILLES</h4>
                  <span>The Guardian</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h2>"Amazing Soundtrack"</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                placeat nostrum excepturi molestias quia quo facilis minus
                autem. In sunt possimus quasi officia nulla amet debitis aliquam
                impedit dolor corporis.
              </p>
              <div>
                <img src={Image3} alt='' />
                <div>
                  <h4>DONNA LOUIS</h4>
                  <span>The Guardian</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {children}
      </div>
    </div>
  );
}

export default SectionComment;
