import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { m } from 'framer-motion';

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

const images = [
    "gallery-all1.png",
    "gallery-all2.png",
    "gallery-all3.png",
    "gallery-all5.png",
    "gallery-all6.png",
    "gallery-all7.png",
];

const GalleryAll = () => {
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
            <div className="m-0 flex flex-col items-center">
                <img src="/image/gallery_title.png" alt="" />
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-2">
                    {images.map((el, i) => (
                        <img
                            className="max-w-[135px] duration-300"
                            key={uuid4()}
                            src={`/image/${el}`}
                            alt=""
                            onClick={() => handleImageClick(el)} // добавляем обработчик клика
                        />
                    ))}
                </div>
            </div>

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
                        src={`/image/${chosenImage}`}
                        alt=""
                        style={{ width: "90%" }}
                        className="absolute"
                    />
                </m.div>
            )}
        </section>
    );
};

export default GalleryAll;