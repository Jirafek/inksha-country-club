import React, { useEffect } from "react";
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

    useEffect(() => {
        const customStyles = `
        .ytp-title-link {
            display: none !important;
        }
        `;

        const styleElement = document.createElement('style');
        styleElement.innerHTML = customStyles;
        const ytDoc = document.querySelector('.yt-video');
        //   ytDoc.document.head.appendChild(styleElement);
    })

    const handleDownload = () => {
        const fileUrl = '/pdf/iksha-country-club.pdf';
        window.open(fileUrl, '_blank');
    }
    return (
        <section style={{ backgroundImage: 'url(/image/about_bg_styled.webp)' }} className="back_settings relative" id="about">
            <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                className="m-0">

                <div style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 z-30 top-[30px] w-[215px] bg-transparent">
                    <img className="bg-transparent" src="/image/girman.gif" alt="GIF Image" />
                </div>
                {/* <m.img style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2 z-30 top-[30px] w-[215px]" variants={headingLinesOpacity} src="/image/man_about.webp" alt="" /> */}
                <div className="pt-[180px] pb-[1.75rem] flex justify-center items-center">

                    <iframe className="relative yt-video w-[330px] h-[205px]" src="https://www.youtube.com/embed/Eat2wgPNuIo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <div className="relative max-w-[352px] max-h-[209px]">
                        <img className="absolute top-0" src="/image/video_border.webp" alt="" />
                        <div className="flex justify-center items-center">

                        <iframe className="z-20 relative w-[85%] h-[85%]" src="https://www.youtube.com/embed/gklmawJFCOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div> */}
                </div>
                <NumberedItem arrayData={NumeredItemsData} />
                <div className="flex justify-center items-center back_settings mt-3 h-60 mb-[10px]" style={{ backgroundImage: 'url(/image/about_text_border.webp)', backgroundSize: 'auto' }}  >
                    <p className="w-[260px] text-center montaguSlab text-[#000] text-[15px]">
                        <span className="font-semibold">Икша Кантри Клаб</span> – это уютное место, где вы можете организовать незабываемые мероприятия или просто отдохнуть с семьей или друзьями на выходных. Резиденция расположена в <span className="font-semibold">25</span> км от м. Алтуфьево в лесной зоне на берегу водохранилища
                    </p>
                </div>
                <div className="flex justify-center pb-12">
                    <button onClick={handleDownload}>
                        <div
                            style={{ background: 'linear-gradient(98deg, rgba(253, 249, 249, 0.12) 0%, rgba(253, 249, 249, 0.08) 100%)' }}
                            className="rounded-[10px] colored text-[13px] border-[2px] border-[#A08C7D] backdrop-blur-[1px] montaga px-[6px] py-[2px] underline"
                        >
                            Скачивайте PDF версию о нашем клубе
                        </div>
                    </button>
                </div>
                <img className="absolute bottom-0 left-0" src="/image/gorshok_left.webp" alt="" />
                <img className="absolute bottom-0 right-0" src="/image/gorshok.webp" alt="" />
                <img className="w-full absolute -bottom-5 z-20" src="/image/wood_translate.webp" alt="" />
            </m.div>
        </section>
    );
}

export default About;
