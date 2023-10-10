import { useState, useEffect } from "react";
import close from "./../assets/close.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const locations_options = [
   { value: "Лесная резиденция", label: "Лесная резиденция" },
   { value: "Шале", label: "Шале" },
   { value: "Коттедж", label: "Коттедж" },
   { value: "Олимпийская деревня", label: "Олимпийская деревня" },
];
const LocationPopup = ({ isPopupOpen, togglePopup }) => {
   const [value, setValue] = useState(options[0]);
   const [inputValue, setInputValue] = useState("Выберите локацию");
   const navigate = useNavigate();
   const [isPopupCompleted, setIsPopupCompleted] = useState(false);
   const [isError, setIsError] = useState(true); // Состояние для отслеживания ошибки
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
   });

   const [selectedOption, setSelectedOption] = useState(null); // Начальное значение состояния - null

   const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption); // Обновляем состояние при изменении значения
   };
   console.log(selectedOption);

   useEffect(() => {
      // Проверка на ошибку: проверка, что поля "Имя" и "Телефон" не пустые и selectedOption не равно null
      const newIsError =
         !formData.name || !formData.phone || selectedOption === null;
      setIsError(newIsError);
   }, [formData, selectedOption]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsPopupCompleted(!isPopupCompleted);

      // Здесь можно отправить данные на сервер или выполнить другие действия

      // Сброс значений полей формы
      setFormData({
         name: "",
         phone: "",
      });
      const inputValues = {
         name: formData.name,
         phone: formData.phone,
      };
      const selectedOptions = {
         option: selectedOption,
      };
      const allData = {
         ...selectedOptions,
         ...inputValues,
      };
      console.log(allData);

      // Combine the input field values into an object

      // Сброс выбранной опции
      setSelectedOption(null);
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
                           className={`border-b-2 border-[#7C6F61] bg-transparent 
                            
                           `}
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                        />
                        <input
                           placeholder="Телефон"
                           type="tel"
                           className={`border-b-2 border-[#7C6F61] bg-transparent 
                            
                           `}
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                        />

                        <Select
                           className={`rounded-[10px] font-bold 
                             
                            ${
                               selectedOption
                                  ? " border-[#7c6f6172] text-[#7c6f6172]"
                                  : "border-[#7C6F61] text-[#7C6F61]"
                            }  text-start`}
                           placeholder="Выберите локацию"
                           options={locations_options}
                           value={selectedOption} // Устанавливаем выбранное значение
                           onChange={handleSelectChange} // Передаем обработчик события
                        />

                        <button
                           type="submit"
                           disabled={isError}
                           className={` flex h-[40px] items-center justify-center rounded-[10px] ${
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

export default LocationPopup;
