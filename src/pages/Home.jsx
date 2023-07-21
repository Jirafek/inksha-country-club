import React, { useEffect } from 'react';
import BookingCalendar from '../components/BookPicker';
import Welcome from '../components/Home/Welcome';
import Map from '../components/Home/Map';

const Home = () => {
    return (
        // <input id='zaezd' type="text" />
        <div className='m-w-[400px]'>
            <Welcome />
            <Map />
        </div>
    );
}

export default Home;