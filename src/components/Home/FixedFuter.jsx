import React from "react";
import { Link } from "react-router-dom";

const FixedFuter = ({link, needRotate}) => {
    return (
        <div className='flex fixed bottom-0 w-full h-[112px] z-[1001] flex-col gap-1 transition-all'>
            <Link className='self-end' to={link}>
                <img style={{transform: `rotate(${needRotate ? -90 : 0}deg)`}} className='h-11' src="/image/to_top_button.png" alt="" />
            </Link>
            <div className='bg-[#957BAE] h-full w-full flex items-center justify-around'>
                <Link to="#book">
                    <img className='w-[302px]' src="/image/booking_button.png" alt="" />
                </Link>
                <a href="tel:+79859091202">
                    <img className='h-[58px] w-[61px]' src="/image/call.png" alt="" />
                </a>
            </div>
        </div>
    );
}

export default FixedFuter;