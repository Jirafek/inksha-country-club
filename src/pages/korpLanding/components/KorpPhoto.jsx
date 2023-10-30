import { useRef } from "react";
// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import next from "icons/next_photo.png";
import prev from "icons/prev_photo.png";

import photo1 from "images/korpLanding/photo/001.webp";
import photo2 from "images/korpLanding/photo/002.webp";
import photo3 from "images/korpLanding/photo/003.webp";
import photo4 from "images/korpLanding/photo/004.webp";
import photo5 from "images/korpLanding/photo/005.webp";
import photo6 from "images/korpLanding/photo/006.webp";
import photo7 from "images/korpLanding/photo/007.webp";

const photos = [
   { img: photo1 },
   { img: photo2 },
   { img: photo3 },
   { img: photo4 },
   { img: photo5 },
   { img: photo6 },
   { img: photo7 },
];
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// const ytSrc = "https://www.youtube.com/watch?v=Eat2wgPNuIo";
// const ytId = ytSrc.split("/")[ytSrc.split("/").length - 1];
const Photo = () => {
   const swiperRef = useRef();
   return (
      <div id="photo" className="bg-korpPrimary py-[10vh]">
         <div className="wrapper">
            <div className="text-center">
               <h1 className=" mb-[30px] text-lg text-white">
                  Фотографии наших мероприятий
               </h1>
               <div className="relative">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="photo_swiper relative "
                     onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                     }}
                     // onSwiper={(swiper) => console.log(swiper)}
                     // onSlideChange={() => console.log("slide change")}
                  >
                     {/* <SwiperSlide className="">
                        <div className="">
                           <a rel="noreferrer" target="_blank" href={ytSrc}>
                              <img
                                 className="object-cover"
                                 src={`https://i.ytimg.com/vi_webp/${ytId}/mqdefault.webp`}
                                 alt="Обложка ролика с ютуб канала Икша Кантри Клаб"
                              />
                           </a>
                           <button
                              className="absolute left-1/2 top-1/2 h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 border-none bg-transparent"
                              aria-label="Запустить Видео"
                           >
                              <svg width="68" height="48" viewBox="0 0 68 48">
                                 <path
                                    className="fill-[#212121] opacity-80 duration-300 group-hover:fill-[#ff0000] group-hover:opacity-100"
                                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                 ></path>
                                 <path
                                    className="fill-white"
                                    d="M 45,24 27,14 27,34"
                                 ></path>
                              </svg>
                           </button>
                        </div>
                     </SwiperSlide> */}
                     {photos.map((photo, i) => {
                        return (
                           <SwiperSlide className="h-full w-full" key={i}>
                              <img
                                 className="w-full h-full object-cover"
                                 src={photo.img}
                                 alt=""
                              />
                           </SwiperSlide>
                        );
                     })}
                  </Swiper>
                  <button
                     className="absolute right-0 md:-right-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext();
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute left-0 md:-left-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slidePrev();
                     }}
                  >
                     <img src={prev} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Photo;
