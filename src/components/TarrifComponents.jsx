import bat from "../assets/bat.png";
import cat from "../assets/cat.png";
import spooky from "../assets/spooky.png";
import candy from "../assets/candy.png";
import hat from "../assets/hat.png";
import spooky2 from "../assets/spooky2.png";
import Button from "../common/Button";
import arrow from "../assets/arrow.png";
import { Reveal } from "./../common/Reveal";
import { slideFromRight, slideFromLeft } from "../constants/motion";
import { Link as ScrollLink } from "react-scroll";

function TariffComponents() {
   return (
      <div className="flex flex-col items-center justify-center gap-[100px]">
         {/* Блок 1 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-pumpkin  rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-5 -top-5 md:-top-10 text-xl">
                     01
                  </div>
                  <h1 className="text-center text-[15px] md:text-[32px] font-bold text-violet">
                     &quot; Тариф Волшебные Олимпийские&quot;
                  </h1>
                  <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5 border-solid rounded-lg flex justify-between">
                     <div className="text-tarif">
                        <p>2-6 человек</p>
                        <p>Локация: Олимпийская деревня</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 27 по 29</li>
                              <li>Проживание с 28 по 30</li>
                              <li>
                                 Торжественный ужин, участие во всех
                                 мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           46,000
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                     <img
                        src={cat}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                        alt=""
                     />
                  </div>
                  <div>
                     <img
                        className="absolute -bottom-10 rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     />
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                        Забронировать место
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 2 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-pumpkin place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-5 -top-5 md:-top-10 text-xl">
                     02
                  </div>
                  <h1 className="text-center text-[15px] md:text-[32px] font-bold text-violet">
                     &quot;Тариф Шале Чародеев&quot;
                  </h1>
                  <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5 border-solid rounded-lg flex justify-between">
                     <div className="text-tarif">
                        <p>6-10 человек</p>
                        <p>Локация: Шале</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание 27, 28 ИЛИ 29 октября</li>
                              <li>
                                 Торжественный ужин, участие во всех
                                 мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           55,000
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                     <img
                        src={candy}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                        alt=""
                     />
                  </div>
                  <div>
                     <img
                        className="absolute -top-10 rotate-180 -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     />
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                        Забронировать место
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-pumpkin place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-5 -top-5 md:-top-10 text-xl">
                     03
                  </div>
                  <h1 className="text-center text-[15px] md:text-[32px] font-bold text-violet">
                     &quot;Тариф Коттеджные Заклинатели&quot;
                  </h1>
                  <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5 border-solid rounded-lg flex justify-between">
                     <div className="text-tarif">
                        <p>6-10 человек</p>
                        <p>Локация: Коттедж</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 27 по 29</li>
                              <li>Проживание с 28 по 30</li>
                              <li>
                                 Торжественный ужин, участие во всех
                                 мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           70,000
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                     <img
                        src={hat}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                        alt=""
                     />
                  </div>
                  <div>
                     <img
                        className="absolute top-[100px] rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     />
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                        Забронировать место
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>

         {/* Блок 3 */}
         <div className="place-self-end">
            <Reveal variants={slideFromLeft()}>
               <div className="bg-pumpkin place-self-end rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-5 -top-5 md:-top-10 text-xl">
                     04
                  </div>
                  <h1 className="text-center text-[15px] md:text-[32px] font-bold text-violet">
                     &quot;Тариф Лесные Ведьмы&quot;
                  </h1>
                  <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5 border-solid rounded-lg flex justify-between">
                     <div className="text-tarif">
                        <p>6-10 человек</p>
                        <p>Локация: Лесная Резиденция</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 27 по 29</li>
                              <li>Проживание с 28 по 30</li>
                              <li>
                                 Торжественный ужин, участие во всех
                                 мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           75,000
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                     <img
                        src={spooky}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                        alt=""
                     />
                  </div>
                  <div>
                     <img
                        className="absolute -top-10  -right-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     />
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                        Забронировать место
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>
         {/* Блок 4 */}

         {/* Блок 5 */}
         <div className="place-self-start">
            <Reveal variants={slideFromRight()}>
               <div className="bg-pumpkin place-self-start rounded-[16px] p-[2%] max-w-[1000px] relative">
                  <div className="absolute -left-5 -top-5 md:-top-10 text-xl">
                     05
                  </div>
                  <h1 className="text-center text-[15px] md:text-[32px] font-bold text-violet">
                     &quot;Тариф Дуплекс Загадок&quot;
                  </h1>
                  <div className="border flex-col md:flex-row mb-[2%] border-violet mx-5 p-5 border-solid rounded-lg flex justify-between">
                     <div className="text-tarif">
                        <p>6-10 человек</p>
                        <p>Локация: Дуплекс</p>
                        <div className="ml-[10%]">
                           <h2 className="font-bold text-violet">
                              Что включено
                           </h2>
                           <ul className="list-disc">
                              <li>Проживание с 27 по 29</li>
                              <li>Проживание с 28 по 30</li>
                              <li>
                                 Торжественный ужин, участие во всех
                                 мероприятиях
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex items-center justify-center">
                        <div className="rotate-0 md:rotate-90 text-xl font-bold">
                           82,600
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 z-10 -right-4">
                     <img
                        src={spooky2}
                        className="w-[90px] h-[90px] md:w-[140px] md:h-[140px]"
                        alt=""
                     />
                  </div>
                  <div>
                     <img
                        className="absolute -bottom-10 rotate-45 -left-10 h-[70px] w-[90px] md:w-[170px] md:h-[140px] "
                        src={bat}
                        alt=""
                     />
                  </div>
                  <ScrollLink
                     to="Form"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="absolute right-0 bg-darkViolet text-pumpkin -bottom-5">
                        Забронировать место
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </ScrollLink>
               </div>
            </Reveal>
         </div>
      </div>
   );
}

export default TariffComponents;
