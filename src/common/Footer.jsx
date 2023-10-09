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
const Footer = () => {
   return (
      <div className="bg-darkViolet droid">
         <div className="wrapper mt-20 text-grey ">
            <div className="flex gap-5 py-5 justify-between">
               <div className="flex w-full items-center justify-between md:justify-start gap-5">
                  <div>Икша Кантри Kлаб 2023 </div>
                  <div className="flex fixed bottom-5 right-5 flex-col gap-5 md:flex-row z-10">
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/ikshacountryclub/"
                     >
                        <img className="w-9 h-9 z-10" src={inst} alt="" />
                     </a>
                     <a
                        href="https://wa.me/79859091202"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img className="w-9 h-9 z-10" src={what} alt="" />
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
                        <img className="w-9 h-9 z-10" src={phone} alt="" />
                     </motion.a>
                  </div>
               </div>
               <div className="md:flex  hidden justify-center gap-10">
                  <a href="#Programa">Программа</a>
                  <a href="#Tariff">Тарифы</a>
                  <a href="tel:+7 (499) 505-50-31">Связаться со мной</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
