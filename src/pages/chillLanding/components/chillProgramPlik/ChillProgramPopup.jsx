/* eslint-disable react/prop-types */


import arrow from 'icons/brownarrow.png'

// import one from 'images/chill/program/group1.png'
import two from 'images/chill/program/group2.webp'
import three from 'images/chill/program/group3.webp'
import four from 'images/chill/program/group4.webp'
import five from 'images/chill/program/group5.webp'
import six from 'images/chill/program/group6.webp'
import seven from 'images/chill/program/group7.webp'
import eight from 'images/chill/program/group8.webp'
import nine from 'images/chill/program/group9.webp'
// import { useEffect } from 'react'

import { useQueryParam, StringParam } from 'use-query-params'

const GetInfo = () => {
   const info = {
      '2': {
         img: two,
         title: 'Экскурсия в усадьбу Марфино',
         about: 'Марфино – дворянская усадьба, которая находится в селе Мытищинского городского округа, в 25 километрах от МКАДа. Расположенная на высоком берегу реки Учи, усадьба открывает великолепный вид на лес и позволяет окунуться в атмосферу давних времён.',
         needs: '',
         prices: [
            { title: 'Взрослый', price: '2000₽' },
            { title: 'Ребёнок (до 18 лет)', price: '1000₽' },
         ],
         number: 3,
      },
      '3': {
         img: three,
         title: 'Прогулки на фэтбайках',
         about: 'Особенность фэтбайка - это его широкие покрышки, которые имеют гораздо больший объем, чем у обычных велосипедов. Это позволяет фэтбайку ездить по различным типам поверхностей, включая снег, песок, гравий и грязь, с легкостью и стабильностью.\n\nТакже, в тёплое время года мы организуем велосипедные экскурсии на фэтбайках в усадьбу Марфино',
         needs: '',
         prices: [
            { title: 'Фэтбайк', price: '1000₽ в час' },
            // { title: 'Дополнительный человек на квадроцикл/ багги', price: '500' },
         ],
         number: 3,
      },
      '4': {
         img: four,
         title: 'Аренда гидроцикла',
         about: 'В Икша Кантри Клаб мы рады предложить своим гостям гидроциклы в аренду. В стоимость входит спасательный жилет и сопровождение инструктора.',
         needs: '*Для самостоятельного управления гидроциклом требуется наличие прав категории А1',
         prices: [
            { title: 'Гидроцикл', price: '4000₽ в час' },
         ],
         number: 4,
      },
      '5': {
         img: five,
         title: 'Аренда волейбольной площадки',
         about: 'В летнее время года мы рады предложить гостям волейбольную площадку в аренду. Площадка подходит как для маленькой, так и большой компании.',
         needs: '*Для самостоятельного управления гидроциклом требуется наличие прав категории А1',
         prices: [
            { title: 'Волейбольная площадка', price: '1000₽ в час' },
            { title: 'Волейбольный мяч', price: '100₽ в час' },
         ],
         number: 5,
      },
      '6': {
         img: six,
         title: 'Аренда сап-досок (SUP)',
         about: 'В летнее время года мы рады предложить гостям SUP-борды(сап-доски) в аренду. Спасательный жилет входит в стоимость и выдается по желанию.',
         needs: '',
         prices: [
            { title: 'Сап-доска', price: '2000₽ в час' },
         ],
         number: 6,
      },
      '7': {
         img: seven,
         title: 'Аренда катера',
         about: 'В летнее время года мы рады предложить гостям катер в аренду. Катер отлично подойдет для свидания или прогулке по Икшинскому водохранилищу.',
         needs: '*Необходимо иметь права категории А1',
         prices: [
            { title: 'Катер (с капитаном)', price: '5000₽ в час' },
            {
               title: 'Катер (самостоятельное управление *) ', price: '10000₽ в час'
            },
         ],
         number: 7,
      },
      '8': {
         img: eight,
         title: 'Баня с купелью',
         about: 'Мы предлагаем своим гостям насладиться полезными процедурами в нашей бане с купелью. На ваш выбор почасовая аренда бани с купелью, а также три варианта посещения специально для вашего удобства: Уединение, Командный дух, Семейное древо. Более подробно вы можете ознакомиться с вариантами здесь.В стоимость включёны веник, набор полотенец, фен, тапочки, халат.',
         needs: '*Необходимо иметь права категории А1',
         prices: [
            { title: 'Баня с купелью', price: '5000₽ в час' },
            { title: 'Самовар на дровах', price: '5000₽' },
            { title: 'Витаминный сет (ягоды, орехи)', price: '5000₽' },
            {
               title: 'Услуги пармастера', price: '5000₽ в час'
            },
         ],
         number: 8,
      },
      '9': {
         img: nine,
         title: 'Настольные игры и кино',
         about: 'В любое время года мы рады предложить нашим гостям разнообразные настольные игры, а также просмотр кино/сериала в локации “Шале”.Вы также можете заказать уху из форели или плов от шефа.',
         needs: '*Стоимость указана при проживании на базе отдыха Икша Кантри Клаб',
         prices: [
            { title: 'Настольная игра', price: '200₽ в час' },
            { title: 'Просмотр кино/сериала', price: '1000₽' },

         ],
         number: 9,
      },

      // '10': {
      //    img: one1,
      //    title: 'Уединение',
      //    about: 'В нашем клубе вы можете арендовать квадроцикл и багги. Прокат возможен в любое время года. Вся экипировка включена в стоимость:\nВетро / грязезащитные комбинезоны(не утеплённые)\nПерчатки\nШлем',
      //    people: 'до 2 человек ',
      //    time: 'от 3-х часов',
      //    needs: '',
      //    prices: [
      //       { title: 'Квадроцикл/багги', price: '4000' },
      //       { title: 'Дополнительный человек на квадроцикл/ багги', price: '500' },
      //    ],
      //    number: 1,
      // },

   }
   return info
}
const ChillProgramPopup = ({ onClose }) => {
   const infos = GetInfo()
   const [productQueryParam] = useQueryParam('productId', StringParam)



   const info = infos[productQueryParam]

   // const about = info.about.split('\n')

   const about = info.about.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
   ))

   return (
      <div className='fixed transform top-1/2 -translate-y-1/2 border overflow-y-auto border-stone-700 rounded-[10px] -translate-x-1/2 left-1/2 z-[10000000] w-screen md:max-w-[1000px] acariMedium h-screen md:h-[90vh] flex justify-between bg-white text-black'>
         <div className='p-[20px] pb-[40px] md:p-[40px] max-w-[500px]'>
            <div className="text-stone-700 font-medium mb-[10px] text-md">{info.title}</div>

            <div className=" text-stone-700 text-md- mb-[20px] font-semibold leading-loose">{about}</div>


            <div className='mb-[20px] '>
               <div className="max-w-[531.13px]  rounded-[20px] p-[10px] md:p-[30px] border-2 border-yellow-900">
                  <div className="text-stone-700 text-md font-semibold text-left">Стоимость аренды:</div>
                  {info.prices.map((item, i) => {
                     return (
                        <div key={i} className='flex text-md- w-full gap-[20px] items-center justify-between'>
                           <div>
                              {item.title}
                           </div>
                           <div>

                              {item.price}
                           </div>
                        </div>
                     )
                  })}
               </div>
               {info.needs != '' ? <div>{info.needs}</div> : ''}
            </div>



            {/* <div className='flex gap-[10px] gap-y-[15px] mb-[20px] flex-wrap'>
               {info.includes.map((incl, i) => {

                  return (
                     <div key={i} className=" h-[17px] md:h-[28.68px] rounded-[10px] border px-[20px] text-[11px] md:text-[18px] border-stone-600">{incl}</div>
                  )
               })}
            </div> */}
            <div className="items-center sm:justify-start justify-centers gap-10 flex-col sm:flex-row flex">
               <div onClick={onClose} className=" cursor-pointer flex items-center gap-2 h-3 ">
                  <img src={arrow} className='transform rotate-180' alt="" />
                  <div className="text-stone-700 font-medium  leading-snug">Вернуться назад</div>
               </div>


               <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module'); onClose() }} className="w-[184.02px] cursor-pointer h-[41.89px] flex items-center justify-center rounded-tr-[20px] rounded-bl-[20px] border-2 border-stone-700">
                  <div className="w-[135.03px] h-[17.26px] text-center text-stone-700 text-base font-bold montserrat leading-snug tracking-tight">Забронировать</div>
               </div>

            </div>

         </div>

         <div className='h-full hidden md:block w-[450px]'>
            <img src={info.img} className='h-full w-full' alt="" />
         </div>

      </div>
   )
}

export default ChillProgramPopup