import React, { useState, Fragment } from "react";
import { v4 as uuid4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { m } from 'framer-motion';
import FixedFuter from '../components/Home/FixedFuter';
import { CustomNextArrow, CustomPrevArrow } from '../utils/Home/CustomArrowsGallery';
import { Helmet } from "react-helmet";

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
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1.3,
        },
    },
};

const imagesTerritory = [
    {
        imgAvif: "/avif/gallery-all1.avif",
        imgWebp: "/image/gallery-all1.webp",
        imgPng: "/image/gallery-all1.png",
    },
    {
        imgAvif: "/avif/gallery-all2.avif",
        imgWebp: "/image/gallery-all2.webp",
        imgPng: "/image/gallery-all2.png",
    },
    {
        imgAvif: "/avif/gallery-all3.avif",
        imgWebp: "/image/gallery-all3.webp",
        imgPng: "/image/gallery-all3.png",
    },
    {
        imgAvif: "/avif/gallery-all5.avif",
        imgWebp: "/image/gallery-all5.webp",
        imgPng: "/image/gallery-all5.png",
    },
    {
        imgAvif: "/avif/gallery-all6.avif",
        imgWebp: "/image/gallery-all6.webp",
        imgPng: "/image/gallery-all6.png",
    },
    {
        imgAvif: "/avif/gallery-all7.avif",
        imgWebp: "/image/gallery-all7.webp",
        imgPng: "/image/gallery-all7.png",
    }
];

const imagesActive = [
    {
        imgAvif: "/avif/gallery-all8.avif",
        imgWebp: "/image/gallery-all8.webp",
        imgPng: "/image/gallery-all8.png",
    },
    {
        imgAvif: "/avif/gallery-all9.avif",
        imgWebp: "/image/gallery-all9.webp",
        imgPng: "/image/gallery-all9.png",
    },
    {
        imgAvif: "/avif/gallery-all10.avif",
        imgWebp: "/image/gallery-all10.webp",
        imgPng: "/image/gallery-all10.png",
    },
    {
        imgAvif: "/avif/gallery-all11.avif",
        imgWebp: "/image/gallery-all11.webp",
        imgPng: "/image/gallery-all11.png",
    },
    {
        imgAvif: "/avif/gallery-all12.avif",
        imgWebp: "/image/gallery-all12.webp",
        imgPng: "/image/gallery-all12.png",
    },
    {
        imgAvif: "/avif/gallery-all13.avif",
        imgWebp: "/image/gallery-all13.webp",
        imgPng: "/image/gallery-all13.png",
    }
];

const guesses = [
    {
        imgAvif: "/avif/gallery-all14.avif",
        imgWebp: "/image/gallery-all14.webp",
        imgPng: "/image/gallery-all14.png",
    },
    {
        imgAvif: "/avif/gallery-all15.avif",
        imgWebp: "/image/gallery-all15.webp",
        imgPng: "/image/gallery-all15.png",
    },
    {
        imgAvif: "/avif/gallery-all16.avif",
        imgWebp: "/image/gallery-all16.webp",
        imgPng: "/image/gallery-all16.png",
    },
    {
        imgAvif: "/avif/gallery-all17.avif",
        imgWebp: "/image/gallery-all17.webp",
        imgPng: "/image/gallery-all17.png",
    },
    {
        imgAvif: "/avif/gallery-all18.avif",
        imgWebp: "/image/gallery-all18.webp",
        imgPng: "/image/gallery-all18.png",
    },
    {
        imgAvif: "/avif/gallery-all19.avif",
        imgWebp: "/image/gallery-all19.webp",
        imgPng: "/image/gallery-all19.png",
    },
    {
        imgAvif: "/avif/gallery-all20.avif",
        imgWebp: "/image/gallery-all20.webp",
        imgPng: "/image/gallery-all20.png",
    },
    {
        imgAvif: "/avif/gallery-all21.avif",
        imgWebp: "/image/gallery-all21.webp",
        imgPng: "/image/gallery-all21.png",
    },
    {
        imgAvif: "/avif/gallery-all22.avif",
        imgWebp: "/image/gallery-all22.webp",
        imgPng: "/image/gallery-all22.png",
    },
    {
        imgAvif: "/avif/gallery-all23.avif",
        imgWebp: "/image/gallery-all23.webp",
        imgPng: "/image/gallery-all23.png",
    },
    {
        imgAvif: "/avif/gallery-all24.avif",
        imgWebp: "/image/gallery-all24.webp",
        imgPng: "/image/gallery-all24.png",
    },
    {
        imgAvif: "/avif/gallery-all25.avif",
        imgWebp: "/image/gallery-all25.webp",
        imgPng: "/image/gallery-all25.png",
    }
];

