import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./helpers/CustomEventArrows";
import { v4 as uuidv4 } from 'uuid';

const requestsData = [ // get from firebase
    {
        img: '/image/andrew_req.webp',
        title: 'Олег, 33 года',
        text: 'Отмечали день рождения в этом месте. Все очень понравилось) встретили доброжелательно и дали все необходимо для барбекю. Во время отдыха никто лишний раз не беспокоил, но были на связи. У нас немного подвела погода, но все равно с удовольствием попарились и искупались в купели) в теплую погоду или летом там должно быть еще лучше) прекрасное место для спокойного семейного отдыха, мы были там с детьми и собакой) место рекомендую'
    },
    {
        img: '/image/anna_req.webp',
        title: 'Анна, 26 лет',
        text: 'Очень хорошее место! Красиво, чисто, уютно и все продумано до мелочей! Администратор всегда на связи и всегда готов приехать и предоставить доп услуги, как караоке например. Получили огромное удовольствие от отдыха и ещё вернёмся !'
    },
];

const Responce = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow isTop={true} />,
        prevArrow: <CustomPrevArrow isTop={true} />,
    };

    return (
        <section id="req" className="section back_settings relative" style={{ backgroundImage: 'url(/image/responce_bg.webp)' }}>
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h1 className="text-[20px] text-white z-10 font-bold">ОТЗЫВЫ</h1>
            </div>
            <Slider className="mt-5 pb-16" {...settings}>
                {
                    requestsData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center justify-center">
                            <div className="flex justify-center">

                                <img src={el.img} alt="" />
                            </div>
                            <div className="flex justify-center">
                                <div className="back_settings relative flex justify-center items-center w-[185px] h-[53px] text-white monterey" style={{ backgroundImage: 'url(/image/req_title_bg.webp)' }}>
                                    {el.title}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="back_settings pt-1 relative flex justify-center items-center monterey w-[330px] h-[320px]" style={{ backgroundImage: 'url(/image/textholder_req.webp)' }}>
                                    <p className="text-center text-black w-[300px] h-[305px] overflow-y-auto py-2">
                                        {el.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    );
}

export default Responce;
