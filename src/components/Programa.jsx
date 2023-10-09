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
               <h1 className="text-xl tracking-widest relative">
                  Программа
                  <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                     Программа
                  </div>
               </h1>
               <p className="text-center text-lg droid">
                  Программа для празднования Хэллоуина в загородном клабе Икша
                  Кантри Клаб с 27 по 29 октября:
               </p>
               <div className="grid grid-cols-1 place-items-center  md:grid-cols-2 gap-y-20 gap-10">
                  <div className="flex flex-col max-w-[600px] justify-center items-center">
                     <img
                        className="md:w-[200px] w-[100px]  h-[100px] md:h-[200px] relative top-5    md:top-10 z-10"
                        src={pumpkin}
                        alt=""
                     />
                     <div className="bg-pumpkin relative rounded-[20px] p-3 md:p-[50px]">
                        <h2 className="md:text-[40px] text-[25px] font-extrabold">
                           Пятница, 27 октября
                        </h2>
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           16:00 - 18:00
                        </h2>
                        <h2 className="text-md mb-6 droid font-light ">
                           Регистрация и заселение гостей
                        </h2>
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           18:30 - 20:00
                        </h2>
                        <h2 className="text-md mb-6 droid font-light ">
                           {" "}
                           Ужин в стиле Хэллоуина с участием ведьм и зомби
                           (фуршет на каждой локации)
                        </h2>
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           20:30 - 22:00{" "}
                        </h2>
                        <h2 className="text-md mb-6 droid font-light ">
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

                  <div className="flex flex-col  max-w-[600px] justify-center items-center">
                     <img
                        className="md:w-[200px] w-[100px]  h-[100px] md:h-[200px] relative top-5    md:top-10   z-10"
                        src={cotel}
                        alt=""
                     />

                     <div className="bg-pumpkin relative rounded-[20px] p-3 md:p-[50px]">
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           Пятница, 28 октября
                        </h2>
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           10:30 - 12:30
                        </h2>
                        <h2 className="text-md  mb-6 droid font-light">
                           Мастер-класс по созданию тыквенных фигур для детей и
                           взрослых в шатре Ворожба и гадание для всех желающих
                        </h2>
                        <h2 className=" md:text-[40px] text-[25px]  text-bold ">
                           15:00 - 17:00
                        </h2>
                        <h2 className="text-md  mb-6 droid font-light">
                           Экскурсия по заброшенным местам Икшинского
                           водохранилища
                        </h2>
                        <h2 className="text-md ">20:30 - 22:00</h2>
                        <h2 className=" text-md font-light  mb-6 droid">
                           Вечеринка с тематическими коктейлями для детей и
                           взрослых и шоу Зомби-бал. Костюмированный конкурс и
                           раздача призов
                        </h2>
                        <Reveal delay={0.5} variants={scale()}>
                           <img
                              src={bat}
                              className="absolute scale-50 -rotate-90 -bottom-[150px] -right-[20%] "
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
                     <img src={arrow} className="w-9 h-5" alt="" />
                  </Button>
               </ScrollLink>
               <ScrollLink
                  to="Tariff"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <Button className="bg-pumpkin mx-auto text-darkViolet">
                     Посмотреть тарифы
                     <img src={down_arrow} className="w-6 h-8" alt="" />
                  </Button>
               </ScrollLink>
            </Reveal>
         </div>
      </div>
   );
};
