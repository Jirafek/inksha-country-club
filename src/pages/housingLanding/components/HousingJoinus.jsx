import React from 'react'

import img from "images/housing/joinus.webp"

import leaves from "images/housing/pngs/leaves.png"

import qr from 'images/housing/pngs/qr.png'

import tg from "icons/social/brown/tg.png"
import inst from "icons/social/brown/inst.png"
import vk from "icons/social/brown/vk.png"

const socials = [
   { img: tg, link: "https://t.me/IkshaCountryClubSupportBot" },
   { img: inst, link: "https://www.instagram.com/ikshacountryclub" },
   { img: vk, link: "https://vk.com/ikshacountryclub" }
]

const HousingJoinus = () => {
   return (
      <div className='relative '>

         <img className='absolute top-0 right-0 z-[0] hidden md:block' src={leaves} alt="Leaves" />
         <img src={img} className='w-full h-[350px] object-cover hidden md:block' alt="" />
         <div className='py-[60px]'>



            <div className='text-36px hidden md:block mb-[50px] text-brown text-center font-bold'>
               ПРИСОЕДИНЯЙСЯ К НАМ<span className='text-white'> В СОЦСЕТЯХ!</span>
            </div>



            <div className='flex justify-center gap-[140px] items-center'>
               <div className='bg-[#4D382B] rounded-[20px] bg-opacity-80 p-5 text-white max-w-[500px] flex justify-between gap-4'>
                  <div className='flex flex-col justify-between gap-1'>
                     <div className='text-md- font-bold'>
                        Присоединяйся сейчас!
                     </div>
                     <div className='font-normal'>
                        Заполняй анкету онлайн
                        или уточняй у администратора
                     </div>
                     <div className='text-md- font-extrabold'>
                        + 7-499-505-50-31
                     </div>
                  </div>

                  <img className='object-contain aspect-square' src={qr} alt="" />
               </div>


               <div className='border hidden border-brown md:flex max-w-[500px] flex-col pr-[90px] rounded-[16px] gap-[30px] p-[20px]'>
                  {socials.map((item, i) => {
                     return (
                        <div key={i} className='flex text-brown items-center justify-center text-md gap-2'>
                           <img src={item.img} alt="" />
                           <a href={item.link} target='_blank' className='underline'>@ikshacountryclub</a>
                        </div>
                     )
                  })}
               </div>

            </div>
         </div>
      </div>
   )
}

export default HousingJoinus