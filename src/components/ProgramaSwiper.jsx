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
         <div className=" mt-[10vh] h-full w-full border-y-2 border-pumpkin pb-10">
            <Swiper
               // install Swiper modules
               modules={[Pagination, Navigation]}
               spaceBetween={50}
               loop={true}
               slidesPerView={1}
               pagination={{ clickable: true }}
               className="swiper  relative mt-10 aspect-video h-full w-full rounded-lg "
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
            >
               <SwiperSlide>
                  <img
                     src={swiper4}
                     className="aspect-video h-full w-full object-cover"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper1}
                     className="aspect-video h-full w-full object-cover"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper2}
                     className="aspect-video h-full w-full object-cover"
                     alt=""
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     src={swiper3}
                     className="aspect-video h-full w-full object-cover"
                     alt=""
                  />
               </SwiperSlide>

               <div
                  className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 transform md:block"
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <img src={scroll} className="h-[90px] w-[90px]" alt="" />
               </div>
            </Swiper>
         </div>
         <div className="mt-5 flex w-full justify-end md:hidden">
            <img
               src={orange_scroll}
               className="h-[50px] w-[50px]"
               onClick={() => swiperRef.current?.slideNext()}
               alt=""
            />
         </div>
      </div>
   );
};

export default ProgramaSwiper;
