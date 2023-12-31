
import FadeIn from 'common/animation/FadeIn'
import close from "icons/close.png"
import { useEffect, useState } from 'react'
import HelpPhoneForm from './components/HelpPhoneForm'
import style from './helpPopup.module.scss'
const HelpPopup = ({ isHelpPopupOpen, setIsHelpPopupOpen, className = '', setIsHelpButtonActive }) => {
   const [isValid, setIsValid] = useState(false)
   const [path, setPath] = useState(1)

   const [isPhoneCall, setIsPhoneCall] = useState(false)

   const [questInput, setQuestInput] = useState('Как забронировать домик?')

   const changeQuestInput = (e) => {
      setQuestInput(e.target.value)
   }
   const submitFirstForm1 = (e) => {
      e.preventDefault()
      setIsPhoneCall(false)
      setPath(2)
   }


   const submitFirstForm2 = (e) => {
      e.preventDefault()
      setIsPhoneCall(true)
      setPath(2)
   }


   const handlePopupClose = () => {
      setIsHelpPopupOpen(false)
      setIsHelpButtonActive(true)
   }

   useEffect(() => {
      if (questInput.length >= 3) {
         setIsValid(true)
      } else {
         setIsValid(false)
      }

   }, [questInput, setQuestInput])

   return (
      <>
         <FadeIn className={` ${className} fixed left-1/2  top-1/2 -translate-x-1/2  -translate-y-1/2 transform z-[100000]`}>
            <div
               style={{ transform: "translateX(-50%)" }}
               className="absolute left-1/2 -top-[155px] z-30 w-[215px] bg-transparent"
            >
               <img
                  className="bg-transparent"
                  src="/image/girman.gif"
                  alt="Икша Кантри Клаб"
               />
            </div>
            <div className='border w-[70vw] mx-auto  h-[280px] text-black  relative montery border-black bg-white rounded-[20px] p-5'>
               <div className="absolute right-3 z-[60] p-2 top-3">
                  <img
                     onClick={handlePopupClose}
                     src={close}
                     alt="close"
                  />
               </div>
               {path === 1 && <div>

                  <p className='font-bold text-md mb-2'>Нужна помощь?</p>
                  <p className='text-sm mb-3'>Наши администраторы всегда на связи!</p>
                  <form >
                     <input name='input' className='border h-[50px] mb-4 border-[#334727] text-[14px] my-2 rounded-[10px] w-full p-2' onChange={changeQuestInput} value={questInput} type="text" />
                  </form>
                  <div className='flex flex-col gap-3'>
                     <button disabled={!isValid} onClick={submitFirstForm1} className={` w-full h-[30px] rounded-[10px] text-white bg-[#334727] ${style.btn}`}>Отправить</button>
                     <button onClick={submitFirstForm2} className={` w-full h-[30px] rounded-[10px] text-sm flex items-center justify-center bg-white border border-[#334727] text-[#334727]`}>Перезвоним в течение минуты</button>
                  </div>
               </div>}
               {path === 2 && <div>
                  <HelpPhoneForm isPhoneCall={isPhoneCall} questInput={questInput} setIsHelpPopupOpen={setIsHelpPopupOpen} addInfo={questInput} />
               </div>}


            </div>



         </FadeIn>
      </>

   )
}

export default HelpPopup