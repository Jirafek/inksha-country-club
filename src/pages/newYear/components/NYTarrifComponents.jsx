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

function TariffComponents() {
   return (
      <div className="flex flex-col yaes text-white items-center justify-center gap-[100px]">
         {/* Блок 1 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A]  rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     01
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     Тариф &quot;  Звездный Огонь&quot;
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>Домик на 6 гостей</p>
                        <p>Локация: Олимпийская деревня</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание 4 суток</li>
                              <li>новогодний ужин</li>
                              <li>завтраки</li>
                              <li>
                                 участие в новогодних мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           32 000
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
                     02
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     Тариф  &quot; Снежное Шале&quot;
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>домик на 15 человек </p>
                        <p>Локация: Шале</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 31 по 1 января</li>
                              <li>новогодний ужин</li>
                              <li>Возможно проживание в коттедже (узнавать по телефону)</li>
                              <li>
                                 участие в новогодних мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           101 000
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

         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     03
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     Тариф  &quot; Коттеджные Сказки&quot;
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>Двухэтажный дом на 10 гостей</p>
                        <p>Локация: Коттедж</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 30 декабря по 3 января</li>
                              <li>новогодний ужин</li>
                              <li>участие в новогодних мероприятиях</li>
                              <li>
                                 завтраки
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           53 000
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

         {/* Блок 3 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-[#BC8E4A] place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     04
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     Тариф &quot; Лесные Снегурочки&quot;
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>Лесная локация с баней, верандой и костровой зоной на 10 гостей</p>
                        <p>Локация: Лесная Резиденция</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 31 декабря по 2 января</li>
                              <li>новогодний ужин</li>
                              <li>участие в новогодних мероприятиях</li>
                              <li>
                                 завтраки
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           101 000
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
         {/* Блок 4 */}

         {/* Блок 5 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-[#BC8E4A] place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-[40px] sm:-left-[50px] -top-[100px] sm:-top-[90px] md:-top-[90px] md:-left-[50px]  text-3xl text-NYred font-bold yaes">
                     05
                  </div>
                  <h1 className="text-center text-lg font-bold text-violet">
                     Тариф &quot; Дуплекс С Новогодним Чудом&quot;
                  </h1>
                  <div className=" flex-col md:flex-row mb-[2%]  mx-5 p-5  rounded-lg flex justify-between">
                     <div className="text-md">
                        <p>Дом-дуплекс на 10 гостей</p>
                        <p>Локация: Дуплекс</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold  text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 30 декабря по 3 января</li>
                              <li>новогодний ужин</li>
                              <li>участие в новогодних мероприятиях</li>
                              <li>
                                 завтраки
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           51 000
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
