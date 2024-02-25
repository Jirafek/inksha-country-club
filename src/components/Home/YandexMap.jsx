import React, { useState } from "react"

import { m } from "framer-motion"

import { useURLData } from "utils/URLData"
import { getPhoneNumber, isItWinterNow } from "utils/helpers"

const ytSrc = "https://www.youtube.com/embed/m24zezD9fWs"
const ytId = ytSrc.split("/")[ytSrc.split("/").length - 1]

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const headingLines = {
   hidden: {
      opacity: 0,
      // clipPath: 'inset(100% 0px 0px)',
   },
   visible: {
      opacity: 1,
      // clipPath: 'inset(0% 0px 0px)',
      transition: {
         ease: "easeOut",
         duration: 1.5,
      },
   },
}

const YandexMap = () => {
   const mapStyles = {
      width: "100%",
      height: "800px",
   }
   const { utm_source, phoneContent } = useURLData()
   const matchingPhone = phoneContent.find(item => item.utm === utm_source)
   // const phoneNumber = matchingPhone ? '+' + matchingPhone.phone : '+74995055031'
   const phoneNumber = getPhoneNumber()

   const [isVideoPlaying, setIsVideoPlaying] = useState(false)

   const handlePlayVideo = () => {
      setIsVideoPlaying(true)
   }

   return (
      <m.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={heading}
         className="section relative"
         id="contacts"
      >
         <div className="relative">
            <div
               style={{ transform: "translateX(-50%)" }}
               className="absolute left-1/2 z-20 flex h-[90px] w-full flex-col items-center justify-center"
            >
               <picture>
                  <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                  <img
                     className="left-50% absolute top-0 translate-x-[-50%]"
                     src="/image/titles_bg.webp"
                     alt="Фоновое изображение для заголовка"
                  />
               </picture>

               <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
                  КОНТАКТЫ
               </h2>
            </div>
            <iframe
               src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fd5ee0a4eb1741a8b66cbf0ff740727f45a33b5ab3731a94c50d75de17a22fc&amp;source=constructor"
               scroll="false"
               width="100%"
               height="800"
               frameBorder="0"
            ></iframe>
         </div>
         <m.div
            variants={headingLines}
            className="monterey absolute bottom-[150px] left-[15px] h-[152px] w-[317px] rounded-[10px] border border-black bg-white px-[15px] pt-5"
         >
            <div className="relative flex h-full flex-col gap-[10px]">
               <p className="text-black underline">
                  <a href={`tel:${phoneNumber}`}>
                     {phoneNumber}
                  </a>
               </p>
               <p className="text-black underline">
                  <a href="mailto:contact@ikshacountryclub.com">
                     contact@ikshacountryclub.com
                  </a>
               </p>
               {/* <p className="text-black mb-2">
                  обл. Московская, р-н Мытищинский, сельское поселение
                  Федоскинское, п. Менжинец, СНТ "Икша" участок 4
               </p> */}

               <div className="absolute bottom-[2px] right-0 flex items-center">
                  <a href={`https://wa.me/+79859091202`}>
                     <picture>
                        <source srcSet={`/avif/whatsapp.avif 1x`} type="image/avif" />
                        <img
                           className="h-[50px] w-[50px] bg-transparent"
                           src={`/image/whatsapp.webp`}
                           alt="Икша Кантри Клаб - Заказть отдых через Ватсап"
                        />
                     </picture>
                  </a>
                  <a href={`https://t.me/IkshaCountryClubSupportBot?start=${utm_source}_`}>
                     <picture>
                        <source srcSet="/avif/tg.avif 1x" type="image/avif" />
                        <img
                           className="h-[50px] w-[50px] bg-transparent"
                           src="/image/tg.webp"
                           alt="Икша Кантри Клаб - Заказть отдых через Телеграм"
                        />
                     </picture>
                  </a>
                  <a
                     className="ml-1 mr-[10px]"
                     href="https://vk.com/ikshacountryclub"
                  >
                     <picture>
                        <source srcSet={`/avif/vk.avif 1x`} type="image/avif" />
                        <img
                           src={`/image/vk.webp`}
                           alt="Загородный клуб Икша Кантри Клаб - ВКонтакте"
                        />
                     </picture>
                  </a>
                  <a
                     className="mr-1"
                     href="https://www.instagram.com/ikshacountryclub"
                  >
                     <picture>
                        <source srcSet={`/avif/inst.avif 1x`} type="image/avif" />
                        <img
                           src={`/image/inst.webp`}
                           alt="Загородный клуб Икша Кантри Клаб - Инстаграм"
                        />
                     </picture>
                  </a>
                  <a href="https://www.youtube.com/@ikshacountryclub">
                     <picture>
                        <source
                           srcSet="/avif/youtube_bg.avif 1x"
                           type="image/avif"
                        />
                        <img
                           className="h-[50px] w-[50px] bg-transparent"
                           src="/image/youtube_bg.webp"
                           alt="Загородный клуб Икша Кантри Клаб - Ютуб"
                        />
                     </picture>
                  </a>
               </div>
            </div>
         </m.div>
         <div className="absolute bottom-[270px] left-[15px]">
            <div className="group relative h-[205px] w-[330px]">
               {!isVideoPlaying && (
                  <div>
                     <a href={ytSrc}>
                        <img
                           src={`https://i.ytimg.com/vi_webp/${ytId}/mqdefault.webp`}
                           alt="Превью видео с ютуба"
                        />
                     </a>
                     <button
                        className="absolute left-1/2 top-1/2 h-[48px] w-[68px] -translate-x-1/2 -translate-y-1/2 border-none bg-transparent"
                        aria-label="Запустить Видео"
                        onClick={handlePlayVideo}
                     >
                        <svg width="68" height="48" viewBox="0 0 68 48">
                           <path
                              className="fill-[#212121] opacity-80 duration-300 group-hover:fill-[#ff0000] group-hover:opacity-100"
                              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                           ></path>
                           <path
                              className="fill-white"
                              d="M 45,24 27,14 27,34"
                           ></path>
                        </svg>
                     </button>
                  </div>
               )}
               {isVideoPlaying && (
                  <iframe
                     width="330"
                     height="205"
                     src={`${ytSrc}?rel=0&showinfo=0&autoplay=1`}
                     frameBorder="0"
                     allowFullScreen
                  ></iframe>
               )}
            </div>
         </div>
      </m.section>
   )
}

export default YandexMap
