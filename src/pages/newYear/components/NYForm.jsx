import gift from 'images/NY/gift.webp'
import NYGreenButton from './NYGreenButton';
import { useEffect, useState } from 'react';
import { URLData } from 'utils/URLData';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
const NYForm = () => {

   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [phoneError] = useState("");
   const [isError, setIsError] = useState(true); // State for tracking errors

   const handleSubmitBot = async () => {
      const data = {
         name: name,
         phone: phone,
         email: '-',
         groupID: 981875757,
      };
      // if (!email.match(emailRegex)) {
      //    alert("Введите корректный почтовый адресс");
      //    return;
      // }

      const sendingData = {
         ...data,
         source: "https://ikshacountryclub.com/",
         formType: "Новый год лендинг",
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
            setTimeout(() => {
               navigate("/thanks");
            }, 1000);
            // ... ваша существующая логика ...
            setPhone(""); // Очищаем состояние телефона
            setName(""); // Очищаем состояние телефона

         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }
   };

   useEffect(() => {

      // Проверка на ошибки при изменении полей формы
      const newIsError = !name || !phone || !isValid;
      setIsError(newIsError);


   }, [isValid, name, phone]);

   const handlePhoneChange = (e) => {
      const inputValue = e.target.value;
      const numericValue = inputValue.replace(/[^\d]/g, ""); // Убираем все символы, кроме цифр
      const isValidPhone = numericValue.length === 11; // Проверяем, что длина равна 11
      setPhone(numericValue);
      setIsValid(isValidPhone); // Устанавливаем валидность номера телефона
   };
   const handleNameChange = (e) => {
      const { value } = e.target;
      setName(value);
   };

   // const handleEmailChange = (e) => {
   //    const { value } = e.target;
   //    setEmail(value);
   // };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (isError) {
         alert("Ошибка с номером");
         return;
      }

      handleSubmitBot();
   };
   return (
      <div id='Form' className=' ny-form-bg py-[10vh] md:py-[230px]'>

         <div className='wrapper'>

            <div className="w-full relative flex items-center text-center justify-center">
               {/* <Reveal duration={1.5} variants={slideFromLeft()}> */}
               <div
                  name="Form"
                  className="form relative flex justify-center items-center flex-col bg-NYcream p-[5%] rounded-[16px] shadow-2xl  md:w-[650px] py-14 md:h-[550px] text-center"
               >
                  <img className='absolute w-[100px] md:w-auto md:-top-[170px] -left-0  -top-14 md:-left-[170px]' src={gift} alt="" />
                  <img className='absolute w-[100px] md:w-auto md:-bottom-[140px] -right-0 -bottom-8 md:-right-[140px]' src={gift} alt="" />
                  <div className="text-md font-bold mb-5 ">
                     Оставьте свои данные, и мы обязательно свяжемся с вами
                  </div>
                  <form onSubmit={handleSubmit} className=" relative flex flex-col justify-center items-center w-full" action="">

                     <input
                        type="text"
                        placeholder="Имя"
                        onChange={handleNameChange}
                        value={name}
                        className="rounded-[20px] mount p-5 md:min-w-[400px] h-[50px] md:min-h-[60px] mb-5 text-black text-[20px] md:text-[30px] w-full bg-white "
                     />
                     <InputMask
                        mask="+7 (999) 999-99-99"
                        maskChar=" "
                        value={phone}
                        onChange={handlePhoneChange}
                     >
                        {(inputProps) => (
                           <input
                              type="text"
                              placeholder="Телефон"
                              className={`rounded-[20px] mount p-5 md:min-w-[400px] h-[50px] md:min-h-[60px] mb-5 text-black text-[20px] md:text-[30px] w-full bg-white  ${phoneError ? "border-red-500" : ""
                                 }`}
                              {...inputProps}
                           />
                        )}
                     </InputMask>
                     <NYGreenButton style={{ marginTop: '0px' }} onClick={handleSubmit} className="w-full md:w-1/2 mt-0 mx-auto text-white">
                        Отправить
                        {/* <img src={arrow} className="w-9 h-5" alt="" /> */}
                     </NYGreenButton>
                  </form>
               </div>

               {/* <img src={boo} className="absolute right-0 -bottom-20" alt="" /> */}
            </div>

         </div>
      </div>
   )
}

export default NYForm