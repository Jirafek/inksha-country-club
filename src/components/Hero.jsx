// import bg_hero from "./assets/";

import Button from "../common/Button";
import arrow from "../assets/arrow.png";

import Reveal from "../common/Reveal";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
   return (
      <div
         id="Hero"
         className={`hero min-h-[90vh]  gap-5 bg-cover bg-center bg-no-repeat text-center `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="wrapper  flex min-h-[90vh] flex-col items-center justify-center p-10">
            <div className=" flex max-w-[1000px] flex-col items-center justify-center  rounded-xl  border-[7px] border-darkViolet bg-black bg-opacity-50 p-5">
               <Reveal delay={0.25}>
                  <div className="druk mb-10 text-[20px] font-light md:text-[30px]">
                     <span className="eng text-xl text-pumpkin">HALLOWEEN</span>
                     <br /> в Икша Кантри Клабе!
                  </div>
               </Reveal>
               <Reveal delay={0.5}>
                  <div className="droid text-md">
                     Хэллоуин – это один из самых ожидаемых праздников в
                     Загородном клабе Икша Кантри Клаб в Подмосковье! Каждый год
                     Клаб организует уникальное и захватывающее мероприятие,
                     чтобы погрузить своих гостей в мистическую и веселую
                     атмосферу этого праздника.
                  </div>
               </Reveal>
               <ScrollLink
                  to="Tariff"
                  smooth={true}
                  duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <Button className=" bg-darkViolet text-pumpkin  ">
                     Забронировать место
                     <img src={arrow} className="h-5 w-9" alt="" />
                  </Button>
               </ScrollLink>
            </div>
         </div>
      </div>
   );
};

export default Hero;
