import React, { useState, useEffect } from "react";
import close from "./../assets/close.png";
import FormInput from "./FormInput";
import { URLData } from "../utils/URLData";
import { useNavigate } from "react-router-dom";
const MainPopup = ({ isPopupOpen, togglePopup }) => {
   const [isPopupCompleted, setIsPopupCompleted] = useState(false);
   const [isError, setIsError] = useState(true); // State for tracking errors
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
   });
   const navigate = useNavigate();
   const handleSubmitBot = async () => {
      const data = {
         name: formData.name,
         phone: formData.phone,
         email: "-",
      };

      const sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: "Форма имя + телефон телефон ",
         link: window.location.href,
         ...URLData,
      };
      console.log(data);
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
               navigate("/thanks");
            }, 1000);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isError) {
         return;
      }
      // Update the allFormData object with the latest data

      handleSubmitBot();
      setIsPopupCompleted(!isPopupCompleted);

      // Clear the form data by resetting it to its initial empty state
      setFormData({
         name: "",
         phone: "",
      });
   };

   useEffect(() => {
      // Check for errors when any of the form fields change
      const newIsError = !formData.name || !formData.phone;
      setIsError(newIsError);
   }, [formData]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handlePopupClose = () => {
      // Reset the popup state and close the popup
      setIsPopupCompleted(false);
      togglePopup();
   };
   return (
      <div className="montery">
         {isPopupOpen && (
            <div>
               {isPopupCompleted ? (
                  <div
                     className={`fixed left-1/2 top-1/2 z-[2000] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl`}
                  >
                     <div className="absolute right-2 top-2">
                        <img
                           onClick={handlePopupClose}
                           src={close}
                           alt="close"
                        />
                     </div>
                     <p className="text-[16px] font-bold text-[#6C6053]">
                        Ваши данные успешно отправлены!
                        <br />
                        Спасибо, что выбрали нас! Наш менеджер свяжется с вами в
                        ближайшее время для уточнения информации
                     </p>
                     <button
                        onClick={handlePopupClose}
                        className={`mt-4 flex h-[40px] items-center justify-center rounded-[10px] border bg-[#7C6F61]  text-white`}
                     >
                        Закрыть
                     </button>
                  </div>
               ) : (
                  <div className="fixed left-1/2 top-1/2 z-[2000] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl">
                     <div className="absolute right-2 top-2">
                        <img onClick={togglePopup} src={close} alt="close" />
                     </div>
                     <p className="text-[16px] font-bold text-[#6C6053]">
                        Заполните форму, чтобы мы связались с вами
                     </p>
                     <form
                        className="flex flex-col gap-5"
                        onSubmit={handleSubmit}
                     >
                        {/* <input
                           placeholder="Имя"
                           type="text"
                           className={`border-b-[1px] border-[#7C6F61] bg-transparent `}
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                        />
                        <input
                           placeholder="Телефон"
                           type="tel"
                           className={`border-b-[1px] border-[#7C6F61] bg-transparent `}
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                        /> */}
                        <FormInput
                           placeholder="Имя"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           type="text"
                        />

                        <FormInput
                           placeholder="Телефон"
                           type="tel"
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                        />
                        <button
                           type="submit"
                           disabled={isError}
                           className={`h-[40px] rounded-[10px] ${
                              isError
                                 ? "border-none bg-[#D0C9C9]"
                                 : "white border-[2px] border-green-400"
                           } w-full`}
                        >
                           Отправить
                        </button>
                     </form>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default MainPopup;
