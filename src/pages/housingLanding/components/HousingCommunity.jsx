import React from 'react'
import communityImg from 'images/housing/communityImg.webp'

import s from './../housing.module.scss'

const GetServices = () => {
   const list = [
      ["Социальные встречи и мероприятия", "У нас всегда что-то происходит! Присоединяйтесь к нашим социальным встречам, тематическим вечеринкам и мероприятиям, где вы сможете завести новых друзей и насладиться общением в приятной обстановке."],
      ["Поддержка и обслуживание", "Наша дружелюбная команда всегда готова помочь вам с любыми вопросами и запросами. От уборки в вашем домике до организации развлекательных мероприятий."],
      ["Эксклюзивные преимущества", "Как член нашего сообщества, вы получаете доступ к таким преимуществам как скидки на услуги и развлечения на территории клуба, специальные акции и предложения, доступные только для наших членов."],
   ]

   return list
}

const HousingCommunity = () => {
   return (
      <div>
         <div className='flex justify-between gap-1 p-[20px] text-center md:text-left md:pl-[60px] md:pt-[60px] mb-[20px] items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='font-bold text-36px'>ОБЩЕСТВО И<span className='text-brown'> СООБЩЕСТВО</span></h2>
               <p className='text-24px'><span className='font-bold'>Икша Кантри Клаб</span> - это не просто место отдыха, это сообщество единомышленников, где каждый гость чувствует себя как дома. Присоединившись к нашему клубу, вы становитесь частью этого особенного общества и получаете ряд привилегий и преимуществ.</p>
            </div>
         </div>

         {/* pc version */}
         {/* <div className='relative hidden md:block max-h-[600px] overflow-hidden'>
            <div className='absolute inset-0 w-full h-full flex flex-col justify-center items-center gap-[50px]'>
               {GetServices().map((item, i) => (
                  <div key={i} className='px-[30px] py-[15px] w-[80vw] bg-[#221C1C] text-brown border border-brown rounded-[10px]'>
                     <div className='underline text-20px'>{item[0]}</div>
                     <div className='text-20px'>{item[1]}</div>
                  </div>
               ))}
            </div>
            <img src={communityImg} className='object-cover w-full h-full md:max-h-[600px]' alt="Community" />
         </div> */}

         {/* //mobile version */}
         <div className={`${s.communityBg} flex relative flex-col py-[30px] items-center gap-[40px] justify-center`}>
            {GetServices().map((item, i) => (
               <div key={i} className='relative z-[1] px-[30px] py-[15px] w-[90vw] md:w-[80vw] bg-[#221C1C] text-brown border border-brown rounded-[10px]'>
                  <div className='mb-2 font-semibold underline text-20px'>{item[0]}</div>
                  <div className='text-20px'>{item[1]}</div>
               </div>
            ))}
            <img src={communityImg} className='absolute inset-0 object-cover object-center w-full h-full z-[0]' alt="" />
         </div>

      </div>
   )
}

export default HousingCommunity
