
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import photo1 from "images/housing/start/1.webp"
import photo2 from "images/housing/start/2.webp"
import photo3 from "images/housing/start/3.webp"
import photo4 from "images/housing/start/4.webp"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const photos = [
   photo1, photo2, photo3, photo4
]

const HousingMobileSliders = () => {
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
                  className="photo_swiper housing_swiper  aspect-video md:aspect-auto md:h-[70vh]  relative "

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
            </div>
         </div>

      </div>
   )
}

export default HousingMobileSliders
