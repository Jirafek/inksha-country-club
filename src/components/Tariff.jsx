import Button from "./../common/Button";
import { Link as ScrollLink } from "react-scroll";
import food from "../assets/food.png";
import boo from "../assets/boo.png";
import arrow from "../assets/arrow.png";
import down_arrow from "../assets/down_arrow.png";
import TariffComponents from "./TarrifComponents";
import Reveal from "../common/Reveal";
import { slideFromRight } from "../constants/motion";
import { URLData } from "../utils/URLData";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const Tariff = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [navigation, setNavigation] = useState(false);

   const handleSubmit = async () => {
      const data = {
         name: name,
         phone: phone,
         email: "-",
      };

      const sendingData = {
         ...data,
         source: "https://mobile.ikshacountryclub.com",
         formType: "Halloween",
         link: window.location.href,
         ...URLData,
      };

      try {
         const response = await fetch(
            "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Access-Control-Allow-Origin": "*",
               },
               body: new URLSearchParams(sendingData).toString(),
            }
         );

         if (response.ok) {
            setTimeout(() => {
               setName("");
               setPhone("");
               setNavigation(true);
            }, 1000);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };

   return (
      <div
         id="Tariff"
         name="Tariff"
         className="tarif bg-violet bg-cover bg-center bg-no-repeat  py-[7vh] pb-[10vh]"
      >
         {navigation && <Navigate to="/thanks" />}
         <div className="wrapper">
            <Reveal duration={1.5} variants={slideFromRight(-500)}>
               <h1 className="druk relative text-xl tracking-widest">
                  Тарифы
                  <div className="absolute -top-[30px] left-2 text-[64px] opacity-10 md:-top-[70px]  md:text-[128px]">
                     Тарифы
                  </div>
               </h1>
               <p className="droid mb-[5vh] text-center text-lg">
                  В эту таинственную ночь мы предлагаем вам следующие
                  невероятные варианты размещения
               </p>
            </Reveal>
            <div className="droid flex flex-col">
               <TariffComponents />
            </div>
            <div className="flex flex-col items-center justify-center">
               <div className="droid yellow-box mt-[10vh]  box-border flex min-h-[200px] w-full items-center justify-between rounded-[16px] bg-yellow  p-[5%] text-tarif shadow-xl">
                  <div className="">
                     <h1 className="font-bold text-black">
                        Вы можете добавить дополнительное
                        <br /> питание к любому тарифу
                     </h1>
                     <p className="text-tarif font-bold text-violet ">
                        Во все локации можно добавить
                        <br /> дополнительного гостя за 2000 (без спального
                        места)
                     </p>
                  </div>

                  <ul className="flex flex-col items-center justify-center text-small text-black">
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
               <Button className="btn-pum mx-auto mb-[10vh] bg-pumpkin text-white">
                  Оставить заявку
                  <img src={down_arrow} className="h-7 w-7" alt="" />
               </Button>
            </ScrollLink>
            <div className="relative flex w-full items-center justify-center text-center">
               {/* <Reveal duration={1.5} variants={slideFromLeft()}> */}
               <div
                  name="Form"
                  className="form relative h-[550px] w-[550px] rounded-[16px] bg-darkViolet  p-[5%] text-center shadow-2xl"
               >
                  <div className="droid mb-5 text-md">
                     Оставьте свои данные, и мы обязательно свяжемся с вами
                  </div>
                  <form className="droid" action="">
                     <input
                        type="text"
                        placeholder="Имя"
                        className="mb-5 h-[50px] w-full rounded-[20px] bg-grey p-2 text-black outline-none"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                     />
                     <input
                        type="text"
                        placeholder="Телефон"
                        className="h-[50px] w-full rounded-[20px] bg-grey p-2 text-black outline-none"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                     />
                     <Button
                        onClick={handleSubmit}
                        className="btn-pum mx-auto h-[40px] w-1/2 bg-pumpkin text-white"
                     >
                        Отправить
                        <img src={arrow} className="h-5 w-9" alt="" />
                     </Button>
                  </form>
               </div>

               <img src={boo} className="absolute -bottom-20 right-0" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Tariff;
