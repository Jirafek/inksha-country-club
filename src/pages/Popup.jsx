import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { URLData } from "../utils/URLData";
import { Navigate } from "react-router-dom";

const Popup = () => {
   const [navigation, setNavigation] = useState(false);
   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

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
         source: "https://mobile.ikshacountryclub.com",
         formType: "Главный экран",
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
            reset();
            setNavigation(true);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };

   return (
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
         {navigation && <Navigate to="/thanks" />}
         <div className="fixed left-0 top-0 h-full w-full bg-black opacity-50"></div>

         <div className="min-h-300 relative z-50 w-[350px] bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-center text-xl font-bold">
               Форма обратной связи
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="mb-4">
                  <label htmlFor="name" className="mb-1 block">
                     Имя
                  </label>
                  <Controller
                     name="name"
                     control={control}
                     defaultValue=""
                     rules={{ required: "Обязательное поле" }}
                     render={({ field }) => (
                        <input
                           {...field}
                           type="text"
                           id="name"
                           className={`w-full border ${
                              errors.name ? "border-red-500" : "border-gray-300"
                           } rounded p-2`}
                        />
                     )}
                  />
                  {errors.name && (
                     <span className="text-red-500">{errors.name.message}</span>
                  )}
               </div>
               <div className="mb-4">
                  <label htmlFor="phone" className="mb-1 block">
                     Телефон
                  </label>
                  <Controller
                     name="phone"
                     control={control}
                     defaultValue=""
                     rules={{ required: "Обязательное поле" }}
                     render={({ field }) => (
                        <input
                           {...field}
                           type="tel"
                           id="phone"
                           className={`w-full border ${
                              errors.phone
                                 ? "border-red-500"
                                 : "border-gray-300"
                           } rounded p-2`}
                        />
                     )}
                  />
                  {errors.phone && (
                     <span className="text-red-500">
                        {errors.phone.message}
                     </span>
                  )}
               </div>
               <div className="mb-4">
                  <label htmlFor="email" className="mb-1 block">
                     Электронная почта
                  </label>
                  <Controller
                     name="email"
                     control={control}
                     defaultValue=""
                     rules={{
                        required: "Обязательное поле",
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Некорректный адрес электронной почты",
                        },
                     }}
                     render={({ field }) => (
                        <input
                           {...field}
                           type="email"
                           id="email"
                           className={`w-full border ${
                              errors.email
                                 ? "border-red-500"
                                 : "border-gray-300"
                           } rounded p-2`}
                        />
                     )}
                  />
                  {errors.email && (
                     <span className="text-red-500">
                        {errors.email.message}
                     </span>
                  )}
               </div>
               <div className="mt-6 flex justify-center">
                  <button
                     type="submit"
                     className="rounded bg-green-500 px-4 py-2 text-white hover:bg-blue-600"
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
