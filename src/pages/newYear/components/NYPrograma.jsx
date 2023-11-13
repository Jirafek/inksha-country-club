
// import bat from "images/NY/bat.png";

// import arrow from "images/NY/arrow.png";
// import down_arrow from "icons/down_arrow.png";

import { Link as ScrollLink } from "react-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import ProgramaSwiper from "./NYProgramaSwiper";
import Reveal from "common/Reveal";
import { scale, slideFromRight } from "constants/motion";
import NYGreenButton from './NYGreenButton';
import NYCreamButton from './NYCreamButton';


// import prog1 from 'images/NY/prog/001.webp'
import prog2 from 'images/NY/prog/002.webp'
import prog3 from 'images/NY/prog/003.webp'

export const Programa = () => {
   return (
      <div
         id="Programa"
         name="Programa"
         className="  py-[10vh] pb-[5vh] md:pb-[40vh]"
      >
         <div className="wrapper relative">
            <Reveal duration={1} variants={slideFromRight()}>
               <div className='tariff-bg p-3 370p:p-6  md:p-14'>
                  <h1 className="text-xl mb-6 mount tracking-widest relative">
                     Программа
                     <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                        Программа
                     </div>
                  </h1>
                  <p className="text-center mb-10 yaes  font-semibold text-lg yaes">
                     Программа для празднования Хэллоуина в загородном клабе Икша
                     Кантри Клаб с 27 по 29 октября:
                  </p>
                  <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 gap-y-20 gap-10">
                     <div className="flex col-span-1 md:col-span-2 flex-col relative  w-full md:w-[90%] justify-center items-center">

                        <img
                           className="md:w-[200px] absolute w-[60px] 370p:w-[75px] 370p:h-[75px] md:h-[200px] md:-left-[150px] md:top-1/2 transform md:-translate-y-1/2    -top-10 right-1/2 translate-x-1/2    z-10"
                           src={prog2}
                           alt=""
                        />
                        <div className="bg-NYblack w-full text-white yaes relative rounded-[20px] ">
                           <h2 className="md:text-[40px] relative py-10 w-full text-center text-[25px] font-extrabold">
                              Пятница, 27 октября
                              <div className='absolute w-full border-b-[3px]  border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 flex  flex-col gap-7 md:px-[50px]'>
                              <div className='flex flex-col w-full md:flex-row justify-between gap-1 md:gap-5 text-center md:text-start'>
                                 <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                    16:00 - 18:00
                                 </h2>
                                 <h2 className="text-md mb-6 w-full font-light ">
                                    Регистрация и заселение гостей
                                 </h2>
                              </div>
                              <div className='flex flex-col md:flex-row justify-between gap-1 md:gap-5 text-center md:text-start'>
                                 <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                    18:30 - 20:00
                                 </h2>
                                 <h2 className="text-md mb-6  font-light ">
                                    {" "}
                                    Ужин в стиле Хэллоуина с участием ведьм и зомби
                                    (фуршет на каждой локации)
                                 </h2>
                              </div>
                              <div className='flex flex-col md:flex-row justify-between gap-1 md:gap-5 text-center md:text-start'>
                                 <h2 className=" md:text-[40px] whitespace-nowrap mount text-[25px]  font-bold ">
                                    20:30 - 22:00{" "}
                                 </h2>
                                 <h2 className="text-md mb-6  font-light ">
                                    Вечеринка с живой музыкой и DJ в Шатре Аниматоры
                                    проведут игры и развлечения для детей, включая охоту
                                    за сладостями и конкурс на лучший детский костюм
                                 </h2>
                              </div>
                              <Reveal variants={scale()}>
                                 {/* <img
                                    src={bat}
                                    className="absolute -bottom-[90px] -right-[20%] "
                                    alt=""
                                 /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>
                     <div className="flex relative col-span-1 mt-auto md:mt-[100px] self-start flex-col max-w-[600px] justify-center items-center">

                        <img
                           className="md:w-[200px] w-[60px] 370p:w-[80px] 370p:h-[80px] md:h-[200px] absolute transform md:right-1/2 md:translate-x-1/2  -top-10 right-1/2 translate-x-1/2   md:-top-[150px] z-10"
                           src={prog2}
                           alt=""
                        />
                        <div className="bg-NYblack text-center md:text-start text-white yaes relative rounded-[20px] ">
                           <h2 className="md:text-[40px] relative py-10 w-full text-center text-[25px] font-extrabold">
                              Пятница, 27 октября
                              <div className='absolute w-full border-b-[3px] border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 md:px-[50px]'>

                              <h2 className=" md:text-[40px] mount text-[25px] sm:text-[30px]  font-bold ">
                                 16:00 - 18:00
                              </h2>
                              <h2 className="text-md mb-6  font-light ">
                                 Регистрация и заселение гостей
                              </h2>
                              <h2 className=" md:text-[40px] mount text-[25px] sm:text-[30px]  font-bold ">
                                 18:30 - 20:00
                              </h2>
                              <h2 className="text-md mb-6  font-light ">
                                 {" "}
                                 Ужин в стиле Хэллоуина с участием ведьм и зомби
                                 (фуршет на каждой локации)
                              </h2>
                              <h2 className=" md:text-[40px] mount text-[25px] sm:text-[30px]  font-bold ">
                                 20:30 - 22:00{" "}
                              </h2>
                              <h2 className="text-md mb-6  font-light ">
                                 Вечеринка с живой музыкой и DJ в Шатре Аниматоры
                                 проведут игры и развлечения для детей, включая охоту
                                 за сладостями и конкурс на лучший детский костюм
                              </h2>
                              <Reveal variants={scale()}>
                                 {/* <img
                                    src={bat}
                                    className="absolute -bottom-[90px] -right-[20%] "
                                    alt=""
                                 /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>

                     <div className="flex relative col-span-1 mt-auto md:mt-[100px] self-start text-center md:text-start flex-col  max-w-[600px] justify-center items-center">
                        <img
                           className="md:w-[200px] w-[60px] 370p:w-[80px] 370p:h-[80px] md:h-[200px] absolute transform md:right-1/2 md:translate-x-1/2  -top-10 right-1/2 translate-x-1/2   md:-top-[150px] z-10"
                           src={prog3}
                           alt=""
                        />

                        <div className="bg-NYblack text-white yaes relative rounded-[20px] ">

                           <h2 className="md:text-[40px] py-10 relative text-center text-[25px] font-extrabold">
                              Пятница, 28 октября
                              <div className='absolute w-full border-b-[3px] border-b-NYred my-5 border-dashed h-[4px]'></div>
                           </h2>
                           <div className='px-3 md:px-[50px]'>


                              <h2 className=" md:text-[40px] mount text-[25px] sm:text-[30px]  font-bold ">
                                 10:30 - 12:30
                              </h2>
                              <h2 className="text-md  mb-6  font-light">
                                 Мастер-класс по созданию тыквенных фигур для детей и
                                 взрослых в шатре Ворожба и гадание для всех желающих
                              </h2>
                              <h2 className=" md:text-[40px] mount text-[25px] sm:text-[30px]  font-bold ">
                                 15:00 - 17:00
                              </h2>
                              <h2 className="text-md  mb-6  font-light">
                                 Экскурсия по заброшенным местам Икшинского
                                 водохранилища
                              </h2>
                              <h2 className="md:text-[40px] mount text-[25px]  font-bold ">20:30 - 22:00</h2>
                              <h2 className=" text-md font-light  mb-6 ">
                                 Вечеринка с тематическими коктейлями для детей и
                                 взрослых и шоу Зомби-бал. Костюмированный конкурс и
                                 раздача призов
                              </h2>
                              <Reveal delay={0.5} variants={scale()}>
                                 {/* <img
                                 src={bat}
                                 className="absolute scale-50 -rotate-90 -bottom-[150px] -right-[20%] "
                                 alt=""
                              /> */}
                              </Reveal>
                           </div>
                        </div>
                     </div>


                  </div>
               </div>
               <ScrollLink
                  to="Form"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <NYGreenButton className="mx-auto text-black">
                     Забронировать место
                     {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                  </NYGreenButton>
               </ScrollLink>
               <ScrollLink
                  to="Tariff"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <NYCreamButton className="mx-auto">
                     Посмотреть тарифы
                     {/* <img src={down_arrow} className="w-6 h-8" alt="" /> */}
                  </NYCreamButton>
               </ScrollLink>
            </Reveal>
         </div>
      </div>
   );
};
