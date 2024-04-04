import React from "react"
import { useTranslation } from "react-i18next"
import hero from "images/birth/heroBg.png"
import arrow from "icons/arrow.png"
import Button from "common/Button"
import trans1 from "images/korpLanding/trans1.png"

import s from './../birth.module.scss'

const BirthHero = () => {
   const { t } = useTranslation()

   return (
      <div className={`relative  min-h-screen `}>
         <div className={`${s.heroBg} h-screen`}></div>
         <div className="wrapper w-full absolute transform -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 z-10 py-[70px]">
            <div className="text-center">
               <h1 className="text-xl font-bold text-BirthDarkPurple">
                  День Рождения
               </h1>
               <div className="my-[20px] text-md text-BirthDarkPurple font-semibold">
                  Наскучило праздновать день рождения и праздники дома или в ресторане?
                  Отметь его на природе в <span className='font-[900]'>Икша Кантри Клабе!</span> <br />
                  Мы организуем твой день, а тебе останется только наслаждаться видом на Икшинское водохранилище и вдыхать свежий воздух!
               </div>
               <div className="relative">
                  <img
                     className={` ${s.hero_blur} aspect-video max-h-[600px] w-full object-cover`}
                     src={hero}
                     alt=""
                  />
                  <a href="#form">
                     <Button className="absolute montserrat -bottom-7 md:-bottom-5 py-[20px] left-1/2 h-[50px]  min-w-[310px] sm:w-[600px] bg-BirthDarkPurple -translate-x-1/2 text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        {t('korp.hero.button')}

                     </Button>
                  </a>
               </div>
            </div>
         </div>

      </div>
   )
}

export default BirthHero
