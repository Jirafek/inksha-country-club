import { useEffect } from 'react'

import { isItWinterNow } from "utils/helpers"


const MartModule = () => {
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
            #module > div > div:nth-child(1) > div > div {
               position: unset !important;
               background-color: #674270 !important;
            }
            @media (min-width: 960px){
               .znms-widget__module-form-block__items--input-container{
                  display:flex !important;
                  align-items:center !important;
               }

               
            }
           

             
            .znms-widget__module-form-block__btn {
               box-shadow: none !important;
               position: unset !important;
               border:none !important;
            }
            .znms-widget__main-wrapper {
               position: unset !important;
            
               background-color: #674270 !important;
               backdrop-filter: none !important;
               -webkit-backdrop-filter: none !important;
               --tw-backdrop-blur: none !important;
               box-shadow: none !important;
            }

               .znms-widget__teleporter {
                  position: relative;
                  bottom: -100px;
                  
               }

               .znms-widget__v-calendar-pane-container {
                  z-index: 2000 !important;
               }

               .znms-widget__module-form-block {
                  background-color: #674270 !important;
                  // backdrop-filter: none !important;
                  // -webkit-backdrop-filter: none !important;
                  // --tw-backdrop-blur: none !important;
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
                  background: #674270;
                  color:#AB8E67;
                  
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
      <div id='module' className='mb-[15vh] md:mb-[0%] mt-[5vh]'>
         {/* <div className='text-black text-center w-screen  text-md font-semibold'>
            Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'> 16 990 ₽ </span><span className='text-NYred'> 9990 ₽ </span>

         </div> */}
         <div id="znms-widget-1"></div>
      </div>
   )
}


export default MartModule