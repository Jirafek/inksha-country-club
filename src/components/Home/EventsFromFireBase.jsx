import React from "react";
import { v4 as uuidv4 } from "uuid";
import { m } from "framer-motion";
import GreenButton from "./../../common/GreenButton";

const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
};

const sky1 = {
   hidden: {
      opacity: 1,
      // transform: 'translateX(0)'
      x: 0,
   },
   visible: {
      opacity: 0,
      // transform: 'translateX(-400px)',
      x: -400,
      transition: {
         ease: "easeOut",
         duration: 4,
      },
   },
};

const sky2 = {
   hidden: {
      opacity: 1,
      x: 0,
   },
   visible: {
      opacity: 0,
      x: 400,
      transition: {
         ease: "easeOut",
         duration: 4,
      },
   },
};

const sky3 = {
   hidden: {
      opacity: 1,
      x: 100,
   },
   visible: {
      opacity: 0,
      x: -400,
      transition: {
         ease: "easeOut",
         duration: 4,
      },
   },
};

const sky4 = {
   hidden: {
      opacity: 1,
      x: 200,
   },
   visible: {
      opacity: 0,
      x: 200,
      transition: {
         ease: "easeOut",
         duration: 4,
      },
   },
};

const fireBaseData = [
   {
      imgWebp: "/image/events_fire1.webp",
      imgAvif: "/avif/events_fire1.avif",
      link: "",
      title: "День настольных игр",
      date: "15.04.2023",
   },
   {
      imgWebp: "/image/events_fire2.webp",
      imgAvif: "/avif/events_fire2.avif",
      link: "",
      title: "Мастер класс «Sup-Board для новичков»",
      date: "23.06.2023",
   },
   {
      imgWebp: "/image/events_fire3.webp",
      imgAvif: "/avif/events_fire3.avif",
      link: "",
      title: "Фестиваль лимонада",
      date: "19.08.2023",
   },
   {
      imgWebp: "/src/assets/bg.jpg",
      imgAvif: "/avif/events_fire3.avif",
      link: "/halloween",
      title: "Хеллоуин",
      date: "28.10.2023",
   },
];

const EventsFromFireBase = () => {
   return (
      <m.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={heading}
         id="blog"
         style={{
            backgroundImage: "url(/image/bg-eve.webp)",
            overflowX: "hidden",
         }}
         className="section back_settings relative min-h-[500px] pb-4"
      >
         <div className="relative z-10 mb-4 flex h-[90px] flex-col items-center justify-center">
            <picture>
               <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
               <img
                  className="left-50% absolute top-0 translate-x-[-50%]"
                  src="/image/titles_bg.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>

            <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
               СОБЫТИЯ
            </h2>
         </div>
         <div>
            <picture>
               <source srcSet="/avif/events_sky1.avif 1x" type="image/avif" />
               <m.img
                  variants={sky1}
                  className="absolute -top-[60px] left-0"
                  src="/image/events_sky1.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <picture>
               <source srcSet="/avif/events_sky2.avif 1x" type="image/avif" />
               <m.img
                  variants={sky2}
                  className="absolute -top-[60px] right-0"
                  src="/image/events_sky2.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <picture>
               <source srcSet="/avif/events_sky3.avif 1x" type="image/avif" />
               <m.img
                  variants={sky3}
                  className="absolute -top-[60px] left-[100px]"
                  src="/image/events_sky3.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <picture>
               <source srcSet="/avif/events_sky3.avif 1x" type="image/avif" />
               <m.img
                  variants={sky4}
                  className="absolute -top-[20px] right-[40px]"
                  src="/image/events_sky3.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
         </div>
         <div className="flex flex-wrap justify-center gap-x-6 gap-y-[30px] overflow-hidden">
            {fireBaseData.map((el, i) => (
               <div key={uuidv4()} className="flex flex-col items-center">
                  <div className="mb-[10px] flex flex-col items-center">
                     <div className="mb-1 flex min-h-[50px] w-[150px] items-center justify-center rounded-[10px] border border-[#765947] bg-[#EAD3B5]">
                        <p className="monterey px-[5px] py-[8px] text-center text-[11px] font-bold text-black">
                           {el.title}
                        </p>
                     </div>
                     <picture>
                        <source srcSet={`${el.imgAvif} 1x`} type="image/avif" />
                        <img
                           className="aspect-square w-[150px] rounded-xl border-[3px] border-[#7C684E] object-cover"
                           style={{
                              boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.50)",
                           }}
                           src={el.imgWebp}
                           alt="Икша Кантри Клаб"
                        />
                     </picture>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                     <div className="mb-1 flex w-[120px] items-center justify-center rounded-[10px] border border-[#765947] bg-white">
                        <p className="monterey px-[40px] py-[10px] text-[13px] text-black">
                           {el.date}
                        </p>
                     </div>
                     <a rel="noreferrer" href={el.link} className="">
                        <GreenButton className="max-w-[140px]">
                           Подробнее
                        </GreenButton>
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </m.section>
   );
};

export default EventsFromFireBase;
