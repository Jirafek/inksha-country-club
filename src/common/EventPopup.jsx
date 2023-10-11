import React, { useState, useEffect } from "react";
import close from "./../assets/close.png";
import date_icon from "./../assets/date_icon.png";
import SelectComponent from "./Select";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
// import { DateField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const people_options = [
   { value: "1 взр", label: "1 взр" },
   { value: "2 взр", label: "2 взр" },
   { value: "3 взр и больше", label: "3 взр и больше" },
];

const locations_options = [
   { value: "Лесная резиденция", label: "Лесная резиденция" },
   { value: "Шале", label: "Шале" },
   { value: "Коттедж", label: "Коттедж" },
   { value: "Олимпийская деревня", label: "Олимпийская деревня" },
];

const options = [
   { value: "1 взр", label: "1 взр" },
   { value: "2 взр", label: "2 взр" },
   { value: "3 взр и больше", label: "3 взр и больше" },
];

const EventPopup = ({ isPopupOpen, togglePopup }) => {
   const [isPopupCompleted, setIsPopupCompleted] = useState(false);

   const [isError, setIsError] = useState(true); // State for tracking errors
   const [date, setDate] = useState();

   // State variables for Select components
   const [selectedOption1, setSelectedOption1] = useState(null);
   const [selectedOption2, setSelectedOption2] = useState(null);
   const [selectedOption3, setSelectedOption3] = useState(null);

   // State variables for input fields
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
   });

   const handleSelectChange1 = (selectedOption) => {
      setSelectedOption1(selectedOption);
   };

   const handleSelectChange2 = (selectedOption) => {
      setSelectedOption2(selectedOption);
   };

   const handleSelectChange3 = (selectedOption) => {
      setSelectedOption3(selectedOption);
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   useEffect(() => {
      // Check for errors when any of the form fields change
      const newIsError =
         selectedOption2 === null ||
         selectedOption3 === null ||
         !formData.name ||
         date == undefined ||
         !formData.phone;

      setIsError(newIsError);
   }, [selectedOption1, selectedOption2, selectedOption3, formData, date]);

   const handleSubmit = (e) => {
      e.preventDefault();

      // Combine the selected options into an object as needed
      const selectedOptions = {
         // option1: selectedOption1,
         option2: selectedOption2,
         option3: selectedOption3,
      };

      // Combine the input field values into an object
      const inputValues = {
         name: formData.name,
         phone: formData.phone,
      };
      const DateValue = {
         date: date,
      };

      // Check for errors one more time before submission
      const newIsError =
         // selectedOptions.option1 === null ||
         selectedOptions.option2 === null ||
         selectedOptions.option3 === null ||
         !inputValues.name ||
         date === undefined ||
         !inputValues.phone;

      setIsError(newIsError);

      if (!newIsError) {
         // You can use allData in further processing or send it to the server
         const allData = {
            ...selectedOptions,
            ...inputValues,
            ...DateValue,
         };
         console.log(allData);

         // Reset the state of the Select components
         setSelectedOption1(null);
         setSelectedOption2(null);
         setSelectedOption3(null);

         // Reset the form fields
         setFormData({
            name: "",
            phone: "",
         });
         setDate(undefined);
         setIsPopupCompleted(!isPopupCompleted);
      }
   };

   const handlePopupClose = () => {
      // Reset the popup state and close the popup
      setIsPopupCompleted(false);
      togglePopup();
   };

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         {isPopupOpen && (
            <div>
               {isPopupCompleted ? (
                  <div
                     className={`fixed left-1/2 top-1/2 z-[10] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl`}
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
                  <div
                     className={`fixed left-1/2 top-1/2 z-[2000] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl`}
                  >
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
                        {/* Input fields */}
                        <input
                           placeholder="Имя"
                           type="text"
                           className={`h-[40px] border-b border-[#7C6F61] bg-transparent ${
                              isError && !formData.name ? "error-border" : ""
                           }`}
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                        />

                        <input
                           placeholder="Телефон"
                           type="tel"
                           className={`h-[40px] border-b border-[#7C6F61] bg-transparent ${
                              isError && !formData.phone ? "error-border" : ""
                           }`}
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                        />

                        {/* <Select
                           className={`rounded-[10px]  ${
                              selectedOption1 === null
                                 ? "border-[#7c6f6172] text-[#7c6f6172]"
                                 : "border-[#7C6F61] text-[#7C6F61]"
                           }  text-start ${
                              isError && selectedOption1 === null
                                 ? "error-border"
                                 : ""
                           }`}
                           placeholder="Выберите дату"
                           options={options}
                           value={selectedOption1}
                           onChange={handleSelectChange1}
                        /> */}
                        <SelectComponent
                           onChange={handleSelectChange2}
                           value={selectedOption2}
                           options={locations_options}
                           placeholder="Выберите локацию"
                        />
                        {/* <Select
                           className={`rounded-[10px]`}
                           placeholder="Выберите локацию"
                           options={locations_options}
                           value={selectedOption2}
                           onChange={handleSelectChange2}
                        /> */}

                        <SelectComponent
                           onChange={handleSelectChange3}
                           value={selectedOption3}
                           options={people_options}
                           placeholder="Кол-во гостей"
                        />

                        {/* <Select
                           className={`rounded-[10px]  ${
                              selectedOption3 === null
                                 ? "border-[#7c6f6172] text-[#7c6f6172]"
                                 : "border-[#7C6F61] text-[#7C6F61]"
                           }  text-start ${
                              isError && selectedOption3 === null
                                 ? "error-border"
                                 : ""
                           }`}
                           placeholder="Кол-во гостей"
                           options={people_options}
                           value={selectedOption3}
                           onChange={handleSelectChange3}
                        /> */}
                        <div className="h-[40px]">
                           <DatePicker
                              sx={{
                                 width: "100%",
                                 height: "40px",
                                 // border: "2px solid black",
                              }}
                              value={date}
                              onChange={(newDate) => {
                                 const { $d } = newDate;
                                 setDate($d);
                                 // console.log(newDate);
                              }}
                              slotProps={{ textField: { variant: "standard" } }}
                           />
                        </div>

                        <button
                           type="submit"
                           disabled={isError}
                           className={`flex h-[40px] items-center justify-center rounded-[10px] ${
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
      </LocalizationProvider>
   );
};

export default EventPopup;
