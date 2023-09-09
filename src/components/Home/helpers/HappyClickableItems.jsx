import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { m } from 'framer-motion';
import { Link } from "react-router-dom";

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
        <div className="flex flex-wrap gap-10 items-center justify-center pb-10 pt-6">
            {
                arrayData.map((el, i) => {
                    return (
                        <Link key={uuidv4()} to="/choose-happy">
                            <m.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                variants={heading}
                                className="flex flex-col gap-[10px] items-center">
                                <m.div variants={el.animation} className="rounded-full relative">
                                    <picture>
                                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                        <img className="rounded-full object-cover w-[110px] h-[110px]" src={el.imgWebp} alt={el.imgAlt} />
                                    </picture>

                                </m.div>
                                <div className="w-[115px] h-[34px] flex justify-center items-center relative mb-[15px]">
                                    <picture>
                                        <source srcSet="/avif/happy_text_block.avif 1x" type="image/avif" />
                                        <img className="absolute top-0 left-0" src="/image/happy_text_block.webp" alt="Икша Кантри Клаб" />
                                    </picture>

                                    <p className="text-white text-center monterey text-base font-medium z-20 relative">
                                        {el.text}
                                    </p>
                                </div>
                            </m.div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default HappyClickableItems;
