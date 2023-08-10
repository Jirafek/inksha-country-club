import React, { useState } from "react";
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";

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
         <>
      <Helmet>
        <title>Отдых в Подмосковье с Икша Кантри Клаб - шашлыки и блюда на костре и мангале у воды. </title>
        <meta
          name="description"
          content="Отдых в Подмосковье с Икша Кантри Клаб - Очень вкусные Блюда на мангале, настоящая рыбацкая уха, Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
        />
            <meta
          name="title"
          content="Отдых в Подмосковье с Икша Кантри Клаб - шашлыки и блюда на костре и мангале на берегу Икшинского водохранилища."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик,
                мангал, уха, плов, недалеко, москва, рядом, московская область, беседки"
        />
      </Helmet>
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
          </>
    );
}

export default Keitering;
