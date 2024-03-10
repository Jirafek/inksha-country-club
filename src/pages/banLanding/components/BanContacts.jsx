

import inst from 'images/icons/social/black/inst.png'
import what from 'images/icons/social/black/what.png'
import vk from 'images/icons/social/black/vk.png'
import s from './../ban.module.scss'
import { useURLData } from 'utils/URLData'
import { getWALink } from 'utils/helpers'

const ChillContacts = () => {

   const { utm_source } = useURLData()

   return (
      <div id='contacts' className=' mt-[70px] w-full text-black'>
         <div className='text-black font-bold text-center mb-[5vh] text-lg'>Контакты</div>
         <div className='flex w-full px-[20px] md:px-[40px] justify-between flex-col pb-10 gap-2 md:flex-row'>
            <div className='md:w-[733.57px] text-black text-md font-semibold hidden md:block leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область,<br /> городской округ Мытищи,<br /> посёлок Менжинец </div>
            <div className='md:w-[733.57px] text-black text-md font-semibold block md:hidden leading-[44.80px] tracking-wide'>Мы находимся по адресу Московская область, городской округ Мытищи, посёлок Менжинец </div>


            <div className='flex gap-2 flex-col text-left md:text-right'>
               <div className='flex justify-start md:justify-end gap-5'>
                  <a href="https://www.instagram.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={inst} alt="" />
                  </a>
                  <a href={getWALink()} target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={what} alt="" />
                  </a>
                  <a href="https://vk.com/ikshacountryclub" target='_blank' rel="noreferrer">
                     <img className='w-[30px] md:w-[50px]' src={vk} alt="" />
                  </a>
               </div>
               {
                  utm_source === 'yandex' ?
                     <a href={'tel:+74995055067'}>
                        <h4 className={`text-black text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-67</h4>
                     </a>
                     : utm_source === 'vkontakte' ?
                        <a href={'tel:+74995055087'}>
                           <h4 className={`text-black text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-87</h4>
                        </a>
                        :
                        <a href={"tel:+74995055031"}>
                           <h4 className={`text-black text-md- font-medium underline ${s.acariMedium}`}>+7(499) 505-50-31</h4>
                        </a>

               }
               {/* <div className={`text-black text-md- font-medium ${s.acariMedium}`}>+7 (499) 505 50 31</div> */}
               <div className={`text-black text-md- font-medium ${s.acariMedium}`}>Время работы 24/7</div>
               <a rel="noreferrer" target='_blank' href='https://www.youtube.com/watch?v=m24zezD9fWs' className={`text-black cursor-pointer text-md- font-medium underline  ${s.acariMedium} `}>Как проехать</a>
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

export default ChillContacts