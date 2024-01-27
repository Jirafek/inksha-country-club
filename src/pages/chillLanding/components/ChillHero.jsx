
import Reveal from "common/Reveal"

import { useEffect } from 'react'
import { isItWinterNow } from "utils/helpers"
import Button from 'common/Button'
import s from './../chill.module.scss'

import next from 'icons/slider/brown/next.png'
import prev from 'icons/slider/brown/prev.png'


import { useRef } from "react"

import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import photo1 from "images/chill/hero/001.webp"
import photo2 from "images/chill/hero/002.webp"
import photo3 from "images/chill/hero/003.webp"
import photo4 from "images/chill/hero/004.webp"
import photo5 from "images/chill/hero/005.webp"
import photo6 from "images/chill/hero/006.webp"
import photo7 from "images/chill/hero/007.webp"

const photos = [photo7, photo6, photo5, photo4, photo3, photo2, photo1]

const ChillHero = () => {

   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-widget-1", {
            moduleId: 5026,
            index: 0,
            widget: {
               position: {
                  top: "100px",
               },
               mobile: {
                  absolute: false,
                  color: undefined,
                  position: {
                     top: "100px",
                  },
               },
            },
            button: {
               position: {
                  bottom: "50px",
                  left: "50px",
                  right: "50px",
               },
            },
         })

         // Примените ваши стили после инициализации виджета
         const customStyles = `
            
            @media (min-width: 960px){
               .znms-widget__module-form-block__items--input-container{
                  display:flex !important;
                  align-items:center !important;
               }
            }

            .znms-widget__module-form-block__btn {
            background-color: #ECE9E9 !important;
            color:#785E4F !important;
            border-radius: 30px !important;
            border: 1px solid #000 !important;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;

            font-size: 18px !important;
            height: 100% !important;

            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            }
               .znms-widget__main-wrapper {
                  
                  background-color: black !important;
                  backdrop-filter: none !important;
                  -webkit-backdrop-filter: none !important;
                  --tw-backdrop-blur: none !important;
               }

               .znms-widget__teleporter {
                  position: relative;
                  bottom: -100px;
                  
               }

               .znms-widget__v-calendar-pane-container {
                  z-index: 2000 !important;
               }

               .znms-widget__module-form-block {
                  background-color: black !important;
                  backdrop-filter: none !important;
                  -webkit-backdrop-filter: none !important;
                  --tw-backdrop-blur: none !important;
                  bottom: 20px;
               }
               .znms-widget__widget-btn.znms-widget__v-color4{
                  display: none !important;
               }

               .znms-widget__module-form-block__title  {
                  
                  color:white;
               }

               .znms-widget__module-form-block__items--links-container {
                  
                  color:white;

               }

               .znms-widget__module-form-block__item {
                  opacity: ${isItWinterNow() ? '1' : '0.8 '} ;
                  background: black;
                  color:black;
                  
                  padding-top: 0 !important;
                  padding-bottom: 0 !important;
                  height: 35px !important;
               }

               .znms-widget__v-calendar-popover-content-wrapper {
                  z-index: 100 !important;
               }
               .znms-widget__module-form-block__input{
                  color:black;
               }
               .znms-widget__module-form-block__label{
                  color:black;
               }
               .znms-widget__module-form-block__select, .znms-widget__module-form-block__select span {
                  color:black;
               }
            `
         const styleElement = document.createElement("style")
         styleElement.innerHTML = customStyles
         document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget
      document.body.appendChild(script)

   }, [])
   const swiperRef = useRef()

   return (
      <div id="Hero" className='mb-[10vh]'>
         <div className={` text-black text-center `}>
            <div className="relative  flex h-[80vh]  flex-col-reverse items-center justify-center ">
               <div className={` ${s.banner} absolute flex justify-center items-center bottom-0 w-full z-[20] h-[70px] md:h-[90px] `}>
                  <div className='text-white text-center text-md font-semibold'>
                     Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'> 16 990 ₽ </span><span className='text-NYred'> 9990 ₽ </span>

                  </div>

               </div>
               <div className="z-10  flex max-w-[1000px] flex-col items-center justify-center ">
                  <Reveal delay={0.25}>
                     <div className={`text-white ${s.acariBold} text-xl font-bold`}>
                        Активный отдых
                        <br />
                        в Подмосковье
                     </div>
                  </Reveal>
                  <div className='absolute bottom-12 flex justify-center gap-[20px] left-0'>
                     <button
                        className=" z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
                        onClick={() => {
                           swiperRef.current?.slidePrev()
                        }}
                     >
                        <img src={prev} alt="" />
                     </button>
                     <button
                        className=" z-20 h-[50px] w-[50px] md:h-[100px] md:w-[100px] -translate-y-1/2 transform "
                        onClick={() => {
                           swiperRef.current?.slideNext()
                        }}
                     >
                        <img src={next} alt="" />
                     </button>

                  </div>
               </div>

               <div className='absolute h-[80vh]  w-full'>
                  <Swiper
                     // install Swiper modules
                     modules={[Pagination]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     loop={true}
                     className="photo_swiper h-[80vh]"
                     onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                     }}
                  >

                     {photos.map((photo, i) => {
                        return (
                           <SwiperSlide className="w-full h-full" key={i}>
                              <img
                                 className="w-full filter brightness-75 h-full object-cover"
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
         <div className='hidden md:block'>

            <div id="znms-widget-1"></div>
         </div>
         <Reveal delay={0.5}>
            <div className="text-md max-w-[1200px] text-[#593723] text-center mt-[15vh] border-2 rounded-[20px] border-[#593723] p-4 md:p-12 mx-[20px] md:mx-auto font-semibold">
               <span className='font-[800] text-md'>Икша кантри клаб</span> - идеальное место для активного отдыха на природе. Здесь вы сможете заняться различными видами спорта, такими как верховая езда, занятия в тренажерном зале или игры в теннис. Кроме того, вас ждут увлекательные экскурсии на велосипеде или пешие прогулки по живописным просторам. Расположенный в окружении лесов и рек, Икша кантри клаб станет настоящим райским местом для всех любителей активного отдыха и приключений.
            </div>
         </Reveal>


         <div className='block md:hidden' onClick={() => { window.znmsWidget.open('#znms-widget-1') }}>
            <Button className='bg-[#593723] h-[40px] w-[300px] text-md mx-auto text-white'>Забронировать</Button>
         </div>
      </div >
   )
}

export default ChillHero
