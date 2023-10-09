import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { m } from 'framer-motion';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLinesLeft = {
    hidden: {
        opacity: 0,
        right: '400px'
    },
    visible: {
        opacity: 1,
        right: '16px',
        transition: {
            ease: 'easeOut',
            duration: 2.5,
        },
    },
};
const headingLinesRight = {
    hidden: {
        opacity: 0,
        left: '300px'
    },
    visible: {
        opacity: 1,
        left: '16px',
        transition: {
            ease: 'easeOut',
            duration: 2,
        },
    },
};

const EatListData = [
    {
        img: '/image/fire.webp',
        text: 'плов на костре',
        openImage: '/image/plov.webp'
    },
    {
        img: '/image/fish.webp',
        text: 'финская уха на костре',
        openImage: '/image/uha.webp'
    },
    {
        img: '/image/cooker.webp',
        text: 'шашлык от Шефа',
        openImage: '/image/shah.webp'
    },
];

const Eat = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <m.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={heading}
            id="eat"
            style={{ backgroundImage: 'url(/image/eat_bg.webp)' }}
            className="section happy_background relative back_settings">
            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100]"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    onClick={closeImage}
                >
                    <img className="w-[90%] rounded-[30px]" src={selectedImage} alt="Opened Image" />
                </div>
            )}
            <div className="flex flex-col items-center justify-center relative h-[90px]">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>
                <h2 className="text-[20px] text-white z-10 font-bold mt-2">ПИТАНИЕ</h2>
            </div>
            <picture>
                <source srcSet="/avif/cook_cooker.avif 1x" type="image/avif" />
                <img className="w-full mb-[5px]" src="/image/cook_cooker.webp" alt="Икша Кантри Клаб" />
            </picture>
            <div className="flex justify-center mb-[5px]">
                <div className="back_settings flex flex-col justify-around items-center h-[255px] w-[350px] relative py-3" style={{ backgroundImage: 'url(/image/cook_frame.webp)', backgroundSize: 'auto' }}>
                    <h4 className="monterey text-lg font-semibold text-[#161212] text-[16px]">МЫ РАДЫ ПРЕДЛОЖИТЬ ВАМ</h4>

                    <picture>
                        <source srcSet="/avif/ukr1.avif 1x" type="image/avif" />
                        <img className="absolute top-[45px] left-[110px] z-10" src="/image/ukr1.webp" alt="Икша Кантри Клаб" />
                    </picture>

                    {
                        EatListData.map((el, i) => (
                            <div key={uuidv4()} className="flex gap-[5px] items-center self-start pl-7 z-20" onClick={() => openImage(el.openImage)}>
                                <div style={{ backgroundImage: `url(${el.img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="w-[60px] h-[60px]"></div>
                                <p className="text-[17px] text-[#161212] monterey underline">
                                    {el.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center pb-[66px]">
                <div
                    style={{ backgroundColor: 'rgba(166, 143, 129, 0.72)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    className="max-w-[360px] w-full h-[105px] rounded-[50px] border-white border py-[10px] flex flex-col items-center justify-center relative"
                >
                    <p className="monterey text-[17px] text-white text-center w-[300px]">Также мы готовы организовать для вас кейтеринг !</p>

                    <picture>
                        <source srcSet="/avif/bulk.avif 1x" type="image/avif" />
                        <img className="absolute bottom-[14px] right-[10px]" src="/image/bulk.webp" alt="Икша Кантри Клаб" />
                    </picture>

                    <Link to="/keitering">
                        <button
                            style={{ backgroundColor: 'rgba(230, 234, 41, 0.60)' }}
                            className="w-[185px] h-[33px] border-[2px] border-[#645A53] backdrop-blur-[1px] rounded-[10px]"
                        >
                            Подробнее
                        </button>
                    </Link>
                </div>
            </div>
            <picture>
                <source srcSet="/avif/chair_left.avif 1x" type="image/avif" />
                <m.img className="absolute bottom-0 left-4" variants={headingLinesRight} src="/image/chair_left.webp" alt="Икша Кантри Клаб" />
            </picture>
            <picture>
                <source srcSet="/avif/chair_right.avif 1x" type="image/avif" />
                <m.img className="absolute -bottom-[65px] right-4 z-10" variants={headingLinesLeft} src="/image/chair_right.webp" alt="Икша Кантри Клаб" />
            </picture>
        </m.section>
    );
}

export default Eat;
