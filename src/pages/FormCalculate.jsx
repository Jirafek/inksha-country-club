import React, { useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import FixedFuter from '../components/Home/FixedFuter';

const FormCalculate = () => {
    const { amount } = useParams();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            phone: phone,
            email: email,
            active: `Общая стоимость: ${amount}`
        }

        emailjs.send("service_a1dan7b", "template_rmhn4mc", data, "V_IkuqWqNwJlUw72K")
            .then((result) => {
                alert('Форма отправлена!')
                setTimeout(() => {
                    window.open("https://bronirui-online.ru/iksha-country-club", "_blank");
                }, 1000)
            }, (error) => {
                alert('Ошибка при отправке формы')
            }); // sending to email
    };

    return (
        <section className="bg-[#201e1f] h-screen">
            <div className="flex justify-center items-center">
                <div className="bg-white h-[550px] w-[380px] rounded-[15px] mt-12">
                    <h1 className="py-12 text-[26px] font-bold text-center">Заполните форму</h1>
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
                    </form>
                </div>
            </div>
            <FixedFuter link="/" needRotate={true} />
        </section>
    );
}

export default FormCalculate;
