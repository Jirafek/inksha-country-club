import React from "react";
import routes from "../../utils/Home/routes";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section id="footer" className="back_settings relative" style={{ backgroundImage: 'url(/image/footer_bg.jpg)' }}>
            <div className="pt-10 flex flex-col items-center">
                <img src="/image/footer_title.png" alt="" />
            </div>
            <div className="w-full footer_blured_back flex flex-col pt-5 pl-2">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center">
                        <img src="/image/call_big.png" alt="" />
                        <a href="tel:+7985909120">
                            <h2 className="text-white monterey font-extrabold underline">+7 985 909 12 02</h2>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div style={{ backgroundImage: 'url(/image/email_big.png)' }} className="flex w-[49px] h-[51px] justify-center items-center back_settings">
                            <img src="/image/email_inside.png" alt="" />
                        </div>
                        <a href="mailto:contact@ikshacountryclub.com">
                            <h2 className="text-white monterey font-extrabold underline">contact@ikshacountryclub.com</h2>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] pl-[14px]">
                    {
                        routes.map((route, i) => (
                            <div key={uuidv4()}>
                                <a href={route.link} className='flex gap-[1px]'>
                                    <p className='monterey text-white font-medium'>
                                        {route.text}
                                    </p>
                                    {route.icon && <img src={route.whiteIcon} />}
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2 pb-[5px] pt-[15px]">
                    <div className="flex justify-around monterey px-[11px]"> {/* justify-between */}
                        <Link to="/data-privicy" className="text-white text-[12px] underline">Политика данных</Link>
                        {/* <Link to="/faq" className="text-white text-[12px]">FAQ</Link> */}
                        <Link to="/live-rules" className="text-white text-[12px] underline">Правила проживания</Link>
                    </div>
                    <p className="text-center text-white text-[12px] monterey px-[26px]">"Икша Кантри Клаб" | Все права защищены Copyright © 2023 Икша Кантри Клаб</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;