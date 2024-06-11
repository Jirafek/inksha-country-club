import React from 'react'
import logo from "images/housing/pngs/logo.png"
import conceptImg from "images/housing/conceptImg.webp"
import s from './../housing.module.scss'
import dash from "images/housing/bullet/brown.png"
import Reveal from 'common/Reveal'
import { fadeIn } from 'constants/motion'
const GetConceptList = () => {
   const list = [
      "Домик мечты на берегу Икшинского водохранилища",
      "Пляж в 100 метрах",
      "Круглосуточная охрана",
      "Еженедельная уборка",
      "Раздолье для вашего питомца",
      "Скидки на развлечения",
      "Баня и купель",
      "Спортивные площадки",
      "Регулярные мероприятия",
   ]
   return list
}

const HousingConcept = () => {
   return (
      <div key="concept" id="concept" className='p-[20px] md:p-[60px] md:pr-0 pt-[30px] md:pt-auto w-full h-full'>
         <div className='flex flex-col text-center md:text-left md:flex-row justify-between gap-5 md:gap-1 mb-[20px] items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='font-bold text-36px'>ДОМА ВЫХОДНОГО ДНЯ:<span className='text-brown'> КОНЦЕПТ</span></h2>
               <p className='text-24px'>А что если у вас будет свой укромный уголок на природе, куда можно выбраться всей семьёй в любой момент времени по цене аренды небольшой квартиры в Москве?</p>
            </div>
            <img src={logo} className='object-cover aspect-square max-w-[200px] max-h-[200px]' alt="" />
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 md:flex-row md:max-h-[600px] text-left'>
            <div className='flex flex-col justify-center items-center gap-[32px] h-full'>
               <div className='text-brown font-bold w-full text-center md:text-left text-md+'>Что мы предлагаем?</div>
               <div className={`flex flex-col self-center md:self-start  items-center md:items-start p-0 text-center md:text-left `}>
                  {GetConceptList().map((item, i) => {
                     return (
                        <Reveal variants={fadeIn()} key={i} duration={1} delay={0 + i / 10}>
                           <div className='text-24px mb-[12px] flex gap-1 items-center' ><span><img src={dash} alt="" /></span>{item}</div>
                        </Reveal>
                     )
                  })}
               </div>
            </div>
            <img src={conceptImg} className='object-cover h-[50vh] md:h-full  w-full' alt="" />
         </div>
      </div>
   )
}

export default HousingConcept