import { useNavigate } from "react-router-dom"
import { useURLData } from "utils/URLData"

const FixedFuter = ({ link, needRotate }) => {
    const navigate = useNavigate()
    const { utm_source } = useURLData()
    const goBack = () => {
        // navigate(-1)
        navigate('/')
        navigate(0)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    const message = 'Здравствуйте, меня интересует аренда домика' // Replace with your desired message
    const whatsappLink = `https://wa.me/79859091202?text=${encodeURIComponent(message)}`

    return (
        <div className='flex fixed bottom-0 w-full z-[1001] flex-col gap-1 transition-all'>
            {
                link === '#book' ?
                    <button className='self-end' onClick={scrollToTop}>
                        <picture>
                            <source srcSet="/avif/to_top_button.avif 1x" type="image/avif" />
                            <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} src="/image/to_top_button.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
                    :
                    <button className='self-end' onClick={goBack}>
                        <picture>
                            <source srcSet="/avif/to_top_button.avif 1x" type="image/avif" />
                            <img style={{ transform: `rotate(${needRotate ? -90 : 0}deg)` }} className="w-[80px]" src="/image/to_top_button.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </button>
            }
            <div className='bg-[#957BAE] h-full w-full flex items-center justify-around relative'>
                <div onClick={() => { window.znmsWidget.open('#znms-widget-1') }}
                    className="relative w-[230px] monterey font-extrabold text-[18px] bg-[#79E718] border border-black rounded-[16px] h-[40px] flex items-center justify-center"
                >
                    {/* <picture>
                        <source srcSet="/avif/booking_button.avif 1x" type="image/avif" />
                        <img className='w-[215px] h-[40px] absolute inset-0' src="/image/booking_button.webp" alt="Икша Кантри Клаб - Заказть отдых" />
                    </picture> */}

                    <h3 className=" z-10">ЗАБРОНИРОВАТЬ</h3>
                </div>
                <a href={whatsappLink} >
                    <picture>
                        <source srcSet="/avif/wa_ft.avif 1x" type="image/avif" />
                        <source srcSet="/image/wa_ft.webp 1x" type="image/webp" />
                        <img className="h-[65px]" src="/image/wa_ft.png" alt="Икша Кантри Клаб - Заказть отдых через Ватсап" />
                    </picture>
                </a>
                <a href={`https://t.me/IkshaCountryClubSupportBot?start=${utm_source}_`} >
                    <picture>
                        <source srcSet="/avif/tg_footer.avif 1x" type="image/avif" />
                        <source srcSet="/image/tg_footer.webp 1x" type="image/webp" />
                        <img className="h-[65px]" src="/image/tg_footer.png" alt="Икша Кантри Клаб - Заказть отдых через Телеграм" />
                    </picture>
                </a>
                {/* 
                {
                    utm_source === 'yandex' ?
                        <a className='fixed h-[60px] w-[60px] bottom-[130px] right-0' href="tel:+74995055067">
                            <picture className=''>
                                <source srcSet="/avif/call.avif 1x" type="image/avif" />
                                <img className=' w-full  h-full' src="/image/call.webp" alt="Икша Кантри Клаб" />
                            </picture>
                        </a>
                        : utm_source === 'vkontakte' ?
                            <a className='fixed h-[60px] w-[60px] bottom-[130px] right-0' href="tel:+74995055087">
                                <picture className=''>
                                    <source srcSet="/avif/call.avif 1x" type="image/avif" />
                                    <img className=' w-full  h-full' src="/image/call.webp" alt="Икша Кантри Клаб" />
                                </picture>
                            </a>
                            :
                            <a className='fixed h-[60px] w-[60px] bottom-[130px] right-0' href="tel:+74995055031">
                                <picture className=''>
                                    <source srcSet="/avif/call.avif 1x" type="image/avif" />
                                    <img className=' w-full  h-full' src="/image/call.webp" alt="Икша Кантри Клаб" />
                                </picture>
                            </a>

                } */}
            </div>
        </div>
    )
}

export default FixedFuter
