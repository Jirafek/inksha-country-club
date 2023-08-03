import React, { useState } from "react";
import FixedFuter from '../components/Home/FixedFuter';

// change TITLE

// Import images data
const imageData = [
    [
        'image/keyt1.webp',
        'image/keyt2.webp',
        'image/keyt3.webp',
        'image/keyt4.webp',
        'image/keyt5.webp',
        'image/keyt6.webp',
    ],
    [
        'image/keyt7.webp',
        'image/keyt8.webp',
        'image/keyt9.webp',
        'image/keyt10.webp',
        'image/keyt11.webp',
        'image/keyt12.webp',
    ],
];

const Keitering = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        if (currentSlide == 0) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(0)
        }
    }

    return (
        <section className="about_background back_settings relative h-screen">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/eat_bg_title.webp" alt="" />
                <a
                    target="_blanc" href="https://bronirui-online.ru/iksha-country-club/uslugi"
                    style={{ backgroundColor: 'rgba(230, 234, 41, 0.60)' }}
                    className="text-[#000] text-center text-[15px] font-medium rounded-[10px] backdrop-blur-[1px] border-[2px] border-[#645A53] monterey mb-5 py-[7px] px-[6px]"
                >
                    Посмотреть меню
                </a>
            </div>
            <div className="flex flex-col items-center justify-center px-[10px] pb-20">
                <button onClick={nextSlide} className="mb-3">
                    <img src="/image/arrow_slider.webp" alt="" />
                </button>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-x-[10px] gap-y-[7px] w-full">
                        {
                            imageData[currentSlide].map((el, i) => (
                                <img className="" src={el} alt="" />
                            ))
                        }
                    </div>
                </div>
                <button onClick={nextSlide} className="mt-3">
                    <img className="rotate-180" src="/image/arrow_slider.webp" alt="" />
                </button>
            </div>
            <FixedFuter link="/#eat" needRotate={true} />
        </section>
    );
}

export default Keitering;
