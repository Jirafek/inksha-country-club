import React from "react";
import { v4 as uuidv4 } from "uuid";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import GreenButton from "./../../../common/GreenButton";
const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
};

const HappyClickableItems = ({ arrayData }) => {
   return (
      <div className="flex flex-col items-center justify-center">
         <div className="relative z-[1] flex flex-wrap items-center justify-center gap-10 pb-10 pt-6">
            {arrayData.map((el, i) => {
               return (
                  <Link key={uuidv4()} to="/choose-happy">
                     <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={heading}
                        className="flex flex-col items-center gap-[10px]"
                     >
                        <m.div
                           variants={el.animation}
                           className="relative rounded-full"
                        >
                           <picture>
                              <source
                                 srcSet={`${el.imgAvif} 1x`}
                                 type="image/avif"
                              />
                              <img
                                 className="h-[110px] w-[110px] rounded-full object-cover"
                                 src={el.imgWebp}
                                 alt={el.imgAlt}
                              />
                           </picture>
                        </m.div>
                        <div className="relative mb-[15px] flex h-[34px] w-[115px] items-center justify-center">
                           <picture>
                              <source
                                 srcSet="/avif/happy_text_block.avif 1x"
                                 type="image/avif"
                              />
                              <img
                                 className="absolute left-0 top-0"
                                 src="/image/happy_text_block.webp"
                                 alt="Икша Кантри Клаб"
                              />
                           </picture>

                           <p className="monterey text-base relative z-20 text-center font-medium text-white">
                              {el.text}
                           </p>
                        </div>
                     </m.div>
                  </Link>
               );
            })}
         </div>
         <a className="mb-10" href="#calculator">
            <GreenButton className="text-[19px]">Прайс-лист</GreenButton>
         </a>
      </div>
   );
};

export default HappyClickableItems;
