import React from 'react'

import img1 from "images/housing/start/1.webp"
import img2 from "images/housing/start/2.webp"
import img3 from "images/housing/start/3.webp"
import img4 from "images/housing/start/4.webp"

import leaves from "images/housing/pngs/leaves.png"
import HousingMobileSliders from './HousingMobileSlider'
import Reveal from 'common/Reveal'
import { fadeIn } from 'constants/motion'

const list = [
   ["Исследуйте наши варианты", "Ознакомьтесь с нашим разнообразным выбором домов и тарифных планов, чтобы найти оптимальный вариант для себя и вашей семьи", img1],
   ["Посетите наш клуб", "Запланируйте посещение нашего клуба, чтобы лично оценить его уникальные возможности и атмосферу, а также пообщаться с нашей командой и другими членами сообщества", img2],
   ["Исследуйте наши варианты", "Ознакомьтесь с нашим разнообразным выбором домов и тарифных планов, чтобы найти оптимальный вариант для себя и вашей семьи", img3],
   ["Исследуйте наши варианты", "Ознакомьтесь с нашим разнообразным выбором домов и тарифных планов, чтобы найти оптимальный вариант для себя и вашей семьи", img4]
]

const HousingStart = () => {
   return (
      <div id="howtostart" key="howtostart" className='relative mb-[60px]'>
         <img className='absolute top-0 right-0 z-[0]' src={leaves} alt="Leaves" />

         <div className='relative text-center z-[1]'>
            <div className='flex justify-between gap-1 p-[20px] md:pl-[60px] md:pt-[60px] mb-[20px] items-center'>
               <div className='flex gap-[40px] flex-col'>
                  <h2 className='font-bold text-36px'>КАК<span className='text-brown'> НАЧАТЬ?</span></h2>
                  <p className='text-24px'>
                     Готовы начать своё приключение в мире загородного отдыха в <span className='font-bold'>Икша Кантри Клаб?</span> Вот несколько шагов, которые помогут вам сделать первый шаг:
                  </p>
               </div>
            </div>

            <div className='grid grid-cols-1 px-[15px] md:px-auto md:grid-cols-2 gap-y-[40px] place-items-center'>
               {list.map((item, i) => (
                  <Reveal variants={fadeIn()} key={i} duration={0.5} delay={0 + i / 10} >
                     <div className='max-w-[480px] flex flex-col justify-center items-center gap-4'>
                        <div className='px-[20px] relative py-[20px] flex bg-[#221C1C] text-brown border border-brown rounded-[10px]'>
                           <p className='absolute top-0 flex items-end self-start justify-end text-lg font-extrabold right-4'>
                              {`0${i + 1}`}
                           </p>
                           <div>
                              <div className='font-semibold underline text-20px'>{item[0]}</div>
                              <div className='text-17px'>{item[1]}</div>
                           </div>
                        </div>
                        <img src={item[2]} className='w-[80%] hidden md:block object-cover rounded-[10px]' alt="Housing option" />
                     </div>
                  </Reveal>
               ))}
            </div>
            <HousingMobileSliders />
         </div>
      </div>
   )
}

export default HousingStart
