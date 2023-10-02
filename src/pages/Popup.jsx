import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { URLData } from '../utils/URLData';
import { Navigate } from "react-router-dom";

const Popup = () => {
    const [navigation, setNavigation] = useState(false)
    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        // try {
        //     // Отправляем данные на почту с использованием emailjs
        //     await emailjs.send(
        //         'YOUR_SERVICE_ID',
        //         'YOUR_TEMPLATE_ID',
        //         data, // Передаем данные из формы
        //         'YOUR_USER_ID'
        //     );
        //
        //     // Очищаем форму и закрываем попап
        //     reset();
        // } catch (error) {
        //     console.error('Ошибка при отправке сообщения:', error);
        // }

        const sendingData = {
            ...data,
            source: "Сайт",
            formType: "Главный экран",
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
                    reset();
                    setNavigation(true);
                } else {
                    alert('Произошла ошибка при отправке данных');
                }
            } catch (error) {
                console.error(error);
                alert('Произошла ошибка при отправке данных');
            }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            {navigation && <Navigate to="/thanks" />}
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="relative w-[350px] min-h-300 bg-white p-6 shadow-lg z-50">
                <h2 className="text-xl font-bold mb-4 text-center">Форма обратной связи</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Имя</label>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="name"
                                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                                />
                            )}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-1">Телефон</label>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Обязательное поле' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    id="phone"
                                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                                />
                            )}
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">Электронная почта</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Обязательное поле',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Некорректный адрес электронной почты',
                                },
                            }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="email"
                                    id="email"
                                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                                />
                            )}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;
