import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FixedFuter = ({ link, needRotate }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    return (
        <div className='flex fixed bottom-0 w-full h-[112px] z-[1001] flex-col gap-1 transition-all'>
            {
                link === '#book' ?
                    <Link className='self-end' to={link}>
                        <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} className='h-11' src="/image/to_top_button.webp" alt="" />
                    </Link>
                    :
                    <button className='self-end' onClick={goBack}>
                        <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} className='h-11' src="/image/to_top_button.webp" alt="" />
                    </button>
            }
            <div className='bg-[#957BAE] h-full w-full flex items-center justify-around relative'>
                <a href="https://bronirui-online.ru/iksha-country-club">
                    <img className='w-[302px]' src="/image/booking_button.webp" alt="" />
                </a>
                <a href="https://wa.me/79859091202" target="_blanc">
                    <img className="h-[65px] absolute right-[60px] top-1/2 -translate-y-1/2" src="/image/wa_ft.png" alt="" />
                </a>
                <a href="tel:+79859091202">
                    <img className='h-[58px] w-[61px]' src="/image/call.webp" alt="" />
                </a>
            </div>
        </div>
    );
}

export default FixedFuter;
