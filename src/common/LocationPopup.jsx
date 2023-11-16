import {useState, useEffect} from "react";
import close from "./../assets/close.png";
import Select from "./../common/Select";
import SelectComponent from "./Select";
import {useNavigate} from "react-router-dom";
import FormInput from "./FormInput";
import TellInput from "./TellInput";
import {useURLData} from "../utils/URLData";

const locations_options = [
    {value: "Лесная резиденция", label: "Лесная резиденция"},
    {value: "Шале", label: "Шале"},
    {value: "Коттедж", label: "Коттедж"},
    {value: "Олимпийская деревня", label: "Олимпийская деревня"},
];
const LocationPopup = ({isPopupOpen, togglePopup}) => {
    const {utm_campaign, utm_content, utm_source} = useURLData();
    const [isPopupCompleted, setIsPopupCompleted] = useState(false);
    const [isError, setIsError] = useState(true); // Состояние для отслеживания ошибки
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
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
            formType: "Форма имя + телефон + локация телефон ",
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

    const [selectedOption, setSelectedOption] = useState(null); // Начальное значение состояния - null

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption); // Обновляем состояние при изменении значения
    };
    console.log(selectedOption);

    useEffect(() => {
        // Проверка на ошибку: проверка, что поля "Имя" и "Телефон" не пустые и selectedOption не равно null
        const newIsError = !name || !phone || selectedOption === null || !isValid;
        setIsError(newIsError);
    }, [name, phone, selectedOption]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isError) {
            return;
        }

        handleSubmitBot();
        // ... ваша существующая логика ...
        setName(""); // Очищаем состояние телефона
        setPhone(""); // Очищаем состояние телефона
        setIsPopupCompleted(!isPopupCompleted);
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
                            className="fixed left-1/2 top-1/2 z-[2000] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl">
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
                                <FormInput
                                    placeholder="Имя"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    type="text"
                                />

                                <TellInput
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    isValid={isValid}
                                />
                                {/* <input /> */}

                                {/* <Select
                           className={` rounded-[10px] text-start font-[600] text-[#7C6F61]`}
                           placeholder="Выберите локацию"
                           options={locations_options}
                           value={selectedOption} // Устанавливаем выбранное значение
                           onChange={handleSelectChange} // Передаем обработчик события
                        /> */}
                                <SelectComponent
                                    onChange={handleSelectChange}
                                    value={selectedOption}
                                    options={locations_options}
                                    placeholder="Выберите локацию"
                                />

                                <button
                                    type="submit"
                                    disabled={isError}
                                    className={` flex h-[40px] items-center justify-center rounded-[10px] ${
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

export default LocationPopup;
