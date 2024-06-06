import React from 'react'

import img from "images/housing/env.png"

import tree from "images/housing/pngs/tree.png"

const HousingEnv = () => {
   return (
      <div className='relative'>

         <div className='flex justify-between relative z-[1] gap-[60px] px-[60px] pt-[60px] mb-[60px] items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='text-36px font-bold'>ОБЛАСТЬ И<span className='text-brown'> ОКРУЖЕНИЕ</span></h2>
               <p className='text-24px'>Икша Кантри Клаб находится в прекрасной Московской Области, окружённой природными богатствами и достопримечательностями. Вот лишь несколько интересных мест, которые можно посетить в окрестностях нашего клуба:</p>
            </div>
         </div>

         <div className='relative z-[1]'>
            <div className='bg-[#4D382B] text-center rounded-[20px] bg-opacity-80 p-5 font-extrabold transform right-[40px]  text-white max-w-[700px] flex justify-between gap-1 top-[40vh]'>
               <div className='text-36px p-0 text-brown m-0 w-auto'>
                  Дома выходного дня для вашего отдыха круглый год
               </div>
               <div className='text-md- self-end text-white'>
                  <div className='text-md+ text-nowrap'>от 60</div>
                  тысяч в месяц
               </div>
            </div>
         </div>

         <div className='absolute inset-0 z-[0] flex justify-end items-end'>
            {/* <img src={ } alt="" /> */}
            <img src={img} className='top-0 object-cover w-screen max-h-[420px]' alt="" />
         </div>

      </div>
   )
}

export default HousingEnv