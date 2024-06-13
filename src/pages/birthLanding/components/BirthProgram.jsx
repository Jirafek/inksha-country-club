/* eslint-disable react/prop-types */

import { v4 as uuid4 } from 'uuid'
import { m } from 'framer-motion'

import main1 from 'images/chill/program/001.webp'
import main2 from 'images/chill/program/002.webp'
import main3 from 'images/chill/program/003.webp'
import main4 from 'images/chill/program/004.webp'
import main5 from 'images/chill/program/005.webp'
import main6 from 'images/chill/program/006.webp'
import main7 from 'images/chill/program/007.webp'
import main8 from 'images/chill/program/008.webp'
import main9 from 'images/chill/program/009.webp'
import main10 from 'images/chill/program/010.webp'
import main11 from 'images/chill/program/011.webp'
import main12 from 'images/chill/program/012.webp'
import main13 from 'images/chill/program/013.webp'
import main14 from 'images/chill/program/014.webp'
import main15 from 'images/chill/program/015.webp'
import main16 from 'images/chill/program/016.webp'
import main17 from 'images/chill/program/017.webp'
import main18 from 'images/chill/program/018.webp'
import main19 from 'images/chill/program/019.webp'
import main20 from 'images/chill/program/020.webp'
import main21 from 'images/chill/program/021.webp'
import main22 from 'images/chill/program/022.webp'
import main23 from 'images/chill/program/023.webp'
import main24 from 'images/chill/program/024.webp'
import main25 from 'images/chill/program/025.webp'
import main26 from 'images/chill/program/026.webp'
import main27 from 'images/chill/program/027.webp'
import main28 from 'images/chill/program/028.webp'
import main29 from 'images/chill/program/029.webp'
// import main30 from 'images/chill/program/030.webp'


