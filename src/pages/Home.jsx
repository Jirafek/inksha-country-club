import React, { useState, useEffect } from 'react';
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

    return (
        // <input id='zaezd' type="text" />
        <div className='m-w-[400px] relative'>
            <Welcome />
            <Map />
            <About />
            <Happy />
            <Gallery />
            <Eat />
            <Locations />
            <Events />
            <EventsFromFireBase />
            <img className='w-full' src="/image/help.png" alt="" />
            <Calculate />
            <Spec />
            <Dates />
            <Responce />
            <YandexMap />
            <Footer />
                <div className="h-[60px]"></div>
            <div style={isVisible ? {display: 'flex'} : {}} className='hidden fixed bottom-0 w-full h-[100px] z-[1001] flex-col gap-1 transition-all'>
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