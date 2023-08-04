import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';
import { Link } from "react-router-dom";

const korpSliderData = [
    {
        title: '/image/korp_sl_title-1.png',
        text: 'Укрепить командный дух в спортивных мероприятиях, а потом всех вкусно накормить и комфортно разместить? Все правильно, рецепт идеального тимбилдинга именно такой, а у нас есть все ингредиенты, не хватает только вас.',
        img: '/image/korp_sl_img-1.png'
    },
    {
        title: '/image/korp_sl_title-2.png',
        text: 'В здоровом теле - здоровый дух, а в здоровой атмосфере - здоровый спорт, свежий воздух, русская баня, шашлык или барбекю - идеальный выбор для любителей активного отдыха.',
        img: '/image/korp_sl_img-2.png'
    },
    {
        title: '/image/korp_sl_title-3.png',
        text: 'Еда на природе всегда вкуснее, а в компании друзей и семьи - еще вкуснее, устройте пикник вашей мечты у нас, незабываемые впечатления вам гарантированы.',
        img: '/image/korp_sl_img-3.png'
    },
    {
        title: '/image/korp_sl_title-4.png',
        text: 'Барбекю как в кино? Именно так это и выглядит у нас, все необходимое собрано в одном месте в идеальных пропорциях и приправлено отличным сервисом.',
        img: '/image/korp_sl_img-4.png'
    },
];

const KorpSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow isBottom="12px" />,
        prevArrow: <CustomPrevArrow isBottom="7px" />,
    };
    return (
        <section style={{ backgroundImage: 'url(/image/korp_slider_bg.png)' }} className="back_settings relative h-[851px]">
            <Slider className="" {...settings}>
                {
                    korpSliderData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center">
                            <div className="flex flex-col items-center justify-center relative h-[90px] mb-[10px]">
                                <img className="relative" src={el.title} alt="" />
                            </div>
                            <div className="flex justify-center">
                                <p style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className="w-[340px] text-[20px] text-center">
                                    {el.text}
                                </p>
                            </div>
                            <div className="flex justify-center px-1 mb-5">
                                <img className="w-full" src={el.img} alt="" />
                            </div>
                            <div className="flex justify-center px-1">
                                <Link to="/korp/book" style={{ backgroundImage: 'url(/image/korp_sl_btn.png)' }} className="w-[230px] h-[65px] back_settings font-semibold relative flex justify-center items-center">
                                    Забронировать
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <FixedFuter link="/#korp" needRotate={true} />
        </section>
    );
}

export default KorpSlider;
