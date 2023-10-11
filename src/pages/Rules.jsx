import React from "react";
import { Link } from "react-router-dom";
import FixedFuter from "../components/Home/FixedFuter";
import { Helmet } from "react-helmet";
import GreenButton from "./../common/GreenButton";

const Rules = (props) => {
   const { title, isNeedButton, isNeedPadding, text } = props;

   return (
      <>
         <Helmet>
            <title>
               Отдых в Подмосковье на берегу Икшинского водохранилища - Посетите
               Икша Кантри Клаб
            </title>
            <meta
               name="description"
               content="Отдых в Подмосковье с Икша Кантри Клаб - Посетите наш загородный клуб. У нас есть Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Проведите выходные на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Отдых в Подмосковье на берегу Икшинского водохранилища - Посетите Икша Кантри Клаб"
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <section
            className="back_settings relative"
            style={{ backgroundImage: "url(/image/h_bg1.webp)" }}
         >
            <div className="flex justify-center">
               <div
                  className="back_settings monterey relative flex h-[68px] w-[340px] items-center justify-center text-center text-[14px] font-extrabold text-white"
                  style={{ backgroundImage: "url(/image/politics_bg.webp)" }}
               >
                  {title}
               </div>
            </div>
            {isNeedButton && (
               <div className="flex justify-center">
                  <GreenButton
                     className="relative my-2 flex h-[54px] w-[252px] items-center justify-center border-[1.7px] text-[18px] font-semibold"
                     //  style={{
                     //     backgroundImage: "url(/image/title_bg_rules.webp)",
                     //  }}
                  >
                     Наши правила
                  </GreenButton>
               </div>
            )}
            <div className="flex justify-center">
               <div
                  className="back_settings relative flex h-[530px] w-[350px] items-center justify-center pt-7"
                  style={
                     isNeedPadding
                        ? {
                             backgroundImage:
                                "url(/image/text_layer_rules.webp)",
                             padding: "28px 50px 15px 50px",
                          }
                        : {
                             backgroundImage:
                                "url(/image/text_layer_rules.webp)",
                             padding: "28px 13px 15px 13px",
                          }
                  }
               >
                  <div
                     style={!isNeedPadding ? { fontSize: "14px" } : {}}
                     className="monterey h-full w-full overflow-y-auto text-center"
                  >
                     {text}
                  </div>
               </div>
            </div>
            <div
               style={
                  isNeedPadding
                     ? { paddingBottom: "3rem" }
                     : { paddingBottom: "8rem" }
               }
               className="monterey flex flex-col px-[15px]"
            >
               <p className="text-[12px]">
                  Присоединяйтесь к нам в социальных сетях:
               </p>
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <a
                        className="mr-[6px]"
                        href="https://vk.com/ikshacountryclub"
                        rel="noreferrer"
                     >
                        <picture>
                           <source
                              srcSet="/avif/vk.avif 1x"
                              type="image/avif"
                           />
                           <img
                              src="/image/vk.webp"
                              alt="Загородный клуб Икша Кантри Клаб - ВКонтакте"
                           />
                        </picture>
                     </a>
                     <a
                        href="https://www.instagram.com/ikshacountryclub"
                        rel="noreferrer"
                     >
                        <picture>
                           <source
                              srcSet="/avif/inst.avif 1x"
                              type="image/avif"
                           />
                           <img
                              src="/image/inst.webp"
                              alt="Загородный клуб Икша Кантри Клаб - Инстаграм"
                           />
                        </picture>
                     </a>
                     <a
                        href="https://www.youtube.com/@ikshacountryclub"
                        rel="noreferrer"
                     >
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
                  <Link to="/#book">
                     <picture>
                        <source
                           srcSet="/avif/low_bron.avif 1x"
                           type="image/avif"
                        />
                        <img
                           src="/image/low_bron.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </Link>
               </div>
               <p className="pb-5 text-center text-[12px]">
                  "Икша Кантри Клаб" | Все права защищены Copyright © 2023 Икша
                  Кантри Клаб
               </p>
            </div>
            <FixedFuter link="/#contacts" needRotate={true} />
         </section>
      </>
   );
};

export default Rules;
