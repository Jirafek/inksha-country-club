import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { m } from 'framer-motion';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const sky1 = {
    hidden: {
        opacity: 1,
        // transform: 'translateX(0)'
        x: 0
    },
    visible: {
        opacity: 0,
        // transform: 'translateX(-400px)',
        x: -400,
        transition: {
            ease: 'easeOut',
            duration: 4,
        },
    },
};

const sky2 = {
    hidden: {
        opacity: 1,
        x: 0
    },
    visible: {
        opacity: 0,
        x: 400,
        transition: {
            ease: 'easeOut',
            duration: 4,
        },
    },
};

const sky3 = {
    hidden: {
        opacity: 1,
        x: 100,
    },
    visible: {
        opacity: 0,
        x: -400,
        transition: {
            ease: 'easeOut',
            duration: 4,
        },
    },
};

const sky4 = {
    hidden: {
        opacity: 1,
        x: 200,
    },
    visible: {
        opacity: 0,
        x: 200,
        transition: {
            ease: 'easeOut',
            duration: 4,
        },
    },
};

const fireBaseData = [
    {
        imgWebp: '/image/events_fire1.webp',
        imgAvif: '/avif/events_fire1.avif',
        link: '',
        title: 'День настольных игр',
        date: '15.04.2023'
    },
    {
        imgWebp: '/image/events_fire2.webp',
        imgAvif: '/avif/events_fire2.avif',
        link: '',
        title: 'Мастер класс «Sup-Board для новичков»',
        date: '23.06.2023'
    },
    {
        imgWebp: '/image/events_fire3.webp',
        imgAvif: '/avif/events_fire3.avif',
        link: '',
        title: 'Фестиваль лимонада',
        date: '19.08.2023'
    },
];

const EventsFromFireBase = () => {
    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            id="blog"
            style={{ backgroundImage: 'url(/image/bg-eve.webp)', overflowX: 'hidden' }}
            className="section min-h-[500px] back_settings relative"
        >
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>

                <h2 className="text-[20px] text-white z-10 font-bold mt-2">СОБЫТИЯ</h2>
            </div>
            <div>
                <picture>
                    <source srcSet="/avif/events_sky1.avif 1x" type="image/avif" />
                    <m.img variants={sky1} className="absolute -top-[60px] left-0" src="/image/events_sky1.webp" alt="Икша Кантри Клаб" />
                </picture>
                <picture>
                    <source srcSet="/avif/events_sky2.avif 1x" type="image/avif" />
                    <m.img variants={sky2} className="absolute -top-[60px] right-0" src="/image/events_sky2.webp" alt="Икша Кантри Клаб" />
                </picture>
                <picture>
                    <source srcSet="/avif/events_sky3.avif 1x" type="image/avif" />
                    <m.img variants={sky3} className="absolute -top-[60px] left-[100px]" src="/image/events_sky3.webp" alt="Икша Кантри Клаб" />
                </picture>
                <picture>
                    <source srcSet="/avif/events_sky3.avif 1x" type="image/avif" />
                    <m.img variants={sky4} className="absolute -top-[20px] right-[40px]" src="/image/events_sky3.webp" alt="Икша Кантри Клаб" />
                </picture>
            </div>
            <div className="h-[500px] overflow-hidden">
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-[30px] overflow-hidden">
                    {
                        fireBaseData.map((el, i) => (
                            <div key={uuidv4()} className="flex flex-col items-center">
                                <div className="mb-[10px] flex flex-col items-center">

                                    <div className="flex rounded-[10px] justify-center items-center bg-[#EAD3B5] border border-[#765947] w-[150px] mb-1">
                                        <p className="text-[11px] text-black monterey text-center font-bold">
                                            {el.title}
                                        </p>
                                    </div>
                                    <picture>
                                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                        <img className="w-[150px] rounded-xl" src={el.imgWebp} alt="Икша Кантри Клаб" />
                                    </picture>
                                </div>
                                <div className="flex flex-col gap-1 items-center">

                                    <div className="w-[120px] rounded-[10px] border border-[#765947] flex justify-center items-center bg-white">
                                        <p className="text-[13px] text-black monterey py-[3px]">
                                            {el.date}
                                        </p>
                                    </div>
                                    <a rel="noreferrer" href="https://bronirui-online.ru/iksha-country-club/uslugi" style={{ backgroundImage: 'url(/image/fire_button.webp)' }} className="back_settings w-[120px] h-[40px] relative text-[#000] monterey text-[16px] font-bold flex justify-center items-center">
                                        Подробнее
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </m.section>
    );
}

export default EventsFromFireBase;
