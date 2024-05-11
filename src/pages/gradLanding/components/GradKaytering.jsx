import React, { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Lightbox from "common/Lightbox"
import Button from "common/Button"

import s from './../grad.module.scss'

import kay1 from "images/korpLanding/kayt/1.webp"
import transline from "images/korpLanding/transline.png"
import trans5 from "images/korpLanding/trans5.png"
import menu1 from "images/korpLanding/menu/001.webp"
import menu2 from "images/korpLanding/menu/002.webp"
import menu3 from "images/korpLanding/menu/003.webp"
import menu4 from "images/korpLanding/menu/004.webp"
import menu5 from "images/korpLanding/menu/005.webp"
import menu6 from "images/korpLanding/menu/006.webp"
import menu7 from "images/korpLanding/menu/007.webp"
import menu8 from "images/korpLanding/menu/008.webp"
import { useTranslation } from 'react-i18next'

const menus = [
   { img: menu1 },
   { img: menu2 },
   { img: menu3 },
   { img: menu4 },
   { img: menu5 },
   { img: menu6 },
   { img: menu7 },
   { img: menu8 },
]

const GradKaytering = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const { t } = useTranslation() // Initialize your translation library here

   return (
      <AnimatePresence>
         <div id="kay" className="bg-white relative">
            {isMenuOpen && <Lightbox toggleMenu={toggleMenu} items={menus} />}

            <div className="wrapper py-[8vh]">
               <h1 className="text-lg mb-[50px]  text-GradPurple font-bold text-center">
                  {t('kayt.heading')}
               </h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <img src={kay1} alt="" />
                  <div className="flex flex-col  justify-center gap-10">
                     <p className="text-BirthDarkPurple  text-center text-md ">
                        {t('kayt.description')}
                     </p>
                     <div className={` ${s.kaytering_blockBg} bg-GradPurple text-white flex flex-col justify-center items-center h-[200px] rounded-[22px] p-5`}>
                        <div className="text-md font-[600] text-white text-center">
                           {t('kayt.selectDishes')}
                        </div>
                        <Button
                           onClick={toggleMenu}
                           className="bg-BirthPurple  montserrat mt-4 text-md  h-[60px] text-white w-full"
                        >
                           {t('kayt.viewMenu')}
                        </Button>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </AnimatePresence>
   )
}

export default GradKaytering
