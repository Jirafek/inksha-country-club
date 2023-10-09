import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import FixedFuter from '../components/Home/FixedFuter';
import { Link } from "react-router-dom";
import {URLData} from "../utils/URLData";

const FormCalculate = () => {
    const { amount } = useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isButtonAvailible, setIsButtonAvailible] = useState(false);
    const [navigation, setNavigation] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.href);
        const location = urlParams.get('location') === '1' ?
            'ЛЕСНАЯ РЕЗИДЕНЦИЯ' : urlParams.get('location') === '2' ?
                'ШАЛЕ' : urlParams.get('location') === '3' ?
                    'КОТТЕДЖ' : 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ';

        const data = {
            name: name,
            phone: phone,
            email: email,
            amount: amount,
            location: location,
            guesses: urlParams.get('guesses'),
            week: urlParams.get('week'),
            days: urlParams.get('days'),
            dops: urlParams.get('dops') || '',
        }

        const sendingData = {
            ...data,
            source: "https://mobile.ikshacountryclub.com",
            formType: "Калькулятор",
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
                    setEmail('');
                    setNavigation(true);
                }, 1000)

            } else {
                alert('Произошла ошибка при отправке данных');
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при отправке данных');
        }
    };

    return (
        <section className="bg-[#201e1f] h-screen">
            {navigation && <Navigate to="/thanks" />}
            <div className="flex justify-center items-center">
                <div className="bg-white h-[550px] w-[380px] rounded-[15px] mt-12">
                    <h2 className="py-12 text-[26px] font-bold text-center">Заполните форму</h2>
                    <form className="flex flex-col justify-center items-center px-[20px] gap-7" onSubmit={handleSubmit}>
                        <input
                            className="w-full h-[40px] rounded-[10px] outline-none border border-black pl-2"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Имя"
                        />
                        <input
                            className="w-full h-[40px] rounded-[10px] outline-none border border-black pl-2"
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Телефон"
                        />
                        <input
                            className="w-full h-[40px] rounded-[10px] outline-none border border-black pl-2"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="E-mail"
                        />
                        <div className="flex justify-center mt-4">
                            <button className="bg-[#201e1f] rounded-[10px] text-white text-[18px] py-2 px-8" type="submit">Отправить</button>
                        </div>
                        {isButtonAvailible &&
                            <div className="flex justify-center mt-2">
                                <a href="https://bronirui-online.ru/iksha-country-club" className="bg-[#201e1f] rounded-[10px] text-white text-[18px] py-2 px-8">Забронировать</a>
                            </div>
                        }

                    </form>
                </div>
            </div>
            <FixedFuter link="/" needRotate={true} />
        </section>
    );
}

export default FormCalculate;
