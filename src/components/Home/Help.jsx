import React from "react";

const Help = () => {
   return (
      <section
         id="help"
         style={{ backgroundImage: "url(/image/bron_how_bg.webp)" }}
         className="section back_settings flex flex-col items-center justify-center"
      >
         <div className="mt-[35px] flex flex-col items-center justify-center">
            <picture>
               <source
                  srcSet="/avif/bron_textholder.avif 1x"
                  type="image/avif"
               />
               <img src="/image/bron_textholder.webp" alt="Икша Кантри Клаб" />
            </picture>
         </div>
         <div className="flex flex-col items-center">
            <div className="mr-16 flex items-center gap-3">
               <div
                  style={{ backgroundImage: "url(/image/bron_num_bg.webp)" }}
                  className="back_settings monterey flex h-[62px] w-[60px] items-center justify-center text-[20px] font-extrabold text-white"
               >
                  1
               </div>
               <p
                  className="text-[22px] font-semibold text-white"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
               >
                  ЗАПОЛНИ
                  <span className="font-bold underline">
                     {" "}
                     <a href="#book">ФОРМУ</a>
                  </span>
               </p>
            </div>

            <picture>
               <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
               <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
            </picture>

            <div className="mr-16 flex items-center gap-3">
               <div
                  style={{ backgroundImage: "url(/image/bron_num_bg.webp)" }}
                  className="back_settings monterey flex h-[62px] w-[60px] items-center justify-center text-[20px] font-extrabold text-white"
               >
                  2
               </div>
               <p
                  className="text-[22px] font-semibold text-white"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
               >
                  ПРОВЕРЬ ПОЧТУ
               </p>
            </div>

            <picture>
               <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
               <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
            </picture>

            <div className="mr-16 flex items-center gap-3">
               <div
                  style={{ backgroundImage: "url(/image/bron_num_bg.webp)" }}
                  className="back_settings monterey flex h-[62px] w-[60px] items-center justify-center text-[20px] font-extrabold text-white"
               >
                  3
               </div>
               <p
                  className="text-[22px] font-semibold text-white"
                  style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
               >
                  ОПЛАТИ
               </p>
            </div>

            <picture>
               <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
               <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
            </picture>
            <a href="#book">
               <picture>
                  <source srcSet="/avif/bron_ok.avif 1x" type="image/avif" />
                  <img src="/image/bron_ok.webp" alt="Икша Кантри Клаб" />
               </picture>
            </a>

            <p
               style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
               className="w-[290px] pb-20 text-center text-[19px] font-extrabold text-white"
            >
               ОЖИДАЙ ЗВОНКА ОТ ОПЕРАТОРА
            </p>
         </div>
      </section>
   );
};

export default Help;
