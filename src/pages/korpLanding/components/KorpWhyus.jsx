import trans2 from "images/korpLanding/trans2.png";
import why1 from "images/korpLanding/whyus/1.png";
import why2 from "images/korpLanding/whyus/2.png";
import why3 from "images/korpLanding/whyus/3.png";
import why4 from "images/korpLanding/whyus/4.png";

const whyusmap = [
   {
      img: why1,
      text: "Большие локации площадью 50 кв.м. с уютной верандой и зоной отдыха",
   },
   {
      img: why2,
      text: "Русская баня с панорамным видом, где вы можете расслабиться после долгих прогулок",
   },
   {
      img: why3,
      text: "Комфортабельные, уединеннные домики,оборудованные всем необходимым",
   },
   {
      img: why4,
      text: "Велосипеды, лыжи, коньки и спорт-оборудование позволит Вам активно провести время на свежем воздухе",
   },
];

const Whyus = () => {
   return (
      <div
         id="whyus"
         className="relative bg-brown pb-[6%] pt-[20vh] md:pt-[25vh] lg:pt-[20vh] s  "
      >
         <div className="wrapper">
            <div className="text-center">
               <h1 className="mb-[1em] text-lg text-white">
                  Почему Нас Выбирают
               </h1>
               <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                  {whyusmap.map((item, i) => {
                     return (
                        <div
                           className="items col-span-1 flex flex-col items-center justify-center gap-5 place-self-start"
                           key={i}
                        >
                           <img
                              className="whyus_img aspect-square h-[120px] w-[120px]  md:h-[180px] md:w-[168px]"
                              src={item.img}
                           />
                           <div className="text-sm">{item.text}</div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
         <img className="absolute w-full object-cover" src={trans2} alt="" />
      </div>
   );
};

export default Whyus;
