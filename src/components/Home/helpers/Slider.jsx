import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";

SwiperCore.use([Pagination]);

const GallerySlider = ({ images }) => {
   return (
      <Swiper
         spaceBetween={0}
         slidesPerView={1}
         direction="vertical"
         pagination={{ clickable: true }}
         style={{ width: "100%", height: "600px" }}
         autoplay={{ delay: 1000 }}
         onInit={(swiper) => {
            swiper.slides.forEach((slide, index) => {
               const angle = -45 * index; // Угол поворота слайда
               slide.style.transform = `rotate(${angle}deg) translateY(-50%)`;
               slide.style.transformOrigin = "50% 50%"; // Задаем точку применения поворота по центру слайда
            });
         }}
      >
         {images.map(({ avif, webp }, index) => (
            <SwiperSlide
               key={index}
               className="flex h-full items-center justify-center"
            >
               <picture>
                  <source srcSet={`${avif} 1x`} type="image/avif" />
                  <img
                     src={webp}
                     alt={`Слайд №${index + 1}`}
                     className="max-h-full max-w-full -rotate-45 transform"
                  />
               </picture>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default GallerySlider;
