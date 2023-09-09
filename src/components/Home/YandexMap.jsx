import React, { useState } from "react";
import { m } from 'framer-motion';

const ytSrc = 'https://www.youtube.com/embed/m24zezD9fWs';
const ytId = ytSrc.split('/')[ytSrc.split('/').length - 1];

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

    const mapStyles = {
        width: "100%",
        height: "800px",
    }

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            className="section relative"
            id="contacts">
            <div className="relative">
                <div style={{ transform: 'translateX(-50%)' }} className="flex flex-col items-center justify-center absolute left-1/2 z-20 w-full h-[90px]">
                    <picture>
                        <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                        <img className="absolute top-0 left-0" src="/image/titles_bg.webp" alt="Фоновое изображение для заголовка" />
                    </picture>

                    <h2 className="text-[20px] text-white z-10 font-bold">КОНТАКТЫ</h2>
                </div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor" scroll="false" width="100%" height="800" frameBorder="0"></iframe>
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
                        <a href="https://wa.me/+79859091202">
                            <picture>
                                <source srcSet="/avif/wa.avif 1x" type="image/avif" />
                                <img className="w-[50px] h-[50px] bg-transparent" src="/image/wa.webp" alt="Икша Кантри Клаб - Заказть отдых через Ватсап" />
                            </picture>
                        </a>
                        <a href="https://t.me/ikshacountryclub">
                            <picture>
                                <source srcSet="/avif/tg.avif 1x" type="image/avif" />
                                <img className="w-[50px] h-[50px] bg-transparent" src="/image/tg.webp" alt="Икша Кантри Клаб - Заказть отдых через Телеграм" />
                            </picture>
                        </a>
                        <a className="mr-[10px] ml-1" href="https://vk.com/ikshacountryclub">
                            <picture>
                                <source srcSet="/avif/vk.avif 1x" type="image/avif" />
                                <img src="/image/vk.webp" alt="Загородный клуб Икша Кантри Клаб - ВКонтакте" />
                            </picture>
                        </a>
                        <a className="mr-1" href="https://www.instagram.com/ikshacountryclub">
                            <picture>
                                <source srcSet="/avif/inst.avif 1x" type="image/avif" />
                                <img src="/image/inst.webp" alt="Загородный клуб Икша Кантри Клаб - Инстаграм" />
                            </picture>
                        </a>
                        <a href="https://www.youtube.com/@ikshacountryclub">
                            <picture>
                                <source srcSet="/avif/youtube_bg.avif 1x" type="image/avif" />
                                <img className="w-[50px] h-[50px] bg-transparent" src="/image/youtube_bg.webp" alt="Загородный клуб Икша Кантри Клаб - Ютуб" />
                            </picture>
                        </a>
                    </div>
                </div>
            </m.div>
            <div className="absolute bottom-[270px] left-[15px]">
                <div className="w-[330px] h-[205px] relative group">
                    {!isVideoPlaying && (
                        <div>
                            <a href={ytSrc}>
                                <img
                                    src={`https://i.ytimg.com/vi_webp/${ytId}/mqdefault.webp`}
                                    alt="Превью видео с ютуба"
                                />
                            </a>
                            <button
                                className="bg-transparent border-none h-[48px] w-[68px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
                                aria-label="Запустить Видео"
                                onClick={handlePlayVideo}
                            >
                                <svg width="68" height="48" viewBox="0 0 68 48">
                                    <path
                                        className="fill-[#212121] duration-300 opacity-80 group-hover:fill-[#ff0000] group-hover:opacity-100"
                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                    ></path>
                                    <path className="fill-white" d="M 45,24 27,14 27,34"></path>
                                </svg>
                            </button>
                        </div>
                    )}
                    {isVideoPlaying && (
                        <iframe
                            width="330"
                            height="205"
                            src={`${ytSrc}?rel=0&showinfo=0&autoplay=1`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </m.section>
    );
}

export default YandexMap;
