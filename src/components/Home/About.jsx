import React from "react";
import NumeredItemsData from '../../utils/Home/NumeredItemsData';
import NumberedItem from './helpers/NumberedItem';

const About = () => {
    return (
        <section className="about_background back_settings relative" id="about">
            <div className="m-0">
                <img style={{ transform: 'translateX(-50%)' }} className="absolute left-1/2" src="/image/man_about.png" alt="" />
                <div className="pt-[206px] flex justify-center items-center">
                    <img src="/image/video_border.png" alt="" />
                </div>
                <NumberedItem arrayData={NumeredItemsData} />
                <div className="flex justify-center items-center back_settings mt-3 h-60 mb-[10px]" style={{ backgroundImage: 'url(/image/about_text_border.png)', backgroundSize: 'auto' }}  >
                    <p className="w-[300px] text-center montaguSlab text-[#000]">
                        <span className="font-semibold">Икша Кантри Клаб</span> на берегу Икшинского водохранилища – это уютное место, где вы можете организовать незабываемые мероприятия или просто отдохнуть с семьей или друзьями на выходных. Резиденция расположена в <span className="font-semibold">25</span> км от м. Алтуфьево в лесной зоне на берегу водохранилища
                    </p>
                </div>
                <div className="flex justify-center">
                <a href="href_to_pdf">
                    <div
                        style={{ background: 'linear-gradient(98deg, rgba(253, 249, 249, 0.12) 0%, rgba(253, 249, 249, 0.08) 100%)' }}
                        className="rounded-[10px] colored border-[2px] border-[#A08C7D] backdrop-blur-[1px] montaga px-[6px] py-[2px]"
                    >
                        Скачивайте PDF версию о нашем клубе
                    </div>
                </a>
                </div>
                <img className="absolute bottom-0 left-0" src="/image/gorshok_left.png" alt="" />
                <img className="absolute bottom-0 right-0" src="/image/gorshok.png" alt="" />
            </div>
        </section>
    );
}

export default About;
