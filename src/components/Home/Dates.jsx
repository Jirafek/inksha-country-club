import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import GreenButton from "./../../common/GreenButton";
import AnimationButton from "./../../common/AnimationButton";

// GEt data from firebase

const imageData = [
   {
      avif: "/avif/dates_people_photo.avif",
      webp: "/image/dates_people_photo.webp",
   },
   {
      avif: "/avif/dates_people_photo2.avif",
      webp: "/image/dates_people_photo2.webp",
   },
   {
      avif: "/avif/dates_people_photo3.avif",
      webp: "/image/dates_people_photo3.webp",
   },
   {
      avif: "/avif/dates_people_photo4.avif",
      webp: "/image/dates_people_photo4.webp",
   },
   {
      avif: "/avif/dates_people_photo5.avif",
      webp: "/image/dates_people_photo5.webp",
   },
   {
      avif: "/avif/dates_people_photo6.avif",
      webp: "/image/dates_people_photo6.webp",
   },
];

const Dates = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
   };
   return (
      <section
         id="dates"
         style={{ backgroundImage: "url(/image/dates_bg.webp)" }}
         className="section back_settings relative"
      >
         <div className="relative flex h-[90px] flex-col items-center justify-center">
            <picture>
               <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
               <img
                  className="left-50% absolute top-0 translate-x-[-50%]"
                  src="/image/titles_bg.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
               СВИДАНИЯ НА БЕРЕГУ
            </h2>
         </div>
         <div className="mb-3 flex justify-center">
            <img className="heart" src="/image/heart_dates.webp" alt="" />
         </div>

         <div className="mb-3 flex justify-center">
            <div
               style={{ backgroundImage: "url(/image/dates_test_bg.webp)" }}
               className="back_settings monterey h-[152px] w-[313px] px-[18px] py-3 text-center text-[14px] font-medium"
            >
               Романтическая атмосфера, закат на воде, ужин при свечах и рассвет
               над кронами деревьев, именно так и должно выглядеть идеальное
               свидание, и вы знаете где его провести.
            </div>
         </div>
         <Slider className="mb-[30px]" {...settings}>
            {imageData.map(({ webp, avif }, i) => (
               <div key={uuidv4()} className="flex justify-center">
                  <div className="relative flex justify-center">
                     <div
                        style={{
                           backgroundImage: "url(/image/dates_photo_cup.webp)",
                        }}
                        className="back_settings z-20 flex h-[210px] w-[330px] items-center justify-center"
                     ></div>

                     <picture>
                        <source srcSet={`${avif} 1x`} type="image/avif" />
                        <img
                           style={{
                              transform: "translateX(-50%) translateY(-50%)",
                           }}
                           className="absolute left-1/2 top-1/2 w-[310px]"
                           src={webp}
                           alt="Икша Кантри Клаб - Свидания"
                        />
                     </picture>
                  </div>
               </div>
            ))}
         </Slider>
         <div className="flex flex-col items-center justify-center gap-5">
            <Link to="/choose-date" className="flex justify-center">
               <GreenButton
               //    style={{ backgroundImage: "url(/image/choose_date.webp)" }}
               //    className="back_settings h-[70px] w-[205px]"
               >
                  Выбрать дату
               </GreenButton>
            </Link>
            <a href="#book" className="mb-7">
               <AnimationButton>
                  Забронировать
                  <br /> отдых
               </AnimationButton>
            </a>
         </div>
      </section>
   );
};

export default Dates;
