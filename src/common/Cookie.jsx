import cookie from "icons/cookies.png";
import { useState } from "react";
import {Link} from 'react-router-dom'
import Cookies from "js-cookie";

const Cookie = ({isCookieOpen,setIsCookieOpen, callBack = (isOn) => {}}) => {
   
   const closeCookie = () => {
      setIsCookieOpen(false);
   };
   const handleAccept = () => {
      Cookies.set('cookies_on', true, { expires: Infinity });
      callBack(true);
      closeCookie();
      //
   };
   const handleReject = () => {
      closeCookie();
      callBack(false);
      //
   };
   return (
      <div
         className={` ${
            isCookieOpen ? "flex" : "hidden"
         } bg-white px-[2%] md:px-[5%] gap-3 fixed z-[400000] bottom-0 items-center  w-full h-[145px] justify-between`}
      >
         <img className="w-[50px] md:w-auto" src={cookie} alt="" />
         <p className="text-small text-black max-w-[600px]">
            Мы используем файлы cookie. Продолжая использовать наш сайт, вы
            автоматически соглашаетесь с использованием данных технологий.
           <Link to='/data-privicy' className='text-blue-300 underline cursor-pointer'>Политика конфиденциальности</Link> .{" "}
         </p>
         <div className="flex items-center flex-col md:flex-row justify-between gap-5">
            <button
               onClick={handleReject}
               className="text-sm underlineOnHover montserrat font-bold"
               type="button"
            >
               Отклонить
            </button>

            <button
               onClick={handleAccept}
               className="text-sm montserrat hover:border hover:border-black hover:bg-white hover:text-black duration-300 h-[40px] md:h-[50px] w-[100px] md:w-[200px] flex justify-center items-center bg-black text-white font-bold"
               type="button"
            >
               Принять
            </button>
         </div>
      </div>
   );
};

export default Cookie;
