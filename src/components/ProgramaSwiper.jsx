import swiper1 from "./../assets/swiper/1.png";
import swiper2 from "./../assets/swiper/2.png";
import swiper3 from "./../assets/swiper/3.png";
import swiper4 from "./../assets/swiper/4.png";
import { useRef } from "react";
import scroll from "./../assets/scroll.png";
import orange_scroll from "./../assets/orange_scroll.png";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const ProgramaSwiper = () => {
   const swiperRef = useRef();
   return (
      <div className="">
         <div className=" border-y-2 border-pumpkin pb-10 w-full h-full mt-[10vh]">
            <Swiper
               // install Swiper modules
               modules={[Pagination, Navigation]}
               spaceBetween={50}
               loop={true}
               slidesPerView={1}
               pagination={{ clickable: true }}
               className="swiper  w-full h-full aspect-video relative mt-10 rounded-lg "
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
            >
               <SwiperSlide>
                  <img
                     src={swiper4}
                     className="w-full h-full object-cover aspect-video"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper1}
                     className="w-full h-full object-cover aspect-video"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper2}
                     className="w-full h-full object-cover aspect-video"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper3}
                     className="w-full h-full object-cover aspect-video"
                     alt=""
                  />
               </SwiperSlide>

               <div
                  className="absolute md:block hidden top-1/2 transform -translate-y-1/2 z-10 right-10"
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <img src={scroll} className="w-[90px] h-[90px]" alt="" />
               </div>
            </Swiper>
         </div>
         <div className="w-full mt-5 flex md:hidden justify-end">
            <img
               src={orange_scroll}
               className="w-[50px] h-[50px]"
               onClick={() => swiperRef.current?.slideNext()}
               alt=""
            />
         </div>
      </div>
   );
};

export default ProgramaSwiper;
