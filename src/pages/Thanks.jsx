import React from "react";
import { m } from 'framer-motion';
import FixedFuter from '../components/Home/FixedFuter';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const HL1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
};

const HL2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 2,
        },
    },
};

const Thanks = () => {
    return (
        <section style={{ backgroundImage: 'url(/image/thanks_bg.png)' }} className="back_settings relative h-screen">
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="flex flex-col items-center pt-24 gap-2">
                <m.p variants={HL1} className="text-[20px] monterey text-center">Бронирование<br /> прошло успешно!</m.p>
                <m.img variants={HL1} src="/image/galk.png" alt="" />
                <m.p variants={HL2} className="text-[20px] monterey text-center">Спасибо,<br /> что выбрали нас!</m.p>
                <m.p variants={HL2} className="text-[20px] monterey text-center pt-3">Наш менеджер свяжется<br /> с вами в ближайшее<br /> время для уточнения</m.p>
            </m.div>
            <m.img variants={HL2} className="absolute bottom-0 left-1/2 -translate-x-1/2" src="/image/man_like.png" alt="" />
            <FixedFuter link="/" needRotate={true} />
        </section>
    );
}

export default Thanks;
