// import bg_hero from "images/NY/bg/bg-main.webp";


import NYGreenButton from './NYGreenButton';
import Reveal from "common/Reveal";
// import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
   return (
      <div
         id="Hero"
         className={`yaes min-h-[90vh]  text-center gap-5 bg-center bg-no-repeat bg-cover `}
      // style={{ backgroundImage: bg_hero, backgroundRepeat: "no-repeat" }}
      >
         <div className="wrapper flex flex-col items-center justify-center min-h-[90vh] p-10">
            <div className=" flex items-center max-w-[1000px] text-NYbrown font-bold bg-NYblack p-5  border-NYbrown  border-[7px] rounded-xl  justify-center flex-col">
               <Reveal delay={0.25}>
                  <div className="text-[20px] yaes  md:text-[30px] mb-10">
                     <span className="text-NYred mount text-xl">Новый Год</span>
                     <br /> в Икша Кантри Клабе!
                  </div>
               </Reveal>
               <Reveal delay={0.5}>
                  <div className="text-md ">
                     Новый год – это один из самых ожидаемых праздников в Загородном клубе Икра Кантри Клуб в Подмосковье!
                  </div>
               </Reveal>
               <a
                  className=''
                  href="#Tariff"
               // smooth={true}
               // duration={1000} // Длительность анимации скролла (в миллисекундах)
               >
                  <NYGreenButton className='w-[180px] mx-auto sm:w-auto md:w-auto'>
                     Забронировать место
                     {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                  </NYGreenButton>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Hero;
