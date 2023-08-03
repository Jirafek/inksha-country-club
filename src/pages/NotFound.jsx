import React from "react";
import { Link } from "react-router-dom";

// contain, #bdc7ed

const NotFound = () => {
    return (
        <section style={{ backgroundImage: 'url(/image/404.webp)', backgroundSize: 'contain' }} className="relative h-[851px] back_settings bg-[#bdc7ed]">
            <Link to="/#book" className="back_settings absolute top-[18rem] left-1/2 w-[302px] h-[63px] flex justify-center items-center monterey text-white text-[18px]" style={{ backgroundImage: 'url(/image/404_btn.webp)', transform: 'translateX(-50%)' }}>
                Вернуться на главную
            </Link>
        </section>
    );
}

export default NotFound;
