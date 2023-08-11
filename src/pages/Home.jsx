import React, { useReducer, Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import routes from '../utils/Home/routes';
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';
import { Link } from 'react-router-dom';
import Welcome from '../components/Home/Welcome';
import Map from '../components/Home/Map/Map';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Gallery from '../components/Home/Gallery';
import Eat from '../components/Home/Eat';
import Locations from '../components/Home/Locations';
import Events from '../components/Home/Events';
import EventsFromFireBase from '../components/Home/EventsFromFireBase';
import Help from '../components/Home/Help';
import Calculate from '../components/Home/Calculate';
import Spec from '../components/Home/Spec';
import Dates from '../components/Home/Dates';
import Responce from '../components/Home/Responce';
import Blog from '../components/Home/Blog';
import YandexMap from '../components/Home/YandexMap';
import Footer from '../components/Home/Footer';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Home = () => {
    const parallaxActivate = document => {
        const sections = Array.from(document.querySelectorAll('.section'));
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline();

        for (const i in sections) {
            // if(i !== 0)
                timeline.fromTo(sections[i], {y: '100vh'}, {y: '0'});
        }

        ScrollTrigger.create({
            animation: timeline,
            trigger: '#root',
            start: 'top top',
            invalidateOnRefresh: true,
            end: 'bottom',
            scrub: 1,
            pin: true
        });
    };
    const [locationState, setLocationState] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Функция обработчика события popstate
        const handlePopstate = () => {
            // Получаем текущий URL
            const currentUrl = window.location.href;

            console.log(currentUrl)

            // Проверяем, содержит ли текущий URL нужный query parameter
            if (currentUrl.includes('znms_widget_open=5026')) {
                setLocationState(true);
            } else {
                setLocationState(false);
            }
        };

        // Добавляем слушатель события popstate
        window.addEventListener('popstate', handlePopstate);

        // Выполняем обработчик события при первой загрузке компонента
        handlePopstate();

        // Очищаем слушатель события при размонтировании компонента
        // return () => {
        //     window.removeEventListener('popstate', handlePopstate);
        // };
    }, []);

    const [isVisible, setIsVisible] = useState(false);
    const [sidebarOpen, toggle] = useReducer((s) => !s, false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPosition = 1000; // define the scroll position where you want to show the block

            setIsVisible(scrollPosition > triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        // parallaxActivate(document);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [burgerState, setBurgerState] = useState(false);

    function handleBurgerClick() {
        setBurgerState(!burgerState);
    }

    function closeBurger() {
        setBurgerState(false);
    }

    return (
          <>
      <Helmet>
        <title>Загородный клуб Икша Кантри Клаб - Отдых в Подмосковье на берегу Икшинского водохранилища. </title>
        <meta
          name="description"
          content="Загородный клуб Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
        />
            <meta
          name="title"
          content="Загородный клуб Икша Кантри Клаб -Отдых в подмосковье, Рыбалка, Баня и СПА, водные виды спорта на Икшинском водохранилище."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
        />
      </Helmet>
        <Fragment>
            <div style={{ display: `${locationState ? 'none' : 'block'}` }} className='sections-container relative'>
                <Transition.Root as={Fragment} show={sidebarOpen}>
                    <Dialog as='div' className='fixed inset-0 z-[2000]' onClose={toggle}>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='translate-x-full'
                        >
                            {/* зменить крест кнопкой + nav -> ul -> li */}
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} className='absolute inset-0 h-screen w-full overflow-y-auto'>
                                <nav className='flex flex-col h-full w-full justify-center items-center'>
                                    <button className='outline-none' style={{ display: `${sidebarOpen ? 'block' : 'none'}` }} onClick={toggle}>
                                        <img className='fixed w-[45px] top-[2px] right-[2px] z-[2001]' src="/image/close_icon.webp" alt="" />
                                    </button>
                                    <ul className={`py-[24px] pl-[21px] flex-col flex gap-[10px] w-[305px] bg-[#FFEFE4] rounded-[20px]`}>
                                        {routes.map((el, i) => {
                                            return (
                                                <li key={uuidv4()}>
                                                    <Link to={el.link} onClick={toggle} className='flex gap-[1px] outline-none'>
                                                        <p className='monterey'>
                                                            {el.text}
                                                        </p>
                                                        {el.icon && <img src={el.icon} />}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
                <img style={{ display: `${sidebarOpen ? 'none' : 'block'}` }} onClick={toggle} className='fixed top-8 left-3 z-[2001]' src="/image/burger.webp" alt="" />
                <Welcome />
                <Map />
                <About />
                <Happy />
                <Gallery />
                <Eat />
                <Locations />
                <Events />
                <EventsFromFireBase />
                <Help />
                <Calculate />
                <Spec />
                <Dates />
                <Responce />
                <Blog />
                <YandexMap />
                <Footer />
                {/* <div className="h-[60px]"></div> */}
                {
                    isVisible && <FixedFuter link="#book" needRotate={false} />
                }
            </div>
        </Fragment>
                </>
    );
}

export default Home;
