import React, { useState, useEffect } from 'react';
import routes from '../utils/Home/routes';
import { v4 as uuidv4 } from 'uuid';
import BookingCalendar from '../components/BookPicker';
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
        // <input id='zaezd' type="text" />
        <div className='m-w-[400px] relative'>
            <img style={burgerState ? { display: 'block' } : {}} className={` hidden fixed w-full z-[2000] top-0`} src="/image/bg-burger.png" alt="" />
            <div style={burgerState ? { display: 'flex', transform: 'translateX(-50%)' } : { transform: 'translateX(-50%)' }} className={`top-[55px] hidden fixed pl-[21px] flex-col left-[55%] gap-[10px] w-[305px] bg-[#FFEFE4] rounded-[20px] z-[2000]`}>
                {routes.map((el, i) => {
                    return (
                        <div onClick={closeBurger} key={uuidv4()}>
                            <a href={el.link} className='flex gap-[1px]'>
                                <p className='monterey'>
                                    {el.text}
                                </p>
                                {el.icon && <img src={el.icon} />}
                            </a>
                        </div>
                    );
                })}
            </div>
            <img onClick={handleBurgerClick} className='fixed top-8 left-3 z-[2000]' src="/image/burger.png" alt="" />
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
            <div style={isVisible ? { display: 'flex' } : {}} className='hidden fixed bottom-0 w-full h-[100px] z-[1001] flex-col gap-1 transition-all'>
                <a className='self-end' href="#book">
                    <img className='h-8' src="/image/to_top_button.png" alt="" />
                </a>
                <div className='bg-[#957BAE] h-full w-full flex items-center justify-around'>
                    <a className='' href="#book">
                        <img className='w-[302px]' src="/image/booking_button.png" alt="" />
                    </a>
                    <a href="tel:+7999999999">
                        <img className='h-[58px] w-[61px]' src="/image/call.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;