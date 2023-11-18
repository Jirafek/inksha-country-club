/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import instWinter from 'icons/winter/inst.webp'
import whatWinter from 'icons/winter/sup.webp'
import { useURLData } from "utils/URLData"
import { isItWinterNow } from 'utils/functions'
import inst from "./../assets/inst.png"
import phone from "./../assets/phone.png"
import what from "./../assets/what.png"
const slideVariants = {
   initial: {
      x: "2%", // Начальная позиция за пределами экрана справа
      scale: 0.75,
   },
   animate: {
      x: "-2%", // Конечная позиция за пределами экрана слева
      scale: 1,
   },
}

const Footer = ({ className }) => {
   const { utm_source } = useURLData()
   return (
      <div className={`${className || ""}`}>
         <div className="wrapper  ">
            <div className="flex justify-between gap-5 py-5">
               <div className="flex w-full items-center justify-between gap-5 md:justify-start">
                  <div className="text-white">Икша Кантри Kлаб 2023 </div>
                  <div className="fixed bottom-5 md:bottom-[70px]  right-5 z-10 flex flex-col gap-5 md:left-5 md:flex-row">
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/ikshacountryclub/"
                     >
                        <img className="z-10 h-9 w-9" src={isItWinterNow() ? instWinter : inst} alt="" />
                     </a>
                     <a
                        href="https://wa.me/79859091202"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img className="z-10 h-9 w-9" src={isItWinterNow() ? whatWinter : what} alt="" />
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
                        href={utm_source === 'yandex' ? 'tel:+74995055067' : utm_source === 'vkontakte' ? 'tel:+74995055087' : 'tel:+74995055031'}
                     >
                        <img className="z-10 h-9 w-9" src={phone} alt="" />
                     </motion.a>
                  </div>
               </div>
               {
                  utm_source === 'yandex' ?
                     <a href={'tel:+74995055067'} className="min-w-[160px] text-white">
                        +7(499) 505-50-67
                     </a>
                     : utm_source === 'vkontakte' ?
                        <a href={'tel:+74995055087'} className="min-w-[160px] text-white">
                           +7(499) 505-50-87
                        </a>
                        :
                        <a href={"tel:+74995055031"} className="min-w-[160px] text-white">
                           +7(499) 505-50-31
                        </a>

               }
            </div>
         </div>
      </div>
   )
}

export default Footer
