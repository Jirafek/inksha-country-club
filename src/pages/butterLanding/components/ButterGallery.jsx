import { useRef } from "react"
// import Swiper core and required modules
import { Pagination } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"
import next from "icons/next_photo.png"
import prev from "icons/prev_photo.png"

import photo1 from "images/butter/gallery/001.webp"
import photo2 from "images/butter/gallery/002.webp"
import photo3 from "images/butter/gallery/003.webp"
import photo4 from "images/butter/gallery/004.webp"
import photo5 from "images/butter/gallery/005.webp"
import photo6 from "images/butter/gallery/006.webp"
import photo7 from "images/butter/gallery/007.webp"
import photo8 from "images/butter/gallery/008.webp"
import photo9 from "images/butter/gallery/009.webp"
import photo10 from "images/butter/gallery/010.webp"
import photo11 from "images/butter/gallery/011.webp"
import photo12 from "images/butter/gallery/012.webp"
import photo13 from "images/butter/gallery/013.webp"
import photo14 from "images/butter/gallery/014.webp"
import photo15 from "images/butter/gallery/015.webp"



const photos = [
   photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15]
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useTranslation } from 'react-i18next'

// const ytSrc = "https://www.youtube.com/watch?v=Eat2wgPNuIo";
// const ytId = ytSrc.split("/")[ytSrc.split("/").length - 1];
const ButterGallery = () => {
   const { t } = useTranslation()
   const swiperRef = useRef()
   return (
      <div id="photo" className="py-[10vh]">
         <div className="wrapper">
            <div className="text-center">

               <div className="relative">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="photo_swiper aspect-video md:aspect-auto md:h-[70vh]  relative "
                     onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                     }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                  >

                     {photos.map((photo, i) => {
                        return (
                           <SwiperSlide className="h-full w-full" key={i}>
                              <img
                                 className="w-full h-full object-cover"
                                 src={photo}
                                 alt=""
                              />
                           </SwiperSlide>
                        )
                     })}
                  </Swiper>
                  <button
                     className="absolute right-0 md:-right-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext()
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute left-0 md:-left-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slidePrev()
                     }}
                  >
                     <img src={prev} alt="" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ButterGallery
