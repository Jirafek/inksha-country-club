/* eslint-disable react/prop-types */
import inst from "./../assets/inst.png"
import what from "./../assets/what.png"
import phone from "./../assets/phone.png"
import { m } from "framer-motion"
import { useURLData } from 'utils/URLData'

const slideVariants = {
   initial: {
      x: "2%", // Начальная позиция за пределами экрана справа
      scale: 0.75,
   },
   animate: {
      x: "-2%", // Конечная позиция за пределами экрана слева
      scale: 1,
   },
}
const Footer = ({ className, FooterLinks = [], isMediaOpen = true }) => {
   const { utm_source } = useURLData()
   // const matchingPhone = phoneContent.find(item => item.utm === utm_source)
   // const phoneNumber = matchingPhone ? '+' + matchingPhone.phone : '+74995055031'
   return (
      <div className={`${className || ""}`}>
         <div className="wrapper  ">
            <div className="flex justify-between flex-col md:flex-row gap-5 py-5">
               <div className="flex w-full items-center  justify-between gap-5 md:justify-start">
                  <div className='flex gap-5 items-center'>

                     <a className='underline font-bold' href='/'>Икша Кантри Kлаб 2023 </a>
                     {FooterLinks.length !== 0 && FooterLinks.map((item, i) => {
                        return (
                           <div key={i}>
                              <a className='underline' target='_blank' rel="noreferrer" href={item.link}>{item.title}</a>
                           </div>
                        )
                     })}
                  </div>
                  {isMediaOpen && <div className="fixed bottom-5 md:bottom-[70px]  right-5 z-10 flex flex-col gap-5 md:left-5 md:flex-row">
                     <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/ikshacountryclub/"
                     >
                        <img className="z-10 h-9 w-9" src={inst} alt="" />
                     </a>
                     <a
                        href="https://wa.me/79859091202"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img className="z-10 h-9 w-9" src={what} alt="" />
                     </a>
                     <m.a
                        variants={slideVariants}
                        transition={{
                           repeat: Infinity,
                           duration: 0.5,

                           repeatType: "loop",
                           repeatDelay: 1,
                        }}
                        initial="initial"
                        animate="animate"
                        href="tel:+7 (499) 505-50-31"
                     >
                        <img className="z-10 h-9 w-9" src={phone} alt="" />
                     </m.a>
                  </div>}

               </div>

               {/* <div className="hidden  justify-center gap-10 md:flex">
                  <a href="#Programa">Программа</a>
                  <a href="#Tariff">Тарифы</a>
                  <a href="tel:+7 (499) 505-50-31">Связаться со мной</a>
               </div> */}
               {/* <a href={`tel:${phoneNumber}`} className="min-w-[160px]">
                  {phoneNumber} */}

               {
                  utm_source === 'yandex' ?
                     <a href={'tel:+74995055067'}>
                        <h4 className="min-w-[160px] underline cursor-pointer">+7(499) 505-50-67</h4>
                     </a>
                     : utm_source === 'vkontakte' ?
                        <a href={'tel:+74995055087'}>
                           <h4 className="min-w-[160px] underline cursor-pointer">+7(499) 505-50-87</h4>
                        </a>
                        :
                        <a href={"tel:+74995055031"}>
                           <h4 className="min-w-[160px] underline cursor-pointer">+7(499) 505-50-31</h4>
                        </a>

               }
               {/* </a> */}
            </div>
         </div>
      </div>
   )
}

export default Footer
