import React, { useState } from "react";
import GreenButton from "./../../common/GreenButton";
const Spec = () => {
   const [currentBg, setCurrentBg] = useState("spec_bg.webp");

   const handleChangeImage = () => {
      setCurrentBg(currentBg.includes("2") ? "spec_bg.webp" : "spec_bg2.webp");
   };

   return (
      <section
         id="spec"
         style={{ backgroundImage: `url(/image/${currentBg})` }}
         className="section back_settings relative h-[850px] transition-all duration-300 ease-in"
      >
         <button
            onClick={handleChangeImage}
            style={
               currentBg.includes("2") ? { opacity: "1" } : { opacity: "0" }
            }
            className="absolute right-[15px] top-[30px] z-30 transition-all duration-300"
         >
            <picture>
               <source srcSet="/avif/close_btn.avif 1x" type="image/avif" />
               <img src="/image/close_btn.webp" alt="Икша Кантри Клаб" />
            </picture>
         </button>
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
               СПЕЦПРЕДЛОЖЕНИЯ
            </h2>
         </div>
         <div className=" mb-[80px] flex justify-center">
            <p className="monterey mt-[30px] w-[230px] text-center text-[18px] text-[#000]">
               ДАРИМ ИМЕНИННИКУ САП-ДОСКУ
            </p>
         </div>
         <div className="flex max-w-[200px] flex-col gap-5  text-center">
            <div
               style={
                  currentBg.includes("2") ? { opacity: "1" } : { opacity: "0" }
               }
               className="mx-auto ml-[15px] flex items-center transition-all duration-300"
            >
               <picture>
                  <source srcSet="/avif/cake.avif 1x" type="image/avif" />
                  <img src="/image/cake.webp" alt="Икша Кантри Клаб" />
               </picture>

               <p className="w-[157px] text-center">
                  Дарим Сап-доску именнинику на время заезда
               </p>

               <picture>
                  <source srcSet="/avif/cake.avif 1x" type="image/avif" />
                  <img src="/image/cake.webp" alt="Икша Кантри Клаб" />
               </picture>
            </div>
            <GreenButton
               onClick={handleChangeImage}
               className="mx-auto h-[40px] w-[180px]"
            >
               Подробнее
            </GreenButton>
         </div>
      </section>
   );
};

export default Spec;
