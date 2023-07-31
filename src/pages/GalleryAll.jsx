import React, { useState, Fragment } from "react";
import { v4 as uuid4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { m } from 'framer-motion';
import FixedFuter from '../components/Home/FixedFuter';
import { CustomNextArrow, CustomPrevArrow } from '../utils/Home/CustomArrowsGallery';

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
    "/image/gallery-all1.webp",
    "/image/gallery-all2.webp",
    "/image/gallery-all3.webp",
    "/image/gallery-all5.webp",
    "/image/gallery-all6.webp",
    "/image/gallery-all7.webp",
];

const imagesActive = [
    "/image/gallery-all8.webp",
    "/image/gallery-all9.webp",
    "/image/gallery-all10.webp",
    "/image/gallery-all11.webp",
    "/image/gallery-all12.webp",
    "/image/gallery-all13.webp",
];

const gallerySliderData = [
    {
        img: '/image/gallery_slider_title.webp',
        items: imagesTerritory
    },
    {
        img: '/image/gallery_slider_title1.webp',
        items: imagesActive
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
        <section style={{ height: "100vh" }} className="about_background back_settings relative">
            <Slider {...settings}>
                {
                    gallerySliderData.map((el, i) => (
                        <Fragment key={uuid4()}>
                            <div className="m-0 flex flex-col items-center">
                                <img src={el.img} alt="" />
                            </div>

                            <div className="flex justify-center">
                                <div className="grid grid-cols-2">
                                    {el.items.map((image, i) => (
                                        <img
                                            className="max-w-[135px] duration-300"
                                            key={uuid4()}
                                            src={image}
                                            alt=""
                                            onClick={() => handleImageClick(image)} // добавляем обработчик клика
                                        />
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
                    <m.img
                        variants={headingLines}
                        src={chosenImage}
                        alt=""
                        style={{ width: "200px" }}
                        className="absolute"
                    />
                </m.div>
            )}
            <FixedFuter link="/" needRotate={true} />
        </section>
    );
};

export default GalleryAll;