import React from 'react'

import styles from './../welcome.module.scss'


// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const WelcomeSwiper = () => {


   return (
      <div className='w-full absolute -bottom-[110px]'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}

         >

            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#about">Глэмпинг</a>
               </div>
            </SwiperSlide>

            {/* <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#about">База отдыха</a>
               </div>
            </SwiperSlide> */}

            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#locations">База отдыха</a>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#events">День рождения</a>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#eat">Плов и уха</a>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#happy">Баня и купель</a>
               </div>
            </SwiperSlide>
            {/* <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="#events">Де</a>
               </div>
            </SwiperSlide> */}
            <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="/New-Year">Новый год</a>
               </div>
            </SwiperSlide>
            {/* <SwiperSlide>
               <div className="text-center">
                  <a className={styles.link} href="/gallery">Галерея</a>
               </div>
            </SwiperSlide> */}
         </Swiper>
      </div>
   )
}

export default WelcomeSwiper
