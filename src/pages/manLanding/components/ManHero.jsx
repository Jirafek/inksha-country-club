
import Reveal from "common/Reveal"

import { useEffect } from 'react'
import { isItWinterNow } from "utils/helpers"
import Button from 'common/Button'
import s from './../man.module.scss'

import hero from 'images/man/heroBg.webp'

import { useRef } from "react"



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
const ManHero = ({ currentTime }) => {

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
      <div id="Hero" className=' bg-black'>
         <div className={`relative text-white `}>
            <div className="relative  flex min-h-[90vh] flex-col items-center md:items-start justify-center ">
               <div className="z-10 py-[40px] md:p-[100px] md:flex max-w-[1000px] flex-col items-center md:items-start justify-start ">
                  <Reveal delay={0.25}>
                     <div className={`mb-10 ${s.rockwell} text-2xl text-center md:text-left font-[800]`}>
                        23 февраля
                     </div>
                  </Reveal>
                  <Reveal delay={0.5}>
                     <div className="text-md+ text-center md:text-left">
                        Проведи самый героический праздник страны в Икша Кантри Клабе! У нас есть специальные предложения для вас!
                     </div>
                  </Reveal>
                  <Button className=" flex justify-center items-center text-center md:hidden my-[5vh] max-w-[250px] md:max-w-auto h-[40px] md:h-[60px] font-semibold shadow-lg mx-auto md:w-[600px] bg-brown text-black  ">
                     Посмотреть услуг
                  </Button>

               </div>
               <div className='md:absolute md:h-[90vh] md:w-screen'>
                  <img className='w-full h-full object-bottom object-contain' src={hero} alt="" />
               </div>
            </div>
         </div>
         <div className='hidden md:block'>
            {/* <div id="znms-widget-1"></div> */}
         </div>
         <a
            href='#services'
         >

            <Button className="w-full hidden md:flex my-[5vh] h-[40px] md:h-[60px] font-semibold shadow-lg mx-auto md:w-[600px] bg-brown text-black  ">
               Посмотреть услуги
            </Button>
         </a>\
         <Reveal delay={0.5}>
            <div className="text-md max-w-[1200px]  text-white text-center pb-[10vh] rounded-[20px] mx-[20px] md:mx-auto font-semibold">
               <span className={`  text-md`}>23 февраля в Икша Кантри Клабе проводится празднование в честь Дня защитника Отечества. Для наших гостей мы подготовили специальные предложения на любой вкус! Насладитесь атмосферой праздника и отдохните среди заснеженного леса с видом на Икшинское водохранилище.</span>
            </div>
         </Reveal>

         {/* <a href='#program' className='w-[300px]' >
            <Button className='bg-[#593723] px-3 h-[40px] md:h-[60px] md:w-[700px] w-[300px] text-md mx-auto text-white'>Забронировать</Button>
         </a> */}
      </div >
   )
}

export default ManHero
