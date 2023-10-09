import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

// GEt data from firebase

const imageData = [
    {
        avif: '/avif/dates_people_photo.avif',
        webp: '/image/dates_people_photo.webp',
    },
    {
        avif: '/avif/dates_people_photo2.avif',
        webp: '/image/dates_people_photo2.webp',
    },
    {
        avif: '/avif/dates_people_photo3.avif',
        webp: '/image/dates_people_photo3.webp',
    },
    {
        avif: '/avif/dates_people_photo4.avif',
        webp: '/image/dates_people_photo4.webp',
    },
    {
        avif: '/avif/dates_people_photo5.avif',
        webp: '/image/dates_people_photo5.webp',
    },
    {
        avif: '/avif/dates_people_photo6.avif',
        webp: '/image/dates_people_photo6.webp',
    }
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
        <section id="dates" style={{ backgroundImage: 'url(/image/dates_bg.webp)' }} className="section back_settings relative">
            <div className="flex flex-col items-center justify-center relative h-[90px]">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>
                <h2 className="text-[20px] text-white z-10 font-bold mt-2">СВИДАНИЯ НА БЕРЕГУ</h2>
            </div>
            <div className="flex justify-center mb-3">
                <img className="heart" src="/image/heart_dates.webp" alt="" />
            </div>

            <div className="flex justify-center mb-3">
                <div style={{ backgroundImage: 'url(/image/dates_test_bg.webp)' }} className="back_settings w-[313px] h-[152px] py-3 px-[18px] text-center monterey font-medium text-[14px]">
                    Романтическая атмосфера, закат на воде, ужин при свечах и рассвет над кронами деревьев, именно так и должно выглядеть идеальное свидание, и вы знаете где его провести.
                </div>
            </div>
            <Slider className="mb-[30px]" {...settings}>
                {
                    imageData.map(({ webp, avif }, i) => (
                        <div key={uuidv4()} className="flex justify-center">
                            <div className="flex justify-center relative">
                                <div style={{ backgroundImage: 'url(/image/dates_photo_cup.webp)' }} className="back_settings w-[330px] h-[210px] flex justify-center items-center z-20"></div>

                                <picture>
                                    <source srcSet={`${avif} 1x`} type="image/avif" />
                                    <img style={{ transform: 'translateX(-50%) translateY(-50%)' }} className="w-[310px] absolute left-1/2 top-1/2" src={webp} alt="Икша Кантри Клаб - Свидания" />
                                </picture>

                            </div>
                        </div>
                    ))
                }
            </Slider>
            <Link to="/choose-date" className="flex justify-center pb-32">
                <button style={{ backgroundImage: 'url(/image/choose_date.webp)' }} className="back_settings w-[205px] h-[70px]"></button>
            </Link>
        </section>
    );
}

export default Dates;
