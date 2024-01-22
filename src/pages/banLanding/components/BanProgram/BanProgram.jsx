/* eslint-disable react/prop-types */
import people from 'icons/ban/people.png'
import time from 'icons/ban/time.png'
import check from 'icons/ban/check.png'

import main1 from 'images/ban/program/008.webp'
import main2 from 'images/ban/program/009.webp'
import main3 from 'images/ban/program/010.webp'

import s from './../../ban.module.scss'
import { useEffect } from 'react'

const GetProgram = () => {
   const program = [

      {
         img: main1,
         title: 'Уединение',
         people: 'до 2 человек ',
         time: 'от 3-х часов',
         for: 'для пар и людей',
         desc: 'Для сближения, улучшения отношений,баланса с собой',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '10 000',
         number: 1
      },
      {
         img: main2,
         title: 'Командный дух',
         people: 'до 10 человек ',
         time: 'от 3-х часов',
         for: 'Для больших групп',
         desc: 'Для практик, улучшения отношений,налаживания контактов',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '12 000',
         number: 2
      },
      {
         img: main3,
         title: 'Семейное древо',
         people: 'до 6 человек ',
         time: 'от 3-х часов',
         for: 'Для семей',
         desc: 'Для сближения, улучшения отношений,баланса с собой',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '15 000',
         number: 3
      },


   ]

   return program
}



const BanProgram = ({ handleProductClick }) => {

   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-service-widget-module", {
            moduleId: 5026,
            type: 'booking-services',
         })
         // const customStyles = `
         //  .znms-widget__brononline_popup_full {
         //    width: 90vw !important;
         //    height: 60vh !important;
         //    position: fixed !important;
         //    top: 50% !important;
         //    left: 50% !important;
         //    transform: translate(-50%, -50%) !important;
         // }

         // `
         // const styleElement = document.createElement("style")
         // styleElement.innerHTML = customStyles
         // document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget
      document.body.appendChild(script)
   }, [])



   const program = GetProgram()
   return (
      <div id='program' className='bg-white relative text-black'>
         <div id="znms-service-widget-module"></div>
         <div className='text-black font-bold text-center mb-[10vh] text-md+'>Наши программы</div>
         <div className='flex justify-around md:px-[30px] flex-col gap-5 w-full items-center lg:flex-row'>

            {program.map((item, i) => {
               return (

                  <div key={i} className={` ${s.acariMedium} w-[94%] sm:max-w-[414.43px] md:h-[707.89px] bg-white rounded-[10px] border border-stone-700`}>


                     <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                        <div className={` absolute z-[10] p-5 text-white text-md  top-0 right-0`}>{item.title}</div>
                        <div className='absolute font-semibold p-5 gap-1 z-[10] text-white left-0 top-0 flex flex-col'>
                           <div className='flex gap-[5px]'>
                              <img src={people} alt="" />{item.people}
                           </div>
                           <div className='flex gap-[5px]'>
                              <img src={time} alt="" />{item.time}
                           </div>

                        </div>
                        <img className="w-full  absolute h-[217.35px]  border-b-2  blur-[3px]" src={item.img} />
                     </div>


                     <div className=' p-[15px] md:p-[30px] '>
                        <div className='flex mb-[6px]'>
                           <img src={check} alt="" />
                           <div className=" text-md- text-stone-700  font-semibold ">Для пар и друзей</div>
                        </div>
                        <div className="text-stone-500 font-medium mb-[20px] leading-snug">Для сближения, улучшения отношений,<br /> баланса с собой</div>



                        <div className="text-stone-700 text-md- mb-[10px] font-semibold text-left">Что входит:</div>
                        <div className='flex gap-[10px] gap-y-[15px] mb-[20px] flex-wrap'>
                           {item.includes.map((incl, i) => {

                              return (
                                 <div key={i} className=" h-[17px] md:h-[28.68px] rounded-[10px] border px-[20px] text-[11px] md:text-[18px] border-stone-600">{incl}</div>
                              )
                           })}
                        </div>


                        <div className='flex justify-between mb-[20px]'>
                           <div className='flex flex-col'>
                              <div className="text-left text-md text-stone-700 font-semibold">{item.price}₽</div>

                              <div className="text-left text-stone-500 font-semibold ">* цена за 1 час</div>

                           </div>

                           <div className="max-w-[200.98px] text-center text-stone-500  font-semibold  leading-snug">+ депозит от 20 000 ₽ на услуги пармастера</div>
                        </div>

                        <div className='flex flex-col  sm:flex-row justify-center items-center gap-4 sm:gap-0 sm:justify-between'>
                           <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px]  cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                              <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                           </div>

                           <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                              <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                           </div>
                        </div>


                     </div>
                  </div>
               )
            })}
         </div>


      </div>
   )
}

export default BanProgram