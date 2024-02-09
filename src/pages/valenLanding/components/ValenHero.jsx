
import Reveal from "common/Reveal"

import { useEffect } from 'react'
import { isItWinterNow } from "utils/helpers"
import Button from 'common/Button'
import s from './../valen.module.scss'



import { useRef } from "react"

import { m } from 'framer-motion'

import heart from 'images/valen/heart.png'

import photo1 from "images/chill/hero/summer/001.webp"
import photo2 from "images/chill/hero/summer/002.webp"
import photo3 from "images/chill/hero/summer/003.webp"
import photo4 from "images/chill/hero/summer/004.webp"
import photo5 from "images/chill/hero/summer/005.webp"
import photo6 from "images/chill/hero/summer/006.webp"
import photo7 from "images/chill/hero/summer/007.webp"


import winterPhoto1 from 'images/chill/hero/winter/001.webp'
import winterPhoto2 from 'images/chill/hero/winter/002.webp'
import winterPhoto3 from 'images/chill/hero/winter/003.webp'
import winterPhoto4 from 'images/chill/hero/winter/004.webp'
import winterPhoto5 from 'images/chill/hero/winter/005.webp'
import winterPhoto6 from 'images/chill/hero/winter/006.webp'
import winterPhoto7 from 'images/chill/hero/winter/007.webp'
import winterPhoto8 from 'images/chill/hero/winter/008.webp'

const photos = [photo7, photo6, photo5, photo4, photo3, photo2, photo1]

const winterPhotos = [winterPhoto1, winterPhoto2, winterPhoto3, winterPhoto4, winterPhoto5, winterPhoto6, winterPhoto7, winterPhoto8]

const vars = {
   initial: {
      // y: "5px", // Начальная позиция за пределами экрана справа
      scale: 1,
   },
   animate: {
      // y: "-10px", // Конечная позиция за пределами экрана слева
      scale: 1.1,
   },
}

// eslint-disable-next-line react/prop-types
const ValenHero = ({ currentTime }) => {

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
      <div id="Hero" className=' bg-[#E8B2C4]'>
         <div className={`relative text-black `}>
            <div className="relative flex h-[60vh]  flex-col-reverse items-start justify-center ">
               <div className="relative md:pl-[200px] z-10 flex-col flex  items-center md:items-start">

                  <Reveal delay={0.25}>
                     <div className={`${s.rosarium} text-white text-2xl`}>
                        День всех влюблённых
                     </div>
                  </Reveal>

                  <m.img
                     transition={{
                        repeat: Infinity,
                        duration: 0.5,
                        repeatType: "reverse",
                        repeatDelay: 0.1,

                     }}
                     variants={vars}
                     initial="initial"
                     animate="animate"
                     className="block md:hidden transform w-[50%] -left-1/2 translate-x-1/2" src={heart} alt=""
                  />

                  <Reveal delay={0.25}>
                     <div className={`text-white text-center md:text-start ${s.rosarioLight} text-md font-light`}>
                        Проведи романтический<br /> ужин со своей половинкой<br />
                        на берегу вдали от суеты
                     </div>
                  </Reveal>

                  <a href='#program' className='w-full' >
                     <Button className='bg-[#FF2D72] px-3 h-[40px] md:h-[60px] md:w-full w-[300px] text-md mx-auto text-white'>Забронировать</Button>
                  </a>


               </div>

               <m.img
                  transition={{
                     repeat: Infinity,
                     duration: 0.5,
                     repeatType: "reverse",
                     repeatDelay: 0.1,

                  }}
                  variants={vars}
                  initial="initial"
                  animate="animate"
                  className="absolute right-0 transform hidden md:block translate-y-1/2" src={heart} alt=""
               />



            </div>
         </div>
         <div className='hidden md:block'>
            {/* <div id="znms-widget-1"></div> */}
         </div>
         <Reveal delay={0.5}>
            <div className="text-md max-w-[1200px]  text-white text-center py-[10vh] rounded-[20px] mx-[20px] md:mx-auto font-semibold">
               <span className={` ${s.rosarioSBold} text-md`}>Приглашаем вас погрузиться в мир нежности в загородном клубе Икша Кантри Клаб в самый прекрасный день в году - День Святого Валентина!
                  Откройте для себя абсолютно незабываемую атмосферу любви, окруженную великолепной природой и уютом загородного клуба. Наши заботливые организаторы подготовили для вас вечер полный магии и романтики, который окутает вас незабываемыми эмоциями и подарит прекрасные воспоминания.<br /><br />

                  Для вашего удобства мы подготовили специальные пакеты свиданий.</span>
            </div>
         </Reveal>

         {/* <a href='#program' className='w-[300px]' >
            <Button className='bg-[#593723] px-3 h-[40px] md:h-[60px] md:w-[700px] w-[300px] text-md mx-auto text-white'>Забронировать</Button>
         </a> */}
      </div >
   )
}

export default ValenHero
