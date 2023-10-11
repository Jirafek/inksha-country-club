import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import {
   CustomNextArrow,
   CustomPrevArrow,
} from "../components/Home/helpers/CustomEventArrows";
import FixedFuter from "../components/Home/FixedFuter";
import { Helmet } from "react-helmet";
import GreenButton from "./../common/GreenButton";
const sliderData = [
   {
      bgAvif: "/avif/h_bg4.avif",
      bgWebp: "/image/h_bg4.webp",
      imgAvif: "/avif/h_4.avif",
      imgWebp: "/image/h_4.webp",
      text: "",
      height: "545px",
   },
   {
      bgAvif: "/avif/h_bg3.avif",
      bgWebp: "/image/h_bg3.webp",
      imgAvif: "/avif/h_3.avif",
      imgWebp: "/image/h_3.webp",
      title: "ВИДЫ АКТИВНОГО ОТДЫХА",
      text: [
         "велосипед, квадроцикл",
         "катер, гидроцикл, лодка",
         "волейбол, футбол, бадминтон",
      ],
      height: "356px",
   },
   {
      bgAvif: "/avif/h_bg1.avif",
      bgWebp: "/image/h_bg1.webp",
      imgAvif: "/avif/h_1.avif",
      imgWebp: "/image/h_1.webp",
      text: "Баня и спа: Единение с природой, сочетание русских традиций и современного подхода к уходу за собой. Мы умеем сочетать несочетаемое и создавать незабываемое",
      height: "306px",
   },
   {
      bgAvif: "/avif/h_bg2.avif",
      bgWebp: "/image/h_bg2.webp",
      imgAvif: "/avif/h_2.avif",
      imgWebp: "/image/h_2.webp",
      text: "Если вы любите рыбалку, Икша Кантри Клаб - прекрасное место для вас. Водохранилище и форелевый пруд на территории вас приятно удивят.",
      height: "316px",
   },
];

const HappySlider = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomNextArrow isBottom="30.5%" />,
      prevArrow: <CustomPrevArrow isBottom="30.5%" />,
   };

   return (
      <>
         <Helmet>
            <title>
               Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА,
               водные виды спорта.{" "}
            </title>
            <meta
               name="description"
               content="Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами.  Уютные домики, Шашлыки, красивые закаты. Выбирайте свой незабываемый отдых недалеко от Москвы"
            />
            <meta
               name="title"
               content="Отдых в Подмосковье с Икша Кантри Клаб - Рыбалка, Баня и СПА, водные виды спорта на Икшинском водохранилище."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <section className="relative h-[851px]">
            <a
               href="https://bronirui-online.ru/iksha-country-club/uslugi"
               rel="noreferrer"
               //    style={{
               //       backgroundImage: "url(/image/h_btn_layer.webp)",
               //    }}
               //    className="absolute left-1/2 -translate-x-[-50%] transform"
            >
               <GreenButton className="back_settings absolute bottom-[30%]  left-1/2 z-[1000] -translate-x-1/2 transform text-center">
                  Выбрать услугу
               </GreenButton>
            </a>
            <Slider {...settings}>
               {sliderData.map((el, i) => (
                  <div className="relative h-screen pb-[40px]" key={uuidv4()}>
                     <picture>
                        <source srcSet={`${el.bgAvif} 1x`} type="image/avif" />
                        <img
                           className="absolute top-0 h-full w-full"
                           src={el.bgWebp}
                           alt="Икша Кантри Клаб"
                        />
                     </picture>

                     <div
                        style={{ transform: "translateX(-50%)" }}
                        className="absolute left-1/2 z-20 flex h-[90px] w-full flex-col items-center justify-center"
                     >
                        <picture>
                           <source
                              srcSet="/avif/titles_bg.avif"
                              type="image/avif"
                           />
                           <img
                              className="left-50% absolute top-0 translate-x-[-50%]"
                              src="/image/titles_bg.webp"
                              alt="Икша Кантри Клаб"
                           />
                        </picture>

                        <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
                           РАЗВЛЕЧЕНИЯ
                        </h2>
                     </div>
                     <picture>
                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                        <img
                           className="relative z-10 mx-auto my-0 mb-0"
                           src={el.imgWebp}
                           alt="Икша Кантри Клаб"
                        />
                     </picture>

                     <div className="relative z-10 mb-7 flex justify-center px-[10px]">
                        <div
                           style={
                              i === 0
                                 ? {
                                      display: "none",
                                      backgroundColor:
                                         "rgba(245, 236, 236, 0.44)",
                                   }
                                 : {
                                      display: "flex",
                                      backgroundColor:
                                         "rgba(245, 236, 236, 0.44)",
                                   }
                           }
                           className="flex items-center justify-center rounded-[10px] border border-[#000] px-2 pb-5 pt-[10px]"
                        >
                           {i >= 2 ? (
                              <p className="monterey text-center text-[14px]">
                                 {el.text}
                              </p>
                           ) : i === 1 ? (
                              <div className="flex flex-col items-start">
                                 <p className="monterey self-center font-extrabold">
                                    {el.title}
                                 </p>
                                 {el.text.map((textItem, index) => (
                                    <div
                                       className="flex items-center gap-1"
                                       key={textItem}
                                    >
                                       <div className="h-[15px] w-[15px] rounded-full bg-white"></div>
                                       <p className="text-[15px]">{textItem}</p>
                                    </div>
                                 ))}
                              </div>
                           ) : (
                              ""
                           )}
                        </div>
                     </div>
                     {/* <div className="relative flex h-[100px] w-screen items-center justify-center gap-2">
                
                     </div> */}
                  </div>
               ))}
            </Slider>
            <FixedFuter link="/#happy" needRotate={true} />
         </section>
      </>
   );
};

export default HappySlider;
