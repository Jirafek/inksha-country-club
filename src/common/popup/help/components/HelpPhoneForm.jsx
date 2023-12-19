import { useEffect, useState } from 'react'
import InputMask from "react-input-mask"
import { useURLData } from 'utils/URLData'
import style from './../helpPopup.module.scss'
import Cookies from 'js-cookie'
const HelpPhoneForm = ({ addInfo = '', questInput = '', additionalData = null,
   additionalDataType = null, setIsHelpPopupOpen }) => {
   const { utm_campaign, utm_content, utm_source } = useURLData()
   const [isPopupCompleted, setIsPopupCompleted] = useState(false)
   const [isError, setIsError] = useState(true) // State for tracking errors
   const [name, setName] = useState("")
   const [isValid, setIsValid] = useState(true)
   const [phone, setPhone] = useState("")


   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         message: questInput,
         groupID: import.meta.env.VITE_GROUP_ID,
      }

      let sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: "Call Back",
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
            Cookies.set('isTimerOn', 'false', { expires: 7 })
            console.log(!Cookies.get('isTimerOn'))
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




   // const handleSubmitBot = async () => {
   //    const data = {
   //       name: name,
   //       phone: phone,
   //       email: addInfo,
   //       groupID: import.meta.env.VITE_GROUP_ID,
   //    }
   //    const res = await simpleBotSubmit(data, 'Попап Помощь')
   //    // console.log(res)
   // }


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
      handleSubmitBot()
      setPhone("") // Очищаем состояние телефона
      setIsHelpPopupOpen(false)
      setIsPopupCompleted(!isPopupCompleted)
   }
   return (
      <div className="">

         <p className='font-bold text-md mb-2'>Оставьте ваши данные
            и с вами свяжутся в ближайшее время!</p>
         <p className='text-sm mb-3'>Наши администраторы всегда на связи!</p>
         <form onSubmit={handleSubmit} className='mb-3' >
            {/* <input name='input' className='border h-[50px] mb-4 border-[#334727] text-[14px] my-2 rounded-[10px] w-full p-2' onChange={changeQuestInput} value={questInput} type="text" /> */}
            {/* <button type='submit' disabled={!isValid} className={` w-full h-[30px] rounded-[10px] text-white bg-[#334727] ${style.btn}`}>Отправить</button> */}


            <input
               placeholder="Имя"
               name="name"
               className='border h-[30px] border-[#334727] text-[14px] my-2 rounded-[10px] w-full p-2'
               value={name}
               onChange={handleNameChange}
               type="text"
            />

            <div>
               <InputMask
                  mask="+7 (999) 999-99-99"
                  placeholder="Телефон"
                  className={`border h-[30px] border-[#334727] text-[14px] my-2 rounded-[10px] w-full p-2 ${!isValid ? "text-[#7d756d]" : ""
                     }`}
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
               />
               {/* {!isValid && <p className="error-message">Введите 11 цифр</p>} */}
            </div>
            <button type='submit' disabled={isError} className={` w-full h-[30px] rounded-[10px] text-white bg-[#334727] ${style.btn}`}>Отправить</button>

         </form >
         <div className='flex flex-col gap-3'>
            {/* <button disabled={!isValid} onSubmit={() => { }} className={` w-full h-[30px] rounded-[10px] text-sm flex items-center justify-center bg-white border border-[#334727] text-[#334727]`}>Перезвоним в течение минуты</button> */}
         </div>


      </div>
   )
}

export default HelpPhoneForm