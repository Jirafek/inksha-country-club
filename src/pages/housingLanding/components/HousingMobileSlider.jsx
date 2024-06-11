
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import photo1 from "images/housing/start/1.webp"
import photo2 from "images/housing/start/2.webp"
import photo3 from "images/housing/start/3.webp"
import photo4 from "images/housing/start/4.webp"

import gal1 from "images/housing/start/001.webp"
import gal2 from "images/housing/start/002.webp"
import gal3 from "images/housing/start/003.webp"
import gal4 from "images/housing/start/004.webp"



import next from "icons/slider/white/next.png"
import prev from "icons/slider/white/prev.png"


// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useRef } from 'react'

const photos = [
   photo1, photo2, photo3, photo4, gal1, gal2, gal3, gal4
]

const HousingMobileSliders = () => {
   const swiperRef = useRef()
   return (
      <div id="photo" className="block md:hidden py-[10vh]">
         <div className="text-center">
            <div className="relative">
               <Swiper
                  // install Swiper modules
                  modules={[Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  loop={true}
                  onBeforeInit={(swiper) => {
                     swiperRef.current = swiper
                  }}
                  className="photo_swiper housing_swiper  aspect-video md:aspect-auto md:h-[70vh]  relative "

               // onSwiper={(swiper) => console.log(swiper)}
               // onSlideChange={() => console.log("slide change")}
               >

                  {photos.map((photo, i) => {
                     return (
                        <SwiperSlide className="w-full h-full" key={i}>
                           <img
                              className="object-cover w-full h-full"
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
   )
}

export default HousingMobileSliders
