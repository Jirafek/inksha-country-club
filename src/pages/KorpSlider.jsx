import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const korpSliderData = [
    {
        titleAvif: '/avif/korp_sl_title-1.avif',
        titleWebp: '/image/korp_sl_title-1.webp',
        titlePng: '/image/korp_sl_title-1.png',
        text: 'Укрепить командный дух в спортивных мероприятиях, а потом всех вкусно накормить и комфортно разместить? Все правильно, рецепт идеального тимбилдинга именно такой, а у нас есть все ингредиенты, не хватает только вас.',
        imgAvif: '/avif/korp_sl_img-1.avif',
        imgWebp: '/image/korp_sl_img-1.webp',
        imgPng: '/image/korp_sl_img-1.png'
    },
    {
        titleAvif: '/avif/korp_sl_title-2.avif',
        titleWebp: '/image/korp_sl_title-2.webp',
        titlePng: '/image/korp_sl_title-2.png',
        text: 'В здоровом теле - здоровый дух, а в здоровой атмосфере - здоровый спорт, свежий воздух, русская баня, шашлык или барбекю - идеальный выбор для любителей активного отдыха.',
        imgAvif: '/avif/korp_sl_img-2.avif',
        imgWebp: '/image/korp_sl_img-2.webp',
        imgPng: '/image/korp_sl_img-2.png'
    },
    {
        titleAvif: '/avif/korp_sl_title-3.avif',
        titleWebp: '/image/korp_sl_title-3.webp',
        titlePng: '/image/korp_sl_title-3.png',
        text: 'Еда на природе всегда вкуснее, а в компании друзей и семьи - еще вкуснее, устройте пикник вашей мечты у нас, незабываемые впечатления вам гарантированы.',
        imgAvif: '/avif/korp_sl_img-3.avif',
        imgWebp: '/image/korp_sl_img-3.webp',
        imgPng: '/image/korp_sl_img-3.png'
    },
    {
        titleAvif: '/avif/korp_sl_title-4.avif',
        titleWebp: '/image/korp_sl_title-4.webp',
        titlePng: '/image/korp_sl_title-4.png',
        text: 'Барбекю как в кино? Именно так это и выглядит у нас, все необходимое собрано в одном месте в идеальных пропорциях и приправлено отличным сервисом.',
        imgAvif: '/avif/korp_sl_img-4.avif',
        imgWebp: '/image/korp_sl_img-4.webp',
        imgPng: '/image/korp_sl_img-4.png'
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
         <>
      <Helmet>
        <title>Корпоративы и тимбилдинг в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
        <meta
          name="description"
          content="Корпоративы и самый эффективный тимбилдинг в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
        />
            <meta
          name="title"
          content="Корпоративы и тимбилдинг в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
        />
      </Helmet>
        <section style={{ backgroundImage: 'url(/image/korp_slider_bg.png)' }} className="back_settings relative h-[851px]">
            <Slider className="" {...settings}>
                {
                    korpSliderData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center">
                            <div className="flex flex-col items-center justify-center relative h-[90px] mb-[10px]">
                                <picture>
                                    <source srcSet={`${el.titleAvif} 1x`} type="image/avif" />
                                    <source srcSet={`${el.titleWebp} 1x`} type="image/webp" />
                                    <img className="relative" src={el.titlePng} alt="Икша Кантри Клаб" />
                                </picture>
                            </div>
                            <div className="flex justify-center">
                                <p style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className="w-[340px] text-[20px] text-center">
                                    {el.text}
                                </p>
                            </div>
                            <div className="flex justify-center px-1 mb-5">
                                <picture>
                                    <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                    <source srcSet={`${el.imgWebp} 1x`} type="image/webp" />
                                    <img className="w-full" src={el.imgPng} alt="Икша Кантри Клаб" />
                                </picture>
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
            <Link to='/korp-landing' className='absolute  bottom-[100px] p-3 left-1/2 transform -translate-x-1/2 '>

                <div  className=' underline text-lg tracking-widest rounded-lg hover:no-underline duration-300  '>Подробнее</div>
            </Link>
            <FixedFuter link="/#korp" needRotate={true} />
        </section>
               </>
    );
}

export default KorpSlider;
