

import inst from 'images/icons/social/white/inst.png'
import what from 'images/icons/social/white/what.png'
import vk from 'images/icons/social/white/vk.png'


const FishContacts = () => {
   return (
      <div className='bg-FBlack px-4 w-full text-white'>
         <div className='text-white font-bold text-center mb-[5vh] text-36px'>Контакты</div>
         <div className='flex w-full justify-between flex-col mb-10 gap-2 md:flex-row'>
            <div className='w-[733.57px] text-white text-[20px ] md:text-[32px] font-semibold  leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область,<br /> городской округ Мытищи,<br /> посёлок Менжинец </div>

            <div className='flex gap-2 flex-col text-left md:text-right'>
               <div className='flex justify-start md:justify-end gap-5'>
                  <a href="https://www.instagram.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={inst} alt="" />
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=79859091202&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={what} alt="" />
                  </a>
                  <a href="https://vk.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={vk} alt="" />
                  </a>
               </div>
               <div className="text-white acari text-[22px] font-medium acari">+7 (499) 505 50 31</div>
               <div className="text-white acari text-[22px] font-medium acari">Время работы 24/7</div>
               <a rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=m24zezD9fWs' className="text-white acari cursor-pointer text-[22px] font-medium underline  acari ">Как проехать</a>
            </div>
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
   )
}

export default FishContacts