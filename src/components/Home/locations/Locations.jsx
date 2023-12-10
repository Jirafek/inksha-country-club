import { useState } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import { isItWinterNow } from "utils/helpers"
import AnimationButton from "../../../common/AnimationButton"
import GreenButton from "../../../common/GreenButton"
import LocationPopup from "../../../common/LocationPopup"

import { SlickComponent } from './SlickComponent'
const heading = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.15,
      },
   },
}

const headingLinesOpacity = {
   hidden: {
      opacity: 0,
      // clipPath: 'inset(100% 0px 0px)',
   },
   visible: {
      opacity: 1,
      // clipPath: 'inset(0% 0px 0px)',
      transition: {
         ease: "easeOut",
         duration: 1,
      },
   },
}



import rez1 from 'images/locations/rezyd/001.webp'
import rez2 from 'images/locations/rezyd/002.webp'
import rez3 from 'images/locations/rezyd/003.webp'
import rez4 from 'images/locations1.webp'

import cot1 from 'images/locations/cottage/002.webp'
import cot2 from 'images/locations/cottage/003.webp'
import cot3 from 'images/locations3.webp'

import shal1 from 'images/locations/shale/001.webp'
import shal2 from 'images/locations/shale/002.webp'
import shal3 from 'images/locations/shale/003.webp'
import shal4 from 'images/locations2.webp'

import ol1 from 'images/locations/olympic/001.webp'
import ol2 from 'images/locations/olympic/002.webp'
import ol3 from 'images/locations/olympic/003.webp'
import ol4 from 'images/locations/olympic/004.webp'
import ol5 from 'images/locations4.webp'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const sliderData = [
   // get images from FireBase
   {

      title: "ЛЕСНАЯ РЕЗИДЕНЦИЯ",
      people: "до 30 человек",
      money: "от 10,000 Р",
      link: "/locations/1",
      imagesForSwiper: [
         { img: rez4 },
         { img: rez1 },
         { img: rez2 },
         { img: rez3 }
      ]
   },
   {

      title: "ШАЛЕ",
      people: "до 30 человек",
      money: "от 10,000 Р",
      link: "/locations/2",
      imagesForSwiper: [
         { img: shal4 },
         { img: shal1 },
         { img: shal2 },
         { img: shal3 }
      ]
   },
   {

      title: "КОТТЕДЖ",
      people: "до 10 человек",
      money: "от 10,000 Р",
      link: "/locations/3",
      imagesForSwiper: [
         { img: cot3 },
         { img: cot1 },
         { img: cot2 },

      ]
   },
   {

      title: "ОЛИМПИЙСКАЯ ДЕРЕВНЯ",
      people: "до 30 человек",
      money: "от 10,000 Р",
      link: "/locations/4",
      imagesForSwiper: [
         { img: ol5 },
         { img: ol1 },
         { img: ol2 },
         { img: ol3 },
         { img: ol4 },
      ]
   },
]

