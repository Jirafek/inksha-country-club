import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./helpers/CustomEventArrows";
import useWindowSize from 'react-use/lib/useWindowSize'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

// change TITLE

const eventsData = [
    {
        title: 'День рождения',
        img: '/image/events_1.png',
        text: [
            'От 9 часов',
            'Уютная крытая веранда для большой компании',
            'Зона BBQ и баня с панорамным видом',
            'Пледы, водные развлечения и музыка',
            'Возможность остаться на ночлег (до 10 человек)',
            'Предзаказ питания и праздничного торта'
        ],
        link: 'birthday'
    },
    {
        title: 'Название',
        img: '/image/events_1.png',
        text: [
            'От 9 часов',
            'Уютная крытая веранда для большой компании',
            'Зона BBQ и баня с панорамным видом',
            'Пледы, водные развлечения и музыка',
            'Возможность остаться на ночлег (до 10 человек)',
            'Предзаказ питания и праздничного торта'
        ],
        link: 'not_birth'
    },
    {
        title: 'Название',
        img: '/image/events_1.png',
        text: [
            'От 9 часов',
            'Уютная крытая веранда для большой компании',
            'Зона BBQ и баня с панорамным видом',
            'Пледы, водные развлечения и музыка',
            'Возможность остаться на ночлег (до 10 человек)',
            'Предзаказ питания и праздничного торта'
        ],
        link: 'some_type'
    },

];

const Events = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        afterChange: (currentSlide) => setActiveSlideIndex(currentSlide),
    };

    const { width, height } = useWindowSize()
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <section style={{ backgroundImage: 'url(/image/bg-events.png)' }} id="events" className="back_settings relative">
            <div className="flex flex-col items-center">
                <img src="/image/happy_title.png" alt="" />
            </div>
            <Confetti
                width={width}
                height={height}
                numberOfPieces={eventsData[activeSlideIndex]?.link === "birthday" ? 300 : 0}
                gravity={0.1}
            />
            <Slider {...settings}>
                {
                    eventsData.map((el, i) => {
                        return (
                            <div className="flex flex-col items-center justify-center relative" key={uuidv4()}>
                                <div className="flex justify-center mb-[35px]">
                                    <div style={{ backgroundImage: 'url(/image/events_title.png)' }} className="back_settings flex justify-center items-center w-[310px] h-[55px] text-[#000] monterey text-[22px] font-bold">
                                        {el.title}
                                    </div>
                                </div>
                                <div className="flex justify-center mb-[20px]">
                                    <img className="px-5 mb-[10px]" src={el.img} alt="" />
                                </div>
                                <div className="flex justify-center mb-[10px]">
                                    <div style={{ backgroundImage: 'url(/image/events_text_bg.png)' }} className="back_settings text-[12px] monterey text-[#000] flex w-[320px] h-[220px] items-center justify-center">

                                        <ul className="flex flex-col items-center justify-center pl-[15px]">
                                            {el.text.map((el, i) => {
                                                return (
                                                    <li key={uuidv4()} className="w-[270px]">
                                                        - {el}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <Link to={el.link} className="flex justify-center pb-[30px]">
                                    <button style={{ backgroundImage: 'url(/image/date_button_event.png)' }} className="w-[205px] text-[19px] font-bold h-[70px] text-[#000] monterey flex items-center justify-center">
                                        Выбрать дату
                                    </button>
                                </Link>
                            </div>
                        );
                    })
                }
            </Slider>
        </section>
    );
}

export default Events;
