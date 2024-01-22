import { useRef } from "react"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// import next from "icons/next_photo.png"
// import prev from "icons/prev_photo.png"

import next from "icons/next_photo.png"
import prev from "icons/prev_photo.png"


import photo1 from "images/ban/swiper/001.webp"
import photo2 from "images/ban/swiper/002.webp"
import photo3 from "images/ban/swiper/003.webp"
import photo4 from "images/ban/swiper/004.webp"
import photo5 from "images/ban/swiper/005.webp"
// import photo6 from "images/ban/swiper/006.webp"
// import photo7 from "images/ban/swiper/007.webp"
// import photo8 from "images/ban/swiper/008.webp"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// const ytSrc = "https://www.youtube.com/watch?v=Eat2wgPNuIo";
// const ytId = ytSrc.split("/")[ytSrc.split("/").length - 1];


const photos = [photo2, photo1, photo3, photo4, photo5]
const BanPhoto = () => {
   const swiperRef = useRef()
   return (
      <div id="photo" className=" py-[10vh]">
         <div className="">
            <div className="text-center">
               <h1 className="block md:hidden  mb-[30px] text-md max-w-[900px] mx-auto font-semibold text-center text-[#081130]">
                  Комфортная отдельная купель, в которой можно расслабиться и насладиться прохладной водой.
                  В нашей бане можно провести отдых как на несколько часов, так и на целый день. Возможно, после бани вы захотите поплавать в водохранилище, пойти на рыбалку или просто насладиться красотой природы вокруг.
               </h1>
               <div className="relative ">
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="photo_swiper h-[200px] sm:h-[40vh] md:h-[950px] relative "
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

                     <div className='absolute hidden md:block bottom-0 pb-[100px] pr-[50px] text-right text-md text-white z-[100] right-0'>
                        Комфортная отдельная купель, в которой можно расслабиться и<br /> насладиться прохладной водой.<br />
                        В нашей бане можно провести отдых как на несколько часов, так и <br /> на целый день. Возможно, после бани вы захотите поплавать в водохранилище,<br /> пойти на рыбалку или просто насладиться красотой природы вокруг.
                     </div>
                  </Swiper>
                  <button
                     className="absolute right-4 md:-right-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext()
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute left-4 md:-left-10 top-1/2 z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
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

export default BanPhoto