const Locations = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false)
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnFocus: true,

      // nextArrow: <CustomNextArrow />,
      // prevArrow: <CustomPrevArrow />,
   }

   return (
      <div
         id="locations"
         style={{ backgroundImage: `url('/image/bg_burger${isItWinterNow()}.webp')` }}
         className="section about_background back_settings relative"
      >
         <LocationPopup togglePopup={togglePopup} isPopupOpen={isPopupOpen} />
         <div className="relative z-10 flex h-[90px] flex-col items-center justify-center pt-[4.5rem]">
            <picture>
               <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
               <img
                  className="left-50% absolute top-8 translate-x-[-50%]"
                  src="/image/titles_bg.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <h2 className="z-10 mt-1 text-[20px] font-bold text-white">
               ЛОКАЦИИ
            </h2>
         </div>

         <Slider className="mt-[35px]" {...settings}>
            {sliderData.map((el, i) => {
               return (
                  <div key={i}>

                     <SlickComponent el={el} i={i} />
                  </div>
               )

            })}
         </Slider>
         <div className=" z-[1] flex  flex-col items-center justify-center gap-5 pb-[65px]">
            <Link to="/locations-about">
               <GreenButton className="h-[40px] w-[187px]">
                  Подробнее
               </GreenButton>
            </Link>
            <AnimationButton onClick={togglePopup} className="mx-auto ">
               Узнать стоимость
            </AnimationButton>
         </div>
         {!isItWinterNow() && <div className="absolute -bottom-[10px] w-full">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="100%"
               height="100%"
               viewBox="0 0 390 71"
               fill="none"
            >
               <g filter="url(#filter0_f_1265_3283)">
                  <path
                     d="M0.582372 7.39923L-1.19786 66.3415L391.985 66.6689C392.601 66.6695 393.071 66.1181 392.973 65.5098L383.891 9.1645C383.716 8.07899 382.173 8.02986 381.929 9.10205L373.787 44.9343C373.57 45.8883 372.254 45.9956 371.885 45.0893L361.943 20.633C361.675 19.9736 360.823 19.7975 360.315 20.2965L339.58 40.6807C339.008 41.2431 338.039 40.9367 337.895 40.1475L332.822 12.4197C332.639 11.422 331.259 11.2985 330.902 12.2481L317.303 48.4544C316.995 49.2727 315.86 49.3306 315.471 48.5478L299.181 15.7682C298.801 15.0021 297.696 15.0367 297.364 15.8252L290.117 33.0395C289.771 33.8604 288.605 33.8539 288.269 33.0292L280.23 13.3218C279.88 12.4654 278.655 12.5015 278.357 13.377L272.169 31.5395C271.867 32.4254 270.623 32.4483 270.289 31.5741L264.233 15.735C263.935 14.9559 262.87 14.8624 262.441 15.5777L244.846 44.9115C244.324 45.7813 242.988 45.4114 242.988 44.3971V12.5553C242.988 11.7905 242.165 11.3088 241.498 11.6836L200.57 34.6982C200.07 34.9794 199.436 34.783 199.183 34.2683L184.971 5.40846C184.659 4.77395 183.804 4.65546 183.331 5.18101L157.018 34.3974C156.619 34.8401 155.924 34.8382 155.528 34.3932L131.601 7.51992C130.99 6.83347 129.854 7.26579 129.854 8.1849V29.7176C129.854 30.8318 128.307 31.1111 127.917 30.0674L121.001 11.5413C120.673 10.6635 119.427 10.678 119.119 11.5631L103.965 55.2239C103.615 56.2315 102.142 56.0648 102.026 55.0045L96.7194 6.39143C96.6241 5.51863 95.5308 5.1835 94.9628 5.85298L58.2373 49.1383C57.691 49.7822 56.6419 49.5009 56.4909 48.6702L48.8416 6.58906C48.6789 5.69363 47.5018 5.46345 47.0137 6.23161L25.1218 40.6861C24.7266 41.308 23.8175 41.3035 23.4285 40.6778L2.43119 6.90146C1.90838 6.06047 0.612267 6.40943 0.582372 7.39923Z"
                     fill="url(#paint0_linear_1265_3283)"
                     fillOpacity="0.8"
                  />
                  <path
                     d="M-1.20279 66.5047L0.582372 7.39923C0.612267 6.40943 1.90838 6.06047 2.43119 6.90146L23.4285 40.6778C23.8175 41.3035 24.7266 41.308 25.1218 40.6861L47.0137 6.23161C47.5018 5.46345 48.6789 5.69363 48.8416 6.58906L56.4909 48.6702C56.6419 49.5009 57.691 49.7821 58.2373 49.1383L94.9628 5.85298C95.5308 5.1835 96.6241 5.51863 96.7194 6.39143L102.026 55.0045C102.142 56.0648 103.615 56.2315 103.965 55.2239L119.119 11.5631C119.427 10.678 120.673 10.6635 121.001 11.5413L127.917 30.0674C128.307 31.1111 129.854 30.8318 129.854 29.7176V8.1849C129.854 7.26579 130.99 6.83347 131.601 7.51992L155.528 34.3932C155.924 34.8382 156.619 34.8401 157.018 34.3974L183.331 5.18101C183.804 4.65546 184.659 4.77395 184.971 5.40846L199.183 34.2683C199.436 34.783 200.07 34.9794 200.57 34.6982L241.498 11.6836C242.165 11.3088 242.988 11.7905 242.988 12.5553V44.3971C242.988 45.4114 244.324 45.7813 244.846 44.9115L262.441 15.5777C262.87 14.8624 263.935 14.9559 264.233 15.735L270.289 31.5741C270.623 32.4483 271.867 32.4254 272.169 31.5395L278.357 13.377C278.655 12.5015 279.88 12.4654 280.23 13.3218L288.269 33.0292C288.605 33.8539 289.771 33.8604 290.117 33.0395L297.364 15.8252C297.696 15.0367 298.801 15.0021 299.181 15.7682L315.471 48.5478C315.86 49.3306 316.995 49.2727 317.303 48.4544L330.902 12.2481C331.259 11.2985 332.639 11.422 332.822 12.4197L337.895 40.1475C338.039 40.9367 339.008 41.2431 339.58 40.6807L360.315 20.2965C360.823 19.7975 361.675 19.9736 361.943 20.633L371.885 45.0893C372.254 45.9956 373.57 45.8883 373.787 44.9343L381.929 9.10205C382.173 8.02986 383.716 8.07899 383.891 9.1645L392.973 65.5098C393.071 66.1181 392.601 66.6695 391.985 66.6689L-1.33984 66.3414"
                     stroke="#4F8B36"
                     strokeWidth="0.2"
                  />
               </g>
               <defs>
                  <filter
                     id="filter0_f_1265_3283"
                     x="-5.33984"
                     y="0.75"
                     width="402.426"
                     height="70.0186"
                     filterUnits="userSpaceOnUse"
                     colorInterpolationFilters="sRGB"
                  >
                     <feFlood floodOpacity="0" result="BackgroundImageFix" />
                     <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                     />
                     <feGaussianBlur
                        stdDeviation="2"
                        result="effect1_foregroundBlur_1265_3283"
                     />
                  </filter>
                  <linearGradient
                     id="paint0_linear_1265_3283"
                     x1="189.917"
                     y1="23.4624"
                     x2="190.415"
                     y2="105.831"
                     gradientUnits="userSpaceOnUse"
                  >
                     <stop offset="0.348958" stopColor="#8A9F6C" />
                     <stop offset="0.5625" stopColor="#FEFEFF" />
                  </linearGradient>
               </defs>
            </svg>
         </div>}
      </div>
   )
}

export default Locations
