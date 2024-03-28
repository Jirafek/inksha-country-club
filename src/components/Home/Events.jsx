import { useState } from "react"
import Confetti from "react-confetti"
import { useInView } from 'react-intersection-observer'
import Slider from "react-slick"
import useWindowSize from "react-use/lib/useWindowSize"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { v4 as uuidv4 } from "uuid"
import AnimatedButton from "./../../common/AnimationButton"
import EventPopup from "./../../common/EventPopup"
import { CustomNextArrow, CustomPrevArrow } from "./helpers/CustomEventArrows"
// without link, book block

const eventsData = [
   {
      title: "День рождения",
      imgWebp: "/image/events_1.webp",
      imgAvif: "/avif/events_1.avif",
      text: [
         "От 9 часов",
         "Уютная крытая веранда для компании",
         "Пледы, водные развлечения",
         "Возможность остаться на ночлег (до 10 чел.)",
         "Предзаказ питания и праздничного торта",
      ],
      link: "/birthday",
   },
   {
      title: "Шашлыки",
      imgWebp: "/image/events_2.webp",
      imgAvif: "/avif/events_2.avif",
      text: [
         "От 5 часов",
         "Рыболовные снасти",
         "Освещаемая веранда со столами и диванами",
         "Просторный индивидуальный причал",
         "3 домика для ночлега и питание дополнительно",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Баня и Спа",
      imgWebp: "/image/events_3.webp",
      imgAvif: "/avif/events_3.avif",
      text: [
         "6 часов",
         "Русская баня",
         "Бассейн с подогревом",
         "Парения и чай из самовара",
         "Дополнительно можно заказать питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Караоке Вечеринка",
      imgWebp: "/image/events_4.webp",
      imgAvif: "/avif/events_4.avif",
      text: [
         "6 часов",
         "2 микрофона и выбор из тысяч популярных песен",
         "Чайная церемония для разогрева голосовых связок",
         "Аудиосистема с настраиваемым под вас звуком",
         "Напитки и питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Девичник",
      imgWebp: "/image/events_5.webp",
      imgAvif: "/avif/events_5.avif",
      text: [
         "6 часов",
         "2 микрофона и выбор из тысяч популярных песен",
         "Чайная церемония для разогрева голосовых связок",
         "Аудиосистема с настраиваемым под вас звуком",
         "Напитки и питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Мальчишник",
      imgWebp: "/image/events_6.webp",
      imgAvif: "/avif/events_6.avif",
      text: [
         "6 часов",
         "Русская баня",
         "Бассейн с подогревом",
         "Парения и чай из самовара",
         "Дополнительно можно заказать питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Свадьба",
      imgWebp: "/image/events_7.webp",
      imgAvif: "/avif/events_7.avif",
      text: [
         "6 часов",
         "Русская баня",
         "Бассейн с подогревом",
         "Парения и чай из самовара",
         "Дополнительно можно заказать питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
   {
      title: "Послесвадебная вечеринка",
      imgWebp: "/image/events_8.webp",
      imgAvif: "/avif/events_8.avif",
      text: [
         "6 часов",
         "Русская баня",
         "Бассейн с подогревом",
         "Парения и чай из самовара",
         "Дополнительно можно заказать питание",
      ],
      link: "https://bronirui-online.ru/iksha-country-club/uslugi",
   },
]

const Events = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false)
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      afterChange: (currentSlide) => setActiveSlideIndex(currentSlide),
   }

   const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
   })

   const { width, height } = useWindowSize()
   const [activeSlideIndex, setActiveSlideIndex] = useState(0)

   return (
      <section
         style={{ backgroundImage: "url(/image/bg-events.webp)" }}
         id="events"
         ref={ref}
         className="section back_settings relative"
      >
         <EventPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <div className="relative z-10 flex h-[90px] flex-col items-center justify-center">
            <picture>
               <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
               <img
                  className="left-50% absolute top-0 translate-x-[-50%]"
                  src="/image/titles_bg.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>

            <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
               МЕРОПРИЯТИЯ
            </h2>
         </div>
         <Confetti
            width={width}
            height="710px"
            numberOfPieces={

               eventsData[activeSlideIndex]?.title === "День рождения" ? (inView ? 300 : 0) : 0
            }
            gravity={0.1}
            className="z-0"
         />
         <Slider {...settings}>
            {eventsData.map((el, i) => {
               return (
                  <div
                     className="relative flex flex-col items-center justify-center"
                     key={uuidv4()}
                  >
                     <div className="mx-auto mb-[20px] flex h-[60px] w-[320px] justify-center">
                        <div
                           style={{
                              backgroundImage: "url(/image/events_title.webp)",
                           }}
                           className="back_settings monterey flex w-full items-center justify-center text-[19px] font-bold text-[#000]"
                        >
                           {el.title}
                        </div>
                     </div>
                     <div className="mb-[15px] flex justify-center">
                        <picture>
                           <source
                              srcSet={`${el.imgAvif} 1x`}
                              type="image/avif"
                           />
                           <img
                              className="w-[300px] px-5"
                              src={el.imgWebp}
                              alt="Икша Кантри Клаб"
                           />
                        </picture>
                     </div>
                     <div className="mb-[15px] flex justify-center">
                        <div
                           style={{
                              backgroundImage:
                                 "url(/image/events_text_bg.webp)",
                           }}
                           className="back_settings monterey relative flex h-[160px] w-[240px] items-center justify-center text-[12px] text-[#000]"
                        >
                           <ul className="flex flex-col items-center justify-center pl-[15px]">
                              {el.text.map((el, i) => {
                                 return (
                                    <li key={uuidv4()} className="w-[220px]">
                                       - {el}
                                    </li>
                                 )
                              })}
                           </ul>
                        </div>
                     </div>
                     <a
                        // rel="noreferrer"
                        // href="#book"
                        className="flex justify-center pb-[30px]"
                     >
                        <AnimatedButton
                           onClick={togglePopup}
                        //    style={{
                        //       backgroundImage:
                        //          "url(/image/date_button_event.webp)",
                        //    }}
                        //    className="monterey flex h-[70px] w-[205px] items-center justify-center text-[19px] font-bold text-[#000]"
                        >
                           Выбрать дату
                        </AnimatedButton>
                     </a>
                  </div>
               )
            })}
         </Slider>
      </section>
   )
}

export default Events
