import swiper1 from "images/NY/swiper/001.webp"
import swiper2 from "images/NY/swiper/002.webp"
import swiper3 from "images/NY/swiper/003.webp"
import swiper4 from "images/NY/swiper/004.webp"
import swiper5 from "images/NY/swiper/005.webp"
import swiper6 from "images/NY/swiper/006.webp"
import swiper7 from "images/NY/swiper/007.webp"
import swiper8 from "images/NY/swiper/008.webp"
import swiper9 from "images/NY/swiper/009.webp"
import { useRef } from "react"
// import scroll from "./../assets/scroll.png";
// import orange_scroll from "./../assets/orange_scroll.png";

import swipernext from 'icons/swipernext_black.png'
import swiperprev from 'icons/swiperprev_black.png'
// import venok from 'images/NY/venok.webp'
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

const ProgramaSwiper = () => {
   const swiperRef = useRef()
   return (
      <div className='relative'>

         <div className="wrapper relative">
            <div className=" w-full  h-full relative ">
               <Swiper
                  // install Swiper modules
                  modules={[Pagination, Navigation]}
                  spaceBetween={50}
                  loop={true}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="  w-full nyswiper h-full aspect-video relative  rounded-lg "
                  onBeforeInit={(swiper) => {
                     swiperRef.current = swiper
                  }}
               >
                  <SwiperSlide>
                     <img
                        src={swiper5}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>

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
                        src={swiper6}
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
                  <SwiperSlide>
                     <img
                        src={swiper7}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src={swiper8}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src={swiper9}
                        className="w-full h-full object-cover aspect-video"
                        alt=""
                     />
                  </SwiperSlide>

                  <div
                     className="absolute  cursor-pointer top-1/2 transform -translate-y-1/2 z-10 right-0 md:right-10"
                     onClick={() => swiperRef.current?.slideNext()}
                  >
                     <img src={swipernext} className="w-[50px] md:w-[90px] md:h-[90px]" alt="" />
                  </div>

                  <div
                     className="absolute  cursor-pointer top-1/2 transform -translate-y-1/2 z-10 left-0 md:left-10"
                     onClick={() => swiperRef.current?.slidePrev()}
                  >
                     <img src={swiperprev} className="w-[50px] md:w-[90px] md:h-[90px]" alt="" />
                  </div>
               </Swiper>
            </div>
            {/* <div className="w-full mt-5 flex md:hidden justify-end">
            <img
               src={orange_scroll}
               className="w-[50px] h-[50px]"
               onClick={() => swiperRef.current?.slideNext()}
               alt=""
            />
         </div> */}
         </div>
      </div>
   )
}

export default ProgramaSwiper
