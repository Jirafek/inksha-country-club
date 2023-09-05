import React from "react";
import routes from "../../utils/Home/routes";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section id="footer" className="section back_settings relative" style={{ backgroundImage: 'url(/image/footer_bg.webp)' }}>
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h2 className="text-[20px] text-white z-10 font-bold">ИКША Country Club</h2>
            </div>
            <div className="w-full footer_blured_back flex flex-col pt-5 pl-2">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center">
                        <img src="/image/call_big.webp" alt="" />
                        <a href="tel:+7985909120">
                            <h4 className="text-white monterey font-extrabold underline">+7 985 909 12 02</h4>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div style={{ backgroundImage: 'url(/image/email_big.webp)' }} className="flex w-[49px] h-[51px] justify-center items-center back_settings">
                            <img src="/image/email_inside.webp" alt="" />
                        </div>
                        <a href="mailto:contact@ikshacountryclub.com">
                            <h4 className="text-white monterey font-extrabold underline">contact@ikshacountryclub.com</h4>
                        </a>
                    </div>
                </div>
                <ul className="flex flex-col gap-[10px] pl-[14px]">
                    {
                        routes.map((route, i) => (
                            <li key={uuidv4()}>
                                {
                                    route.link.includes('/') ?
                                        <Link to={route.link} className='flex gap-[1px]'>
                                            <p className='monterey text-white font-medium'>
                                                {route.text}
                                            </p>
                                            {route.icon && <img src={route.whiteIcon} />}
                                        </Link> :
                                        <a href={route.link} className='flex gap-[1px]'>
                                            <p className='monterey text-white font-medium'>
                                                {route.text}
                                            </p>
                                            {route.icon && <img src={route.whiteIcon} />}
                                        </a>
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-col gap-2 pb-[5px] pt-[15px] mb-16">
                    <div className="flex justify-between monterey px-[11px]"> {/* justify-between */}
                        <Link to="/data-privicy" className="text-white text-[12px] underline">Политика данных</Link>
                        <Link to="/faq" className="text-white text-[12px] underline">FAQ</Link>
                        <Link to="/live-rules" className="text-white text-[12px] underline">Правила проживания</Link>
                    </div>
                    <div className="flex justify-center monterey">
                        <a className="text-white text-[12px] underline" href="/pdf/oferta.pdf">Договор оферты</a>
                    </div>
                    <p className="text-center text-white text-[12px] monterey px-[26px]">"Икша Кантри Клаб" | Все права защищены Copyright © 2023 Икша Кантри Клаб</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
