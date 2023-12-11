import { Link } from "react-router-dom"
import { isItWinterNow } from "utils/helpers"
import { v4 as uuidv4 } from 'uuid'
import routes from "../../utils/Home/routes"
import { useURLData } from "../../utils/URLData"

const Footer = () => {
    const { utm_source } = useURLData()

    return (
        <section id="footer" className="section back_settings relative"
            style={{ backgroundImage: `url(/image/footer_bg${isItWinterNow()}.webp)` }}>
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp"
                        alt="Икша Кантри Клаб" />
                </picture>

                <h2 className="text-[20px] text-white z-10 font-bold mt-2">ИКША Country Club</h2>
            </div>
            <div className="w-full footer_blured_back flex flex-col pt-5 pl-2">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center">
                        <picture>
                            <source srcSet="/avif/call_big.avif 1x" type="image/avif" />
                            <img src="/image/call_big.webp" alt="Икша Кантри Клаб" />
                        </picture>

                        {
                            utm_source === 'yandex' ?
                                <a href={'tel:+74995055067'}>
                                    <h4 className="text-white monterey font-extrabold underline">+7(499) 505-50-67</h4>
                                </a>
                                : utm_source === 'vkontakte' ?
                                    <a href={'tel:+74995055087'}>
                                        <h4 className="text-white monterey font-extrabold underline">+7(499) 505-50-87</h4>
                                    </a>
                                    :
                                    <a href={"tel:+74995055031"}>
                                        <h4 className="text-white monterey font-extrabold underline">+7(499) 505-50-31</h4>
                                    </a>

                        }


                    </div>
                    <div className="flex items-center">
                        <div style={{ backgroundImage: 'url(/image/email_big.webp)' }}
                            className="flex w-[49px] h-[51px] justify-center items-center back_settings">
                            <picture>
                                <source srcSet="/avif/email_inside.avif 1x" type="image/avif" />
                                <img src="/image/email_inside.webp" alt="Икша Кантри Клаб" />
                            </picture>
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
                                            {route.icon && <img src={route.whiteIcon} alt="Икша Кантри Клаб" />}
                                        </Link> :
                                        <a href={route.link} className='flex gap-[1px]'>
                                            <p className='monterey text-white font-medium'>
                                                {route.text}
                                            </p>
                                            {route.icon && <img src={route.whiteIcon} alt="Икша Кантри Клаб" />}
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
                        <Link to="/rules" className="text-white text-[12px] underline">Правила проживания</Link>
                    </div>
                    <div className="flex justify-center monterey">
                        <a className="text-white text-[12px] underline" target='_blank' href="/pdf/oferta.pdf">Договор оферты</a>
                    </div>
                    <p className="text-center text-white text-[12px] monterey px-[26px]">"Икша Кантри Клаб" | Все права
                        защищены Copyright © 2023 Икша Кантри Клаб</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
