import React from 'react'
import bg from "images/housing/services.webp"
import { fadeIn } from 'constants/motion'
import Reveal from 'common/Reveal'


const GetServices = () => {
   const list = [
      ["Рестораны и кафе", "Незабываемый опыт кулинарного искусства ждёт вас в наших ресторанах и кафе, где вы сможете насладиться изысканными блюдами и напитками в уютной атмосфере. Для любителей BBQ работает наш повар"],
      ["Баня и спа", "Отдохните и расслабьтесь в нашем спа, где вы можете насладиться массажем, SPA-процедурами и другими уходовыми процедурами, помогающими вам ощутить полное расслабление"],
      ["Детские программы", "Мы заботимся о маленьких гостях! Наш клуб предлагает разнообразные детские программы и мероприятия, включая игровые площадки, детские клубы и анимационные шоу"],
      ["Спортивные площадки", "Для активного  отдыха предлагаем широкий выбор спортивных и развлекательных площадок, включая воллейбольные и футбольные площадки, а также велосипеды, сап-доски и многое другое"],
   ]

   return list
}


const HousingServices = () => {
   return (
      <div id="services" key="services" className='md:pl-[60px] p-5 md:pt-[60px] border-y border-brown'>
         <div className='flex justify-between text-center md:text-left mb-[20px] gap-1 items-center'>
            <div className='flex gap-[40px] flex-col'>
               <h2 className='font-bold text-36px'>УСЛУГИ И<span className='text-brown'> УДОБСТВА</span></h2>
               <p className='text-24px'>В Икша Кантри Клабе мы гордимся широким спектром развлекательных<br /> программ и мероприятий для всех наших гостей</p>
            </div>
         </div>

         <div className='grid flex-col-reverse grid-cols-1 place-content-between md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex col-span-1 flex-col py-[20px] justify-center px-[10px] gap-[20px] items-center'>
               {GetServices().map((item, i) => {
                  return (
                     <Reveal variants={fadeIn()} key={i} duration={0.5} delay={0 + i / 10} >
                        <div className='px-[30px] py-[15px] max-w-[420px] text-brown border border-brown rounded-[10px]'>
                           <div className='underline text-17px'>{item[0]}</div>
                           <div className='text-14px'>{item[1]}</div>
                        </div>
                     </Reveal>
                  )
               })}
            </div>
            <img src={bg} className='object-cover col-span-1 lg:col-span-2 h-[60vh] md:h-full rounded-tl-[10px]' alt="" />
         </div>
      </div >
   )
}

export default HousingServices