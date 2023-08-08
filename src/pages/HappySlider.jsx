import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";


const sliderData = [
    {
        bg: '/image/h_bg4.webp',
        img: '/image/h_4.webp',
        text: '',
        height: '545px'
    },
    {
        bg: '/image/h_bg3.webp',
        img: '/image/h_3.webp',
        title: 'ВИДЫ АКТИВНОГО ОТДЫХА',
        text: [
            'велосипед, квадроцикл',
            'катер, гидроцикл, лодка',
            'волейбол, футбол, бадминтон'
        ],
        height: '356px'
    },
    {
        bg: '/image/h_bg1.webp',
        img: '/image/h_1.webp',
        text: 'Баня и спа: Единение с природой, сочетание русских традиций и современного подхода к уходу за собой. Мы умеем сочетать несочетаемое и создавать незабываемое',
        height: '306px'
    },
    {
        bg: '/image/h_bg2.webp',
        img: '/image/h_2.webp',
        text: 'Если вы любите рыбалку, Икша Кантри Клаб - прекрасное место для вас. Водохранилище и форелевый пруд на территории вас приятно удивят.',
        height: '316px'
    },
];

const HappySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow isBottom="147px" />,
        prevArrow: <CustomPrevArrow isBottom="142px" />,
    };
    return (
           <>
      <Helmet>
        <title>Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. </title>
        <meta
          name="description"
          content="Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
        />
            <meta
          name="title"
          content="Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта на Икшинском водохранилище."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
        />
      </Helmet>
        <section className="relative h-[851px]">
            <Slider {...settings}>
                {
                    sliderData.map((el, i) => (
                        <div className="relative pb-[40px]">
                            <img className="absolute w-full h-[851px] top-0" src={el.bg} alt="" />
                            <div style={{ transform: 'translateX(-50%)' }} className="flex flex-col items-center justify-center absolute left-1/2 z-20 w-full h-[90px]">
                                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                                <h1 className="text-[20px] text-white z-10 font-bold">РАЗВЛЕЧЕНИЯ</h1>
                            </div>
                            <img className="relative z-10 mb-0" src={el.img} alt="" />
                            <div className="flex justify-center z-10 relative px-[10px] mb-7">
                                <div style={i === 0 ? { display: 'none', backgroundColor: 'rgba(245, 236, 236, 0.44)' } : { display: 'flex', backgroundColor: 'rgba(245, 236, 236, 0.44)' }} className="border border-[#000] rounded-[10px] flex justify-center items-center px-2 pt-[10px] pb-5">
                                    {
                                        i >= 2 ?
                                            <p className="monterey text-center text-[14px]">
                                                {el.text}
                                            </p>
                                            : i === 1 ?
                                                <div className="flex flex-col items-start">
                                                    <p className="monterey font-extrabold self-center">
                                                        {el.title}
                                                    </p>
                                                    {
                                                        el.text.map((textItem, index) => (
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
                                                                <p className="text-[15px]">
                                                                    {textItem}
                                                                </p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                : ''
                                    }

                                </div>
                            </div>
                            <div className="relative w-full h-[100px]">
                                <div style={{ transform: 'translateX(-50%)', bottom: `${i === 0 ? '45px' : '66px'}` }} className="absolute left-1/2 bottom-[150px] z-20">
                                    <a target="_blanc" href="https://bronirui-online.ru/iksha-country-club/uslugi" style={{ backgroundImage: 'url(/image/h_btn_layer.webp)' }} className="back_settings relative flex justify-center items-center w-[161px] h-[60px]">
                                        Выбрать услугу
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <FixedFuter link="/#happy" needRotate={true} />
        </section>
                </>
    );
}

export default HappySlider;
