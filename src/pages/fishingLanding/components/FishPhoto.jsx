import { useRef } from "react"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// import next from "icons/next_photo.png"
// import prev from "icons/prev_photo.png"

import next from "icons/swipernext_black.png"
import prev from "icons/swiperprev_black.png"


import photo1 from "images/fishing/swiper/001.webp"
import photo2 from "images/fishing/swiper/002.webp"
import photo3 from "images/fishing/swiper/003.webp"
import photo4 from "images/fishing/swiper/004.webp"
import photo5 from "images/fishing/swiper/005.webp"
import photo6 from "images/fishing/swiper/006.webp"
import photo7 from "images/fishing/swiper/007.webp"
import photo8 from "images/fishing/swiper/008.webp"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// const ytSrc = "https://www.youtube.com/watch?v=Eat2wgPNuIo";
// const ytId = ytSrc.split("/")[ytSrc.split("/").length - 1];


const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]
const FishPhoto = () => {
   const swiperRef = useRef()
   return (
      <div id="photo" className="bg-[#ECE9E9] py-[10vh]">
         <div className="wrapper">
            <div className="text-center">
               <h1 className=" mb-[30px] text-md max-w-[900px] mx-auto text-center text-[#081130]">
                  Икша Кантри Клаб рад пригласить всех любителей рыбной ловли на наше водохранилище для прекрасного времяпровождения и богатого улова. У нас ловится карп, осётр, щука, европейский сом, африканский сом, белуга, линь, сазан, карась, окунь, форель, белый амур, толстолобик.
                  Рыболовные беседки оборудованы столом, скамейками, мангалом для шашлыка и выделенным местом для рыбалки.
                  Время работы рыбалки с 8:00 до 17:00.
               </h1>
               <div className="relative ">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="photo_swiper h-[200px] sm:h-[40vh] md:h-[650px] relative "
                     onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                     }}

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
                     className="absolute right-0 md:-right-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext()
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute left-0 md:-left-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
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

export default FishPhoto
