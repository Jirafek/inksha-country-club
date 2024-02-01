/* eslint-disable react/prop-types */

import people from 'icons/ban/brown/people.png'
import time from 'icons/ban/brown/time.png'
import check from 'icons/ban/check.png'
import arrow from 'icons/brownarrow.png'

import one1 from 'images/ban/program/group1.webp'
import two from 'images/ban/program/group2.webp'
import three from 'images/ban/program/group3.webp'

import { useQueryParam, StringParam } from 'use-query-params'

const GetInfo = () => {
   const info = {
      '1': {
         img: one1,
         title: 'Уединение',
         people: 'до 2 человек ',
         time: 'от 3-х часов',
         for: 'для пар и людей',
         desc: 'Для сближения, улучшения отношений,баланса с собой',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '10 000',
         number: 1,
         about: 'Банная программа с купелью для двоих человек представляет собой специальный комплекс процедур.\nПреимущества такой программы включают:\n1. Уникальный опыт\n2. Укрепление отношений\n3. Очищение организма\n4. Расслабление и снятие стресса\n5. Снятие боли\n6. Повышение иммунитета\n Возможны услуги пар-мастера, а также заказ самовара на дровах, витаминного сета из ягод и орехов. Веник включён в стоимость.'
      },
      '2': {
         img: two,
         title: 'Командный дух',
         people: 'до 10 человек ',
         time: 'от 3-х часов',
         for: 'Для больших групп',
         desc: 'Для практик, улучшения отношений,налаживания контактов',
         about: 'Банная практика "Командный дух" - это метод тренировки и развития групповых динамических навыков и сплоченности в команде при помощи посещения бани.В ходе банной практики "Командный дух" участники группы посещают баню, где проводят различные активности и упражнения, направленные на достижение поставленных целей.Баня помогает расслабиться, снять напряжение и улучшить общую физическую и эмоциональное, психологическое благополучие участников.Банная практика "Командный дух" является эффективным инструментом для развития командной работы и динамики.Она способствует развитию взаимопонимания, сотрудничества и укреплению командной составляющей в рамках команды.',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '12 000',
         number: 2
      },
      '3': {
         img: three,
         title: 'Семейное древо',
         people: 'до 6 человек ',
         time: 'от 3-х часов',
         for: 'Для семей',
         desc: 'Для сближения, улучшения отношений,баланса с собой',
         includes: ['самовар', 'Фен', 'Тапочки', 'Халаты', 'Полотенца', 'Аромапар'],
         price: '15 000',
         number: 3,
         about: 'Программа парения для семей до 6 человек предлагает уникальный опыт отдыха и релаксации. Это идеальный выбор для близких, желающих провести время вместе и насладиться процедурами парения. Программа включает в себя сеансы в парной, где все участники могут насладиться теплом и целительными свойствами пара. Затем можно погрузиться в купель или принять душ, чтобы ощутить приятное охлаждение после парения. Весь процесс парения и охлаждения регулируется опытными специалистами, чтобы обеспечить комфорт и безопасность каждого участника. Эта программа подарит уникальные эмоции и ощущения и станет незабываемым событием для всей семьи.'
      },
   }
   return info
}
const BanProgramPopup = ({ onClose }) => {
   const infos = GetInfo()
   const [productQueryParam] = useQueryParam('productId', StringParam)
   const info = infos[productQueryParam]

   // const about = info.about.split('\n')

   const about = info.about.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
   ))

   return (
      <div className='fixed transform -translate-y-1/2 top-1/2 border overflow-y-auto border-stone-700 rounded-[10px] -translate-x-1/2 left-1/2 z-[10000000] w-[90vw] md:max-w-[1000px] acariMedium h-[90vh] flex justify-between bg-[#EBE8E8] text-black'>
         <div className='p-[20px] pb-[40px] md:p-[40px] max-w-[500px]'>
            <div className="text-stone-700 font-medium mb-[10px] text-md">Программа “{info.title}”</div>
            <div className='flex mb-[20px] gap-[50px]'>
               <div className='flex gap-1'>
                  <img className='aspect-square w-[20px]' src={people} alt="" />
                  <div className="text-center text-stone-700  font-semibold  leading-normal tracking-tight">{info.people}</div>
               </div>

               <div className='flex gap-1'>
                  <img className='aspect-square w-[20px]' src={time} alt="" />
                  <div className="text-center text-stone-700  font-semibold  leading-normal tracking-tight">{info.time}</div>
               </div>
            </div>


            <div className='flex mb-[6px] '>
               <img className='aspect-square w-[20px]' src={check} alt="" />
               <div className=" text-md- text-stone-700  font-semibold ">{info.for}</div>
            </div>
            <div className="text-stone-500 font-medium mb-[20px] leading-snug">{info.desc}</div>



            <div className="text-stone-700 text-md- mb-[10px] font-semibold text-left">Что входит:</div>
            <div className='flex gap-[10px] gap-y-[15px] mb-[20px] flex-wrap'>
               {info.includes.map((incl, i) => {

                  return (
                     <div key={i} className=" h-[17px] md:h-[28.68px] rounded-[10px] border px-[20px] text-[11px] md:text-[18px] border-stone-600">{incl}</div>
                  )
               })}
            </div>

            <div className="text-stone-700 text-md- mb-[10px] font-semibold ">О программе:</div>

            <div className="text-stone-700 text-sm font-semibold mb-[25px] leading-snug">{about}</div>


            <div className="items-center sm:justify-start justify-centers gap-4 flex-col sm:flex-row flex">
               <div onClick={onClose} className=" cursor-pointer flex items-center gap-2 h-3 ">
                  <img src={arrow} className='transform rotate-180' alt="" />
                  <div className="text-stone-700 font-medium  leading-snug">Вернуться назад</div>
               </div>


               <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module'); onClose() }} className="w-[184.02px] cursor-pointer h-[41.89px] flex items-center justify-center rounded-tr-[20px] rounded-bl-[20px] border-2 border-stone-700">
                  <div className="w-[135.03px] h-[17.26px] text-center text-stone-700 text-base font-bold montserrat leading-snug tracking-tight">Забронировать</div>
               </div>


               <a onClick={() => { onClose() }} href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                  <div className="text-center text-zinc-500 font-semibold">Узнать подробнее</div>
               </a>

            </div>

         </div>

         <div className='h-full hidden md:block w-[450px]'>
            <img src={info.img} className='h-full w-full' alt="" />
         </div>

      </div>
   )
}

export default BanProgramPopup