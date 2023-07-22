import React, { useEffect } from 'react';
import BookingCalendar from '../components/BookPicker';
import Welcome from '../components/Home/Welcome';
import Map from '../components/Home/Map';
import About from '../components/Home/About';
import Happy from '../components/Home/Happy';
import Gallery from '../components/Home/Gallery';
import Eat from '../components/Home/Eat';

const Home = () => {
    return (
        // <input id='zaezd' type="text" />
        <div className='m-w-[400px]'>
            <Welcome />
            <Map />
            <About />
            <Happy />
            <Gallery />
            <Eat />
                <div className="h-[200px]"></div>
            <div className='fixed bottom-0 w-full h-[110px] z-[1001] flex flex-col gap-1 transition-all'>
                <a className='self-end' href="#book">
                    <img className='h-11' src="/image/to_top_button.png" alt="" />
                </a>
                <div className='bg-[#957BAE] h-full w-full flex items-center justify-around'>
                    <a className='h-full' href="#book">
                        <img className='h-full' src="/image/booking_button.png" alt="" />
                    </a>
                    <a href="tel:+7999999999">
                        <img className='h-[50px] w-[60px]' src="/image/call.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;