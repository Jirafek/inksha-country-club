import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import close from "./../assets/close.png";

const MainPopup = ({ isPopupOpen, togglePopup }) => {
   const [isPopupCompleted, setIsPopupCompleted] = useState(false);
   const [isError, setIsError] = useState(true); // State for tracking errors
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
   });

   // Define an object to hold all form data
   const allFormData = {
      ...formData,
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Update the allFormData object with the latest data
      allFormData.name = formData.name;
      allFormData.phone = formData.phone;

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
      <div>
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
                        <input
                           placeholder="Имя"
                           type="text"
                           className={`border-b-1 border-[#7C6F61] bg-transparent `}
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                        />
                        <input
                           placeholder="Телефон"
                           type="tel"
                           className={`border-b-1 border-[#7C6F61] bg-transparent `}
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
                                 : "white border border-green-400"
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
