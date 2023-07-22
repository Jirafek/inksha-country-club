import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const GallerySlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      direction="vertical"
      pagination={{ clickable: true }}
      style={{ width: '100%', height: '600px' }}
      autoplay={{ delay: 1000 }}
      onInit={(swiper) => {
        swiper.slides.forEach((slide, index) => {
          const angle = -45 * index; // Угол поворота слайда
          slide.style.transform = `rotate(${angle}deg) translateY(-50%)`;
          slide.style.transformOrigin = '50% 50%'; // Задаем точку применения поворота по центру слайда
        });
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center h-full">
          <img src={image} alt={`Slide ${index}`} className="max-w-full max-h-full transform -rotate-45" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
