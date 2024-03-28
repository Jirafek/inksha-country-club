import loc1 from "images/korpLanding/locations/003.webp"
import loc2 from "images/korpLanding/locations/001.webp"
import loc3 from "images/korpLanding/locations/002.webp"
import loc4 from "images/korpLanding/locations/004.webp"
import longarrow from "icons/longbrownarrow.png"
import brownarrow from "icons/brownarrow.png"
import Button from "common/Button"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import { getLocation } from 'constants/locations'

import map from 'images/fishing/map.webp'

const getLocations = () => {
   const { t } = useTranslation()
   const locations = [
      {
         title: t('korplocations.forestResidence'),
         people: t('korplocations.upTo30People'),
         price: t('korplocations.from15000Rubles'),
         img: loc1,
         link: "/location/1",
      },
      {
         title: t('korplocations.cottage'),
         people: t('korplocations.upTo30People'),
         price: t('korplocations.from15000Rubles'),
         img: loc2,
         link: "/location/2",
      },
      {
         title: t('korplocations.chalet'),
         people: t('korplocations.upTo30People'),
         price: t('korplocations.from15000Rubles'),
         img: loc3,
         link: "/location/3",
      },
      {
         title: t('korplocations.olympicVillage'),
         people: t('korplocations.upTo30People'),
         price: t('korplocations.from15000Rubles'),
         img: loc4,
         link: "/location/4",
      },
   ]
   return locations
}
const BirthLocations = () => {
   const { t } = useTranslation()

   return (
      <div id="locations" className="bg-BirthLightPurple py-[70px]">
         <h1 className="text-center font-[700] pb-[30px] text-BirthDarkPurple  mx-auto text-lg">{t('korplocations.title')}</h1>

         <img className='w-full min-h-[500px] h-full object-left md:object-center object-cover' src={map} alt="" />

         <div className="wrapper  pt-[10vh]">


            {/* <h2 className="text-center font-bold text-36px mb-10">
               {t('korplocations.weHaveLocations')}{" "}
               <span className="text-white">{t('korplocations.especiallyForYou')}</span>
            </h2> */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
               {getLocation().map((loc, i) => {
                  return (
                     <Link
                        to={loc.link}
                        className="flex gap-[10px]  md:gap-[20px] md:max-h-[216px] max-w-[500px]  md:max-w-[580px]  rounded-[19px] bg-white"
                        key={i}
                     >
                        <img
                           className="  w-[100px] sm:w-[130px]  md:w-auto md:h-auto"
                           src={loc.img}
                           alt=""
                        />
                        <div className="flex flex-col justify-between    py-5">
                           <div className="text-md font-bold text-BirthDarkPurple">
                              {loc.title}
                           </div>
                           <div className="flex items-center  gap-5 text-sm font-bold text-BirthDarkPurple">
                              <div className="flex flex-col gap-5">
                                 <div>{loc.people}</div>
                                 <div>{loc.price}</div>
                              </div>
                              <img
                                 className="w-7 md:max-w-[120px] lg:w-[100px] pr-1"
                                 src={longarrow}
                                 alt=""
                              />
                           </div>
                        </div>
                     </Link>
                  )
               })}
            </div>
            <a href="#form">
               <Button className="bg-white bg-opacity-70 w-auto h-[40px] text-md+ md:h-[60px] gap-10 md:min-w-[600px]   mx-auto montserrat z-20 text-black">
                  {t('korplocations.learnMore')}

               </Button>
            </a>
         </div>
      </div>
   )
}

export default BirthLocations
