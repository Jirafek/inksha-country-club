import React, {Fragment, useState} from "react";
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";
import {v4 as uuidv4} from "uuid";

// change TITLE

// Import images data
const imageData = [
    [
        {
            avif: 'avif/keyt1.avif',
            webp: 'image/keyt1.webp',
        },
        {
            avif: 'avif/keyt2.avif',
            webp: 'image/keyt2.webp',
        },
        {
            avif: 'avif/keyt3.avif',
            webp: 'image/keyt3.webp',
        },
        {
            avif: 'avif/keyt4.avif',
            webp: 'image/keyt4.webp',
        },
        {
            avif: 'avif/keyt5.avif',
            webp: 'image/keyt5.webp',
        },
        {
            avif: 'avif/keyt6.avif',
            webp: 'image/keyt6.webp',
        }
    ],
    [
        {
            avif: 'avif/keyt7.avif',
            webp: 'image/keyt7.webp',
        },
        {
            avif: 'avif/keyt8.avif',
            webp: 'image/keyt8.webp',
        },
        {
            avif: 'avif/keyt9.avif',
            webp: 'image/keyt9.webp',
        },
        {
            avif: 'avif/keyt10.avif',
            webp: 'image/keyt10.webp',
        },
        {
            avif: 'avif/keyt11.avif',
            webp: 'image/keyt11.webp',
        },
        {
            avif: 'avif/keyt12.avif',
            webp: 'image/keyt12.webp',
        }
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

    const handleDownload = (url) => {
        window.open(url, '_blank');
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
                    <picture>
                        <source srcSet="/avif/eat_bg_title.avif 1x" type="image/avif" />
                        <img src="/image/eat_bg_title.webp" alt="Икша Кантри Клаб" />
                    </picture>

                    <a
                        href="https://bronirui-online.ru/iksha-country-club/uslugi"
                        style={{ backgroundColor: 'rgba(230, 234, 41, 0.60)' }}
                        className="text-[#000] text-center text-[15px] font-medium rounded-[10px] backdrop-blur-[1px] border-[2px] border-[#645A53] montaga mb-3 py-[7px] px-[6px]"
                        rel="noreferrer"
                    >
                        Заказать питание
                    </a>
                    <div className="flex flex-col items-center gap-4 mb-5 montaga">
                        <button onClick={() => handleDownload('/pdf/keyt.pdf')}
                            className="text-white underline font-bold text-[20px]"
                        >
                            Меню кейтеринга
                        </button>
                        <button onClick={() => handleDownload('/pdf/z_o_u.pdf')}
                            className="text-white underline font-bold text-[20px]"
                        >
                            Завтраки, обеды, и ужины
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-20">
                    <button onClick={nextSlide} className="mb-3">
                        <picture>
                            <source srcSet="/avif/arrow_slider.avif 1x" type="image/avif" />
                            <img src="/image/arrow_slider.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[7px] w-full">
                            {
                                imageData[currentSlide].map((el, i) => (
                                    <Fragment key={uuidv4()}>
                                        <picture>
                                            <source srcSet={`${el.avif} 1x`} type="image/avif" />
                                            <img className="" src={el.webp} alt="Икша Кантри Клаб" />
                                        </picture>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={nextSlide} className="mt-3">
                        <picture>
                            <source srcSet="/avif/arrow_slider.avif 1x" type="image/avif" />
                            <img className="rotate-180" src="/image/arrow_slider.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
                </div>
                <FixedFuter link="/#eat" needRotate={true} />
            </section>
        </>
    );
}

export default Keitering;
