import { useState } from "react"
import InputMask from "react-input-mask"
import { Navigate } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { v4 as uuidv4 } from "uuid"

import { Helmet } from "react-helmet"
import { Controller, useForm } from "react-hook-form"
import FixedFuter from "../components/Home/FixedFuter"
import {
    CustomNextArrow,
    CustomPrevArrow,
} from "../utils/Home/CustomArrowsLocations"
import { useURLData } from "../utils/URLData"



const locationsData = [
    {
        imgAvif: "/avif/locations_slider_title.avif",
        imgWebp: "/image/locations_slider_title.webp",
        link: "https://www.youtube.com/embed/45-Tw9CtsN0",
        title: "Веранда с домиками на берегу",
        circles: ["30 чел", "50 м2", "0 м до воды"],
        texts: [
            "остекленная веранда до 40 человек с выходом к воде",
            "зона BBQ",
            "три спальных домика",
            "Панорамная баня с купелью и летним душем",
            "походный трейлер и костровая зона с креслами",
            "надувной домик-иглу,собственный причал с лесенкой",
        ],
    },
    {
        imgAvif: "/avif/locations_slider_title2.avif",
        imgWebp: "/image/locations_slider_title2.webp",
        link: "https://www.youtube.com/embed/WbReNc_s-f4",
        title: "Лофт-веранда с камином",
        circles: ["20 чел", "50 м2", "500 м до воды"],
        texts: [
            "Камин, мангал, кухня",
            "Интернет, кондиционер, холодильник",
            "Прогулка на лодках",
            "в стоимость входит караоке с 2-я микрофонами.",
            "Попробуйте нашу новинку sup - доски.",
        ],
    },
    {
        imgAvif: "/avif/locations_slider_title3.avif",
        imgWebp: "/image/locations_slider_title3.webp",
        link: "https://www.youtube.com/embed/gklmawJFCOs",
        title: "Коттедж",
        circles: ["10 чел", "150 м2", "500 м до воды"],
        texts: [
            "Веранда",
            "зона BBQ",
            "Собственный форелевый пруд",
            "Терраса для отдыха и мероприятий",
            "Пинг - понг",
        ],
    },
    {
        imgAvif: "/avif/locations_slider_title4.avif",
        imgWebp: "/image/locations_slider_title4.webp",
        link: "https://www.youtube.com/embed/myNwsKZabqs",
        title: "Спальные домики с выходом на пляж",
        circles: ["18 чел", "30 м2", "100 м до воды"],
        texts: [
            "две спальни с двумя двуспальными кроватями",
            "Оборудованная кухня с гостиной",
            "Терраса с видом на воду",
            "Частный пляж",
            "Шезлонги, зона для пикника, а также",
        ],
    },
]

const LocationsSlider = () => {
    const { utm_campaign, utm_content, utm_source } = useURLData()
    //    const { register, handleSubmit, control } = useForm();
    const [navigation, setNavigation] = useState(false)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    }
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const sendingData = {

            data: {
                name: data.name,
                phone: data.phone,
                groupID: import.meta.env.VITE_GROUP_ID,
                email: "-",
            },
            source: "https://mobile.ikshacountryclub.com",
            formType: "Перезвоните мне",
            link: window.location.href,
            utm_source: utm_source,
            utm_campaign: utm_campaign,
            utm_content: utm_content,
        }

        try {
            const response = await fetch(
                "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: new URLSearchParams(sendingData).toString(),
                }
            )

            if (response.ok) {
                reset()
                alert("Данные успешно отправлены")
                setNavigation(true)
            } else {
                alert("Произошла ошибка при отправке данных")
            }
        } catch (error) {
            console.error(error)
            alert("Произошла ошибка при отправке данных")
        }
    }

    return (
        <section className="about_background back_settings relative">
            {navigation && <Navigate to="/thanks" />}
            <Helmet>
                <title>
                    Домики в Подмосковье на берегу Икшинского водохранилища - Икша
                    Кантри Клаб
                </title>
                <meta
                    name="description"
                    content="Домики в Подмосковье с Икша Кантри Клаб -  а также беседки Рыбалка, Баня и СПА, водные виды спорта. Приезжайте
            отдохнуть на берегу Икшинского водохранилища.
     Уютные домики и беседки, Шашлыки, красивые закаты. Проведите свои выходные на природе, недалеко от Москвы"
                />
                <meta
                    name="title"
                    content="Домики в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
                />
                <meta
                    name="keywords"
                    content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, глэмпинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
                />
            </Helmet>
            <Slider {...settings}>
                {locationsData.map((el, i) => (
                    <div key={uuidv4()} className="flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <picture>
                                <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                                <img
                                    src={el.imgWebp}
                                    alt={`Икша Кантри Клаб - ${el.title}`}
                                />
                            </picture>
                        </div>
                        <div className="flex justify-center">
                            <iframe
                                className="relative h-[200px] w-full"
                                src={el.link}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mb-2 mt-3 flex justify-center">
                            <div
                                className="back_settings relative flex h-[370px] w-full flex-col items-center px-5 py-3"
                                style={{
                                    backgroundImage:
                                        "url(/image/locations_text_layer.webp)",
                                    backgroundSize: "100% 100%",
                                }}
                            >
                                <h3 className="text-center text-[20px] font-extrabold">
                                    {el.title}
                                </h3>
                                <div className="flex w-full justify-around">
                                    {el.circles.map((text, index) => (
                                        <div
                                            key={uuidv4()}
                                            style={{
                                                backgroundColor:
                                                    "linear-gradient(217deg, rgba(255, 252, 252, 0.60) 0%, rgba(255, 252, 252, 0.30) 100%)",
                                                boxShadow:
                                                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                            }}
                                            className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#4F8B36] text-center text-[18px] font-bold backdrop-blur-[2px]"
                                        >
                                            {text}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-2 flex flex-col justify-center">
                                    {el.texts.map((text, index) => (
                                        <p key={uuidv4()} className="text-[14px]">
                                            - {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center px-4 pb-[200px]">
                <form
                    className="relative flex w-full flex-col items-center rounded-[10px] border-[3px] border-[#4F8B36] bg-[#B5EAC9] px-5 pb-[25px]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="mb-[7px] text-[20px] font-bold">Перезвоните мне</p>
                    <input
                        {...register("name", { required: true })}
                        style={{
                            borderColor: "rgba(0, 0, 0, 0.50)",
                            backgroundColor: "rgba(217, 217, 217, 0.50)",
                        }}
                        className="mb-[2px] w-full rounded-[10px] border py-[6px] pl-[13px] text-[13px]"
                        placeholder="имя"
                        type="text"
                    />
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                maskChar="_"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            >
                                {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        style={{
                                            borderColor: "rgba(0, 0, 0, 0.50)",
                                            backgroundColor: "rgba(217, 217, 217, 0.50)",
                                        }}
                                        className="z-[100000] mb-[2px] w-full rounded-[10px] border py-[6px] pl-[13px] text-[13px]"
                                        placeholder="телефон"
                                        type="text"
                                    />
                                )}
                            </InputMask>
                        )}
                    />

                    <button
                        type="submit"
                        style={{ transform: "translateX(-50%)" }}
                        className="absolute -bottom-8 left-1/2 rounded-[10px] border-[2px] border-black bg-[#0CF259] px-[40px] py-[2px] text-[13px]"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <FixedFuter link="/#locations" needRotate={true} />
        </section>
    )
}

export default LocationsSlider
