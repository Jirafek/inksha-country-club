/* eslint-disable react/prop-types */
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import closeblack from "icons/closeblack.png";
import next from "icons/next_photo.png";
import prev from "icons/prev_photo.png";
import { useRef } from "react";

const Lightbox = ({ toggleMenu, items, isButtonVisible = true }) => {
   const swiperRef = useRef();
   return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center  h-full w-[100vw] bg-slate-100 bg-opacity-60 ">
         <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={toggleMenu}
         >
            <img
               onClick={toggleMenu}
               className="w-9 h-9"
               src={closeblack}
               alt=""
            />
         </div>
         <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            className="photo_swiper "
            onBeforeInit={(swiper) => {
               swiperRef.current = swiper;
            }}
         // onSwiper={(swiper) => console.log(swiper)}
         // onSlideChange={() => console.log("slide change")}
         >
            {items.map((photo, i) => {
               return (
                  <SwiperSlide
                     className="menu_kay flex w-[100vw] items-center justify-center"
                     key={i}
                  >
                     <img className="object-cover" src={photo.img} alt="" />
                  </SwiperSlide>
               );
            })}
         </Swiper>
         {isButtonVisible && <div>

            <button
               className="absolute right-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
               onClick={() => {
                  swiperRef.current?.slideNext();
               }}
            >
               <img src={next} alt="" />
            </button>
            <button
               className="absolute left-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
               onClick={() => {
                  swiperRef.current?.slidePrev();
               }}
            >
               <img src={prev} alt="" />
            </button>
         </div>}
      </div>
   );
};

export default Lightbox;
