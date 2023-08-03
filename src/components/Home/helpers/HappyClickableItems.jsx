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
                                    <img className="rounded-full object-cover w-[110px] h-[110px]" src={el.img} alt="" />
                                </m.div>
                                <div className="w-[115px] h-[34px] flex justify-center items-center mb-[15px]">
                                    <img className="absolute" src="/image/happy_text_block.webp" alt="" />
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
