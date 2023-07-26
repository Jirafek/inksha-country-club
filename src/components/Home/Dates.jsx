import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

// GEt data from firebase

const imageData = [
    '/image/dates_people_photo.png',
    '/image/dates_people_photo2.png',
    '/image/dates_people_photo3.png',
    '/image/dates_people_photo4.png',
    '/image/dates_people_photo5.png',
    '/image/dates_people_photo6.png',
];

const Dates = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };
    return (
        <section id="dates" style={{ backgroundImage: 'url(/image/dates_bg.png)' }} className="back_settings relative">
            <div className="flex flex-col items-center">
                <img src="/image/dates_title.png" alt="" />
            </div>
            <div className="flex justify-center mb-3">
                <img className="heart" src="/image/heart_dates.png" alt="" />
            </div>

            <div className="flex justify-center mb-3">
                <div style={{ backgroundImage: 'url(/image/dates_test_bg.png)' }} className="back_settings w-[313px] h-[152px] py-3 px-[18px] text-center monterey font-medium text-[14px]">
                    Романтическая атмосфера, закат на воде, ужин при свечах и рассвет над кронами деревьев, именно так и должно выглядеть идеальное свидание, и вы знаете где его провести.
                </div>
            </div>
            <Slider className="mb-[30px]" {...settings}>
                {
                    imageData.map((el, i) => (
                        <div key={uuidv4()} className="flex justify-center">
                            <div className="flex justify-center relative">
                                <div style={{ backgroundImage: 'url(/image/dates_photo_cup.png)' }} className="back_settings w-[330px] h-[210px] flex justify-center items-center z-20"></div>
                                <img style={{ transform: 'translateX(-50%) translateY(-50%)' }} className="w-[310px] absolute left-1/2 top-1/2" src={el} alt="" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <Link to="/choose-date" className="flex justify-center pb-32">
                <button style={{ backgroundImage: 'url(/image/choose_date.png)' }} className="back_settings w-[205px] h-[70px]"></button>
            </Link>
        </section>
    );
}

export default Dates;
