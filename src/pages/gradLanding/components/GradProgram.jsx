/* eslint-disable react/prop-types */

import { v4 as uuid4 } from 'uuid'
import { m } from 'framer-motion'



// import main30 from 'images/chill/program/030.webp'


import main2 from 'images/chill/program/002.webp'

import main9 from 'images/chill/program/009.webp'
import main10 from 'images/chill/program/010.webp'
import main11 from 'images/chill/program/011.webp'
import main12 from 'images/chill/program/012.webp'
import main13 from 'images/chill/program/013.webp'
import main14 from 'images/chill/program/014.webp'
import main15 from 'images/chill/program/015.webp'

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
import many from 'icons/buttons/filter/blue/many.png'
import low from 'icons/buttons/filter/blue/low.png'

import Button from 'common/Button'





import s from './../grad.module.scss'
import { useEffect, useRef, useState } from 'react'

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



const GradProgram = ({ handleProductClick, currentTime, setTime, }) => {

   const program = GetProgram()


   const [isManyPeople, setIsManyPeople] = useState(false)


   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [selectedimages, setSelectedimages] = useState(program)


   const filter = () => {

      const filteredProgram = program.filter(item => {

         return item.isManyPeople === isManyPeople && item.time.includes(currentTime)
      })


      setSelectedimages(filteredProgram)


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


      }
      script.onload = initializeWidget



      document.body.appendChild(script)

   }, [])
   console.log()

   return (
      <div name='proga' id='program' className='relative bg-GradCyan bg-opacity-70 m-[10px] md:m-[40px] p-3 md:p-[20px] py-[120px] text-black'>

         <div id="znms-service-widget-module"></div>
         <div className="text-center  text-white py-[2vh] text-lg font-bold leading-[62.40px]">Наши услуги</div>
         {/* <div className=' font-bold text-center mb-[10vh] text-ChillHeadBrown text-lg'>Активный отдых в Икша Кантри Клаб</div> */}



         {/* <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[210px] top-[180px]  w-[360px] bg-[#5F4D3A] rounded-b-[22px]">
            <div className="relative w-full pl-12 flex flex-col gap-2 items-start">
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

            <div className="w-[101.84px]  h-[46.98px] ">
               <div
                  onClick={togglePeople}

                  className={` ${isManyPeople ? 'justify-start' : 'justify-end'} cursor-pointer border-2  relative items-center px-2 flex w-[101.84px] h-[46.98px] bg-white rounded-[20px] shadow-xl`}
               >

                  <div className={`w-[30px] flex justify-center items-center z-[10] text-black text-[15px] ${isManyPeople ? 'bg-ButterDarkBlue' : 'bg-ButterOrange'} z-[2] h-[29.25px]  rounded-[100px] shadow-lg`}>

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
               <div className="text-center text-white text-sm font-semibold leading-normal tracking-tight">{isManyPeople ? <div>Много людей (от 10)</div> : <div>Мало людей (от 4)</div>}</div>

            </div>



         </div>



         <div className='md:grid hidden  max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start place-items-start md:px-[30px] gap-[40px] w-full'>

            {selectedimages.map((item, i) => {
               return (

                  <div key={i} className={` ${s.acariMedium} w-[94%] sm:max-w-[500.43px]  bg-white rounded-[10px] border border-Majtext-black`}>


                     <div className={` ${s.cormReg} h-[217.35px] relative`}>
                        {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                        <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                     </div>
                     <div className=' p-[15px] md:p-[30px] '>
                        <div className='text-32px text-black leading-[41.60px] acariBold'>{item.title}</div>
                        <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                        <div className='flex justify-between mb-[20px]'>
                           {item.oldPrice !== '' || undefined ?
                              <div className='flex flex-col items-center justify-center w-full'>
                                 <div className="text-center text-black text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                 <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>


                              </div>
                              :
                              <div className='flex flex-col'>
                                 <div className="text-left text-36px text-black font-semibold">{item.price}</div>
                              </div>
                           }
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                           {/* <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-black">
                              <div className="text-center text-black font-semibold ">Забронировать</div>
                           </div> */}
                           <a href="#form" className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-black">
                              <div className="text-center text-black font-semibold ">Забронировать</div>
                           </a>
                           {item.hasAbout ?
                              <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center ">
                                 <div className="text-center text-black border-black border-2 px-4 py-1 rounded-[20px] font-semibold">Подробнее</div>
                              </div>
                              :
                              <a href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center ">
                                 <div className="text-center text-black border-black border-2 px-4 py-1 rounded-[20px] font-semibold">Подробнее</div>
                              </a>
                           }

                        </div>


                     </div>
                  </div>
               )
            })}


         </div >
         <div className="flex md:hidden px-[20px] w-full ml-auto gap-4 md:pr-[100px]  z-10 justify-end">
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slidePrev()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={korpprev}
                  alt=""
               />
            </button>
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slideNext()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={korpnext}
                  alt=""
               />
            </button>
         </div>
         <div className='block md:hidden'>

            <Swiper
               // install Swiper modules
               modules={[Navigation, Autoplay]}
               // style={{ display: 'none' }}
               className="chill"
               spaceBetween={50}
               loop={true}
               autoplay={{
                  delay: 1500,
                  disableOnInteraction: true,
               }}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
               }}
               slidesPerView={window.innerWidth > 450 ? 2 : 1}
               navigation

            >
               {selectedimages.map((item, i) => {
                  return (
                     <SwiperSlide className="py-[30px]" key={i}>



                        <div key={i} className={` ${s.acariMedium} w-full  bg-white rounded-[10px] border border-Majtext-black`}>


                           <div className={` ${s.cormReg} h-[217.35px] relative`}>
                              {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white  w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                              <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                           </div>


                           <div className=' p-[15px] md:p-[30px] '>
                              <div className='text-32px text-black leading-[41.60px] acariBold'>{item.title}</div>
                              <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                              <div className='flex justify-between mb-[20px]'>
                                 {item.oldPrice !== '' ?
                                    <div className='flex flex-col items-center justify-center w-full'>
                                       <div className="text-center text-black text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                       <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>


                                    </div>
                                    :
                                    <div className='flex flex-col'>
                                       <div className="text-left text-36px text-black font-semibold">{item.price}</div>


                                    </div>
                                 }
                              </div>

                              <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                                 {/* <div  onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-black">
                                    <div className="text-center text-black font-semibold ">Забронировать</div>
                                 </div> */}
                                 <a href="#form" className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-black">
                                    <div className="text-center text-black font-semibold ">Забронировать</div>
                                 </a>
                                 {item.hasAbout ?
                                    <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center ">
                                       <div className="text-center text-black border-black border-2 px-4 py-1 rounded-[20px] font-semibold">Подробнее</div>
                                    </div>
                                    :
                                    <a href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center ">
                                       <div className="text-center text-black border-black border-2 px-4 py-1 rounded-[20px] font-semibold">Подробнее</div>
                                    </a>
                                 }

                              </div>


                           </div>
                        </div>

                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>

         <div className={` ${s.banner} mt-[50px]  flex justify-center items-center bottom-0 z-[20] h-[70px] md:h-[90px] `}>
            <div className='text-white text-center text-md font-semibold'>
               Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'>16 990₽</span> <span className='text-NYred'> 9990₽ </span>

            </div>

         </div>
         <a className='mx-auto' href='#module'>
            <Button className='bg-BirthPurple md:w-[600px] w-[70%] text-md+ h-[40px] md:h-[70px] text-white mx-auto'>Посмотреть локации</Button>
         </a>


      </div >
   )
}

export default GradProgram