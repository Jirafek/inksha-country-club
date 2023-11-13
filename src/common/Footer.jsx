/* eslint-disable react/prop-types */
import inst from "./../assets/inst.png";
import what from "./../assets/what.png";
import phone from "./../assets/phone.png";
import { motion } from "framer-motion";

const slideVariants = {
   initial: {
      x: "2%", // Начальная позиция за пределами экрана справа
      scale: 0.75,
   },
   animate: {
      x: "-2%", // Конечная позиция за пределами экрана слева
      scale: 1,
   },
};
const Footer = ({ className }) => {
   return (
      <div className={`${className || ""}`}>
         <div className="wrapper  ">
            <div className="flex justify-between gap-5 py-5">
               <div className="flex w-full items-center justify-between gap-5 md:justify-start">
                  <div>Икша Кантри Kлаб 2023 </div>
                  <div className="fixed bottom-5 md:bottom-[70px]  right-5 z-10 flex flex-col gap-5 md:left-5 md:flex-row">
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/ikshacountryclub/"
                     >
                        <img className="z-10 h-9 w-9" src={inst} alt="" />
                     </a>
                     <a
                        href="https://wa.me/79859091202"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img className="z-10 h-9 w-9" src={what} alt="" />
                     </a>
                     <motion.a
                        variants={slideVariants}
                        transition={{
                           repeat: Infinity,
                           duration: 0.5,

                           repeatType: "loop",
                           repeatDelay: 1,
                        }}
                        initial="initial"
                        animate="animate"
                        href="tel:+7 (499) 505-50-31"
                     >
                        <img className="z-10 h-9 w-9" src={phone} alt="" />
                     </motion.a>
                  </div>
               </div>

               {/* <div className="hidden  justify-center gap-10 md:flex">
                  <a href="#Programa">Программа</a>
                  <a href="#Tariff">Тарифы</a>
                  <a href="tel:+7 (499) 505-50-31">Связаться со мной</a>
               </div> */}
               <a href="tel:+7 (499) 505-50-31" className="min-w-[160px]">
                  +7 (499) 505-50-31
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
