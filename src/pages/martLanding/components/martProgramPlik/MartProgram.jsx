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
import main30 from 'images/chill/program/030.webp'
import main31 from 'images/chill/program/031.webp'
import main32 from 'images/chill/program/032.webp'
import main33 from 'images/chill/program/033.webp'
import main34 from 'images/chill/program/034.webp'
import main35 from 'images/chill/program/035.webp'

// import main30 from 'images/chill/program/030.webp'


import m1 from 'images/mart/program/001.webp'
import m2 from 'images/mart/program/002.webp'
import m3 from 'images/mart/program/003.webp'
import m4 from 'images/mart/program/004.webp'
import m5 from 'images/mart/program/005.webp'

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





import s from './../../mart.module.scss'
import { useEffect, useRef, useState } from 'react'
import ProgramSlider from 'common/landings/ProgramSlider'

const GetProgram = () => {
   const program = [
      {
         img: m1,
         title: 'Романтический пикник + чай из самовара + аренда мангала + настольные игры',
         price: '3 990₽ ',
         oldPrice: '7 990₽ ',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main32,
         title: 'Баня с купелью в русском стиле + индивидуальные парения + расслабляющий массаж, пилинги + чайная церемония + ночь в лесном домике',
         price: '26 500₽ на двоих',
         oldPrice: '51 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },

      {
         img: main33,
         title: 'Фрукты и снеки + уютный кинотеатр + просмотр любимого фильма или сериала',
         price: '11 200₽ на двоих',
         oldPrice: '23 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },


      {
         img: main35,
         title: 'Трансфер на автомобиле премиум-класса в обе стороны + баня с купелью в русском стиле + индивидуальные парения + массаж + чайная церемония + ужин при свечах(стейк из форели / говядины) + ночь в лесном домике + фрукты и французский сыр',
         price: '62 200₽ на двоих',
         oldPrice: '100 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },



      {
         img: main34,
         title: 'Трансфер на автомобиле премиум-класса + баня с купелью + ужин при свечах + ночь в лесном домике + романтическая прогулка по лесу + фрукты и французский сыр',
         price: '44 500₽ на двоих',
         oldPrice: '89 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },


      {
         img: main31,
         title: 'Баня с купелью в русском стиле + заезд на фэтбайках/ лыжах/коньках + здоровый ужин и свежевыжатые соки + фрукты + ночь в лесном домике',
         price: '25 500₽ на двоих',
         oldPrice: '51 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },

      {
         img: m2,
         title: 'Романтический пикник + аренда фэтбайков + чай из самовара + аренда мангала',
         price: '12 490₽ на двоих',
         oldPrice: '24 990₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },

      {
         img: m3,
         title: 'Аренда мангала + мясо и овощи для гриля + авторские рецепты от шеф-повора + приправы и соусу +фрукты и маршмеллоу',
         price: '15 490₽ на двоих',
         oldPrice: '30 490₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: main22,
         title: 'Фотосессия + аренда катера + ужин на двоих',
         price: '18 990 ₽ на двоих',
         oldPrice: '36 990 ₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: m4,
         title: 'Пикник на природе + шашлыки с закусками +дегустация напитков с сырами +личный шеф-повар + ночь в лесном домике',
         price: '21 500₽ на двоих',
         oldPrice: '42 500₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
         isManyPeople: false,
      },
      {
         img: m5,
         title: 'Баня с купелью + чайная церемония с русским самоваром + согревающий сбор с мёдом + караоке-система + ночь в лесном домике',
         price: '18 900₽ на двоих',
         oldPrice: '36 500₽ на двоих',
         number: 22,
         hasAbout: false,
         desc: '',


         time: ['Лето', 'Зима'],
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
         img: main25,
         title: '“Охота за сокровищами”(игра на сплочение и укрепеление командного духа) + казан ухи/плова',
         price: '1 990 ₽ /чел',
         oldPrice: '10 990 ₽ /чел',
         number: 25,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',


         time: ['Лето', 'Зима'],
         isManyPeople: true,
      },
      {
         img: main23,
         title: 'Квест: расследование таинственного убийства в лесу  + казан ухи/плова',
         price: '1 990 ₽ /чел',
         oldPrice: '15 990 ₽ /чел',
         number: 23,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',


         time: ['Лето', 'Зима'],
         isManyPeople: true,
      },
      {
         img: main18,
         title: 'Командные лыжи + аренда бани с купелью + чай из самовара или глинтвейн',
         price: 'от 1 990 ₽ /чел',
         oldPrice: 'от 15 990 ₽ /чел',
         number: 18,
         hasAbout: false,
         desc: '* Рассчитано на команды от 4 человек',


         time: 'Зима',
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
      {
         img: main26,
         title: '“Зарница” Найди флаг и передай его на базу! Твоя команда сможет сделать это первой? + казан ухи/плова',
         price: '1 990 ₽ /чел',
         oldPrice: '12 990 ₽ /чел',
         number: 26,
         hasAbout: false,
         desc: '*Рассчитано на команды от 4 человек',

         time: ['Зима', 'Лето'],
         isManyPeople: true,

      },
      {
         img: main28,
         title: 'Спортивная ориентация(“Весёлые старты”) + баня с купелью + аренда мангала',
         price: '1 990 ₽ /чел',
         oldPrice: '10 990 ₽ /чел',
         number: 28,
         hasAbout: false,
         desc: '* Рассчитано на команды от 5 человек',


         time: ['Зима', 'Лето'],
         isManyPeople: true,
      },



   ]

   return program
}


const MartProgram = ({ handleProductClick, currentTime, setTime, }) => {

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
      <div name='proga' id='program' className='relative py-[120px] text-black'>
         <div id="znms-service-widget-module"></div>
         <div className="text-center text-[#79072C] py-[2vh] text-lg font-bold leading-[62.40px]">Пакеты свиданий</div>
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


         <ProgramSlider nextBtn={korpnext} prevBtn={korpprev} selectedImages={selectedimages} mainColor='#79072C' secondaryColor='rgb(120 113 108)' />

         <div className={` ${s.banner} mt-[50px] w-screen flex justify-center items-center bottom-0 z-[20] h-[70px] md:h-[90px] `}>
            <div className='font-semibold text-center text-white text-md'>
               Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'>16 990₽</span> <span className='text-MartPurple'> 9990₽ </span>

            </div>

         </div>
         <a className='mx-auto' href='#module'>
            <Button className='bg-MartPurple md:w-[600px] text-md h-[40px] md:h-[70px] text-white mx-auto'>Посмотреть локации</Button>
         </a>


      </div >
   )
}

export default MartProgram