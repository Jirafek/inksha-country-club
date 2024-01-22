/* eslint-disable react/prop-types */

import main1 from 'images/chill/program/001.webp'
import main2 from 'images/chill/program/002.webp'
import main3 from 'images/chill/program/003.webp'
import main4 from 'images/chill/program/004.webp'
import main5 from 'images/chill/program/005.webp'
import main6 from 'images/chill/program/006.webp'
import main7 from 'images/chill/program/007.webp'
import main8 from 'images/chill/program/008.webp'
import main9 from 'images/chill/program/009.webp'


import s from './../../chill.module.scss'
import { useEffect } from 'react'

const GetProgram = () => {
   const program = [

      {
         img: main1,
         title: 'Казан плова + заезд на фэтбайках',
         price: '4990₽',
         number: 1,
         hasAbout: false,
         desc: ''

      },
      {
         img: main2,
         title: 'Экскурсия в усадьбу Марфино',
         price: 'от 1500₽ / чел',
         number: 2,
         hasAbout: true,
         desc: 'с онлайн-гидом'

      },
      {
         img: main3,
         title: 'Фэтбайки',
         price: '1000₽',
         number: 3,
         hasAbout: true,
         desc: ''

      },


      {
         img: main4,
         title: 'Гидроцикл',
         price: 'от 3 500₽',
         number: 4,
         hasAbout: true,
         desc: '* цена за 1 час'

      },
      {
         img: main5,
         title: 'Волейбол',
         price: '1000₽',
         number: 5,
         hasAbout: true,
         desc: '* цена за 1 час'
      },
      {
         img: main6,
         title: 'Сап-борд',
         price: '3 000₽',
         number: 6,
         hasAbout: true,
         desc: '* цена за 1 шт'
      },
      {
         img: main7,
         title: 'Катер',
         price: '10 000₽',
         number: 7,
         hasAbout: true,
         desc: ''
      },
      {
         img: main8,
         title: 'Баня с купелью',
         price: '10 000₽',
         number: 8,
         hasAbout: true,
         desc: '* цена за 1 час'

      },
      {
         img: main9,
         title: 'Кино и настольные игры',
         price: '500₽',
         number: 9,
         hasAbout: true,
         desc: ''
      },

   ]

   return program
}



const ChillProgram = ({ handleProductClick }) => {


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
      <div name='proga' id='program' className='bg-white relative text-black'>
         <div id="znms-service-widget-module"></div>
         <div className=' font-bold text-center mb-[10vh] text-ChillBrown text-lg'>Активный отдых в Икша Кантри Клаб</div>
         <div className='grid max-w-[1200px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center md:px-[30px] flex-col gap-[40px] w-full items-center lg:flex-row'>

            {program.map((item, i) => {
               return (

                  <div key={i} className={` ${s.acariMedium} w-[94%] sm:max-w-[414.43px]  bg-white rounded-[10px] border border-stone-700`}>


                     <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                        <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                     </div>


                     <div className=' p-[15px] md:p-[30px] '>
                        <div className='text-md acariBold'>{item.title}</div>
                        <div className='flex justify-between mb-[20px]'>
                           <div className='flex flex-col'>
                              <div className="text-left text-md- text-stone-700 font-semibold">{item.price}</div>

                              <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                           </div>


                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                           <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                              <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                           </div>
                           {item.hasAbout ? <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                              <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                           </div> : ''}

                        </div>


                     </div>
                  </div>
               )
            })}



         </div >


      </div >
   )
}

export default ChillProgram