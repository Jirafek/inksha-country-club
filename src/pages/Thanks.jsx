import React from "react";
import { m } from "framer-motion";
import FixedFuter from "../components/Home/FixedFuter";

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
};

const HL1 = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 1,
      },
   },
};

const HL2 = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 2,
      },
   },
};

const Thanks = () => {
   return (
      <section
         style={{ backgroundImage: "url(/image/thanks_bg.png)" }}
         className="back_settings relative h-full  bg-cover bg-center"
      >
         <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heading}
            className=" flex flex-col items-center gap-2 pt-24"
         >
            <m.p variants={HL1} className="monterey text-center text-[20px]">
               Бронирование
               <br /> прошло успешно!
            </m.p>

            <picture>
               <source srcSet="/avif/galk.avif 1x" type="image/avif" />
               <source srcSet="/image/galk.webp 1x" type="image/webp" />
               <m.img
                  variants={HL1}
                  src="/image/galk.png"
                  alt="Икша Кантри Клаб"
               />
            </picture>

            <m.p variants={HL2} className="monterey text-center text-[20px]">
               Спасибо,
               <br /> что выбрали нас!
            </m.p>
            <m.p
               variants={HL2}
               className="monterey pt-3 text-center text-[20px]"
            >
               Наш менеджер свяжется
               <br /> с вами в ближайшее
               <br /> время для уточнения
            </m.p>
            <div className="z-[100] flex">
               <picture>
                  <source srcSet="/avif/man_like.avif 1x" type="image/avif" />
                  <source srcSet="/image/man_like.webp 1x" type="image/webp" />
                  <img
                     //  variants={HL2}
                     //   className="absolute bottom-0 left-1/2 -translate-x-1/2"
                     src="/image/man_like.png"
                     alt="Икша Кантри Клаб"
                  />
               </picture>
            </div>
         </m.div>

         <FixedFuter link="/" needRotate={true} />
      </section>
   );
};

export default Thanks;
