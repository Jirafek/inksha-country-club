// import bg_hero from "./assets/";


import hero from 'images/ban/hero.webp'
import Reveal from "common/Reveal"
import { Link as ScrollLink } from "react-scroll"
import { useEffect } from 'react'
import { isItWinterNow } from "utils/helpers"
import Button from 'common/Button'
import s from './../ban.module.scss'


const BanHero = () => {

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


   return (
      <div className='h-[70vh] md:h-screen'>


         <div
            id="Hero"
            className={` text-black text-center `}
         // style={{ backgroundimages: bg_hero, backgroundRepeat: "no-repeat" }}
         >
            <div className="relative  flex h-[40vh] md:h-[50vh] flex-col-reverse items-center justify-center ">
               <div className="z-10 flex max-w-[1000px] flex-col items-center justify-center ">
                  <Reveal delay={0.25}>
                     <div className={`text-white ${s.acariBold} acari text-xl font-bold`}>
                        Баня с купелью<br />
                        в Подмосковье
                     </div>
                  </Reveal>
                  {/* <Reveal delay={0.5}>
                     <div className="text-md font-semibold">
                        Насладитесь баней с купелью, расположенной на Икшинском водохранилище.
                        Мы предлагаем своим гостям возможность насладиться не только полезными процедурами, но и красивыми пейзажами окружающей природы.
                     </div>
                  </Reveal> */}
                  <ScrollLink
                     to="Tariff"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >

                  </ScrollLink>
               </div>
               <div className=' absolute h-[40vh] md:h-[50vh] w-screen'>
                  <img className='w-full brightness-75 h-full object-cover' src={hero} alt="" />
               </div>
            </div>
         </div>
         <Reveal delay={0.5}>
            <div className="text-md max-w-[1200px] text-center mt-[40px] mx-auto font-semibold">
               Насладитесь баней с купелью, расположенной на Икшинском водохранилище.
               Мы предлагаем своим гостям возможность насладиться не только полезными процедурами, но и красивыми пейзажами окружающей природы.
            </div>
         </Reveal>
         {/* <div className='hidden md:block'>

            <div id="znms-widget-1"></div>
         </div> */}

         <a href='#program' >
            <Button className='bg-black h-[40px] md:h-[60px] text-md md:w-[600px] mx-auto text-white'>Посмотреть услуги</Button>
         </a>
      </div>
   )
}

export default BanHero
