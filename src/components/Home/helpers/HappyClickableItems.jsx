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
        <div className="flex flex-col gap-10 items-center py-10">
            {
                arrayData.map((el, i) => {
                    return (
                        <Link to="/choose-happy">
                            <m.div
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                variants={heading}
                                key={uuidv4()} className="flex gap-[10px] items-center">
                                <m.div variants={el.animation} className="rounded-full relative w-[130px] h-[130px]">
                                    <img className="rounded-full object-cover w-[110px] h-[110px]" src={el.img} alt="" />
                                </m.div>
                                <div className="w-[115px] h-[34px] flex justify-center items-center mb-[25px]">
                                    <img className="absolute" src="/image/happy_text_block.png" alt="" />
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
