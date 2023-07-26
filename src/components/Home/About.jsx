import React from "react";
import NumeredItemsData from '../../utils/Home/NumeredItemsData';
import NumberedItem from './helpers/NumberedItem';
import { m } from 'framer-motion';

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLinesOpacity = {
    hidden: {
        opacity: 0,
        // clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        // clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
};

const About = () => {
    const handleDownload = () => {
        const fileUrl = '/pdf/iksha-country-club.pdf';
        window.open(fileUrl, '_blank');
    }
    return (
        <section style={{backgroundImage: 'url(/image/about_bg_styled.jpg)'}} className="back_settings relative" id="about">
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading} 
                className="m-0">
                <m.img 
                style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 z-30" variants={headingLinesOpacity} src="/image/man_about.png" alt="" />
                <div className="pt-[218px] pb-[1.75rem] flex justify-center items-center">

                    <iframe className="relative w-[330px]" src="https://www.youtube.com/embed/gklmawJFCOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <div className="relative max-w-[352px] max-h-[209px]">
                        <img className="absolute top-0" src="/image/video_border.png" alt="" />
                        <div className="flex justify-center items-center">

                        <iframe className="z-20 relative w-[85%] h-[85%]" src="https://www.youtube.com/embed/gklmawJFCOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div> */}
                </div>
                <NumberedItem arrayData={NumeredItemsData} />
                <div className="flex justify-center items-center back_settings mt-3 h-60 mb-[10px]" style={{ backgroundImage: 'url(/image/about_text_border.png)', backgroundSize: 'auto' }}  >
                    <p className="w-[300px] text-center montaguSlab text-[#000] text-[15px]">
                        <span className="font-semibold">Икша Кантри Клаб</span> на берегу Икшинского водохранилища – это уютное место, где вы можете организовать незабываемые мероприятия или просто отдохнуть с семьей или друзьями на выходных. Резиденция расположена в <span className="font-semibold">25</span> км от м. Алтуфьево в лесной зоне на берегу водохранилища
                    </p>
                </div>
                <div className="flex justify-center pb-9">
                    <button onClick={handleDownload}>
                        <div
                            style={{ background: 'linear-gradient(98deg, rgba(253, 249, 249, 0.12) 0%, rgba(253, 249, 249, 0.08) 100%)' }}
                            className="rounded-[10px] colored border-[2px] border-[#A08C7D] backdrop-blur-[1px] montaga px-[6px] py-[2px]"
                        >
                            Скачивайте PDF версию о нашем клубе
                        </div>
                    </button>
                </div>
                <img className="absolute bottom-0 left-0" src="/image/gorshok_left.png" alt="" />
                <img className="absolute bottom-0 right-0" src="/image/gorshok.png" alt="" />
                <img className="w-full absolute -bottom-5 z-20" src="/image/wood_translate.png" alt="" />
            </m.div>
        </section>
    );
}

export default About;