const eat = [
    {
        imgAvif: "/avif/gallery-all26.avif",
        imgWebp: "/image/gallery-all26.webp",
        imgPng: "/image/gallery-all26.png",
    },
    {
        imgAvif: "/avif/gallery-all27.avif",
        imgWebp: "/image/gallery-all27.webp",
        imgPng: "/image/gallery-all27.png",
    },
    {
        imgAvif: "/avif/gallery-all28.avif",
        imgWebp: "/image/gallery-all28.webp",
        imgPng: "/image/gallery-all28.png",
    },
    {
        imgAvif: "/avif/gallery-all29.avif",
        imgWebp: "/image/gallery-all29.webp",
        imgPng: "/image/gallery-all29.png",
    },
    {
        imgAvif: "/avif/gallery-all30.avif",
        imgWebp: "/image/gallery-all30.webp",
        imgPng: "/image/gallery-all30.png",
    },
    {
        imgAvif: "/avif/gallery-all31.avif",
        imgWebp: "/image/gallery-all31.webp",
        imgPng: "/image/gallery-all31.png",
    },
    {
        imgAvif: "/avif/gallery-all32.avif",
        imgWebp: "/image/gallery-all32.webp",
        imgPng: "/image/gallery-all32.png",
    },
    {
        imgAvif: "/avif/gallery-all33.avif",
        imgWebp: "/image/gallery-all33.webp",
        imgPng: "/image/gallery-all33.png",
    },
    {
        imgAvif: "/avif/gallery-all34.avif",
        imgWebp: "/image/gallery-all34.webp",
        imgPng: "/image/gallery-all34.png",
    },
    {
        imgAvif: "/avif/gallery-all35.avif",
        imgWebp: "/image/gallery-all35.webp",
        imgPng: "/image/gallery-all35.png",
    },
    {
        imgAvif: "/avif/gallery-all36.avif",
        imgWebp: "/image/gallery-all36.webp",
        imgPng: "/image/gallery-all36.png",
    },
    {
        imgAvif: "/avif/gallery-all37.avif",
        imgWebp: "/image/gallery-all37.webp",
        imgPng: "/image/gallery-all37.png",
    }
];

const gallerySliderData = [
    {
        imgAvif: '/avif/gallery_slider_title.avif',
        imgWebp: '/image/gallery_slider_title.webp',
        imgPng: '/image/gallery_slider_title.png',
        items: imagesTerritory
    },
    {
        imgAvif: '/avif/gallery_slider_title1.avif',
        imgWebp: '/image/gallery_slider_title1.webp',
        imgPng: '/image/gallery_slider_title1.png',
        items: imagesActive
    },
    {
        imgAvif: '/avif/gallery_slider_title3.avif',
        imgWebp: '/image/gallery_slider_title3.webp',
        imgPng: '/image/gallery_slider_title3.png',
        items: guesses
    },
    {
        imgAvif: '/avif/gallery_slider_title4.avif',
        imgWebp: '/image/gallery_slider_title4.webp',
        imgPng: '/image/gallery_slider_title4.png',
        items: eat
    },
];

const GalleryAll = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    const [chosenImage, setChosenImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // новое состояние для отслеживания открытия/закрытия модального окна

    const handleImageClick = (image) => {
        setChosenImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>Фотогалерея Икша Кантри Клаб - Посмотрите фотографии про отдых в подмосковье</title>
                <meta
                    name="description"
                    content="Фотогалерея Икша Кантри Клаб. Красивые Фотографии с берега Икшинского водохранилища,
            Впечатления об отдыхе, Уютные домики, Шашлыки, водные развлечения, красивые закаты"
                />
                <meta
                    name="title"
                    content="Фотогалерея Икша Кантри Клаб - Посмотрите красивые фотографии про отдых в подмосковье у воды"
                />
                <meta
                    name="keywords"
                    content="фото, фотография, фотогарелея, сьемки. Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, компания, катание, домик, беседки"
                />
            </Helmet>
            <section className="about_background back_settings relative pb-[60px]">
                <Slider {...settings}>
                    {
                        gallerySliderData.map((el, i) => (
                            <Fragment key={uuid4()}>
                                <div className="m-0 flex flex-col items-center">
                                    <picture>
                                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                        <source srcSet={`${el.imgWebp} 1x`} type="image/webp" />
                                        <img src={el.imgPng} alt="Икша Кантри Клаб" />
                                    </picture>
                                </div>

                                <div className="flex justify-center">
                                    <div className="grid grid-cols-2">
                                        {el.items.map((imgUrl, i) => (
                                            <picture>
                                                <source srcSet={`${imgUrl.imgAvif} 1x`} type="image/avif" />
                                                <source srcSet={`${imgUrl.imgWebp} 1x`} type="image/webp" />
                                                <img
                                                    className="max-w-[135px] duration-300"
                                                    key={uuid4()}
                                                    src={imgUrl.imgPng}
                                                    alt="Икша Кантри Клаб"
                                                    onClick={() => handleImageClick(imgUrl)} // добавляем обработчик клика
                                                />
                                            </picture>

                                        ))}
                                    </div>
                                </div>
                            </Fragment>
                        ))
                    }
                </Slider>

                {isModalOpen && (
                    <m.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                        variants={heading}
                        style={{ background: "rgba(0, 0, 0, 0.5)" }}
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
                        onClick={closeModal}
                    >
                        <picture>
                            <source srcSet={`${chosenImage.imgAvif} 1x`} type="image/avif" />
                            <source srcSet={`${chosenImage.imgWebp} 1x`} type="image/webp" />
                            <m.img
                                variants={headingLines}
                                src={chosenImage.imgPng}
                                alt="Икша Кантри Клаб"
                                style={{ width: "200px" }}
                                className="absolute"
                            />
                        </picture>

                    </m.div>
                )}
                <FixedFuter link="/#gallery" needRotate={true} />
            </section>
        </>
    );
};

export default GalleryAll;
