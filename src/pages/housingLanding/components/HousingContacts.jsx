import React from 'react'

import bg from "images/housing/contacts.webp"


import tg from "icons/social/brown/tg.png"
import inst from "icons/social/brown/inst.png"
import vk from "icons/social/brown/vk.png"


const socials = [
   { img: tg, link: "https://t.me/IkshaCountryClubSupportBot" },
   { img: inst, link: "https://www.instagram.com/ikshacountryclub" },
   { img: vk, link: "https://vk.com/ikshacountryclub" }
]

const HousingContacts = () => {
   return (
      <div className='md:bg-white md:p-[30px]' id="contacts" key="contacts">
         {/* pc version */}
         <div className='hidden bg-[#221C1C] md:grid grid-cols-3 rounded-[100px]'>
            <div className='flex flex-col col-span-2 justify-center py-[50px] gap-[10vh] items-center'>
               <div className='font-bold text-center text-36px text-brown'>
                  КОНТАКТНАЯ <span className='text-white'>ИНФОРМАЦИЯ</span>
               </div>

               <div className='max-w-[70%]'>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Адрес:</div>
                     <div className='font-bold'>Московская область, городской округ Мытищи, посёлок Менжинец</div>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Телефон:</div>
                     <a href="tel:+74995055031" target='_blank' className='font-bold underline'>+7 (499) 505 50 31</a>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>E-mail:</div>
                     <a target="_blank" href="mailto:contact@ikshacountryclub.com" className='font-bold underline'>contact@ikshacountryclub.com</a>
                  </div>

                  <div className='border-b-2 border-brown pb-[25px] pt-[50px] flex gap-3 text-24px'>
                     <div className='text-brown'>Официальный сайт:</div>
                     <a target="_blank" href="https://ikshacountryclub.com" className='font-bold underline'>www.ikshacountryclub.com</a>
                  </div>

               </div>
            </div>
            <img src={bg} className='object-cover w-full h-full col-span-1' alt="photo" />
         </div>
         {/* mobile version */}
         <div className='flex flex-col gap-5 p-5 md:hidden'>
            <div className='font-bold text-center text-36px'>Контакты</div>
            <div>Мы находимся по адресу Московская область, городской округ Мытищи, посёлок Менжинец </div>

            <div className=''>
               <a href="tel:+74995055031" target='_blank' className='font-bold underline'>+7 (499) 505 50 31</a>
            </div>

            <div className=''>
               <a href="https://ikshacountryclub.com/#contacts" target='_blank' className='underline'>как проехать</a>
            </div>

            <div className='flex flex-col'>
               <div className='text-brown'>E-mail:</div>
               <a target="_blank" href="mailto:contact@ikshacountryclub.com" className='font-bold underline'>contact@ikshacountryclub.com</a>
            </div>

            <div className=''>
               <div className='text-brown'>Официальный сайт:</div>
               <a target="_blank" href="https://ikshacountryclub.com" className='font-bold underline'>www.ikshacountryclub.com</a>
            </div>

            <div className='font-semibold'>Подписывайтесь на нас в наших соцсетях</div>

            <div className='flex flex-col gap-4'>
               {socials.map((item, i) => {
                  return (
                     <div key={i} className='flex items-center gap-2 text-brown text-md'>
                        <img src={item.img} className='aspect-square w-[40px]' alt="" />
                        <a href={item.link} target='_blank' className='underline'>@ikshacountryclub</a>
                     </div>
                  )
               })}
            </div>

            <iframe
               className='h-[230px] md:h-[350px]'
               src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor"
               // scroll="false"
               width="100%"
               height="800"
            // frameBorder="0"
            ></iframe>

         </div>

      </div>
   )
}

// https://ikshacountryclub.com/#contacts

export default HousingContacts