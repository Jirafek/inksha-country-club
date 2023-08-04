import React from "react";
import { Link } from "react-router-dom";
import FixedFuter from '../components/Home/FixedFuter';

const Rules = (props) => {
    const { title, isNeedButton, isNeedPadding, text } = props;

    return (
        <section className="back_settings relative" style={{ backgroundImage: 'url(/image/h_bg1.webp)' }}>
            <div className="flex justify-center">
                <div className="back_settings relative w-[340px] h-[68px] flex justify-center text-center font-extrabold text-[14px] items-center monterey text-white" style={{ backgroundImage: 'url(/image/politics_bg.webp)' }}>
                    {title}
                </div>
            </div>
            {
                isNeedButton &&
                <div className="flex justify-center">
                    <div className="back_settings relative w-[250px] h-[75px] flex justify-center items-center" style={{ backgroundImage: 'url(/image/title_bg_rules.webp)' }}></div>
                </div>
            }
            <div className="flex justify-center">
                <div className="back_settings relative w-[350px] h-[530px] flex justify-center items-center pt-7" style={isNeedPadding ? { backgroundImage: 'url(/image/text_layer_rules.webp)', padding: '28px 50px 15px 50px' } : { backgroundImage: 'url(/image/text_layer_rules.webp)', padding: '28px 13px 15px 13px' }}>
                    <div style={!isNeedPadding ? { fontSize: '14px' } : {}} className="w-full h-full overflow-y-auto monterey text-center">
                        {
                            text
                        }
                    </div>
                </div>
            </div>
            <div style={isNeedPadding ? { paddingBottom: '3rem' } : { paddingBottom: '8rem' }} className="px-[15px] flex flex-col monterey">
                <p className="text-[12px]">Присоединяйтесь к нам в социальных сетях:</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="mr-[6px]" target="_blanc" href="https://vk.com/ikshacountryclub">
                            <img src="/image/vk.webp" alt="Отдых на берегу Икшинского водохранилища - Икша Кантри Клаб" />
                        </a>
                        <a target="_blanc" href="https://www.instagram.com/ikshacountryclub">
                            <img src="/image/inst.webp" alt="Загородный клуб - Икша Кантри Клаб" />
                        </a>
                        <a target="_blanc" href="https://www.youtube.com/@ikshacountryclub">
                            <img className="w-[50px] h-[50px] bg-transparent" src="/image/youtube_bg.webp" alt="Отдых на природе в Подмосковье Икша Кантри Клаб" />
                        </a>
                    </div>
                    <Link to="/#book"><img src="/image/low_bron.webp" alt="" /></Link>
                </div>
                <p className="text-center text-[12px] pb-5">
                    "Икша Кантри Клаб" | Все права защищены Copyright © 2023 Икша Кантри Клаб
                </p>
            </div>
            <FixedFuter link="/#contacts" needRotate={true} />
        </section>
    );
}

export default Rules;
