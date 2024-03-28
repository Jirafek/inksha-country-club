
import Reveal from "common/Reveal"

import { useEffect } from 'react'
import { isItWinterNow } from "utils/helpers"
import Button from 'common/Button'
import s from './../maj.module.scss'

import rose from 'images/maj/hero.webp'

import { useRef } from "react"

import { m } from 'framer-motion'

// import heart from 'images/mart/heart.png'

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
const MajHero = () => {

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
      <div id="Hero" className=' bg-MajOrange '>
         <div className={`relative  text-black `}>
            <div className={`relative flex-col-reverse md:flex-row flex md:pr-[80px] h-screen ${s.heroBg} w-full items-center justify-center `}>

               <img className='w-full h-full aspect-square object-cover md:w-auto' src={rose} alt="" />
               <div className={`relative py-[30px] px-[30px]  w-full z-10 flex-col text-center md:text-right flex items-center md:items-end `}>
                  <Reveal delay={0.25}>
                     <div className={`relative  ${s.cormReg}`}>
                        <div className={` text-MajRed text-ultra`}>
                           Масленица
                        </div>
                     </div>
                  </Reveal>


                  <div className='bg-white mb-[20px] h-[2px] w-[80%] md:w-[700px]'></div>

                  <Reveal delay={0.25}>
                     <div className={`text-white  font-[500] text-md+ `}>
                        Майские праздники в нашем<br />загородном клубе<br />
                        <span className='text-MajRed'>Икша Кантри Клаб</span> - увлекательные<br /> развлечения, великолепная природа<br /> и комфортное размещение!<br />



                     </div>
                  </Reveal>

                  {/* <a href='#program' className='w-full' >
                     <Button className='bg-[#FF2D72] px-3 h-[40px] md:h-[60px] md:w-full w-[300px] text-md mx-auto text-white'>Забронировать</Button>
                  </a> */}


               </div>





            </div>
         </div>
         <div className='hidden md:block'>
            {/* <div id="znms-widget-1"></div> */}
         </div>
         <div className='bg-[#F5DDC3]'>

            <Reveal delay={0.5}>
               <div className={`text-md+  ${s.dudkaReg} max-w-[1200px]  text-MajGreen text-center py-[10vh] rounded-[20px] mx-[20px] md:mx-auto font-semibold`}>
                  Приглашаем вас отметить майские праздники в уютной обстановке
                  <span className='font-bold'>Икша Кантри Клаб</span>,
                  наслаждаясь природой и спокойствием. Отметьте день труда, окончание великого поста и
                  Великий день Победы -  9 мая в атмосфере отдыха и праздника, проводя
                  время с семьей и друзьями в нашем загородном клубе.


               </div>
            </Reveal>
         </div>

         {/* <a href='#program' className='w-[300px]' >
            <Button className='bg-[#593723] px-3 h-[40px] md:h-[60px] md:w-[700px] w-[300px] text-md mx-auto text-white'>Забронировать</Button>
         </a> */}
      </div >
   )
}

export default MajHero
