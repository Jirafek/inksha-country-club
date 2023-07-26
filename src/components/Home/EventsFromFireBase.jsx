import React from "react";
import { v4 as uuidv4 } from 'uuid';

const fireBaseData = [
    {
        img: '/image/home_photo_test.jpg',
        link: ''
    },
    {
        img: '/image/home_photo_test.jpg',
        link: ''
    },
    {
        img: '/image/home_photo_test.jpg',
        link: ''
    },
];

const EventsFromFireBase = () => {
    return (
        <section id="blog" style={{ backgroundImage: 'url(/image/bg-eve.png)' }} className="min-h-[855px] back_settings relative">
            <div className="flex flex-col items-center pb-[70px]"> {/* pt-[4.5rem]  */}
                <img src="/image/eventsFireBase_bg_title.png" alt="" />
            </div>
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-[6px]">
                {
                    fireBaseData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center gap-[10px]">
                            <img className="w-[150px] rounded-xl" src={el.img} alt="" />
                            <div style={{ backgroundImage: 'url(/image/fire_button.png)' }} className="back_settings w-[120px] h-[40px] relative text-[#000] monterey text-[16px] font-bold flex justify-center items-center">
                                Подробнее
                            </div>
                        </div>
                    ))
                }
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
        </section>
    );
}

export default EventsFromFireBase;
