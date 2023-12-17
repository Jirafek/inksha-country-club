import { m } from "framer-motion"
import ny_logo from 'icons/ny-logo.webp'
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
import styles from './welcome.module.scss'

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
            opacity: ${isItWinterNow() ? '1' : '0.8 '} ;
            background:${isItWinterNow() ? `rgba(0,0,0,0.5) ${isItWinterNow() ? '!important' : ''}` : `white ${isItWinterNow() ? '' : '!important'}`};
            color:${isItWinterNow() ? `white ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
            
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            height: 35px !important;
          }

          .znms-widget__v-calendar-popover-content-wrapper {
            z-index: 100 !important;
          }
          .znms-widget__module-form-block__input{
             color:${isItWinterNow() ? `white ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
          }
          .znms-widget__module-form-block__label{
             color:${isItWinterNow() ? `white ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
          }
          .znms-widget__module-form-block__select, .znms-widget__module-form-block__select span {
             color:${isItWinterNow() ? `white ${isItWinterNow() ? '!important' : ''}` : `black ${isItWinterNow() ? '' : '!important'}`};
          }
        `
         const styleElement = document.createElement("style")
         styleElement.innerHTML = customStyles
         document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget
      document.body.appendChild(script)
      setTimeout(() => {
         const doskaContainer = document.querySelector(".doska-container"),
            skyContainer1 = document.querySelector(".sky1"),
            skyContainer2 = document.querySelector(".sky2")

         skyContainer1.classList.add("animate-moveSky1")
         skyContainer2.classList.add("animate-moveSky2")
         // doskaContainer.classList.add("animate-moveDoska")
      }, 1500)
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
         <Link to="/New-Year" className="absolute right-10 top-10 z-[1000]">
            <m.img
               transition={{
                  repeat: Infinity,
                  duration: 1,

                  repeatType: "reverse",
                  repeatDelay: 0.6,
               }}
               initial="initial"
               animate="animate"
               variants={pumpkin_vars}
               src={ny_logo}
               className="z-[10000000] h-[150px] w-[150px] rounded-full   bg-center object-cover shadow-xl"
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
            {/* <Link to="/popup"> */}
            {/* <button className="animated_connection_btn absolute -bottom-[8rem] left-1/2 flex h-12 w-[3rem] -translate-x-1/2 items-center justify-center rounded-[48px] border-[2px] border-white bg-green-500 pl-2">
                  <div className="relative flex h-12 w-full items-center">
                     <p className="animated_text_appearing text-white opacity-0">
                        Свяжитесь со мной
                     </p>
                     <div className="absolute right-0 top-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white bg-green-500">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="20"
                              height="20"
                              viewBox="0 0 50 50"
                           >
                              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </button> */}
            {/* <AnimationButton
               key={1}
               onClick={togglePopup}
               className=" absolute -bottom-[8rem] left-1/2 -translate-x-1/2"
            >
               {" "}
               Свяжитесь со мной
            </AnimationButton> */}
            {/* <div className={`${styles.fire} text-[13px] text-[#FDD9BE] absolute whitespace-nowrap transform left-1/2 -translate-x-1/2  -top-[45px]`}>
               Загородный клуб <span className='text-[16px]  mx-[5px]'>&#8226;</span>  База отдыха  <span className='text-[16px]  mx-[5px]'>&#8226;</span> Глэмпинг
            </div> */}
            <WelcomeSwiper />
            {/* </Link> */}
         </div>
      </section>
   )
}

export default Welcome
