// import bg_hero from "./assets/";

import Button from "common/Button"


import hero from 'images/fishing/Hero.webp'
import Reveal from "common/Reveal"
import { Link as ScrollLink } from "react-scroll"

const FishHero = () => {
   return (
      <div className='bg-black p-[10px]'>


         <div
            id="Hero"
            className={` h-screen text-white text-center `}
         // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
         >
            <div className="relative  flex min-h-[90vh] flex-col items-center justify-center ">
               <div className="z-10 md:flex max-w-[1000px] flex-col items-center justify-center ">
                  <Reveal delay={0.25}>
                     <div className="mb-10 text-lg font-bold">
                        РЫБАЛКА
                     </div>
                  </Reveal>
                  <Reveal delay={0.5}>
                     <div className="text-md font-semibold">
                        Рыбалка на Икшинском водохранилище в Подмосковье, отличный клёв, разнообразие пресноводных обитателей, уютные беседки, проживание, а также профессиональный инструктаж
                     </div>
                  </Reveal>
                  <ScrollLink
                     to="Tariff"
                     smooth={true}
                     duration={1000} // Длительность анимации скролла (в миллисекундах)
                  >
                     <Button className="w-full my-[5vh] h-[40px] md:h-[60px] mx-auto md:w-[600px] bg-brown text-black  ">
                        Забронировать
                     </Button>
                  </ScrollLink>
               </div>
               <div className='md:absolute md:h-[90vh] md:w-[95vw]'>
                  <img className='w-full h-full object-cover' src={hero} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default FishHero
