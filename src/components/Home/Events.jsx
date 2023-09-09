import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./helpers/CustomEventArrows";
import useWindowSize from 'react-use/lib/useWindowSize'
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

// without link, book block

const eventsData = [
    {
        title: 'День рождения',
        imgWebp: '/image/events_1.webp',
        imgAvif: '/avif/events_1.avif',
        text: [
            'От 9 часов',
            'Уютная крытая веранда для компании',
            'Пледы, водные развлечения',
            'Возможность остаться на ночлег (до 10 чел.)',
            'Предзаказ питания и праздничного торта'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Шашлыки',
        imgWebp: '/image/events_2.webp',
        imgAvif: '/avif/events_2.avif',
        text: [
            'От 5 часов',
            'Рыболовные снасти',
            'Освещаемая веранда со столами и диванами',
            'Просторный индивидуальный причал',
            '3 домика для ночлега и питание дополнительно'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Баня и Спа',
        imgWebp: '/image/events_3.webp',
        imgAvif: '/avif/events_3.avif',
        text: [
            '6 часов',
            'Русская баня',
            'Бассейн с подогревом',
            'Парения и чай из самовара',
            'Дополнительно можно заказать питание'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Караоке Вечеринка',
        imgWebp: '/image/events_4.webp',
        imgAvif: '/avif/events_4.avif',
        text: [
            '6 часов',
            '2 микрофона и выбор из тысяч популярных песен',
            'Чайная церемония для разогрева голосовых связок',
            'Аудиосистема с настраиваемым под вас звуком',
            'Напитки и питание',
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Девичник',
        imgWebp: '/image/events_5.webp',
        imgAvif: '/avif/events_5.avif',
        text: [
            '6 часов',
            '2 микрофона и выбор из тысяч популярных песен',
            'Чайная церемония для разогрева голосовых связок',
            'Аудиосистема с настраиваемым под вас звуком',
            'Напитки и питание',
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Мальчишник',
        imgWebp: '/image/events_6.webp',
        imgAvif: '/avif/events_6.avif',
        text: [
            '6 часов',
            'Русская баня',
            'Бассейн с подогревом',
            'Парения и чай из самовара',
            'Дополнительно можно заказать питание'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Свадьба',
        imgWebp: '/image/events_7.webp',
        imgAvif: '/avif/events_7.avif',
        text: [
            '6 часов',
            'Русская баня',
            'Бассейн с подогревом',
            'Парения и чай из самовара',
            'Дополнительно можно заказать питание'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
    },
    {
        title: 'Послесвадебная вечеринка',
        imgWebp: '/image/events_8.webp',
        imgAvif: '/avif/events_8.avif',
        text: [
            '6 часов',
            'Русская баня',
            'Бассейн с подогревом',
            'Парения и чай из самовара',
            'Дополнительно можно заказать питание'
        ],
        link: 'https://bronirui-online.ru/iksha-country-club/uslugi'
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
        <section style={{ backgroundImage: 'url(/image/bg-events.webp)' }} id="events" className="section back_settings relative">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>

                <h2 className="text-[20px] text-white z-10 font-bold">МЕРОПРИЯТИЯ</h2>
            </div>
            <Confetti
                width={width}
                height='710px'
                numberOfPieces={eventsData[activeSlideIndex]?.title === "День рождения" ? 300 : 0}
                gravity={0.1}
                className="z-0"
            />
            <Slider {...settings}>
                {
                    eventsData.map((el, i) => {
                        return (
                            <div className="flex flex-col items-center justify-center relative" key={uuidv4()}>
                                <div className="flex justify-center mb-[20px]">
                                    <div style={{ backgroundImage: 'url(/image/events_title.webp)' }} className="back_settings flex justify-center items-center w-[310px] h-[55px] text-[#000] monterey text-[19px] font-bold">
                                        {el.title}
                                    </div>
                                </div>
                                <div className="flex justify-center mb-[15px]">
                                    <picture>
                                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                        <img className="px-5 w-[300px]" src={el.imgWebp} alt="Икша Кантри Клаб" />
                                    </picture>
                                </div>
                                <div className="flex justify-center mb-[15px]">
                                    <div style={{ backgroundImage: 'url(/image/events_text_bg.webp)' }} className="back_settings relative text-[12px] monterey text-[#000] flex w-[240px] h-[160px] items-center justify-center">

                                        <ul className="flex flex-col items-center justify-center pl-[15px]">
                                            {el.text.map((el, i) => {
                                                return (
                                                    <li key={uuidv4()} className="w-[220px]">
                                                        - {el}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <a rel="noreferrer" href={el.link} className="flex justify-center pb-[30px]">
                                    <button style={{ backgroundImage: 'url(/image/date_button_event.webp)' }} className="w-[205px] text-[19px] font-bold h-[70px] text-[#000] monterey flex items-center justify-center">
                                        Выбрать дату
                                    </button>
                                </a>
                            </div>
                        );
                    })
                }
            </Slider>
        </section>
    );
}

export default Events;
