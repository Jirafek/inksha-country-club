import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { m } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Navigate } from "react-router-dom";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import FixedFuter from "../components/Home/FixedFuter";
import { Helmet } from "react-helmet";
import { URLData } from "../utils/URLData";
import InputMask from "react-input-mask";
const images = [
   {
      imgAvif: "/avif/korp_bania.avif",
      imgWebp: "/image/korp_bania.webp",
      text: "Растопка бани и купели",
   },
   {
      imgAvif: "/avif/korp_chill.avif",
      imgWebp: "/image/korp_chill.webp",
      text: "Активный отдых",
   },
   {
      imgAvif: "/avif/korp_riba.avif",
      imgWebp: "/image/korp_riba.webp",
      text: "Рыбалка на пруду",
   },
];

const inputs = ["имя", "телефон", "e-mail"];

const korpGramUrls = {
   webp: "/image/gram_korp.webp",
   avif: "/avif/gram_korp.avif",
};

const Korporativy = () => {
   const [selectedImage, setSelectedImage] = useState(null);

   const openImage = (urls) => {
      setSelectedImage(urls);
   };

   const closeImage = () => {
      setSelectedImage(null);
   };

   const [isLoading, setIsLoading] = useState(false);
   const [navigateState, setNavigateState] = useState(false);
   const [currentWindow, setCurrentWindow] = useState(1);
   const {
      register,
      handleSubmit,
      control,
      field,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      setCurrentWindow(2);
      // console.log(data)
   };
   const onSend = async (dataFromForm) => {
      const data = {
         active: dataFromForm["Активный отдых"] ? "Активный отдых" : "",
         bania: dataFromForm["Растопка бани и купели"]
            ? "Растопка бани и купели"
            : "",
         riba: dataFromForm["Рыбалка на пруду"] ? "Рыбалка на пруду" : "",
         dogovor: dataFromForm["dogovor"]
            ? "оформление и оплата договора +10%"
            : "",
         territory: "",
         keyt: "",
         squer: "",
         besedka: "",
         voley: "",
         sap: "",
         shoosh: "",
         karaoke: "",
         name: dataFromForm["имя"],
         phone: dataFromForm["телефон"],
         email: dataFromForm["e-mail"],
      };

      let currentDops = [
         {
            isActive: dataFromForm["Активный отдых"],
            name: "Активный отдых",
         },
         {
            isActive: dataFromForm["Растопка бани и купели"],
            name: "Растопка бани и купели",
         },
         {
            isActive: dataFromForm["Рыбалка на пруду"],
            name: "Рыбалка на пруду",
         },
         {
            isActive: dataFromForm["dogovor"],
            name: "Оформление и оплата договора +10%",
         },
      ];

      currentDops = currentDops.map((el) => {
         if (el.isActive) {
            return el.name;
         }

         return "-";
      });

      currentDops = currentDops.filter((el) => el !== "-").join(", ");

      const sendingData = {
         dops: currentDops,
         name: dataFromForm["имя"],
         phone: dataFromForm["телефон"],
         email: dataFromForm["e-mail"],
         source: "https://mobile.ikshacountryclub.com",
         formType: "Копроративы",
         link: window.location.href,
         ...URLData,
      };

      setCurrentWindow(4);
      setIsLoading(true);

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
            setCurrentWindow(3);

            setTimeout(() => {
               setIsLoading(false);
               setNavigateState(true);
            }, 2000);
         } else {
            alert("Произошла ошибка при отправке данных");
         }
      } catch (error) {
         console.error(error);
         alert("Произошла ошибка при отправке данных");
      }

      // emailjs.send("service_a1dan7b", "template_rmhn4mc", data, "V_IkuqWqNwJlUw72K")
      //     .then((result) => {
      //         setCurrentWindow(3);
      //         setTimeout(() => {
      //             setIsLoading(false);
      //             setNavigateState(true);
      //         }, 2000)
      //     }, (error) => {
      //         alert('Ошибка при отправке формы')
      //     }); // sending to email
   };
   const handleDownload = (url) => {
      window.open(url, "_blank");
   };

   const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
   `;

   return (
      <>
         <Helmet>
            <title>
               Корпоративы в Подмосковье на берегу Икшинского водохранилища -
               Икша Кантри Клаб
            </title>
            <meta
               name="description"
               content="Корпоративы в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть со своей командой и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Корпоративы в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <div>
            {selectedImage && (
               <div
                  className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  onClick={closeImage}
               >
                  <picture>
                     <source
                        srcSet={`${selectedImage.avif} 1x`}
                        type="image/avif"
                     />
                     <img
                        className="w-[90%] rounded-[25px]"
                        src={selectedImage.webp}
                        alt="Икша Кантри Клаб"
                     />
                  </picture>
               </div>
            )}
            {currentWindow === 1 ? (
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ backgroundImage: "url(/image/korp_bg.webp)" }}
                  className="back_settings relative h-[851px]"
               >
                  <div className="m-0 flex flex-col items-center">
                     <picture>
                        <source
                           srcSet="/avif/korp_title.avif 1x"
                           type="image/avif"
                        />
                        <img
                           src="/image/korp_title.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </div>
                  <div
                     className="back_settings mx-auto my-0 flex h-[161px] w-[221px] items-end justify-center"
                     style={{
                        backgroundImage: "url(/image/korp_layer_photo.webp)",
                     }}
                  >
                     {/*<picture>*/}
                     {/*    <source srcSet="/avif/korp_layer_photo.avif 1x" type="image/avif" />*/}
                     {/*    <img src="/image/korp_layer_photo.webp" alt="Икша Кантри Клаб" />*/}
                     {/*</picture>*/}
                     <picture>
                        <source
                           srcSet="/avif/korp_people.avif 1x"
                           type="image/avif"
                        />
                        <img
                           className="mb-[5px]"
                           src="/image/korp_people.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </div>
                  <div>
                     <div className="flex flex-col items-center justify-center px-[30px]">
                        <div
                           style={{
                              backgroundColor: "rgba(255, 255, 255, 0.33)",
                           }}
                           className="flex w-[330px] gap-4 overflow-x-auto rounded-[25px] border-[2px] border-[#B76569] px-3 py-[9px]"
                        >
                           {images.map((el, i) => (
                              <label className="w-[103px]" key={uuidv4()}>
                                 <div className="flex flex-col items-center gap-[3px]">
                                    <picture>
                                       <source
                                          srcSet={`${el.imgAvif} 1x`}
                                          type="image/avif"
                                       />
                                       <img
                                          className="w-[103px]"
                                          src={el.imgWebp}
                                          alt={`Икша Кантри Клаб - ${el.text}`}
                                       />
                                    </picture>

                                    <input
                                       name="dops"
                                       {...register(el.text)}
                                       type="checkbox"
                                    />
                                    <p className="monterey max-w-[110px] text-center text-[11px]">
                                       {el.text}
                                    </p>
                                 </div>
                              </label>
                           ))}
                        </div>
                        <div className="mt-[2px] w-[330px] rounded-[30px] border border-[#B76569] bg-[#EDDEDF] py-[6px]">
                           <label className="flex items-center justify-around">
                              <input
                                 {...register("dogovor")}
                                 name="dogovor"
                                 type="checkbox"
                              />
                              <p className="monterey text-[13px]">
                                 оплата юр.переводом по договору +10%
                              </p>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="absolute right-0 top-[427px]">
                     <button
                        type="button"
                        onClick={() => openImage(korpGramUrls)}
                        className="relative"
                     >
                        <picture>
                           <source
                              srcSet="/avif/gram_korp.avif 1x"
                              type="image/avif"
                           />
                           <img
                              style={{ transform: "translate(-50%)" }}
                              className="absolute left-1/2 top-6 w-[60px]"
                              src="/image/gram_korp.webp"
                              alt="Икша Кантри Клаб"
                           />
                        </picture>

                        <picture>
                           <source
                              srcSet="/avif/ramp_korp.avif 1x"
                              type="image/avif"
                           />
                           <img
                              className="relative z-30"
                              src="/image/ramp_korp.webp"
                              alt="Икша Кантри Клаб"
                           />
                        </picture>
                     </button>
                  </div>
                  <div className="absolute left-0 top-[427px]">
                     <button
                        type="button"
                        onClick={() => handleDownload("/pdf/keyt.pdf")}
                        className="relative"
                     >
                        <picture>
                           <source
                              srcSet="/avif/menu_list.avif 1x"
                              type="image/avif"
                           />
                           <source
                              srcSet="/image/menu_list.webp 1x"
                              type="image/webp"
                           />
                           <img
                              style={{ transform: "translate(-50%)" }}
                              className="absolute left-1/2 top-6 w-[60px]"
                              src="/image/menu_list.jpg"
                              alt="Икша Кантри Клаб"
                           />
                        </picture>

                        <picture>
                           <source
                              srcSet="/avif/ramp_korp.avif 1x"
                              type="image/avif"
                           />
                           <img
                              className="relative z-30"
                              src="/image/ramp_korp.webp"
                              alt="Икша Кантри Клаб"
                           />
                        </picture>
                     </button>
                  </div>
                  <img
                     className="absolute bottom-1 w-full"
                     src="/image/korp_men.webp"
                     alt=""
                  />
                  <button
                     type="submit"
                     style={{ transform: "translateX(-50%)" }}
                     className="absolute bottom-56 left-1/2 w-[260px]"
                  >
                     <picture>
                        <source
                           srcSet="/avif/korp_btn.avif 1x"
                           type="image/avif"
                        />
                        <img
                           src="/image/korp_btn.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </button>
               </form>
            ) : currentWindow === 2 ? (
               <form
                  onSubmit={handleSubmit(onSend)}
                  style={{ backgroundImage: "url(/image/korp_bg2.webp)" }}
                  className="back_settings relative h-[750px]"
               >
                  <div className="m-0 flex flex-col items-center">
                     <picture>
                        <source
                           srcSet="/avif/korp_title.avif 1x"
                           type="image/avif"
                        />
                        <img
                           src="/image/korp_title.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </div>
                  <div className="flex justify-center">
                     <div
                        style={{
                           backgroundImage: "url(/image/korp2_tabl.webp)",
                        }}
                        className="back_settings monterey relative h-[204px] w-[265px] px-[21px] pb-[25px] pt-[55px] text-center text-[22px] font-medium"
                     >
                        Оставьте ваши контакты и наш менеджер свяжется с вами
                     </div>
                  </div>
                  <div className="flex justify-center px-4">
                     <div
                        style={{ backgroundColor: "rgb(255, 233, 233)" }}
                        className="back_settings relative flex w-full flex-col items-center gap-3 rounded-[20px] px-[9px] py-[35px]"
                     >
                        {/* {
                                            inputs.map((el, i) => (
                                                <input key={uuidv4()} placeholder={el} {...register(el, { required: el === 'e-mail' ? false : true })} className="w-full outline-none pl-[17px] py-[6px] leading-normal rounded-[10px] border border-black bg-white" type="text" />
                                            ))
                                        } */}
                        <input
                           key={uuidv4()}
                           {...register("name", {
                              required: true,
                           })}
                           className="w-full rounded-[10px] border border-black bg-white py-[6px] pl-[17px] leading-normal outline-none"
                           type="text"
                           placeholder="имя"
                        />

                        {/* <input
                           key={uuidv4()}
                           {...register("telephone", {
                              required: true,
                           })}
                           placeholder="телефон"
                           name="telephone"
                           className="w-full rounded-[10px] border border-black bg-white py-[6px] pl-[17px] leading-normal outline-none"
                           type="text"
                        /> */}

                        <Controller
                           name="phone"
                           control={control}
                           defaultValue=""
                           render={({ field }) => (
                              <InputMask
                                 mask="+7 (999) 999-99-99"
                                 maskChar="_"
                                 value={field.value}
                                 onChange={field.onChange}
                                 onBlur={field.onBlur}
                              >
                                 {(inputProps) => (
                                    <input
                                       {...inputProps}
                                       //    style={{
                                       //       borderColor: "rgba(0, 0, 0, 0.50)",
                                       //       backgroundColor:
                                       //          "rgba(217, 217, 217, 0.50)",
                                       //    }}
                                       placeholder="телефон"
                                       name="telephone"
                                       className="w-full rounded-[10px] border border-black bg-white py-[6px] pl-[17px] leading-normal outline-none"
                                       type="text"
                                    />
                                 )}
                              </InputMask>
                           )}
                        />

                        <input
                           key={uuidv4()}
                           placeholder="email"
                           {...register("email", {
                              required: true,
                           })}
                           className="w-full rounded-[10px] border border-black bg-white py-[6px] pl-[17px] leading-normal outline-none"
                           type="text"
                           name="email"
                        />
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <button className="w-[338px]">
                        <img
                           src="/image/korp2_btn.webp"
                           alt="Икша Кантри Клаб"
                        />
                     </button>
                  </div>
               </form>
            ) : currentWindow === 3 ? (
               <>
                  {navigateState && <Navigate to="/thanks" />}

                  <picture>
                     <source
                        srcSet="/avif/bron_good.avif 1x"
                        type="image/avif"
                     />
                     <img
                        className="h-[851px]"
                        src="/image/bron_good.webp"
                        alt="Икша Кантри Клаб"
                     />
                  </picture>
               </>
            ) : (
               <div className="flex h-screen items-center justify-center">
                  <RingLoader
                     color={"#123abc"}
                     loading={isLoading}
                     css={override}
                     size={150}
                  />
               </div>
            )}

            <FixedFuter link="/" needRotate={true} />
         </div>
      </>
   );
};

export default Korporativy;
