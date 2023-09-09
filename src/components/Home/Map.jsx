import '../styles/map.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from 'react';
import { m } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { CustomNextArrow, CustomPrevArrow } from './helpers/CustomEventArrows';
import Map1 from './maps/Map1';
import Map2 from './maps/Map2';
import Map3 from './maps/Map3';

// Slider

const heading = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const headingLinesOpacity = {
    hidden: {
        opacity: 0,
        // clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        // clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const blocks = {
    hidden: {
        opacity: 0,
        clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
        opacity: 1,
        clipPath: 'inset(0% 0px 0px)',
        transition: {
            ease: 'easeOut',
            duration: 1.5,
        },
    },
};

const Map = () => {

    const sliderRef = React.useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    const
        positions = [
            {
                title: 'Беседка',
                imageSrc: '/image/besedka.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'BBQ',
                imageSrc: '/image/bbq_old.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Спальный домик',
                imageSrc: '/image/dom2.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Спальный домик',
                imageSrc: '/image/dom2.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Иглу',
                imageSrc: '/image/iglu.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Баня',
                imageSrc: '/image/bania.HEIC',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Купель',
                imageSrc: '/image/kupel.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Летний душ',
                imageSrc: '/image/dush.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.'
            },
            {
                title: 'Свидание на берегу',
                imageSrc: '/image/prichal.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Посиделки у камина',
                imageSrc: '/image/koster.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Кибертрак',
                imageSrc: '/image/track.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Спальный домик',
                imageSrc: '/image/dom2.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Спорт и водные развлечения',
                imageSrc: 'https://ie.wampi.ru/2023/05/10/Mask-group.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
            {
                title: 'Пляж',
                imageSrc: '/image/map_bg_mini.webp',
                text: 'Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.',
            },
        ],
        positionRelativeMouse = { x: 10, y: 10 }

    // Elements

    useEffect(() => {
        const
            positions = Array(50).fill(0).map((elem, i) => ({
                title: `Заголовок ${i + 1}`,
                imageSrc: './shk.webp',
                text: 'Text'
            })),
            positionRelativeMouse = { x: 10, y: 10 };

        const
            mapTooltip = document.querySelector('.map-tooltip'),
            mapControls = document.querySelector('.map-controls'),
            mapControlsLists = document.querySelectorAll('.map-controls-list'),
            popupWrapper = document.querySelector('.popup__wrapper'),
            popup = popupWrapper.querySelector('.popup'),
            popupClose = popupWrapper.querySelector('.popup-close'),
            ships = document.querySelectorAll('.map_image_ship__wrapper');

        // Logic
        const
            openPopup = (title, src, text) => {
                popupWrapper.classList.add('view');
                const
                    popupImage = popup.querySelector('.map-info_image'),
                    popupTitle = popup.querySelector('.map-info_title'),
                    popupText = popup.querySelector('.map-info-content');

                popupImage.src = src;
                popupTitle.innerHTML = title;
                if (text === '') {
                    popupText.style.display = 'none';
                } else {
                    popupText.style.display = 'block';
                    popupText.innerHTML = text;
                }
            },
            ChangeText = (title, src, text) => {
                const title_div = document.querySelector('.div_title'),
                    div_img = document.querySelector('.div_img'),
                    div_text = document.querySelector('.div_text');

                title_div.classList.remove('opacityWin');
                div_img.classList.remove('opacityWin');
                div_text.classList.remove('opacityWin');

                title_div.classList.add('opacityLoose');
                div_img.classList.add('opacityLoose');
                div_text.classList.add('opacityLoose');

                setTimeout(() => {
                    title_div.classList.remove('opacityLoose');
                    div_img.classList.remove('opacityLoose');
                    div_text.classList.remove('opacityLoose');

                    title_div.classList.add('opacityWin');
                    div_img.classList.add('opacityWin');
                    div_text.classList.add('opacityWin');

                    title_div.innerHTML = title;
                    div_text.innerHTML = text;
                    div_img.src = src;
                }, 500)
            },
            getTooltip = (_e, title) => {
                mapTooltip.textContent = title;
                mapTooltip.style.top = `${_e.clientY + positionRelativeMouse.y + 10}px`;

                const position_x = _e.clientX + positionRelativeMouse.x;

                if (position_x + mapTooltip.clientWidth >= window.innerWidth)
                    mapTooltip.style.left = `${position_x - mapTooltip.clientWidth - 20}px`;
                else
                    mapTooltip.style.left = `${position_x}px`;
            },
            mouseMove_mapButton = _e => {
                getTooltip(_e, positions[+_e.currentTarget.dataset.position - 1].title)
            },
            mouseEnter_mapButton = _e => {
                mapTooltip.style.display = 'block';
            },
            mouseLeave_mapButton = _e => {
                mapTooltip.style.display = 'none';
            },
            pressedButton_mapButtons = _e => {
                const pressedButton = _e.target.closest('.map_button');
                if (pressedButton) {
                    const position = +pressedButton.dataset.position - 1;

                    const src = positions[position].imageSrc;
                    const text = positions[position].text;
                    const title = positions[position].title;
                    // ChangeText(title, src, text);
                    openPopup(title, src, text);
                }
            },
            pressedPopupClose_popup = _e => {
                popupWrapper.classList.remove('view')
            },
            range = (number, a, b, c, d) => c + (d - c) * ((number - a) / (b - a)),
            mouseMove_ship = _e => {
                const ship = _e.currentTarget;
                const rect = ship.getBoundingClientRect();

                const width = ship.clientWidth;
                const height = ship.clientHeight;
                const x = _e.clientX - rect.left
                const y = _e.clientY - rect.top

                const translateX = -range(x, 0, width, -width / 10, width / 10);
                const translateY = -range(y, 0, height, -height / 10, height / 10);

                ship.querySelector('.map_image_ship').classList.remove('swim')
                ship.querySelector('.map_image_ship').style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
            };
        mapControlsLists.forEach((mapControlsList, i) => {
            const mapButtons = mapControlsList.querySelectorAll('.map_button');
            mapButtons.forEach(mapButton => {
                mapButton.addEventListener('mousemove', mouseMove_mapButton)
                mapButton.addEventListener('mouseenter', mouseEnter_mapButton)
                mapButton.addEventListener('mouseleave', mouseLeave_mapButton)
            })
        });
        mapControls.addEventListener('click', pressedButton_mapButtons);
        popupClose.addEventListener('click', pressedPopupClose_popup);
    })

    const [location, setLocation] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenu2Open, setIsMenu2Open] = useState(false);

    const handleMenu1 = () => {
        setLocation(1);
        // sliderRef.current.slickNext();
    }

    const handleMenu2 = (index) => {
        if (location === 0) {
            if (index === 0) {
                if (isMenu2Open && !isMenuOpen) {
                    setIsMenu2Open(false);
                    setIsMenuOpen(true);
                } else {
                    setIsMenuOpen(!isMenuOpen)
                }

            } else {
                if (!isMenu2Open && isMenuOpen) {
                    setIsMenu2Open(true);
                    setIsMenuOpen(false);
                } else {
                    setIsMenu2Open(!isMenu2Open)
                }
            }
        } else {
            setLocation(0);
            // sliderRef.current.slickPrev();
        }
    }

    const changeMap = () => {
        setIsMenuOpen(false);
        setIsMenu2Open(false);
        setLocation(1);
        // sliderRef.current.slickNext();
    }

    const locations = [
        {
            title: 'Шале',
            img: '/image/'
        },
        {
            title: 'Коттедж',
            img: '/image/'
        },
    ];


    return (
        <div id="map" className="t-body relative" style={{ margin: '0' }}>
            <div style={{ transform: 'translateX(-50%)' }} className="flex flex-col items-center justify-center absolute left-1/2 z-20 w-full h-[90px]">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-0" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>
                <h2 className="text-[20px] text-white z-10 font-bold">КАРТА ТЕРРИТОРИИ</h2>
            </div>
            <div style={{ transform: 'translateX(-50%)' }} className='absolute left-1/2 top-24 z-20'>
                <m.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={heading}
                    className='flex flex-col relative'>
                    <div style={{ marginBottom: `${isMenuOpen ? '88px' : '0'}`, flexDirection: `${location === 1 ? 'row-reverse' : 'row'}`, marginLeft: `${location === 0 ? 0 : -70}px`, justifyContent: `${location === 1 ? 'start' : 'space-around'}`, gap: `${location === 0 ? 0 : 15}px`, paddingLeft: `${location === 0 ? 0 : 7}px` }} onClick={() => handleMenu2(0)} className='bg-[#A4B68B] z-50 border-[2px] border-[#FFF] rounded-[10px] w-[280px] h-[40px] flex items-center justify-around'>
                        <p className='text-white monterey font-extrabold text-[19px]'>
                            Лесная Резиденция
                        </p>

                        <picture>
                            <source srcSet="/avif/arrow_choose.avif 1x" type="image/avif" />
                            <img className='duration-300 w-[22px]' style={{ transform: `rotate(${location === 1 ? 90 : 0}deg)` }} src="/image/arrow_choose.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </div>


                    <div style={{ display: `${isMenuOpen ? 'flex' : 'none'}` }} className='w-[280px] map_menu absolute bottom-0 h-[95px] bg-[#A4B68B] border-[3px] border-[#FFF] z-40 rounded-b-[10px] px-1 flex flex-col justify-around'>
                        {
                            locations.map((el, i) => {
                                return (
                                    <div key={uuidv4()} className='text-white monterey font-extrabold text-[19px]' onClick={changeMap}>
                                        {
                                            el.title
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </m.div>
            </div>

            <div style={{ transform: 'translateX(-50%)' }} className='absolute bottom-[0px] left-1/2 z-10'>
                <div className='relative flex flex-col w-[280px] h-[40px]'>


                    <div style={{ transform: `translateX(${location === 0 ? -50 : -62}%)`, flexDirection: `${location === 1 ? 'row-reverse' : 'row'}`, bottom: `${location === 1 ? '510px' : '100px'}` }} onClick={() => handleMenu2(1)} className='bg-[#A4B68B] absolute bottom-[100px] left-1/2 z-30 border-[2px] border-[#FFF] rounded-[10px] w-[280px] h-[40px] flex items-center justify-around'>
                        <p className='text-white monterey font-extrabold text-[19px]'>
                            Олимпийская деревня
                        </p>

                        <picture>
                            <source srcSet="/avif/arrow_choose.avif 1x" type="image/avif" />
                            <img className='duration-300 w-[22px]' style={{ transform: `rotate(${location === 1 ? 90 : 180}deg)` }} src="/image/arrow_choose.webp" alt="Икша Кантри Клаб" />
                        </picture>
                    </div>


                    <div style={{ display: `${isMenu2Open ? 'flex' : 'none'}` }} className='w-[280px] map_menu absolute -top-[188px] h-[95px] bg-[#A4B68B] border-[3px] border-[#FFF] z-20 rounded-t-[10px] px-1 flex flex-col justify-around'>
                        {
                            locations.map((el, i) => {
                                return (
                                    <div key={uuidv4()} className='text-white monterey font-extrabold text-[19px]' onClick={changeMap}>
                                        {
                                            el.title
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

            <div style={location === 0 ? { right: '8px', display: isMenuOpen ? 'hidden' : 'flex' } : { right: '210px', top: '275px', display: isMenuOpen ? 'hidden' : 'flex' }} onClick={handleMenu1} className='bg-[#A4B68B] absolute top-[300px] right-2 z-10 border-[2px] border-[#FFF] rounded-[10px] w-[100px] h-[40px] flex items-center justify-around'>
                <p className='text-white monterey font-extrabold text-[19px]'>
                    Шале
                </p>

                <picture>
                    <source srcSet="/avif/arrow_choose.avif 1x" type="image/avif" />
                    <img className='duration-300 w-[22px]' style={{ transform: `rotate(${location === 1 ? 90 : 180}deg)` }} src="/image/arrow_choose.webp" alt="Икша Кантри Клаб" />
                </picture>
                <img className='duration-300 w-[22px]' style={{ transform: `rotate(${location === 0 ? -90 : 0}deg)`, display: `${location === 0 ? 'block' : 'none'}` }} src="/image/arrow_choose.webp" alt="" />
            </div>

            <div style={{ display: isMenuOpen ? 'hidden' : 'flex' }} onClick={handleMenu1} className='bg-[#A4B68B] absolute top-[250px] duration-500 z-10 border-[2px] border-[#FFF] rounded-[10px] w-[150px] h-[40px] right-2 flex items-center justify-around'>
                <p className='text-white monterey font-extrabold text-[19px]'>
                    Коттедж
                </p>

                <picture>
                    <source srcSet="/avif/arrow_choose.avif 1x" type="image/avif" />
                    <img className='duration-300 w-[22px]' style={{ transform: `rotate(${location === 0 ? -90 : 0}deg)`, display: `${location === 0 ? 'block' : 'none'}` }} src="/image/arrow_choose.webp" alt="Икша Кантри Клаб" />
                </picture>
            </div>

            {/* <div style={{display: `${location === 1 ? 'none' : 'flex'}`}} onClick={handleMenu1} className='absolute bottom-[295px] right-2 flex items-center gap-1 z-30 -rotate-[2deg]'>
                <p className='text-white font-bold'>Шале, Коттедж</p>
                <img className='w-[20px] -rotate-90' src="/image/arrow_choose.webp" alt="" />
            </div> */}

            {/* <m.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={heading}
                style={{ transform: 'translateX(-50%)', backgroundColor: '#eee2ae', boxShadow: '0px 3.411449670791626px 17.057249069213867px 0px rgba(0, 0, 0, 0.25)' }}
                className='absolute flex flex-col justify-center items-center w-[270px] bottom-[20px] rounded-xl border-[2px] border-[#7F8E6B] text-black text-[16px] monterey left-1/2 z-20'
            >
                <m.div variants={headingLinesOpacity} className='div_title font-bold duration-300'>Пляж</m.div>
                <m.img variants={headingLinesOpacity} className='div_img w-[140px] duration-300' src="/image/map_bg_mini.webp" alt="" />
                <m.div variants={headingLinesOpacity} className='div_text text-center text-[11px] px-[2px] duration-300'>Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.</m.div>
                <button className='w-[220px]'>
                    <picture>
                        <source srcSet="/avif/map_mini_btn.avif 1x" type="image/avif" />
                        <img src="/image/map_mini_btn.webp" alt="Икша Кантри Клаб" />
                    </picture>
                </button>
            </m.div> */}
            {/* <img style={{ transform: 'translateX(-50%)' }} className='bottom-0 left-1/2 absolute z-10' src="/image/zp_zipper.webp" alt="" /> */}
            <div id="allrecords" className="t-records t-records_animated t-records_visible" data-hook="blocks-collection-content-node" data-tilda-project-id="5147217" data-tilda-page-id="36876098" data-tilda-page-alias="map" data-tilda-formskey="52fd5696ee95138e553990b205147217" data-tilda-lazy="yes" data-tilda-project-headcode="yes">
                <div id="rec595655846" className="r t-rec" style={{ backgrounColor: '#000000' }} data-animationappear="off" data-record-type="131" data-bg-color="#000000">
                    <div className="t123"><div className="t-container_100 "><div className="t-width t-width_100 " />

                        {
                            location === 0 ? <Map1 />
                                : <Map2 />
                        }
                        <div className="popup-list">
                            <div className="popup__wrapper map-info__wrapper z-40">
                                <div className="popup">
                                    <button className="popup-close"> </button>
                                    <div className="popup-content map-info">
                                        <div className="map-info-title">
                                            <div className="map-info_image__wrapper">
                                                <img className="map-info_image" src="/image/" alt="Икша Кантри Клаб" />
                                            </div>
                                            <h2 className="map-info_title">Спальный домик</h2>
                                        </div>
                                        <div className="map-info-content" style={{ display: 'block' }}>Наш уютный домик у воды - это идеальное место для незабываемого отдыха. Здесь вы сможете окунуться в атмосферу релакса и насладиться красотой природы.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='absolute w-full -bottom-[5px] z-30'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="11" viewBox="0 0 390 11" fill="none">
                    <g filter="url(#filter0_df_1447_4339)">
                        <path d="M-2.54102 6.63281H392.436" stroke="#AB9C6F" strokeWidth="9" />
                    </g>
                    <defs>
                        <filter id="filter0_df_1447_4339" x="-6.54102" y="0.132812" width="402.978" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1447_4339" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1447_4339" result="shape" />
                            <feGaussianBlur stdDeviation="1" result="effect2_foregroundBlur_1447_4339" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Map;
