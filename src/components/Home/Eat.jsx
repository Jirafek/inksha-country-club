import { m } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import GreenButton from "./../../common/GreenButton"
const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const headingLinesLeft = {
   hidden: {
      opacity: 0,
      right: "400px",
   },
   visible: {
      opacity: 1,
      right: "16px",
      transition: {
         ease: "easeOut",
         duration: 2.5,
      },
   },
}
const headingLinesRight = {
   hidden: {
      opacity: 0,
      left: "300px",
   },
   visible: {
      opacity: 1,
      left: "16px",
      transition: {
         ease: "easeOut",
         duration: 2,
      },
   },
}

const EatListData = [
   {
      img: "/image/fire.webp",
      text: "плов на костре",
      openImage: "/image/plov.webp",
   },
   {
      img: "/image/fish.webp",
      text: "финская уха на костре",
      openImage: "/image/uha.webp",
   },
   {
      img: "/image/cooker.webp",
      text: "шашлык от Шефа",
      openImage: "/image/shah.webp",
   },
]

const Eat = () => {
   const [selectedImage, setSelectedImage] = useState(null)

   const openImage = (image) => {
      setSelectedImage(image)
   }

   const closeImage = () => {
      setSelectedImage(null)
   }

   return (
      <m.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={heading}
         id="eat"
         style={{ backgroundImage: "url(/image/eat_bg.webp)" }}
         className="section happy_background back_settings relative"
      >
         {selectedImage && (
            <div
               className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center"
               style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
               onClick={closeImage}
            >
               <img
                  className="w-[90%] rounded-[30px]"
                  src={selectedImage}
                  alt="Opened Image"
               />
            </div>
         )}
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
               ПИТАНИЕ
            </h2>
         </div>
         <picture>
            <source srcSet="/avif/cook_cooker.avif 1x" type="image/avif" />
            <img
               className="mb-[5px] w-full"
               src="/image/cook_cooker.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
         <div className="mb-[5px] flex justify-center">
            <div
               className="back_settings relative flex h-[255px] w-[350px] flex-col items-center justify-around py-3"
               style={{
                  backgroundImage: "url(/image/cook_frame.webp)",
                  backgroundSize: "auto",
               }}
            >
               <h4 className="monterey  text-[17px]  font-semibold text-[#161212]">
                  МЫ РАДЫ ПРЕДЛОЖИТЬ ВАМ
               </h4>

               <picture>
                  <source srcSet="/avif/ukr1.avif 1x" type="image/avif" />
                  <img
                     className="absolute left-[110px] top-[45px] z-10"
                     src="/image/ukr1.webp"
                     alt="Икша Кантри Клаб"
                  />
               </picture>

               {EatListData.map((el, i) => (
                  <div
                     key={uuidv4()}
                     className="z-20 flex items-center gap-[5px] self-start pl-7"
                     onClick={() => openImage(el.openImage)}
                  >
                     <div
                        style={{
                           backgroundImage: `url(${el.img})`,
                           backgroundPosition: "center",
                           backgroundRepeat: "no-repeat",
                        }}
                        className="h-[60px] w-[60px]"
                     ></div>
                     <p className="monterey text-[17px] text-[#161212] underline">
                        {el.text}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex justify-center pb-[66px]">
            <div
               style={{
                  backgroundColor: "rgba(166, 143, 129, 0.72)",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
               }}
               className="relative flex h-[105px] w-full max-w-[360px] flex-col items-center justify-center rounded-[50px] border border-white py-[10px]"
            >
               <p className="monterey w-[300px] text-center text-[17px] text-white">
                  Также мы готовы организовать для вас кейтеринг !
               </p>

               <picture>
                  <source srcSet="/avif/bulk.avif 1x" type="image/avif" />
                  <img
                     className="absolute bottom-[14px] right-[10px]"
                     src="/image/bulk.webp"
                     alt="Икша Кантри Клаб"
                  />
               </picture>

               <Link to="/keitering">
                  <GreenButton
                  //  style={{ backgroundColor: "rgba(230, 234, 41, 0.60)" }}
                  //  className="h-[33px] w-[185px] rounded-[10px] border-[2px] border-[#645A53] backdrop-blur-[1px]"
                  >
                     Подробнее
                  </GreenButton>
               </Link>
            </div>
         </div>
         <picture>
            <source srcSet="/avif/chair_left.avif 1x" type="image/avif" />
            <m.img
               className="absolute bottom-0 left-4"
               variants={headingLinesRight}
               src="/image/chair_left.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
         <picture>
            <source srcSet="/avif/chair_right.avif 1x" type="image/avif" />
            <m.img
               className="absolute -bottom-[65px] right-4 z-10"
               variants={headingLinesLeft}
               src="/image/chair_right.webp"
               alt="Икша Кантри Клаб"
            />
         </picture>
      </m.section>
   )
}

export default Eat
