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
        img: '/image/events_fire1.JPG',
        link: '',
        title: 'День настольных игр',
        date: '15.04.2023'
    },
    {
        img: '/image/events_fire2.JPG',
        link: '',
        title: 'Мастер класс «Sup-Board для новичков»',
        date: '23.06.2023'
    },
    {
        img: '/image/events_fire3.jpg',
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
            style={{ backgroundImage: 'url(/image/bg-eve.png)', overflowX: 'hidden' }}
            className="min-h-[500px] back_settings relative">
            <div className="flex flex-col items-center pb-[70px]"> {/* pt-[4.5rem]  */}
                <img src="/image/eventsFireBase_bg_title.png" alt="" />
            </div>
            <div>
                <m.img variants={sky1} className="absolute -top-[60px] left-0" src="/image/events_sky1.png" alt="" />
                <m.img variants={sky2} className="absolute -top-[60px] right-0" src="/image/events_sky2.png" alt="" />
                <m.img variants={sky3} className="absolute -top-[60px] left-[100px]" src="/image/events_sky3.png" alt="" />
                <m.img variants={sky4} className="absolute -top-[20px] right-[40px]" src="/image/events_sky3.png" alt="" />
            </div>
            <div className="h-[500px] overflow-y-auto">
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-[30px]">
                    {
                        fireBaseData.map((el, i) => (
                            <div key={uuidv4()} className="flex flex-col items-center">
                                <div className="mb-[10px] flex flex-col items-center">

                                    <div className="flex rounded-[10px] justify-center items-center bg-[#EAD3B5] border border-[#765947] w-[150px] mb-1">
                                        <p className="text-[11px] text-black monterey text-center font-bold">
                                            {el.title}
                                        </p>
                                    </div>
                                    <img className="w-[150px] rounded-xl" src={el.img} alt="" />
                                </div>
                                <div className="flex flex-col gap-1 items-center">

                                    <div className="w-[120px] rounded-[10px] border border-[#765947] flex justify-center items-center bg-white">
                                        <p className="text-[13px] text-black monterey py-[3px]">
                                            {el.date}
                                        </p>
                                    </div>
                                    <a target="_blanc" href="https://bronirui-online.ru/iksha-country-club/uslugi" style={{ backgroundImage: 'url(/image/fire_button.png)' }} className="back_settings w-[120px] h-[40px] relative text-[#000] monterey text-[16px] font-bold flex justify-center items-center">
                                        Подробнее
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="absolute -bottom-[52px] w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="62" viewBox="0 0 390 62" fill="none">
                    <g filter="url(#filter0_d_1273_6018)">
                        <path d="M0.144531 0.324219H390.314V50.1611C236.788 6.91459 0.144531 31.705 0.144531 50.1611C0.144531 68.6173 0.144531 0.324219 0.144531 0.324219Z" fill="#EAAB7F" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1273_6018" x="-3.85547" y="0.324219" width="398.17" height="61.002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1273_6018" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1273_6018" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </m.section>
    );
}

export default EventsFromFireBase;
