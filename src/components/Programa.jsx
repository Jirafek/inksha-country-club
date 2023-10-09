import pumpkin from "../assets/pumpkin.png";
import bat from "../assets/bat.png";
import cotel from "../assets/cotel.png";
import arrow from "../assets/arrow.png";
import down_arrow from "../assets/down_arrow.png";
import Button from "./../common/Button";

import { Link as ScrollLink } from "react-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProgramaSwiper from "./ProgramaSwiper";
import Reveal from "../common/Reveal";
import { scale, slideFromRight } from "../constants/motion";

export const Programa = () => {
   return (
      <div
         id="Programa"
         name="Programa"
         className="program bg-violet py-[10vh] pb-[10vh]"
      >
         <div className="wrapper relative">
            <Reveal duration={1} variants={slideFromRight()}>
               <h1 className="druk relative text-xl tracking-widest">
                  Программа
                  <div className="absolute -top-[30px] left-2 text-[64px] opacity-10 md:-top-[70px]  md:text-[128px]">
                     Программа
                  </div>
               </h1>
               <p className="droid text-center text-lg">
                  Программа для празднования Хэллоуина в загородном клабе Икша
                  Кантри Клаб с 27 по 29 октября:
               </p>
               <div className="grid grid-cols-1 place-items-center  gap-10 gap-y-20 md:grid-cols-2">
                  <div className="flex max-w-[600px] flex-col items-center justify-center">
                     <img
                        className="relative top-5  z-10 h-[100px] w-[100px] md:top-10    md:h-[200px] md:w-[200px]"
                        src={pumpkin}
                        alt=""
                     />
                     <div className="relative rounded-[20px] bg-pumpkin p-3 md:p-[50px]">
                        <h2 className="druk text-[25px] font-extrabold md:text-[40px]">
                           Пятница, 27 октября
                        </h2>
                        <h2 className=" text-bold druk text-[25px] md:text-[40px] ">
                           16:00 - 18:00
                        </h2>
                        <h2 className="droid mb-6 text-md font-light ">
                           Регистрация и заселение гостей
                        </h2>
                        <h2 className=" text-bold druk text-[25px] md:text-[40px] ">
                           18:30 - 20:00
                        </h2>
                        <h2 className="droid mb-6 text-md font-light ">
                           {" "}
                           Ужин в стиле Хэллоуина с участием ведьм и зомби
                           (фуршет на каждой локации)
                        </h2>
                        <h2 className=" text-bold druk text-[25px]  md:text-[40px] ">
                           20:30 - 22:00{" "}
                        </h2>
                        <h2 className="droid mb-6 text-md font-light ">
                           Вечеринка с живой музыкой и DJ в Шатре Аниматоры
                           проведут игры и развлечения для детей, включая охоту
                           за сладостями и конкурс на лучший детский костюм
                        </h2>
                        <Reveal variants={scale()}>
                           <img
                              src={bat}
                              className="absolute -bottom-[90px] -right-[20%] "
                              alt=""
                           />
                        </Reveal>
                     </div>
                  </div>

                  <div className="flex max-w-[600px]  flex-col items-center justify-center">
                     <img
                        className="relative top-5  z-10 h-[100px] w-[100px] md:top-10    md:h-[200px]   md:w-[200px]"
                        src={cotel}
                        alt=""
                     />

                     <div className="relative rounded-[20px] bg-pumpkin p-3 md:p-[50px]">
                        <h2 className=" text-bold druk text-[25px] md:text-[40px] ">
                           Пятница, 28 октября
                        </h2>
                        <h2 className=" text-bold druk text-[25px] md:text-[40px] ">
                           10:30 - 12:30
                        </h2>
                        <h2 className="droid  mb-6 text-md font-light">
                           Мастер-класс по созданию тыквенных фигур для детей и
                           взрослых в шатре Ворожба и гадание для всех желающих
                        </h2>
                        <h2 className=" text-bold druk text-[25px] md:text-[40px] ">
                           15:00 - 17:00
                        </h2>
                        <h2 className="droid  mb-6 text-md font-light">
                           Экскурсия по заброшенным местам Икшинского
                           водохранилища
                        </h2>
                        <h2 className="druk text-md">20:30 - 22:00</h2>
                        <h2 className=" droid mb-6  text-md font-light">
                           Вечеринка с тематическими коктейлями для детей и
                           взрослых и шоу Зомби-бал. Костюмированный конкурс и
                           раздача призов
                        </h2>
                        <Reveal delay={0.5} variants={scale()}>
                           <img
                              src={bat}
                              className="absolute -bottom-[150px] -right-[20%] -rotate-90 scale-50 "
                              alt=""
                           />
                        </Reveal>
                     </div>
                  </div>
               </div>
               <ProgramaSwiper />
               <ScrollLink
                  to="Form"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <Button className="mx-auto bg-darkViolet text-pumpkin">
                     Забронировать место
                     <img src={arrow} className="h-5 w-9" alt="" />
                  </Button>
               </ScrollLink>
               <ScrollLink
                  to="Tariff"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <Button className="mx-auto bg-pumpkin text-darkViolet">
                     Посмотреть тарифы
                     <img src={down_arrow} className="h-8 w-6" alt="" />
                  </Button>
               </ScrollLink>
            </Reveal>
         </div>
      </div>
   );
};
