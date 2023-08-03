import React from "react";
import { m } from 'framer-motion';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLines = {
    hidden: {
        opacity: 0,
        // clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        // clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const YandexMap = () => {
    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            className="relative"
            id="contacts">
            <div className="relative">
                <div style={{ transform: 'translateX(-50%)' }} className="flex flex-col items-center justify-center absolute left-1/2 z-20 w-full h-[90px]">
                    <img className="absolute" src="/image/titles_bg.webp" alt="" />
                    <h1 className="text-[20px] text-white z-10 font-bold">КОНТАКТЫ</h1>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor" width="100%" height="800" frameBorder="0"></iframe>
            </div>
            <m.div variants={headingLines} className="absolute bottom-[50px] left-[15px] bg-white border border-black rounded-[10px] w-[317px] h-[212px] px-[15px] pt-5 monterey">
                <div className="relative flex flex-col gap-[10px] h-full">
                    <p className="text-black underline">
                        <a href="tel:+79859091202">+7 985 909 12 02</a>
                    </p>
                    <p className="text-black underline">
                        <a href="mailto:contact@ikshacountryclub.com">contact@ikshacountryclub.com</a>
                    </p>
                    <p className="text-black">
                        посёлок Менжинец, городской округ Мытищи, Московская область, Россия
                    </p>

                    <div className="absolute bottom-[2px] right-0 flex items-center">
                        <a target="_blanc" href="https://wa.me/+79859091202">
                            <img className="w-[50px] h-[50px] bg-transparent" src="/image/wa.webp" alt="" />
                        </a>
                        <a target="_blanc" href="https://t.me/ikshacountryclub">
                            <img className="w-[50px] h-[50px] bg-transparent" src="/image/tg.webp" alt="" />
                        </a>
                        <a className="mr-[10px] ml-1" target="_blanc" href="https://vk.com/ikshacountryclub">
                            <img src="/image/vk.webp" alt="" />
                        </a>
                        <a className="mr-1" target="_blanc" href="https://www.instagram.com/ikshacountryclub">
                            <img src="/image/inst.webp" alt="" />
                        </a>
                        <a target="_blanc" href="https://www.youtube.com/@ikshacountryclub">
                            <img className="w-[50px] h-[50px] bg-transparent" src="/image/youtube_bg.webp" alt="" />
                        </a>
                    </div>
                </div>
            </m.div>
            <div className="absolute bottom-[270px] left-[15px]">
                <iframe className="relative w-[317px]" src="https://www.youtube.com/embed/gklmawJFCOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </m.section>
    );
}

export default YandexMap;
