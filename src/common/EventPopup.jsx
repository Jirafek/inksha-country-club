import React, {useState, useEffect} from "react";
import close from "./../assets/close.png";
import date_icon from "./../assets/date_icon.png";
import SelectComponent from "./Select";
// import Select from "react-select";
import {useNavigate} from "react-router-dom";
// import { DateField } from "@mui/material";
import {useURLData} from "../utils/URLData";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import FormInput from "./FormInput";
import TellInput from "./TellInput";

const people_options = [
    {value: "1 взр", label: "1 взр"},
    {value: "2 взр", label: "2 взр"},
    {value: "3 взр", label: "3 взр"},
    {value: "4 взр", label: "4 взр"},
    {value: "5 взр", label: "5 взр"},
    {value: "6 взр", label: "6 взр"},
    {value: "7 взр", label: "7 взр"},
    {value: "8 взр", label: "8 взр"},
    {value: "9 взр", label: "9 взр"},
    {value: "10 взр", label: "10 взр"},
    {value: "11 взр", label: "11 взр"},
    {value: "12 взр", label: "12 взр"},
    {value: "13 взр", label: "13 взр"},
    {value: "14 взр", label: "14 взр"},
    {value: "15 взр", label: "15 взр"},
    {value: "16 взр", label: "16 взр"},
    {value: "17 взр", label: "17 взр"},
    {value: "18 взр", label: "18 взр"},
    {value: "19 взр", label: "19 взр"},
    {value: "20 взр", label: "20 взр"},
    {value: "21 взр", label: "21 взр"},
    {value: "22 взр", label: "22 взр"},
    {value: "23 взр", label: "23 взр"},
    {value: "24 взр", label: "24 взр"},
    {value: "25 взр", label: "25 взр"},
    {value: "26 взр", label: "26 взр"},
    {value: "27 взр", label: "27 взр"},
    {value: "28 взр", label: "28 взр"},

    {value: "29 взр и больше", label: "29 взр и больше"},
];

const locations_options = [
    {value: "Лесная резиденция", label: "Лесная резиденция"},
    {value: "Шале", label: "Шале"},
    {value: "Коттедж", label: "Коттедж"},
    {value: "Олимпийская деревня", label: "Олимпийская деревня"},
];

const options = [
    {value: "1 взр", label: "1 взр"},
    {value: "2 взр", label: "2 взр"},
    {value: "3 взр и больше", label: "3 взр и больше"},
];

const EventPopup = ({isPopupOpen, togglePopup}) => {
    const {utm_campaign, utm_content, utm_source} = useURLData();
    const [isPopupCompleted, setIsPopupCompleted] = useState(false);
    const [isError, setIsError] = useState(true); // State for tracking errors
    const [date, setDate] = useState();
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    // const handleSelectChange1 = (selectedOption) => {
    //    setSelectedOption1(selectedOption);
    // };

    const handleSelectChange2 = (selectedOption) => {
        setSelectedOption2(selectedOption);
    };

    const handleSelectChange3 = (selectedOption) => {
        setSelectedOption3(selectedOption);
    };

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^\d]/g, ""); // Убираем все символы, кроме цифр
        const isValidPhone = numericValue.length === 11; // Проверяем, что длина равна 11
        setPhone(numericValue);
        setIsValid(isValidPhone); // Устанавливаем валидность номера телефона
    };
    const handleNameChange = (e) => {
        const {value} = e.target;
        setName(value);
    };

    const handleSubmitBot = async () => {
        const data = {
            name: name,
            phone: phone,
            email: "-",
            groupID: 981875757,
        };

        const sendingData = {
            ...data,
            source: "https://ikshacountryclub.com/",
            formType: "Форма полная телефон ",
            link: window.location.href,
            utm_source: utm_source,
            utm_campaign: utm_campaign,
            utm_content: utm_content,
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

    useEffect(() => {
        // Check for errors when any of the form fields change
        const isError =
            selectedOption2 === null ||
            selectedOption3 === null ||
            !name ||
            !isValid ||
            date == undefined ||
            !phone;

        setIsError(isError);
    }, [selectedOption1, selectedOption2, selectedOption3, name, phone, date]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isError) {
            handleSubmitBot();

            // Reset the state of the Select components
            setSelectedOption1(null);
            setSelectedOption2(null);
            setSelectedOption3(null);

            setName("");
            setPhone("");
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
                <div className="montery">
                    {isPopupCompleted ? (
                        <div
                            className={`montery fixed left-1/2 top-1/2  flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl`}
                        >
                            <div className="absolute right-2 top-2">
                                <img
                                    onClick={handlePopupClose}
                                    src={close}
                                    alt="close"
                                />
                            </div>
                            <p className="text-[16px]  font-bold text-[#6C6053]">
                                Ваши данные успешно отправлены!
                                <br/>
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
                                <img onClick={togglePopup} src={close} alt="close"/>
                            </div>
                            <p className="text-[16px] font-bold text-[#6C6053]">
                                Заполните форму, чтобы мы связались с вами
                            </p>
                            <form
                                className="flex flex-col gap-5"
                                onSubmit={handleSubmit}
                            >
                                {/* Input fields */}
                                {/* <input
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
                        /> */}
                                <FormInput
                                    placeholder="Имя"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    type="text"
                                />

                                <TellInput
                                    value={phone}
                                    isValid={isValid}
                                    onChange={handlePhoneChange}
                                />

                                <div className="h-[40px]">
                                    <DatePicker
                                        sx={{
                                            width: "100%",
                                            height: "40px",
                                            // border: "2px solid black",
                                        }}
                                        value={date}
                                        onChange={(newDate) => {
                                            const {$d} = newDate;
                                            setDate($d);
                                            // console.log(newDate);
                                        }}
                                        slotProps={{textField: {variant: "standard"}}}
                                    />
                                </div>

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

                                <button
                                    type="submit"
                                    disabled={isError}
                                    className={`flex h-[40px] items-center justify-center rounded-[10px] ${
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
        </LocalizationProvider>
    );
};

export default EventPopup;
