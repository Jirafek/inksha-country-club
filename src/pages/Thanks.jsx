import React, {useEffect, useState} from "react";
import { m } from "framer-motion";
import FixedFuter from "../components/Home/FixedFuter";
import {useURLData} from "utils/URLData";

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
   const { clientId } = useURLData()

   const [isMetrika, setIsMetrika] = useState(false);

   useEffect(() => {
      // Функция для извлечения параметров из строки запроса
      const getQueryParam = (name) => {
         const searchParams = new URLSearchParams(window.location.search);
         return searchParams.get(name);
      };

      // Получение параметра metrika
      const metrikaParam = getQueryParam('metrika');

      if (metrikaParam) {
         setIsMetrika(true);

         if (clientId) {
            const sendingData = {
               clientId: clientId
            }

            try {
               const response = fetch('https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/metrika', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/x-www-form-urlencoded',
                     'Access-Control-Allow-Origin': '*'
                  },
                  body: new URLSearchParams(sendingData).toString(),
               })
            } catch (error) {
               console.error(error)
            }
         }
      }
   }, []);

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
               {
                  !isMetrika ?
                      (
                          <>Бронирование
                             <br /> прошло успешно!</>
                      ) :
                      (
                          <>Уже вызвли
                          <br /> менеджера </>

                      )
               }
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
