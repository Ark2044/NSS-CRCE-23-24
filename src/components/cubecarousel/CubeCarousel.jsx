import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './CubeCarousel.css';



// import required modules
import { Autoplay , EffectCube, Pagination } from 'swiper/modules';

export default function CubeCarousel() {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        
        pagination={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectCube, Pagination]}
        className="Swiper"
      >
        <SwiperSlide>
          <img src="/images/cube_carousel/cubecar1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/cube_carousel/cubecar2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/cube_carousel/cubecar3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/cube_carousel/cubecar4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/cube_carousel/cubecar5.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}