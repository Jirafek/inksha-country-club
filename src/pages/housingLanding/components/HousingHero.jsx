import React from 'react'

import bg from 'images/housing/hero.webp'

import qr from 'images/housing/pngs/qr.png'
import Reveal from 'common/Reveal'
import { bounce, slideAndFade, slideFromBottom, slideFromLeft, slideFromRight } from 'constants/motion'
import Button from 'common/Button'
import { getPhoneNumber } from 'utils/helpers'


const HousingHero = () => {
   return (
      <div className='relative w-full h-screen'>
         <img src={bg} className='object-cover w-full h-full' alt="Housing Hero Background" />
         <div className='absolute inset-0 z-10 flex '>

            <div className='relative w-full h-full'>
               <Reveal duration={2} variants={slideFromLeft()}>
                  <div className='text-white rounded-[20px] w-[90vw] md:w-auto absolute transform left-1/2 -translate-x-1/2 top-[80px] font-extrabold text-xl text-nowrap bg-[#4D382B] bg-opacity-80 p-5'>
                     ОБРЕТИ ВТОРОЙ ДОМ<br />
                     <span className='text-HousingGreen'>В ИКША КАНТРИ КЛАБ</span>
                  </div>
               </Reveal>

               <Reveal delay={0.5} duration={2} variants={slideAndFade()}>
                  <div className='bg-[#4D382B] bg-opacity-80 rounded-[20px] p-5 font-medium md:font-extrabold absolute transform left-1/2 -translate-x-1/2 text-center top-[40vh] md:right-[5vw] md:transform-none md:text-left md:top-[40vh] text-white w-[90vw] md:w-[80%] md:max-w-[700px] md:flex justify-between gap-1 '>
                     <div className='w-auto p-0 m-0 text-36px'>
                        Дома выходного дня для вашего отдыха круглый год
                        <span className='block text-center text-md- md:hidden md:self-end md:text-right'>
                           <span className='text-md+ md:font-medium font-bold md:text-nowrap'>от 60 </span>
                           тысяч в месяц
                        </span>
                     </div>
                     <div className='hidden text-center text-md- md:block md:self-end md:text-right'>
                        <div className='text-md+ md:text-nowrap'>от 60</div>
                        тысяч в месяц
                     </div>
                  </div>
               </Reveal>

               <div className='bg-[#4D382B] rounded-[20px] bg-opacity-80 p-5 absolute transform md:transform-none text-white w-[90%] md:max-w-[500px] flex flex-col left-1/2 md:left-auto -translate-x-1/2 bottom-5 md:right-[10vw]'>
                  <div className='flex flex-col justify-between gap-1'>
                     <div className='font-bold text-md-'>
                        Присоединяйся сейчас!
                     </div>
                     <div className='font-normal'>
                        Заполняй анкету онлайн
                        или уточняй у администратора
                     </div>
                     <a href={`tel:${getPhoneNumber()}`} className='font-extrabold text-md-'>
                        {getPhoneNumber()}
                     </a>
                  </div>

                  <Button href="#form" className="flex w-full text-white bg-brown">Подробнее</Button>
                  {/* <img className='object-contain aspect-square' src={qr} alt="" /> */}
               </div>

            </div>
         </div>
      </div>
   )
}

export default HousingHero