import { Navigation, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"


import korpprev from "icons/swiperprev_black.png"
import korpnext from "icons/swipernext_black.png"


import sun from 'icons/buttons/filter/sun.png'
import winter from 'icons/buttons/filter/winter.png'
import many from 'icons/buttons/filter/many.png'
import low from 'icons/buttons/filter/low.png'

import Button from 'common/Button'





import s from './../birth.module.scss'
import { useEffect, useRef, useState } from 'react'
import ProgramSlider from 'common/landings/ProgramSlider'

const GetProgram = () => {
   const program = [

      {
         img: main2,
         title: 'Экскурсия в Усадьбу Марфино + аренда фэтбайков или лыж + казан ухи/плова ',
         price: '1 190 ₽ /чел.',
         oldPrice: '10 990 ₽ /чел.',
         number: 2,
         hasAbout: true,
         desc: 'с онлайн-гидом',


         time: ['Зима', 'Лето'],
         isManyPeople: false,

      },
      // {
      //    img: main3,
      //    title: 'Фэтбайки',
      //    price: '1000₽',
      //    oldPrice: '',
      //    number: 3,
      //    hasAbout: true,
      //    desc: '',

      //    time: 'Лето',
      //    isManyPeople: false,
      // },


      // {
      //    img: main4,
      //    title: 'Гидроцикл',
      //    price: 'от 3 500₽',
      //    oldPrice: '',
      //    number: 4,
      //    hasAbout: true,
      //    desc: '* цена за 1 час',
      //    type: 'Лето'

      // },
      // {
      //    img: main5,
      //    title: 'Волейбол',
      //    price: '1000₽',
      //    oldPrice: '',
      //    number: 5,
      //    hasAbout: true,
      //    desc: '* цена за 1 час',
      //    type: 'Лето'
      // },
      // {
      //    img: main6,
      //    title: 'Сап-борд',
      //    price: '3 000₽',
      //    oldPrice: '',
      //    number: 6,
      //    hasAbout: true,
      //    desc: '* цена за 1 шт',
      //    type: 'Лето'
      // },
      // {
      //    img: main7,
      //    title: 'Катер',
      //    price: '10 000₽',
      //    oldPrice: '',
      //    number: 7,
      //    hasAbout: true,
      //    desc: '',
      //    type: 'Лето'
      // },
      // {
      //    img: main8,
      //    title: 'Баня с купелью',
      //    oldPrice: '',
      //    price: '10 000₽',
      //    number: 8,
      //    hasAbout: true,
      //    desc: '* цена за 1 час',
      //    type: 'Лето'

      // },
      {
         img: main9,
         title: 'Кино и настольные игры + казан ухи/плова',
         oldPrice: '10 990 ₽ /чел',
         price: '1 190 ₽ /чел.',
         number: 9,
         hasAbout: true,
         desc: '',


         time: 'Зима',
         isManyPeople: false,
      },
      {
         img: main10,
         title: 'Баббл соккер + аренда беседки + мангал(уголь, решётка)',
         price: '1 190 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 10,
         hasAbout: false,
         desc: '',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main11,
         title: 'Казан плова/ухи + аренда удочки + чай из самовара/ глинтвейн или аренда бани с купелью ',
         price: '4990 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 11,
         hasAbout: false,
         desc: '',
         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main12,
         title: 'Заплыв на каноэ + баня с купелью + чай из самовара на выбор',
         price: '1 590 ₽ /чел.',
         oldPrice: '12 990 ₽ /чел.',
         number: 12,
         hasAbout: false,
         desc: '',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main13,
         title: 'Катание на SUP-досках + баня с купелью или казан ухи/плова ',
         price: '1 590 ₽ /чел',
         oldPrice: '15 990 ₽ /чел.',
         number: 13,
         hasAbout: false,
         desc: '',

         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main14,
         title: 'Экскурсия в Марфино + аренда фэтбайков/лыж + казан ухи/плова',
         price: '1 990 ₽ /чел.',
         oldPrice: '10 990 ₽ /чел.',
         number: 14,
         hasAbout: false,
         desc: '',
         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main15,
         title: 'Командные лыжи + аренда бани с купелью + чай из самовара или глинтвейн',
         price: 'от 1 990 ₽ /чел',
         oldPrice: '12 990 ₽ /чел',
         number: 15,
         hasAbout: false,
         desc: '',
         time: ['Зима'],
         isManyPeople: false,
      },
      // {
      //    img: main16,
      //    title: 'Аренда квадроциклов/снегоходов  + казан ухи/плова + ночлег в охотничьем домике с видом на водохранилище',
      //    price: 'от 15 990 ₽ /чел',
      //    oldPrice: 'от 19 990 ₽ /чел',
      //    number: 16,
      //    hasAbout: false,
      //    desc: '',
      //    type: 'Лето'
      // },
      // {
      //    img: main17,
      //    title: 'Ночлег в выбранной локации + аренда мангала(уголь,решёка) + чай из самовара или глинтвейн',
      //    price: 'от 11990 ₽ / чел.',
      //    oldPrice: 'от 15990 ₽ / чел.',
      //    number: 17,
      //    hasAbout: false,
      //    desc: '',
      //    type: 'Лето'
      // },
      {
         img: main18,
         title: 'Командные лыжи + аренда бани с купелью + чай из самовара или глинтвейн',
         price: 'от 1 190 ₽ /чел',
         oldPrice: 'от 15 990 ₽ /чел',
         number: 18,
         hasAbout: false,
         desc: '',


         time: 'Зима',
         isManyPeople: false,
      },
      {
         img: main19,
         title: 'Стрельба из лука или дартс + баня с купелью на 3 часа + аренда мангала',
         price: '1 590 ₽ /чел',
         oldPrice: '12 990 ₽ /чел',
         number: 19,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main20,
         title: 'Перетягивание каната + аренда мангала + аренда волейбольной площадки',
         price: '1 990 ₽ /чел',
         oldPrice: '9 990 ₽ /чел',
         number: 20,
         hasAbout: false,
         desc: '',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main21,
         title: 'Стрельба из лука + баня с купелью на 3 часа + аренда мангала',
         price: '1 590 ₽ /чел',
         oldPrice: '10 990 ₽ /чел',
         number: 21,
         hasAbout: false,
         desc: '',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main22,
         title: 'Обзорный заплыв на лодке по водохранилищу + баня с купелью или казан ухи/плова',
         price: 'от 1 190 ₽ /чел',
         oldPrice: 'от 18 990 ₽ /чел',
         number: 22,
         hasAbout: false,
         desc: '',

         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main23,
         title: 'Квест: расследование таинственного убийства в лесу  + казан ухи/плова',
         price: '1 990 ₽ /чел',
         oldPrice: '15 990 ₽ /чел',
         number: 23,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main24,
         title: 'Стэнд-ап паддл (заезд на равновесие на SUP - досках)',
         price: '1 990 ₽ /чел',
         oldPrice: '9 990 ₽ /чел',
         number: 24,
         hasAbout: false,
         desc: '* Рассчитано на команды от 3 человек',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main25,
         title: '“Охота за сокровищами”(игра на сплочение и укрепеление командного духа) + казан ухи/плова',
         price: '1 990 ₽ /чел',
         oldPrice: '10 990 ₽ /чел',
         number: 25,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main26,
         title: '“Зарница” Найди флаг и передай его на базу! Твоя команда сможет сделать это первой? + казан ухи/плова',
         price: '1 590 ₽ /чел',
         oldPrice: '12 990 ₽ /чел',
         number: 26,
         hasAbout: false,
         desc: '*Рассчитано на команды от 4 человек',

         time: ['Зима', 'Лето'],
         isManyPeople: true,

      },
      {
         img: main27,
         title: '“Строительство плота”(Запоминающийся способ развлечь сотрудников и сплотить коллег) + казан ухи/плова',
         price: '1 590 ₽ /чел',
         oldPrice: '12 990 ₽ /чел',
         number: 27,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',


         time: 'Лето',
         isManyPeople: true,
      },
      {
         img: main28,
         title: 'Спортивная ориентация(“Весёлые старты”)',
         price: '1 190 ₽ /чел',
         oldPrice: '10 990 ₽ /чел',
         number: 28,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',


         time: ['Зима', 'Лето'],
         isManyPeople: true,
      },
      {
         img: main29,
         title: 'Кулинарный тимбилдинг Чья команда приготовит самое вкусное блюдо? + баня с купелью на 3 часа + аренда мангала',
         price: '1 990 ₽ /чел',
         oldPrice: '15 990 ₽ /чел',
         number: 29,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',


         time: ['Зима', 'Лето'],
         isManyPeople: true,
      },


   ]

   return program
}



const BirthProgram = ({ handleProductClick, currentTime, setTime, }) => {

   const program = GetProgram()


   const [isManyPeople, setIsManyPeople] = useState(false)


   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [selectedImages, setSelectedImages] = useState(program)


   const filter = () => {

      const filteredProgram = program.filter(item => {

         return item.isManyPeople === isManyPeople && item.time.includes(currentTime)
      })


      setSelectedImages(filteredProgram)


   }

   useEffect(() => {
      filter()
   }, [])


   const togglePeople = () => {

      setIsManyPeople(!isManyPeople)

   }


   const toggleTime = () => {
      if (currentTime === 'Лето') {
         setTime('Зима')
      } else {
         setTime('Лето')
      }
      filter()
   }


   useEffect(() => {
      filter()
   }, [currentTime, isManyPeople])


   const swiperRef = useRef()


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
   console.log()

   return (
      <div name='proga' id='program' className='relative bg-BirthLightPurple py-[40px] text-black'>
         <div id="znms-service-widget-module"></div>
         <div className="text-center text-stone-700 mb-[10vh] text-lg font-bold leading-[62.40px]">Пакеты услуг</div>
         {/* <div className=' font-bold text-center mb-[10vh] text-ChillHeadBrown text-lg'>Активный отдых в Икша Кантри Клаб</div> */}



         {/* <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[210px] top-[180px]  w-[360px] bg-[#5F4D3A] rounded-b-[22px]">
            <div className="relative flex flex-col items-start w-full gap-2 pl-12">
               {
                  types.map((el) => {
                     return (
                        <button key={uuid4()} onClick={() => { handleItems(el) }} className="lg:text-[35px] text-[24px] text-white font-medium">
                           {el}
                        </button>
                     )
                  })
               }
            </div>
         </div>
         <m.button
            

            className={` ${isMenuOpen ? 'rounded-t-[22px]' : 'rounded-[22px]'} opacity-100 mb-[70px] w-[360px] mx-auto h-[65px] flex items-center justify-between text-white bg-[#5F4D3A] `}
         >
            <div onClick={handleMenu} className="relative h-full w-full flex  justify-between px-[40px] gap-14 items-center ">
               <p className="text-white lg:text-[35px] text-[24px] font-medium">
                  {menuItem}
               </p>

            </div>
            <img onClick={handleClose} className=' z-[10] p-[20px]' src={close} alt="" />
         </m.button> */}


         <div className='flex justify-center mb-[50px] md:mb-[100px] items-center gap-5'>

            <div className="w-[101.84px] h-[46.98px] ">
               <div
                  onClick={toggleTime}

                  className={` ${currentTime === 'Лето' ? 'justify-end border-[#FFE500]' : 'justify-start border-[#1CFFFF]'} cursor-pointer border-2  relative items-center px-2 flex w-[101.84px] h-[46.98px] bg-[#604E3A] rounded-[20px] shadow-xl`}
               >

                  <div className={`w-[30px]  ${currentTime === 'Лето' ? 'bg-[#FFE500]' : 'bg-[#1CFFFF]'} z-[2] h-[29.25px]  rounded-[100px] shadow-lg`}></div>
                  {currentTime === 'Лето' ?
                     <div className='absolute left-1 top-[7px]'>
                        <img className='w-[35px] h-[35px]' src={sun} loading='eager' alt="" />
                     </div>
                     :
                     <div className='absolute right-1 top-[7px]'>
                        <img className='w-[35px] h-[35px]' src={winter} loading='eager' alt="" />
                     </div>
                  }

               </div>
               <div className="text-sm font-semibold leading-normal tracking-tight text-center text-stone-600">{currentTime === 'Лето' ? <div>Лето</div> : <div>Зима</div>}</div>

            </div>

            <div className="w-[101.84px] h-[46.98px] ">
               <div
                  onClick={togglePeople}

                  className={` ${isManyPeople ? 'justify-start border-[#AB8E67]' : 'justify-end border-[#FFFFFF]'} cursor-pointer border-2  relative items-center px-2 flex w-[101.84px] h-[46.98px] bg-[#604E3A] rounded-[20px] shadow-xl`}
               >

                  <div className={`w-[30px] flex justify-center items-center z-[10] text-black text-[15px] ${isManyPeople ? 'bg-[#AB8E67]' : 'bg-[#FFFFFF]'} z-[2] h-[29.25px]  rounded-[100px] shadow-lg`}>

                  </div>
                  {isManyPeople ?


                     <div className='absolute right-2 top-[9px]'>
                        <img className=' w-[50px] h-[21px]' src={many} loading='eager' alt="" />
                     </div>
                     :
                     <div className='absolute left-3 top-[9px]'>
                        <img className=' w-[26px] h-[26px]' src={low} loading='eager' alt="" />
                     </div>
                  }

               </div>
               <div className="text-sm font-semibold leading-normal tracking-tight text-center text-stone-600">{isManyPeople ? <div>Много людей (от 10)</div> : <div>Мало людей (от 4)</div>}</div>

            </div>



         </div>





         <ProgramSlider nextBtn={korpnext} prevBtn={korpprev} selectedImages={program} mainColor='#593723' secondaryColor='rgb(113 113 122)' />

         <div className={` ${s.banner} mt-[50px] w-screen flex justify-center items-center bottom-0 z-[20] h-[70px] md:h-[90px] `}>
            <div className='font-semibold text-center text-white text-md'>
               Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'> 16 990 ₽ </span><span className='text-NYred'> 9990 ₽ </span>

            </div>

         </div>
         <a className='mx-auto' href='#module'>
            <Button className='bg-BirthDarkPurple md:w-[600px] text-md md:h-[50px] text-white mx-auto'>Посмотреть локации</Button>
         </a>


      </div >
   )
}

export default BirthProgram