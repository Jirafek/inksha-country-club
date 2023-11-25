import { useRef } from "react"
import { v4 as uuidv4 } from "uuid"

import next from "icons/next_photo.png"
import prev from "icons/prev_photo.png"
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from 'swiper/react'

// export const CustomImageComponent = ({ image }) => {

//    return (

//       <div className='w-[90vw] h-[50vh]'>
//          {/* <LazyLoadImage
//             alt={image}
//             src={image.img} /> */}
//          <img className='object-cover w-full h-full' src={image.img} alt="" />
//          {/* <span>{image.caption}</span> */}
//       </div>
//    )
// }


export const SlickComponent = ({ el }) => {

   const { imagesForSwiper, title, people, money } = el

   const swiperRef = useRef()
   return (
      <div
         className="flex flex-col items-center justify-center"
         key={uuidv4()}
      >
         <div className="flex justify-center">
            <Swiper
               // install Swiper modules
               spaceBetween={50}

               allowTouchMove={false}
               className='relative mb-[10px] px-5 rounded-[20px] w-[90vw] h-[70vh]'
               slidesPerView={1}
               loop={true}
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
               }}



            >
               {imagesForSwiper.map((image, i) => {


                  return (
                     <SwiperSlide key={i}>
                        {/* <CustomImageComponent image={image} /> */}
                        {/* <img className='w-full  h-full object-center object-cover' src={image.img} alt="" /> */}

                        <LazyLoadImage
                           // alt={image.alt}
                           // height={image.height}
                           className='w-full  h-full object-center object-cover'
                           src={image.img} // use normal <img> attributes as props
                        />
                     </SwiperSlide>
                  )
               })}

               <div>

                  <button
                     className="absolute opacity-60 right-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slideNext()
                     }}
                  >
                     <img src={next} alt="" />
                  </button>
                  <button
                     className="absolute opacity-60 left-0  top-1/2 z-20 h-[50px] w-[50px] md:h-[150px] md:w-[150px] -translate-y-1/2 transform "
                     onClick={() => {
                        swiperRef.current?.slidePrev()
                     }}
                  >
                     <img src={prev} alt="" />
                  </button>
               </div>
            </Swiper>
            {/* <picture>
               <source
                  srcSet={`${el.imgAvif} 1x`}
                  type="image/avif"
               />
               <img
                  className="mb-[10px] px-5"
                  src={el.imgWebp}
                  alt={`Изображение локации - ${el.title}`}
               />
            </picture> */}
         </div>
         <div className="flex justify-center">
            <div
               style={{
                  backgroundImage:
                     "url(/image/locations_about.webp)",
               }}
               className="back_settings monterey flex h-[95px] w-[240px] flex-col items-center justify-center text-[16px] text-[#000]"
            >
               <h3 className="text-[14px] font-bold">{title}</h3>
               <p>{people}</p>
               <p>{money}</p>
            </div>
         </div>
      </div >
   )
}

