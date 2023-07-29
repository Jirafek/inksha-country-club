import React from "react";
import { m } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';

const datesData = [
    {
        title: 'ПАКЕТ “База”',
        texts: [
            '5 часов',
            'Романтический пикник на берегу (фрукты, хлеб, закуски)',
            'Инструкция-квест, как до нас добраться (пока не разгадает, никакого свидания!)',
            'Пуфы, пледы и чай, романтическая музыка (ты же знаешь ее любимые песни?)',
            'Аренда гриля и угля',
            'Настолки и карточные игры для двоих (по запросу)',
        ],
        cost: '7 990р'
    },
    {
        title: 'ПАКЕТ “Морской Бой”',
        texts: [
            '7 часов',
            'Романтический пикник на берегу (фрукты, хлеб, закуски)',
            'Аренда лодки или сап-досок для прогулки по воде',
            'Рыболовные снасти и принадлежности (по запросу)',
            'Аренда гриля и угля',
            'Теплые пледы, полотенца и чай, чтобы согретьс',
        ],
        cost: '12 490р'
    },
    {
        title: 'ПАКЕТ “Мастер - гриль”',









        
        texts: [
            '7 часов',
            'Фрукты, маршмеллоу',
            'Мясо и овощи для гриля',
            'Рецепты и инструкции по готовке от профессионального шеф-повара',
            'Аренда гриля и угля',
            'Специальные соусы и приправы',
        ],
        cost: '15 490р'
    },
    {
        title: 'ПАКЕТ “Мне надоел ресторан”',
        texts: [
            '24 часа',
            'Фрукты',
            'Организация пикника на природе с шашлыками и закусками',
            'Дегустация напитков народов мира с сырами и мясом',
            'Личный шеф-повар, который приготовит блюдо при вас на мангале',
            'Ночь в лесном домике с видом на водную гладь',],
        cost: '21 500р'
    },
    {
        title: 'ПАКЕТ “Забанили”',
        texts: [
            '24 часа',
            'Фрукты и напиток',
            'Баня с панорамным видом на лес',
            'Теплая купель в русском стиле с хвоей и шишками',
            'Индивидуальные и парные парения. Прогрев с пят до плечей. Прогрев спинки',
            'Расслабляющий массаж, пилинги',
            'Чайная церемония с традиционным русским самоваром. На выбор русский облепиховый чай или русская рябина',
            'Ночь в лесном домике с видом на водную гладь',
        ],
        cost: '26 500р'
    },
    {
        title: 'ПАКЕТ “Совместное Потение”',
        texts: [
            '24 часа',
            'Фрукты',
            'Баня с панорамным видом на лес и купель с подогревом',
            'Совместный поход на велосипедах или катание на лодке',
            'Теплые пледы, полотенца и чай, чтобы согреться',
            'Здоровый ужин от нашего шефа и свежевыжатые соки',
            'Ночь в лесном домике с видом на водную гладь',
        ],
        cost: '25 900р'
    },
    {
        title: 'ПАКЕТ “Netflix & Чили”',
        texts: [
            '7 часов',
            'Фрукты, орео',
            'Уютный кинотеатор на природе с большим экраном и пуфами;',
            'Просмотр любимого фильма или сериала в уютной обстановке.',
            'Попкорн и снеки;',
        ],
        cost: '11 200р'
    },
    {
        title: 'ПАКЕТ “Инстасамка”',
        texts: [
            '7 часов',
            'Романтический пикник на берегу (фрукты, закуски)',
            'Закатная фотосессия для двоих с профессиональным фотографом',
            'Уникальный локейшн и стилизация',
            'Ретушь и обработка фотографий',
            'Печать фотографий на память',
            'Пуфы, пледы и чай, романтическая музыка',
            'Аренда гриля и угля',
        ],
        cost: '18 900р'
    },
    {
        title: 'ПАКЕТ “Она у меня певица”',
        texts: [
            '24 часа',
            'Фрукты',
            'Баня с панорамным видом на лес и купель с подогревом',
            'Чайная церемония с традиционным русским самоваром - разогревающий связки сбор с медом и имбирем',
            'Караоке-система с двумя микрофонами и подборкой любимых песен для двоих',
            'Теплые пледы и одеяла, чтобы согреться',
            'Ночь в лесном домике с видом на водную гладь',
        ],
        cost: '18 900р'
    },
    {
        title: 'ПАКЕТ “Служебный Роман”',
        texts: [
            '24 часа',
            'Трансфер до места на автомобиле премиум-класса в обе стороны',
            'Баня с панорамным видом на лес и купель с подогревом',
            'Фрукты, французский сыр',
            'Закатный ужин на двоих при свечах от нашего шефа',
            'Романтическая прогулка на лодке по водохранилищу',
            'Ночь в лесном домике с видом на водную гладь',
            'Теплые пледы, полотенца и чай, чтобы согреться'
        ],
        cost: '44 500р'
    },
    {
        title: 'ПАКЕТ “Мажорный VIP”',
        texts: [
            '24 часа',
            'Трансфер до нашего причала от речного вокзала на катере(час) или на автомобиле премиум класса',
            'Фрукты, французский сыр, стейк из свежевыловленной форели или из парной говядины',
            'Баня с панорамным видом на водохранилище',
            'Теплая купель в русском стиле с хвоей и шишками',
            'Индивидуальные и парные парения. Прогрев с пят до плечей. Прогрев спинки',
            'Расслабляющий массаж, пилинги',
            'Чайная церемония с традиционным русским самоваром. На выбор русский облепиховый чай или русская рябина',
            'Закатный ужин на двоих при свечах от нашего шефа',
            'Ночь в лесном домике с видом на водную гладь',
            'Обратный трансфер на автомобиле премиум-класса',
        ],
        cost: '62 000р'
    },
];

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLines = {
    hidden: {
        opacity: 0,
        clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const DatesChooser = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            style={{ height: '100vh' }}
            className="about_background back_settings relative">
            <m.div variants={headingLines} className="flex flex-col items-center">
                <img src="/image/dates_title.png" alt="" />
            </m.div>
            <Slider className="mt-5 mb-2" {...settings}>
                {
                    datesData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center justify-center">
                            <div className="flex justify-center">
                                <div style={{ backgroundImage: 'url(/image/dates_chooser_bg.png)' }} className="back_settings flex justify-center items-center text-white monterey text-[14px] relative w-[270px] h-[70px]">
                                    {el.title}
                                </div>
                            </div>
                            <div className="flex justify-center px-[50px]">
                                <div style={{ backgroundColor: 'rgba(124, 104, 78, 0.71)' }} className="rounded-[30px] flex flex-col gap-2">
                                    <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                                        {
                                            el.texts.map((text, index) => (
                                                <div key={uuidv4()} className="flex items-center">
                                                    <div className="w-[33px] h-[33px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                                            <path d="M16.8828 12.4697C16.0917 12.4697 15.3183 12.7043 14.6605 13.1438C14.0027 13.5834 13.49 14.2081 13.1873 14.939C12.8845 15.6699 12.8053 16.4742 12.9597 17.2501C13.114 18.026 13.495 18.7387 14.0544 19.2982C14.6138 19.8576 15.3265 20.2385 16.1025 20.3929C16.8784 20.5472 17.6826 20.468 18.4135 20.1652C19.1445 19.8625 19.7692 19.3498 20.2087 18.692C20.6482 18.0342 20.8828 17.2609 20.8828 16.4697C20.8828 15.4089 20.4614 14.3914 19.7112 13.6413C18.9611 12.8912 17.9437 12.4697 16.8828 12.4697ZM16.8828 18.4697C16.4873 18.4697 16.1006 18.3524 15.7717 18.1327C15.4428 17.9129 15.1864 17.6005 15.0351 17.2351C14.8837 16.8696 14.8441 16.4675 14.9212 16.0795C14.9984 15.6916 15.1889 15.3352 15.4686 15.0555C15.7483 14.7758 16.1047 14.5853 16.4926 14.5082C16.8806 14.431 17.2827 14.4706 17.6482 14.622C18.0136 14.7733 18.326 15.0297 18.5458 15.3586C18.7655 15.6875 18.8828 16.0742 18.8828 16.4697C18.8828 17.0002 18.6721 17.5089 18.297 17.8839C17.922 18.259 17.4132 18.4697 16.8828 18.4697Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-[14px] text-white monterey">
                                                        {text}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="px-[14px] bg-[#7C684E] border-white border rounded-[30px] text-5 monterey text-white mt-3 mb-1 max-w-[180px]">
                                            {el.cost}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-3">
                                <a  target="_blanc" href="https://bronirui-online.ru/iksha-country-club/uslugi" className="px-[60px] text-white bg-[#7C684E] text-[18px] font-bold py-1 rounded-[30px]">Выбрать</a>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <FixedFuter link="/" needRotate={true} />
        </m.section>
    );
}

export default DatesChooser;
