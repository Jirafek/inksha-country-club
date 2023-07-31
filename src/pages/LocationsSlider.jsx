import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import { CustomNextArrow, CustomPrevArrow } from '../utils/Home/CustomArrowsLocations';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import FixedFuter from '../components/Home/FixedFuter';

const locationsData = [
    {
        img: '/image/locations_slider_title.webp',
        link: 'https://www.youtube.com/embed/myNwsKZabqs',
        title: 'Веранда с домиками на берегу',
        circles: [
            '30 чел',
            '50 м2',
            '0 м до воды'
        ],
        texts: [
            'остекленная веранда до 40 человек с выходом к воде',
            'зона BBQ',
            'три спальных домика',
            'Панорамная баня с купелью и летним душем',
            'походный трейлер и костровая зона с креслами',
            'надувной домик-иглу,собственный причал с лесенкой'
        ]
    },
    {
        img: '/image/locations_slider_title2.webp',
        link: 'https://www.youtube.com/embed/WbReNc_s-f4',
        title: 'Лофт-веранда с камином',
        circles: [
            '20 чел',
            '50 м2',
            '500 м до воды'
        ],
        texts: [
            'Камин, мангал, кухня',
            'Интернет, кондиционер, холодильник',
            'Прогулка на лодках',
            'в стоимость входит караоке с 2-я микрофонами.',
            'Попробуйте нашу новинку sup - доски.',
        ]
    },
    {
        img: '/image/locations_slider_title3.webp',
        link: 'https://www.youtube.com/embed/gklmawJFCOs',
        title: 'Коттедж',
        circles: [
            '10 чел',
            '150 м2',
            '500 м до воды'
        ],
        texts: [
            'Веранда',
            'зона BBQ',
            'Собственный форелевый пруд',
            'Терраса для отдыха и мероприятий',
            'Пинг - понг',
        ]
    },
    {
        img: '/image/locations_slider_title4.webp',
        link: 'https://www.youtube.com/embed/myNwsKZabqs',
        title: 'Спальные домики с выходом на пляж',
        circles: [
            '18 чел',
            '30 м2',
            '100 м до воды'
        ],
        texts: [
            'две спальни с двумя двуспальными кроватями',
            'Оборудованная кухня с гостиной',
            'Терраса с видом на воду',
            'Частный пляж',
            'Шезлонги, зона для пикника, а также',
        ]
    },
];

const LocationsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        emailjs.send("service_a1dan7b", "template_avgrkli", data, "V_IkuqWqNwJlUw72K")
            .then((result) => {
                alert('Форма успешно отправлена!');
            }, (error) => {
                alert('Ошибка при отправке формы');
            }); // sending to email
    }

    return (
        <section className="about_background back_settings relative px-[6px]">
            <Slider {...settings}>
                {
                    locationsData.map((el, i) => (
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col items-center">
                                <img src={el.img} alt="" />
                            </div>
                            <div className="flex justify-center">
                                <iframe className="relative w-full h-[200px]" src={el.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className="flex justify-center mt-3 mb-2">
                                <div className="w-full h-[355px] back_settings relative px-5 py-3 flex flex-col items-center" style={{backgroundImage: 'url(/image/locations_text_layer.webp)'}}>
                                    <h3 className="font-extrabold text-[20px] text-center">
                                        {el.title}
                                    </h3>
                                    <div className="flex justify-around w-full">
                                        {
                                            el.circles.map((text, index) => (
                                                <div 
                                                style={{backgroundColor: 'linear-gradient(217deg, rgba(255, 252, 252, 0.60) 0%, rgba(255, 252, 252, 0.30) 100%)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}} 
                                                className="w-[90px] h-[90px] rounded-full border border-[#4F8B36] text-[18px] text-center font-bold backdrop-blur-[2px] flex justify-center items-center">
                                                    {text}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col justify-center mt-2">
                                        {
                                            el.texts.map((text, index) => (
                                                <p className="text-[14px]">
                                                    - {text}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center px-4 pb-[80px]">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full items-center px-5 border-[3px] border-[#4F8B36] bg-[#B5EAC9] rounded-[10px] pb-[25px] relative">
                                    <p className="text-[20px] font-bold mb-[7px]">Перезвоните мне</p>
                                    <input {...register('name', {required: true})} style={{borderColor: 'rgba(0, 0, 0, 0.50)', backgroundColor: 'rgba(217, 217, 217, 0.50)'}} className="w-full rounded-[10px] text-[13px] pl-[13px] py-[6px] mb-[2px] border" placeholder="имя" type="text" />
                                    <input {...register('phone', {required: true})} style={{borderColor: 'rgba(0, 0, 0, 0.50)', backgroundColor: 'rgba(217, 217, 217, 0.50)'}} className="w-full rounded-[10px] text-[13px] pl-[13px] py-[6px] mb-[2px] border" placeholder="телефон" type="text" />
                                    <button type="submit" style={{transform: 'translateX(-50%)'}} className="absolute -bottom-3 left-1/2 bg-[#0CF259] text-[13px] py-[2px] px-[40px] border-black border-[2px] rounded-[10px]">
                                        гоу
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <FixedFuter link="/" needRotate={true} />
        </section>
    );
}

export default LocationsSlider;
