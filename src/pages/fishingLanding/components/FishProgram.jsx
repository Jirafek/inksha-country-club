/* eslint-disable react/prop-types */

import { v4 as uuid4 } from 'uuid'
import { m } from 'framer-motion'

import main1 from 'images/fishing/program/001.webp'
import main2 from 'images/fishing/program/002.webp'
import main3 from 'images/fishing/program/003.webp'
import main4 from 'images/fishing/program/004.webp'
import main5 from 'images/fishing/program/005.webp'
import main6 from 'images/fishing/program/006.webp'

// import main30 from 'images/chill/program/030.webp'


import { Navigation, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"


import korpprev from "icons/swiperprev_black.png"
import korpnext from "icons/swipernext_black.png"


import sun from 'icons/buttons/filter/sun.png'
import winter from 'icons/buttons/filter/winter.png'
import many from 'icons/buttons/filter/many.png'
import low from 'icons/buttons/filter/low.png'

import Button from 'common/Button'





import s from './../fishing.module.scss'
import { useEffect, useRef, useState } from 'react'

const GetProgram = () => {
   const program = [

      {
         img: main1,
         title: 'Казан плова/ухи + аренда удочки + чай из самовара/ глинтвейн',
         oldPrice: '10 990 ₽ /чел',
         price: '7990 ₽ /чел',
         number: 1,
         hasAbout: false,
         desc: '',
         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main2,
         title: 'Казан плова +заезд на фэтбайках',
         price: '4990 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 2,
         hasAbout: false,
         desc: 'с онлайн-гидом',


         time: ['Зима', 'Лето'],
         isManyPeople: false,

      },
      {
         img: main3,
         title: 'Баня с купелью',
         // oldPrice: '10 990 ₽ /чел', 
         price: '10 000 ₽',
         number: 3,
         hasAbout: false,
         desc: '* цена за 2 часа',


         time: 'Зима',
         isManyPeople: false,
      },
      {
         img: main4,
         title: 'Казан плова + заезд на лодке',
         price: '4990 ₽ /чел.',
         oldPrice: '8990 ₽ /чел.',
         number: 10,
         hasAbout: false,
         desc: '',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main5,
         title: 'Снегоход',
         price: '1 590 ₽ /чел.',
         oldPrice: '3 990 ₽ /чел',
         number: 5,
         hasAbout: false,
         desc: '* цена за 1 час',


         time: 'Лето',
         isManyPeople: false,
      },
      {
         img: main6,
         title: 'Стрельба из лука + баня с купелью на 3 часа + аренда мангала',
         price: '7 990 ₽ /чел',
         oldPrice: '15 990 ₽ /чел.',
         number: 6,
         hasAbout: false,
         desc: '',

         time: 'Лето',
         isManyPeople: false,
      },



   ]

   return program
}



const FishProgram = () => {

   const program = GetProgram()


   const [isManyPeople, setIsManyPeople] = useState(false)
   const [currentTime, setTime] = useState('Лето')

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [selectedimages, setSelectedimages] = useState(program)


   const filter = () => {

      const filteredProgram = program.filter(item => {

         return item.isManyPeople === isManyPeople && item.time.includes(currentTime)
      })


      setSelectedimages(filteredProgram)


   }

   useEffect(() => {
      filter()
   }, [])


   const togglePeople = () => {

      setIsManyPeople(!isManyPeople)

   }


   const toggleTime = () => {
      if (currentTime === 'Лето') {
         setTime('Зима')
      } else {
         setTime('Лето')
      }
      filter()
   }


   useEffect(() => {
      filter()
   }, [currentTime, isManyPeople])


   const swiperRef = useRef()


   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-service-widget-module", {
            moduleId: 5026,
            type: 'booking-services',
         })

         // const customStyles = `
         //  .znms-widget__brononline_popup_full {
         //    width: 90vw !important;
         //    height: 60vh !important;
         //    position: fixed !important;
         //    top: 50% !important;
         //    left: 50% !important;
         //    transform: translate(-50%, -50%) !important;
         // }

         // `
         // const styleElement = document.createElement("style")
         // styleElement.innerHTML = customStyles
         // document.head.appendChild(styleElement)
      }
      script.onload = initializeWidget



      document.body.appendChild(script)

   }, [])
   console.log()

   return (
      <div name='proga' id='program' className='relative bg-[#081130] py-[10vh] text-black'>
         <div id="znms-service-widget-module"></div>
         <div className="text-center text-white mb-[10vh] text-lg font-bold leading-[62.40px]">Активный отдых в Икша Кантри Клаб</div>
         {/* <div className=' font-bold text-center mb-[10vh] text-ChillHeadBrown text-lg'>Активный отдых в Икша Кантри Клаб</div> */}



         {/* <div style={{ display: `${isMenuOpen ? 'block' : 'none'}` }} className="absolute py-7 z-10 left-1/2 -translate-x-1/2 lg:top-[210px] top-[180px]  w-[360px] bg-[#5F4D3A] rounded-b-[22px]">
            <div className="relative w-full pl-12 flex flex-col gap-2 items-start">
               {
                  types.map((el) => {
                     return (
                        <button key={uuid4()} onClick={() => { handleItems(el) }} className="lg:text-[35px] text-[24px] text-white font-medium">
                           {el}
                        </button>
                     )
                  })
               }
            </div>
         </div>
         <m.button
            

            className={` ${isMenuOpen ? 'rounded-t-[22px]' : 'rounded-[22px]'} opacity-100 mb-[70px] w-[360px] mx-auto h-[65px] flex items-center justify-between text-white bg-[#5F4D3A] `}
         >
            <div onClick={handleMenu} className="relative h-full w-full flex  justify-between px-[40px] gap-14 items-center ">
               <p className="text-white lg:text-[35px] text-[24px] font-medium">
                  {menuItem}
               </p>

            </div>
            <img onClick={handleClose} className=' z-[10] p-[20px]' src={close} alt="" />
         </m.button> */}


         {/* <div className='flex justify-center mb-[50px] md:mb-[100px] items-center gap-5'>
            <div className="w-[101.84px] h-[46.98px] ">
               <div
                  onClick={toggleTime}

                  className={` ${currentTime === 'Лето' ? 'justify-end border-[#FFE500]' : 'justify-start border-[#1CFFFF]'} cursor-pointer border-2  relative items-center px-2 flex w-[101.84px] h-[46.98px] bg-[#604E3A] rounded-[20px] shadow-xl`}
               >

                  <div className={`w-[30px]  ${currentTime === 'Лето' ? 'bg-[#FFE500]' : 'bg-[#1CFFFF]'} z-[2] h-[29.25px]  rounded-[100px] shadow-lg`}></div>
                  {currentTime === 'Лето' ?
                     <div className='absolute left-1 top-[7px]'>
                        <img className='w-[35px] h-[35px]' src={sun} loading='eager' alt="" />
                     </div>
                     :
                     <div className='absolute right-1 top-[7px]'>
                        <img className='w-[35px] h-[35px]' src={winter} loading='eager' alt="" />
                     </div>
                  }

               </div>
               <div className="text-center text-stone-600 text-sm font-semibold leading-normal tracking-tight">{currentTime === 'Лето' ? <div>Лето</div> : <div>Зима</div>}</div>

            </div>

            <div className="w-[101.84px] h-[46.98px] ">
               <div
                  onClick={togglePeople}

                  className={` ${isManyPeople ? 'justify-start border-[#AB8E67]' : 'justify-end border-[#FFFFFF]'} cursor-pointer border-2  relative items-center px-2 flex w-[101.84px] h-[46.98px] bg-[#604E3A] rounded-[20px] shadow-xl`}
               >

                  <div className={`w-[30px] flex justify-center items-center z-[10] text-black text-[15px] ${isManyPeople ? 'bg-[#AB8E67]' : 'bg-[#FFFFFF]'} z-[2] h-[29.25px]  rounded-[100px] shadow-lg`}>

                  </div>
                  {isManyPeople ?


                     <div className='absolute right-2 top-[9px]'>
                        <img className=' w-[50px] h-[21px]' src={many} loading='eager' alt="" />
                     </div>
                     :
                     <div className='absolute left-3 top-[9px]'>
                        <img className=' w-[26px] h-[26px]' src={low} loading='eager' alt="" />
                     </div>
                  }

               </div>
               <div className="text-center text-stone-600 text-sm font-semibold leading-normal tracking-tight">{isManyPeople ? <div>Много людей (от 10)</div> : <div>Мало людей (от 4)</div>}</div>

            </div>
         </div> */}



         <div className='md:grid hidden  max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start place-items-start md:px-[30px] gap-[40px] w-full'>

            {selectedimages.map((item, i) => {
               return (

                  <div key={i} className={` ${s.acariMedium} w-[94%] sm:max-w-[500.43px]  bg-white rounded-[10px] border border-stone-700`}>


                     <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                        {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                        <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                     </div>
                     <div className=' p-[15px] md:p-[30px] '>
                        <div className='text-32px text-[#593723] leading-[41.60px] acariBold'>{item.title}</div>
                        <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                        <div className='flex justify-between mb-[20px]'>
                           {item.oldPrice !== '' ?
                              <div className='flex flex-col items-center justify-center w-full'>
                                 <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                 <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>


                              </div>
                              :
                              <div className='flex flex-col'>
                                 <div className="text-left text-36px text-stone-700 font-semibold">{item.price}</div>
                              </div>
                           }
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                           <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                              <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                           </div>
                           {item.hasAbout ?
                              <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                 <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                              </div>
                              :
                              <a href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                 <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                              </a>
                           }

                        </div>


                     </div>
                  </div>
               )
            })}


         </div >
         <div className="flex md:hidden px-[20px] w-full ml-auto gap-4 md:pr-[100px]  z-10 justify-end">
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slidePrev()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={korpprev}
                  alt=""
               />
            </button>
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slideNext()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={korpnext}
                  alt=""
               />
            </button>
         </div>
         <div className='block md:hidden'>

            <Swiper
               // install Swiper modules
               modules={[Navigation, Autoplay]}
               // style={{ display: 'none' }}
               className="hidden chill"
               spaceBetween={50}
               loop={true}
               autoplay={{
                  delay: 1500,
                  disableOnInteraction: true,
               }}
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper
               }}
               slidesPerView={window.innerWidth > 450 ? 2 : 1}
               navigation

            >
               {selectedimages.map((item, i) => {
                  return (
                     <SwiperSlide className="py-[30px]" key={i}>



                        <div key={i} className={` ${s.acariMedium} w-full  bg-white rounded-[10px] border border-stone-700`}>


                           <div className={` ${s.acariMedium} h-[217.35px] relative`}>
                              {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white  w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                              <img className="w-full  absolute h-[217.35px]  border-b-2 " src={item.img} />
                           </div>


                           <div className=' p-[15px] md:p-[30px] '>
                              <div className='text-32px text-[#593723] leading-[41.60px] acariBold'>{item.title}</div>
                              <div className="text-left text-stone-500 font-semibold ">{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                              <div className='flex justify-between mb-[20px]'>
                                 {item.oldPrice !== '' ?
                                    <div className='flex flex-col items-center justify-center w-full'>
                                       <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                       <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>


                                    </div>
                                    :
                                    <div className='flex flex-col'>
                                       <div className="text-left text-36px text-stone-700 font-semibold">{item.price}</div>


                                    </div>
                                 }
                              </div>

                              <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                                 <div onClick={() => { window.znmsWidget.open('#znms-service-widget-module') }} className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4 border-stone-700">
                                    <div className="text-center text-stone-700 font-semibold ">Забронировать</div>
                                 </div>
                                 {item.hasAbout ?
                                    <div onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                       <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                                    </div>
                                    :
                                    <a href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                       <div className="text-center text-zinc-500 font-semibold">Подробнее</div>
                                    </a>
                                 }

                              </div>


                           </div>
                        </div>

                     </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>

         {/* <div className={` ${s.banner} mt-[50px] w-screen flex justify-center items-center bottom-0 z-[20] h-[70px] md:h-[90px] `}>
            <div className='text-white text-center text-md font-semibold'>
               Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'> 16 990 ₽ </span><span className='text-NYred'> 9990 ₽ </span>

            </div>

         </div>
         <a className='mx-auto' href='#module'>
            <Button className='bg-[#593723] md:w-[600px] text-md md:h-[70px] text-white mx-auto'>Посмотреть локации</Button>
         </a> */}


      </div >
   )
}

export default FishProgram