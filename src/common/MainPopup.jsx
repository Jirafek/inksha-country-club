import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useURLData } from "../utils/URLData"
import close from "./../assets/close.png"
import FormInput from "./FormInput"
import TellInput from "./TellInput"

const MainPopup = ({
    isPopupOpen,
    togglePopup,
    additionalData = null,
    additionalDataType = null,
}) => {
    const { utm_campaign, utm_content, utm_source } = useURLData()
    const [isPopupCompleted, setIsPopupCompleted] = useState(false)
    const [isError, setIsError] = useState(true) // State for tracking errors
    const [name, setName] = useState("")
    const [isValid, setIsValid] = useState(true)
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const handleSubmitBot = async () => {
        const data = {
            name: name,
            phone: phone,
            email: "-",
            groupID: import.meta.env.VITE_GROUP_ID,
        }

        let sendingData = {
            ...data,
            source: "https://ikshacountryclub.com/",
            formType:
                additionalDataType === null
                    ? "Форма имя + телефон"
                    : additionalDataType,
            link: window.location.href,
            utm_source: utm_source,
            utm_campaign: utm_campaign,
            utm_content: utm_content,
        }

        if (additionalData !== null) {
            sendingData = { ...sendingData, ...additionalData }
        }

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
            )

            if (response.ok) {
                setTimeout(() => {
                    window.location.href = 'https://ikshacountryclub.com/thanks'
                }, 1000)
            } else {
                alert("Произошла ошибка при отправке данных")
            }
        } catch (error) {
            console.error(error)
            alert("Произошла ошибка при отправке данных")
        }
    }

    useEffect(() => {
        // Проверка на ошибки при изменении полей формы
        const newIsError = !name || !phone || !isValid
        setIsError(newIsError)
    }, [name, phone])

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value
        const numericValue = inputValue.replace(/[^\d]/g, "") // Убираем все символы, кроме цифр
        const isValidPhone = numericValue.length === 11 // Проверяем, что длина равна 11
        setPhone(numericValue)
        setIsValid(isValidPhone) // Устанавливаем валидность номера телефона
    }
    const handleNameChange = (e) => {
        const { value } = e.target
        setName(value)
    }

    const handlePopupClose = () => {
        setIsPopupCompleted(false)
        togglePopup()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isError) {
            return
        }
        const data = {
            name,
            phone,
            email: "-",
        }
        handleSubmitBot()
        // ... ваша существующая логика ...
        setPhone("") // Очищаем состояние телефона
        setIsPopupCompleted(!isPopupCompleted)
    }
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
                        <div
                            className="fixed left-1/2 top-1/2 z-[2000] flex w-[300px] -translate-x-1/2  -translate-y-1/2 transform flex-col rounded-[30px] border-2 border-[#7C6F61] bg-white px-6 py-2 text-center shadow-2xl">
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
                                    value={name}
                                    onChange={handleNameChange}
                                    type="text"
                                />

                                <TellInput
                                    value={phone}
                                    isValid={isValid}
                                    onChange={handlePhoneChange}
                                />

                                <button
                                    type="submit"
                                    disabled={isError}
                                    className={`h-[40px] rounded-[10px] ${isError
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
    )
}

export default MainPopup
