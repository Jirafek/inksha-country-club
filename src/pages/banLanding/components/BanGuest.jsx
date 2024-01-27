// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"


import guest2 from "images/korpLanding/guest/002.webp"

import guest4 from "images/korpLanding/guest/004.webp"

import korpprev from "icons/swiperprev_black.png"
import korpnext from "icons/swipernext_black.png"
import { useRef } from "react"

const guests = [
   {
      img: guest4,
      name: "Djulia",
      date: "4 января",
      text: "Снимали коттедж на Новый год. Есть большая летняя веранда,мангал,большая гостиная с кухней и 3 спальни на втором этаже,гардеробная. Полы отапливались. Везде чисто. Спасибо Елене за встречу и проводы. Любые вопросы решались оперативно. Территория большая,есть выход к водохранилищу,думаю летом там благодать.Соотношение цены-качество,лучшее в Подмосковье!",
   },
   {
      img: guest2,
      name: "Полина Бирюкова",
      date: "16 декабря",
      text: "Отличное место для отдыха компанией) баня и купель, атмосфера зимней сказки, обслуживание - выше всех похвал! Сотрудник Тахир круглосуточно был на связи, решал все вопросы нашей веселой женской компании - разжечь горелку, угли и тд, за это отдельная благодарность)) сами домики в отличном состоянии, все чистенькое-новенькое. Вид из домика на заснеженное водохранилище отдельный кайф!",
   }

]

const BanGuest = () => {
   const swiperRef = useRef()
   return (
      <div className=" relative pt-[5vh] pb-[15vh] md:pb-[25vh]">
         <div className='text-black font-bold text-center mb-[10vh] text-md+'>Почему нас выбирают</div>
         <div className="">
            <Swiper
               // install Swiper modules
               modules={[Navigation, Autoplay]}
               className="korpswiper mb-10 bg-[#221C1C]"
               spaceBetween={50}
               loop={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               slidesPerView={1}
               navigation
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
               }}
            >
               {guests.map((guest, i) => {
                  return (
                     <SwiperSlide className="px-[2vw] md:p-0" key={i}>

                        <div className="flex mb-10 w-full items-center justify-end">
                           <div className="min-w-[200px] min-h-[130px] w-full bg-transparent  text-white  rounded-[10px] md:h-[600px] relative">
                              <img
                                 className="absolute w-[20%] md:w-[20%]  md:max-w-auto z-10 -bottom-10 right-5  md:left-2 md:top-1/2 transform md:-translate-y-1/2"
                                 src={guest.img}
                                 alt=""
                              />
                              <div className="p-5 flex h-full flex-col justify-center md:pl-[23%] py-[2vh]">
                                 <h1 className="text-md ">{guest.name}</h1>
                                 <div className="text-sm ">{guest.date}</div>
                                 <h1 className="text-extramd ">{guest.text}</h1>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  )
               })}
            </Swiper>
            <div className="flex px-[20px] w-full ml-auto   z-10 justify-between">
               <button
                  className="z-[200]"
                  onClick={() => swiperRef.current?.slidePrev()}
               >
                  <img
                     className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                     src={korpprev}
                     alt=""
                  />
               </button>
               <button
                  className="z-[200]"
                  onClick={() => swiperRef.current?.slideNext()}
               >
                  <img
                     className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                     src={korpnext}
                     alt=""
                  />
               </button>
            </div>

         </div>

      </div>
   )
}

export default BanGuest
