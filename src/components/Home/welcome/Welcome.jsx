import { m } from "framer-motion"

import bg1avif from 'images/bg1.avif'
import bg1 from 'images/bg1.webp'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useURLData } from "utils/URLData"
import { isItWinterNow } from "utils/helpers"
import AnimationButton from "../../../common/AnimationButton"
import MainPopup from "../../../common/MainPopup"
import WelcomeSwiper from './components/WelcomeSwiper'

import logo from 'icons/events/russia.png'



const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const headingLines = {
   hidden: {
      opacity: 0,
      clipPath: "inset(100% 0px 0px)",
   },
   visible: {
      opacity: 1,
      clipPath: "inset(0% 0px 0px)",
      transition: {
         ease: "easeOut",
         duration: 1.5,
      },
   },
}

const Welcome = () => {
   console.log(isItWinterNow())
   const [isPopupOpen, setIsPopupOpen] = useState(false)
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()
   const onSubmit = (data) => console.log(data)
   const { utm_source } = useURLData()
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


            .znms-widget__module-form-block__btn {
            background-color: ${isItWinterNow ? 'rgb(12, 242, 89) !important' : 'rgba(12, 242, 89, 0.5) !important'} ;
            border-radius: 30px !important;
            border: 1px solid #000 !important;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
            font-size: 18px !important;
            margin-top: 13px !important;
            height: 35px !important;
            display: flex !important;А
            justify-content: center !important;
            align-items: center !important;
            }
               .znms-widget__main-wrapper {
                  background-color: transparent !important;
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
                  background-color: transparent !important;
                  backdrop-filter: none !important;
                  -webkit-backdrop-filter: none !important;
                  --tw-backdrop-blur: none !important;
                  bottom: 20px;
               }

               .znms-widget__module-form-block__title, .znms-widget__widget-btn.znms-widget__v-color4 {
                  display: none !important;
               }

               .znms-widget__module-form-block__items--links-container {
                  display: none !important;

               }

               .znms-widget__module-form-block__item {
                  opacity: ${!isItWinterNow() ? '1' : '0.8 '} ;
                  background:black;
                  color:${!isItWinterNow() ? `white ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
                  
                  padding-top: 0 !important;
                  padding-bottom: 0 !important;
                  height: 35px !important;
               }

               .znms-widget__v-calendar-popover-content-wrapper {
                  z-index: 100 !important;
               }
               .znms-widget__module-form-block__input{
                  color:${isItWinterNow() ? `black ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
               }
               .znms-widget__module-form-block__label{
                  color:${isItWinterNow() ? `black ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
               }
               .znms-widget__module-form-block__select, .znms-widget__module-form-block__select span {
                  color:${isItWinterNow() ? `black ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
               }
            `
         const styleElement = document.createElement("style")
         styleElement.innerHTML = customStyles
         document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget
      document.body.appendChild(script)
      // setTimeout(() => {
      //    const doskaContainer = document.querySelector(".doska-container"),
      //       skyContainer1 = document.querySelector(".sky1"),
      //       skyContainer2 = document.querySelector(".sky2")

      //    skyContainer1.classList.add("animate-moveSky1")
      //    skyContainer2.classList.add("animate-moveSky2")
      //    // doskaContainer.classList.add("animate-moveDoska")
      // }, 1500)
   }, [])

   // window.addEventListener("hashchange", function () {
   //   // Получить текущий URL с хэшем
   //   var currentUrlWithHash = window.location.href;
   //
   //   console.log(currentUrlWithHash)
   //
   //   // Можно также получить только хэш
   //   var currentHash = window.location.hash;
   //   console.log(currentHash)
   //
   //   // Здесь ты можешь выполнить действия при изменении ссылки
   //   // Например, управлять z-index для модуля бронирования и контента
   // });
   const pumpkin_vars = {
      initial: {
         // y: "5px", // Начальная позиция за пределами экрана справа
         scale: 0.85,
      },
      animate: {
         // y: "-10px", // Конечная позиция за пределами экрана слева
         scale: 1,
      },
   }

   useEffect(() => {
      // BookingCalendar([], 'zaezd'); // get data from FireBase
      // BookingCalendar([], 'viezd'); // get data from FireBase
      setTimeout(() => {
         document.querySelector(".animate-moveSky1").style.display = "none"
         document.querySelector(".animate-moveSky2").style.display = "none"
      }, 4500)
   }, [])

   return (
      <section id="book" className="welcome relative m-0">
         <MainPopup
            key={1}
            togglePopup={togglePopup}
            isPopupOpen={isPopupOpen}
         />
         <Link to="/russiaDay" className="absolute flex justify-center items-center flex-col right-4 top-20 z-[1000]">
            {/* <m.img
               transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  repeatDelay: 0.6,
               }}
               initial="initial"
               animate="animate"
               variants={pumpkin_vars}
               src={logo}
               className="z-[10000000] h-[100px] w-[100px] rounded-full bg-center object-cover shadow-xl"
               alt=""
            /> */}

            <img
               className="z-[10000000] h-[100px] w-[100px] rounded-full bg-center object-cover shadow-xl"
               src={logo}
               alt=""
            />

         </Link>
         <picture>
            {/* <source srcSet={isItWinterNow() ? `/avif/welcome_bg_winter.avif 1x` : `/avif/welcome_bg.avif 1x`} type="image/avif" /> */}
            <source srcSet={isItWinterNow() ? bg1avif : `/avif/welcome_bg.avif 1x`} type="image/avif" />
            <img
               className="h-[100%] w-full object-cover"
               src={isItWinterNow() ? bg1 : "/image/welcome_bg.webp"}
               alt="Икша Кантри Клаб"
            />
         </picture>

         {/* <VideoPlayer /> */}
         {/* <div className="absolute z-30 bottom-0 w-full bg-transparent">
      <div className="absolute z-[1] bottom-0 w-full bg-transparent">
        <img className="bg-transparent" src="/image/volna.gif" alt="GIF Image" />
      </div> */}
         {/* <div
            style={{ transform: "translateX(-50%)" }}
            className="doska-container absolute left-1/2 top-0 w-[260px]"
         >
            <picture>
               <source srcSet="/avif/doska.avif 1x" type="image/avif" />
               <img
                  className="h-full w-full"
                  src="/image/doska.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <a
               className="absolute bottom-[4rem] left-1/2"
               style={{ transform: "translateX(-50%)" }}
               href="#about"
            >
               <picture>
                  <source srcSet="/avif/about.avif 1x" type="image/avif" />
                  <img
                     className="w-[80px]"
                     src="/image/about.webp"
                     alt="Икша Кантри Клаб"
                  />
               </picture>
            </a>
            <a
               className="absolute bottom-[25px] left-1/2"
               style={{ transform: "translateX(-50%)" }}
               href={utm_source === 'yandex' ? 'tel:+74995055067' : utm_source === 'vkontakte' ? 'tel:+74995055087' : 'tel:+74995055031'}
            >
               <picture>
                  <source srcSet="/avif/call.avif 1x" type="image/avif" />
                  <img
                     className="w-[44px]"
                     src="/image/call.webp"
                     alt="Икша Кантри Клаб"
                  />
               </picture>
            </a>
         </div> */}
         <picture>
            <source srcSet="/avif/sky1.avif 1x" type="image/avif" />
            <img
               className="sky1 absolute left-0 top-0 z-[21]"
               src="/image/sky1.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
         <picture>
            <source srcSet="/avif/sky2.avif 1x" type="image/avif" />
            <img
               className="sky2 absolute right-0 top-0 z-[21]"
               src="/image/sky2.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
         <div
            style={{ transform: "translateX(-50%)" }}
            className="absolute bottom-[8.5rem] left-1/2 w-full"
         >
            <div id="znms-widget-1"></div>

            <WelcomeSwiper />
            {/* </Link> */}
         </div>
      </section>
   )
}

export default Welcome
