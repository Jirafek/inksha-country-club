import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FixedFuter = ({ link, needRotate }) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='flex fixed bottom-0 w-full h-[112px] z-[1001] flex-col gap-1 transition-all'>
            {
                link === '#book' ?
                    <button className='self-end' onClick={scrollToTop}>
                        <picture>
                            <source srcSet="/avif/to_top_button.avif 1x" type="image/avif" />
                            <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} className='h-11' src="/image/to_top_button.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
                    :
                    <button className='self-end' onClick={goBack}>
                        <picture>
                            <source srcSet="/avif/to_top_button.avif 1x" type="image/avif" />
                            <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} className='h-11' src="/image/to_top_button.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
            }
            <div className='bg-[#957BAE] h-full w-full flex items-center justify-around relative'>
                <a rel="noreferrer" className="relative w-[230px] h-[40px] flex items-center justify-center" href="https://bronirui-online.ru/iksha-country-club">
                    <picture>
                        <source srcSet="/avif/booking_button.avif 1x" type="image/avif" />
                        <img className='w-[215px] h-[40px] absolute inset-0' src="/image/booking_button.webp" alt="Икша Кантри Клаб - Заказть отдых" />
                    </picture>

                    <h3 className="monterey font-extrabold text-[18px] z-10">ЗАБРОНИРОВАТЬ</h3>
                </a>
                <a href="https://wa.me/79859091202" >
                    <picture>
                        <source srcSet="/avif/wa_ft.avif 1x" type="image/avif" />
                        <source srcSet="/image/wa_ft.webp 1x" type="image/webp" />
                        <img className="h-[65px]" src="/image/wa_ft.png" alt="Икша Кантри Клаб - Заказть отдых через Ватсап" />
                    </picture>
                </a>
                <a href="https://t.me/ikshacountryclub" >
                    <picture>
                        <source srcSet="/avif/tg_footer.avif 1x" type="image/avif" />
                        <source srcSet="/image/tg_footer.webp 1x" type="image/webp" />
                        <img className="h-[65px]" src="/image/tg_footer.png" alt="Икша Кантри Клаб - Заказть отдых через Телеграм" />
                    </picture>
                </a>
                <a href="tel:+79859091202">
                    <picture>
                        <source srcSet="/avif/call.avif 1x" type="image/avif" />
                        <img className='h-[58px] w-[61px]' src="/image/call.webp" alt="Икша Кантри Клаб" />
                    </picture>
                </a>
            </div>
        </div>
    );
}

export default FixedFuter;
