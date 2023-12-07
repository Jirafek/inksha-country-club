import HappyClickableItemsData from "../../utils/Home/HappyClickableItemsData"
import HappyClickableItems from "./helpers/HappyClickableItems"
const Happy = () => {
   return (
      <section
         id="happy"
         style={{ backgroundImage: "url(/image/bg-happy.webp)" }}
         className="section happy_background back_settings relative"
      >
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
               РАЗВЛЕЧЕНИЯ
            </h2>
         </div>
         <HappyClickableItems arrayData={HappyClickableItemsData} />

         <picture>
            <source srcSet="/avif/wood_translate.avif 1x" type="image/avif" />
            <img
               className="absolute -bottom-5 w-full"
               src="/image/wood_translate.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
      </section>
   )
}

{
   /* <div className="flex justify-center items-center w-[148px] h-[168px]">

<img className="rounded-full" src={el.img} alt="" />
</div> */
}

export default Happy
