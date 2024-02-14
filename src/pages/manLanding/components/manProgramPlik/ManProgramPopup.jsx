/* eslint-disable react/prop-types */


import arrow from 'icons/brownarrow.png'

// import one from 'images/chill/program/group1.png'


import s from './../../man.module.scss'


// import { useEffect } from 'react'

import { useQueryParam, StringParam } from 'use-query-params'

const GetInfo = () => {
   const info = {
      '1': {
         title: 'Пакет “База”',
         time: "7",
         price: "12 490",
         includes: ['Романтический пикник(фрукты, хлеб, закуски) ',
            'Пуфы, пледы и чай из самовара',
            'Романтическая музыка(Ты знаешь её любимые песни ?) ',
            'Настолки и карточные игры для двоих (по запросу) ',
            'Аренда гриля и угля',],
         number: 1,
      },
      '2': {
         title: 'Пакет “Морской Бой”',
         time: "7",
         price: "12 490",
         includes: ['Романтический пикник(фрукты, хлеб, закуски) ',
            'Аренда фэтбайков для прогулки по заснеженному лесу',
            'Пледы и чай из самовара',
            'Аренда гриля и угля',],
         number: 2,
      },
      '3': {
         title: 'Пакет “Мастер-Гриль”',
         time: "7",
         price: "15 490",
         includes: ['Фрукты, маршмеллоу',
            'Авторские рецепты и инструкции по готовке от профессионального шеф-повара',
            'Специальные соусы и приправы',
            'Мясо и овощи для гриля',
            'Аренда гриля и угля',],
         number: 3,
      },

      '4': {
         title: 'Пакет “Мне надоел ресторан”',
         time: "24",
         price: "21 500",
         includes: ['Организация пикника на природе с шашлыками и закусками',
            'Дегустация напитков народов мира с сырами и мясом',
            'Личный шеф-повар, который приготовит блюдо при вас на мангале',
            'Ночь в лесном домике с видом на засненеженное озеро',
            'Фрукты',],
         number: 4,
      },

      '5': {
         title: 'Пакет “Мне надоел ресторан”',
         time: "24",
         price: "26 500",
         includes: ['Баня с панорамным видом на лес',
            'Тёплая купель в русском стиле с хвоей и шишками',
            'Индивидуальные и парные парения. Прогрев с пят до плечей. Прогрев спины.',
            'Расслабляющий массаж, пилинги',
            'Ночь в лесном домике',
            'Чайная церемония с традиционным русским самоваром. На выбор: русский облепиховый чай или русская рябина',],
         number: 5,
      },

      '6': {
         title: 'Пакет “Совместное потение”',
         time: "24",
         price: "25 900",
         includes: ['Баня с панорамным видом на лес и купель с подогревом',
            'Совместный заезд на фэтбайках/лыжах/коньках',
            'Здоровый ужин от нашего шефа и свежевыжатые соки',
            'Ночь в лесном домике с видом на водную гладь',
            'Фрукты',

         ],
         number: 6,
      },

      '7': {
         title: 'Пакет “Netflix & Чили”',
         time: "7",
         price: "11 200",
         includes: ['Фрукты, орео, попкорн, снеки',
            'Уютный кинотеатр с большим экраном и пуфами',
            'Просмотр любимого фильма или сериала',

         ],
         number: 7,
      },

      '8': {
         title: 'Пакет “Инстасамка”',
         time: "7",
         price: "18 900",
         includes: ['Романтический пикник на берегу (фрукты, закуски)',
            'Закатная фотосессия для двоих с профессиональным фотографом ',
            'Уникальный локейшн и стилизация',
            'Печать фотографий на память',
            'Ретушь и обработка фотографий',
            'Пуфы, пледы и чай, романтическая музыка',
            ' Аренда гриля и угля',
         ],
         number: 8,
      },

      '9': {
         title: 'Пакет “Она у меня певица”',
         time: "24",
         price: "18 900",
         includes: [
            'Баня с панорамным видом на лес и купель с подогревом',
            'Чайная церемония с традиционным русским самоваром - разогревающий связки сбор с мёдом и имбирём ',
            'Караоке-система с двумя микрофонами и подборкой песен для двоих',
            'Ночь в лесном домике с видом на заснеженное озеро',
         ],
         number: 9,
      },

      '10': {
         title: 'Пакет “Служебный роман”',
         time: "24",
         price: "44 500",
         includes: [
            'Трансфер до места на автомобиле премиум-класса в обе стороны',
            'Баня с панорамным видом на заснеженный лес и купель с подогревом ',
            'Закатный ужин на двоих при свечах от нашего шефа',
            'Ночь в лесном домике с видом на водную гладь',
            'Фрукты, французский сыр',
            'Романтическая прогулка по лесу',
            'Ночь в лесном домике с видом на озеро',
         ],
         number: 10,
      },

      '11': {
         title: 'Пакет “Мажорный VIP”',
         time: "24",
         price: "62 000",
         includes: [
            'Трансфер до места на автомобиле премиум-класса в обе стороны',
            'Баня с панорамным видом на заснеженный лес и купель с подогревом ',
            'Тёплая купель в русском стиле с хвоей и шишками',
            'Индивидуальные и парные парения. Прогрев с пят до плечей. Прогрев спины.',
            'Расслабляющий массаж, пилинги',
            'Чайная церемония с традиционным русским самоваром. На выбор русский облепиховый чай или русская рябина',
            'Закатный ужин на двоих при свечах от нашего шефа',
            'Фрукты, французский сыр, стейк из свежепойманной форели или из парной говядины',
            'Ночь в лесном домике с видом на заснеженное озеро',
         ],
         number: 11,
      },




   }
   return info
}
const ManProgramPopup = ({ onClose }) => {
   const infos = GetInfo()
   const [productQueryParam] = useQueryParam('productId', StringParam)



   const info = infos[productQueryParam]

   // const about = info.about.split('\n')

   // const about = info.about.split('\n').map((paragraph, index) => (
   //    <p key={index}>{paragraph}</p>
   // ))

   return (
      <div className={`fixed bg-white transform top-1/2 -translate-y-1/2 border overflow-y-auto border-ManPurple rounded-[10px] -translate-x-1/2 left-1/2 z-[10000000]  acariMedium w-[90vw] max-h-[95vh] md:h-auto md:min-w-[700px] lg:min-w-[1000px] md:w-auto flex justify-center   text-ManPurple`}>
         <div className='px-[20px] md:px-[100px] py-[50px] md:py-[40px] text-center'>
            <div className={`text-ManPurple ${s.rosarium} font-medium mb-[10px] text-[30px] md:text-lg`}>{info.title}</div>

            <div className={`flex font-bold ${s.rosarioSBold} justify-center gap-12`}>
               <div className='flex gap-4 items-center text-sm'>
                  <img src={time} alt="" />
                  <div>
                     {info.time} часов
                  </div>
               </div>

               <div className='flex gap-4 items-center text-sm'>
                  <img src={money} alt="" />
                  <div>
                     {info.price}₽
                  </div>
               </div>
            </div>
            <ul className={`${s.rosarium} mb-[40px]`}>
               {info.includes.map((item, i) => {
                  return (
                     <div className=' text-lg sm:text-md  font-light' key={i}>
                        *{item}
                     </div>
                  )
               })}


            </ul>

            <div className="items-center sm:justify-start justify-center mb-[20px] gap-5 flex-col sm:flex-row flex">
               <div onClick={onClose} className=" cursor-pointer flex items-center gap-2 h-3 ">
                  <img src={arrow} className='transform rotate-180' alt="" />
                  <div className="text-ManPurple font-medium  leading-snug">Вернуться назад</div>
               </div>

               <div>

               </div>
               <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module'); onClose() }} className="w-[80%] monterrat max-w-[600px] h-[47.26px] flex justify-center items-center rounded-[20px] text-center text-white bg-[#79072C] text-base font-bold montserrat leading-snug tracking-tight cursor-pointer">
                  <div className="">Забронировать</div>
               </div>
               {/* href='#form' */}


            </div>

         </div>



      </div>
   )
}

export default ManProgramPopup