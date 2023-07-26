import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";

const sliderData = [
    {
        bg: '/image/h_bg1.png',
        img: '/image/h_1.png',
        text: 'Баня и спа: Единение с природой, сочетание русских традиций и современного подхода к уходу за собой. Мы умеем сочетать несочетаемое и создавать незабываемое'
    },
    {
        bg: '/image/h_bg2.png',
        img: '/image/h_2.png',
        text: 'Если вы любите рыбалку, Икша Кантри Клаб прекрасное место для этого. Водохранилище и форелевый пруд на территории комплекса вас приятно удивят.'
    },
    {
        bg: '/image/h_bg3.png',
        img: '/image/h_3.png',
        title: 'ВИДЫ АКТИВНОГО ОТДЫХА',
        text: [
            'велосипед, квадроцикл',
            'катер, гидроцикл, лодка',
            'волейбол, футбол, бадминтон'
        ]
    },
    {
        bg: '/image/h_bg4.png',
        img: '/image/h_4.png',
        text: ''
    },
];

const HappySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow isBottom="48px" />,
        prevArrow: <CustomPrevArrow isBottom="48px" />,
    };
    return (
        <section className="relative h-[800px]">
            <Slider {...settings}>
                {
                    sliderData.map((el, i) => (
                        <div className="relative">
                            <img className="absolute w-full h-[851px] top-0" src={el.bg} alt="" />
                            <div className="m-0 flex flex-col items-center z-10 relative">
                                <img src="/image/happy_title.png" alt="" />
                            </div>
                            <img className="relative z-10 mb-8" src={el.img} alt="" />
                            <div className="flex justify-center z-10 relative px-[10px] mb-7">
                                <div style={i === 3 ? {display: 'none', backgroundColor: 'rgba(245, 236, 236, 0.44)'} : {display: 'flex', backgroundColor: 'rgba(245, 236, 236, 0.44)'}} className="border border-[#000] rounded-[10px] flex justify-center items-center px-7 pt-[20px] pb-9">
                                    {
                                        i < 2 ?
                                            <p className="monterey text-center">
                                                {el.text}
                                            </p>
                                            : i === 2 ?
                                                <div className="flex flex-col items-start">
                                                    <p className="monterey font-extrabold self-center">
                                                        {el.title}
                                                    </p>
                                                    {
                                                        el.text.map((textItem, index) => (
                                                            <div className="flex items-center gap-1">
                                                                <div className="h-[18px] w-[18px] rounded-full bg-white"></div>
                                                                <p>
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
                            <div className="flex justify-center pb-[41px]">

                                <button style={{backgroundImage: 'url(/image/h_btn_layer.png)'}} className="back_settings relative flex justify-center items-center w-[161px] h-[60px]">
                                    Прайс-Лист
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}

export default HappySlider;
