import React, { useReducer, Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import routes from '../utils/Home/routes';
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';
import { Link } from 'react-router-dom';
import Welcome from '../components/Home/Welcome';
import Map from '../components/Home/Map';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Gallery from '../components/Home/Gallery';
import Eat from '../components/Home/Eat';
import Locations from '../components/Home/Locations';
import Events from '../components/Home/Events';
import EventsFromFireBase from '../components/Home/EventsFromFireBase';
import Calculate from '../components/Home/Calculate';
import Spec from '../components/Home/Spec';
import Dates from '../components/Home/Dates';
import Responce from '../components/Home/Responce';
import YandexMap from '../components/Home/YandexMap';
import Footer from '../components/Home/Footer';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [sidebarOpen, toggle] = useReducer((s) => !s, false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPosition = 1000; // define the scroll position where you want to show the block

            setIsVisible(scrollPosition > triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);
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
        <Fragment>
            <div className='m-w-[400px] relative'>
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
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} className='absolute inset-0 h-screen w-full overflow-y-auto'>
                                <div className='flex flex-col h-full justify-center items-center'>
                                    <div className={`py-[24px] pl-[21px] flex-col flex gap-[10px] w-[305px] bg-[#FFEFE4] rounded-[20px]`}>
                                        {routes.map((el, i) => {
                                            return (
                                                <div onClick={toggle} key={uuidv4()}>
                                                    <Link to={el.link} className='flex gap-[1px]'>
                                                        <p className='monterey'>
                                                            {el.text}
                                                        </p>
                                                        {el.icon && <img src={el.icon} />}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
                <img onClick={toggle} className='fixed top-8 left-3 z-[2001]' src="/image/burger.png" alt="" />
                <Welcome />
                <Map />
                <About />
                <Happy />
                <Gallery />
                <Eat />
                <Locations />
                <Events />
                <EventsFromFireBase />
                <img className='w-full h-[851px]' src="/image/help.png" alt="" />
                <Calculate />
                <Spec />
                <Dates />
                <Responce />
                <YandexMap />
                <Footer />
                <div className="h-[60px]"></div>
                {
                    isVisible && <FixedFuter link="#book" needRotate={false} />
                }
            </div>
        </Fragment>
    );
}

export default Home;