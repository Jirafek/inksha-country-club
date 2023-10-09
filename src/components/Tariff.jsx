import Button from "./../common/Button";
import { Link as ScrollLink } from "react-scroll";
import food from "../assets/food.png";
import boo from "../assets/boo.png";
import arrow from "../assets/arrow.png";
import down_arrow from "../assets/down_arrow.png";
import TariffComponents from "./TarrifComponents";
import Reveal from "../common/Reveal";
import { slideFromRight } from "../constants/motion";
import {URLData} from "../utils/URLData";
import emailjs from "@emailjs/browser";
import React, {useState} from "react";
import { useParams, Navigate } from "react-router-dom";

const Tariff = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [navigation, setNavigation] = useState(false)

   const handleSubmit = async () => {

      const data = {
         name: name,
         phone: phone,
         email: '-'
      }

      const sendingData = {
         ...data,
         source: "https://mobile.ikshacountryclub.com",
         formType: "Halloween",
         link: window.location.href,
         ...URLData,
      }

      try {
         const response = await fetch('https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               'Access-Control-Allow-Origin': '*'
            },
            body: new URLSearchParams(sendingData).toString(),
         });

         if (response.ok) {
            setTimeout(() => {
               setName('');
               setPhone('');
               setNavigation(true);
            }, 1000);
         } else {
            alert('Произошла ошибка при отправке данных');
         }
      } catch (error) {
         console.error(error);
         alert('Произошла ошибка при отправке данных');
      }
   };

   return (
      <div
         id="Tariff"
         name="Tariff"
         className="bg-violet tarif bg-no-repeat bg-cover pb-[10vh]  bg-center py-[7vh]"
      >
         {navigation && <Navigate to="/thanks" />}
         <div className="wrapper">
            <Reveal duration={1.5} variants={slideFromRight(-500)}>
               <h1 className="text-xl tracking-widest relative">
                  Тарифы
                  <div className="absolute left-2 -top-[30px] md:-top-[70px] text-[64px] md:text-[128px]  opacity-10">
                     Тарифы
                  </div>
               </h1>
               <p className="text-center text-lg droid mb-[5vh]">
                  В эту таинственную ночь мы предлагаем вам следующие
                  невероятные варианты размещения
               </p>
            </Reveal>
            <div className="flex droid flex-col">
               <TariffComponents />
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="bg-yellow w-full items-center  box-border mt-[10vh] droid p-[5%] yellow-box text-tarif shadow-xl flex  justify-between rounded-[16px] min-h-[200px]">
                  <div className="">
                     <h1 className="text-black font-bold">
                        Вы можете добавить дополнительное
                        <br /> питание к любому тарифу
                     </h1>
                     <p className="text-violet text-tarif font-bold ">
                        Во все локации можно добавить
                        <br /> дополнительного гостя за 2000 (без спального
                        места)
                     </p>
                  </div>

                  <ul className="text-black flex flex-col items-center justify-center text-small">
                     <li>
                        Завтрак <span className="font-bold"> 700</span>
                     </li>{" "}
                     <li>
                        Обед <span className="font-bold"> 1800</span>
                     </li>
                     <li>
                        Ужин <span className="font-bold"> 1200</span>
                     </li>
                  </ul>
               </div>
               <img src={food} alt="" />
            </div>
            <ScrollLink
               to="Form"
               smooth={true}
               duration={1000} // Длительность анимации скролла (в миллисекундах)
            >
               <Button className="bg-pumpkin btn-pum mb-[10vh] text-white mx-auto">
                  Оставить заявку
                  <img src={down_arrow} className="w-7 h-7" alt="" />
               </Button>
            </ScrollLink>
            <div className="w-full relative flex items-center text-center justify-center">
               {/* <Reveal duration={1.5} variants={slideFromLeft()}> */}
               <div
                  name="Form"
                  className="form relative bg-darkViolet p-[5%] rounded-[16px] shadow-2xl  w-[550px] h-[550px] text-center"
               >
                  <div className="text-md mb-5 droid">
                     Оставьте свои данные, и мы обязательно свяжемся с вами
                  </div>
                  <form className="droid" action="">
                     <input
                        type="text"
                        placeholder="Имя"
                        className="rounded-[20px] p-2 mb-5 text-black h-[50px] w-full bg-grey outline-none"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                     />
                     <input
                        type="text"
                        placeholder="Телефон"
                        className="rounded-[20px] p-2 text-black h-[50px] w-full bg-grey outline-none"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                     />
                     <Button onClick={handleSubmit} className="bg-pumpkin w-1/2 h-[40px] mx-auto btn-pum text-white">
                        Отправить
                        <img src={arrow} className="w-9 h-5" alt="" />
                     </Button>
                  </form>
               </div>

               <img src={boo} className="absolute right-0 -bottom-20" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Tariff;
