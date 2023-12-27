// import bat from "../assets/bat.png";
// import cat from "../assets/cat.png";
// import spooky from "../assets/spooky.png";
// import candy from "../assets/candy.png";
// import hat from "../assets/hat.png";
// import spooky2 from "../assets/spooky2.png";
// import NYGreenButton from "common/NYGreenButton";

import tar1 from 'images/NY/tariff/1.webp'
import tar2 from 'images/NY/tariff/2.webp'
import tar3 from 'images/NY/tariff/3.webp'
import tar4 from 'images/NY/tariff/4.webp'
import tar5 from 'images/NY/tariff/5.webp'
// import arrow from "icons/arrow.png";
import { Reveal } from "common/Reveal"
import { slideFromLeft, slideFromRight } from "constants/motion"
import { Link as ScrollLink } from "react-scroll"
import NYGreenButton from './NYGreenButton'




const tariffContent = {
   1: {
      counter: '01',
      title: 'Тариф "Звездный Огонь"',
      dom: 'Домик на 6 гостей',
      location: 'Домик Олимпийская деревня',
      includes: [
         'Проживание от 3 суток',
         '2 часа бани на воде',
         'участие в новогодних мероприятиях', 'заезд 30, выезд 2'
      ],
      price: '26 250',

   },
   2: {
      counter: '02',
      title: 'Тариф "Снежное Шале"',
      dom: 'Домик на 10 человек',
      location: 'Шале',
      includes: [
         'Проживание в новогоднюю ночь (без спальных мест)',
         '2 часа бани на воде',
         'участие в новогодних мероприятиях. Возможно проживание в коттедже (узнавать по телефону)', 'заезд 31, выезд 1'
      ],
      price: '59 000р'
   },
   3: {
      counter: '03',
      title: 'Тариф "Коттеджные Сказки"',
      dom: 'Двухэтажный дом на 10 гостей',
      location: 'Коттедж',
      includes: [
         'Проживание от 3 суток',
         '2 часа бани на воде',
         'участие в новогодних мероприятиях', 'заезд 30, выезд 2'
      ],
      price: '49 000р',

   },
   4: {
      counter: '04',
      title: 'Тариф "Лесные Снегурочки"',
      dom: 'Лесная локация с баней, верандой и костровой зоной на 10 гостей',
      location: 'Лесная Резиденция',
      includes: [
         'Проживание от 2 суток',
         '2 часа бани на воде',
         'участие в новогодних мероприятиях', 'заезд 31, выезд 2 января'
      ],
      price: '45 000р',

   },
   5: {
      counter: '05',
      title: 'Тариф "Дуплекс С Новогодним Чудом"',
      dom: 'Дом-дуплекс на 10 гостей',
      location: 'Дуплекс',
      includes: [
         'Проживание от 3 суток',
         '2 часа бани на воде',
         'участие в новогодних мероприятиях', 'заезд 30, выезд 2'
      ],
      price: '34 500р',

   }
}

function TariffComponents() {
   return (
      <div className="flex flex-col yaes text-white items-center justify-center gap-[100px]">
         {/* Блок 1 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A]  rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[1].counter}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[1].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-3  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>  {tariffContent[1].dom}</p>
                        <p>  {tariffContent[1].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              {tariffContent[1].includes.map((item, i) => {
                                 return (

                                    <li key={i}>{item}</li>
                                 )
                              })}
                              {/* <li>новогодний ужин</li>
                              <li>завтраки</li>
                              <li>
                                 участие в новогодних мероприятиях
                              </li> */}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[1].price} <span className='text-sm'>сутки</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar1}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
                        className="absolute -bottom-10 rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        Забронировать место
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 2 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-[#BC8E4A] place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[2].count}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[2].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-3  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[2].dom}</p>
                        <p>{tariffContent[2].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">Что включено</h2>
                           <ul className="list-disc">
                              {tariffContent[2].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[2].price} <span className='text-sm'>сутки</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar2}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
        className="absolute -top-10 rotate-180 -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
        src={bat}
        alt=""
     /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        Забронировать место
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>

            </Reveal>
         </div>

         {/* Блок 3 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[3].count}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[3].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-3  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[3].dom}</p>
                        <p>{tariffContent[3].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">Что включено</h2>
                           <ul className="list-disc">
                              {tariffContent[3].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[3].price}<span className='text-sm'>сутки</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar3}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
               className="absolute top-[100px] rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
               src={bat}
               alt=""
            /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        Забронировать место
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 4 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-[#BC8E4A] place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[4].count}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[4].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-3  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[4].dom}</p>
                        <p>{tariffContent[4].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">Что включено</h2>
                           <ul className="list-disc">
                              {tariffContent[4].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[4].price}<span className='text-sm'>сутки</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar4}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
               className="absolute -top-10  -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
               src={bat}
               alt=""
            /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        Забронировать место
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 5 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     {tariffContent[5].count}
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     {tariffContent[5].title}
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-3  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>{tariffContent[5].dom}</p>
                        <p>{tariffContent[5].location}</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">Что включено</h2>
                           <ul className="list-disc">
                              {tariffContent[5].includes.map((item, i) => (
                                 <li key={i}>{item}</li>
                              ))}
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold whitespace-nowrap">
                           {tariffContent[5].price} <span className='text-sm'>сутки</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-12 md:-right-14">
                     <img
                        src={tar5}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] "
                        alt=""
                     />
                  </div>
                  <div>
                     {/* <img
               className="absolute -bottom-10 rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
               src={bat}
               alt=""
            /> */}
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <NYGreenButton className="absolute text-black right-0  -bottom-5">
                        Забронировать место
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

      </div>
   )
}

export default TariffComponents
