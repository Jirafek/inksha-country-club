import React, { useRef } from 'react'
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/scrollbar"

const ProgramSlider = ({ selectedImages, font, mainColor = "black", secondaryColor = "black", showOnlyExpensive = false, prevBtn, nextBtn }) => {
   const swiperRef = useRef()

   return (
      <div>
         <div className='md:grid hidden  max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-start place-items-start md:px-[30px] gap-[40px] w-full'>
            {selectedImages.map((item, i) => {
               return (
                  <div key={i} style={{ borderColor: mainColor }} className={`${font} w-[94%] sm:max-w-[500.43px]  bg-white rounded-[10px] border`}>
                     <div className={` ${font} h-[217.35px] relative`}>
                        {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                        <img className="w-full object-cover object-center  absolute h-[217.35px]  border-b-2 " src={item.img} />
                     </div>
                     <div className=' p-[15px] md:p-[30px] '>
                        <div className={`text-32px leading-[41.60px] acariBold`} style={{ color: mainColor }}>{item.title}</div>
                        <div className="text-left font-semibold" style={{ color: secondaryColor }}>{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                        <div className='flex justify-between mb-[20px]'>
                           {item.oldPrice !== '' && !showOnlyExpensive ?
                              <div className='flex flex-col items-center justify-center w-full'>
                                 <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                 <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>
                              </div>
                              :
                              <div className='flex w-full flex-col'>
                                 <div className={`text-center text-36px  font-semibold`} style={{ color: mainColor }}>{showOnlyExpensive ? item.oldPrice : item.price}</div>
                              </div>
                           }
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                           <a style={{ borderColor: mainColor }} href="#form" className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4">
                              <div className="text-center  font-semibold" style={{ color: mainColor }}>Забронировать</div>
                           </a>
                           {item.hasAbout ?
                              <div style={{ borderColor: secondaryColor }} onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                 <div className="text-center font-semibold" style={{ color: secondaryColor }}>Подробнее</div>
                              </div>
                              :
                              <a style={{ borderColor: secondaryColor }} href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 ">
                                 <div className="text-center font-semibold" style={{ color: secondaryColor }}>Подробнее</div>
                              </a>
                           }
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
         <div className="flex md:hidden px-[20px] w-full ml-auto gap-4 md:pr-[100px]  z-10 justify-end">
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slidePrev()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={prevBtn}
                  alt=""
               />
            </button>
            <button
               className="z-[200]"
               onClick={() => swiperRef.current?.slideNext()}
            >
               <img
                  className="aspect-square hover:scale-110 duration-300 w-[40px] md:w-[120px]"
                  src={nextBtn}
                  alt=""
               />
            </button>
         </div>
         <div className='block md:hidden'>
            <Swiper
               modules={[Navigation, Autoplay]}
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
               slidesPerView={window.innerWidth > 550 ? 2 : 1}
               navigation
            >
               {selectedImages.map((item, i) => {
                  return (
                     <SwiperSlide className="py-[30px]" key={i}>
                        <div style={{ borderColor: mainColor }} key={i} className={` ${font} w-full  bg-white rounded-[10px] border`}>
                           <div className={` ${font} h-[217.35px] relative`}>
                              {item.oldPrice !== '' && <div className='absolute -top-5 right-0 z-[2] flex justify-center items-center acariBold text-white  w-[100px] md:w-[200px] h-[30px] md:h-[60px] text-md rounded-[10px] bg-NYred'>Акция</div>}
                              <img className="w-full object-cover object-center  absolute h-[217.35px]  border-b-2 " src={item.img} />
                           </div>

                           <div className=' p-[15px] md:p-[30px] '>
                              <div className={`text-32px leading-[41.60px] acariBold`} style={{ color: mainColor }}>{item.title}</div>
                              <div className="text-left font-semibold" style={{ color: secondaryColor }}>{item.desc !== '' ? <div>{item.desc}</div> : ''}</div>

                              <div className='flex justify-between mb-[20px]'>
                                 {item.oldPrice !== '' && !showOnlyExpensive ?
                                    <div className='flex flex-col items-center justify-center w-full'>
                                       <div className="text-center text-yellow-900 text-36px font-semibold line-through leading-loose">{item.oldPrice}</div>
                                       <div className="text-center text-red-600  text-36px font-semibold leading-loose">{item.price}</div>
                                    </div>
                                    :
                                    <div className='flex w-full flex-col'>
                                       <div className="text-center text-36px  font-semibold" style={{ color: mainColor }}>{showOnlyExpensive ? item.oldPrice : item.price}</div>
                                    </div>
                                 }
                              </div>

                              <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between'>
                                 <a style={{ borderColor: mainColor }} href="#form" className="w-[156.94px] cursor-pointer h-[41.64px] rounded-tr-[20px] flex justify-center items-center rounded-bl-[20px] border-4">
                                    <div className="text-center  font-semibold" style={{ color: mainColor }}>Забронировать</div>
                                 </a>
                                 {item.hasAbout ?
                                    <div style={{ borderColor: secondaryColor }} onClick={() => { handleProductClick(item.number) }} className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                       <div className="text-center font-semibold" style={{ color: secondaryColor }}>Подробнее</div>
                                    </div>
                                    :
                                    <a style={{ borderColor: secondaryColor }} href='#form' className="cursor-pointer w-[156.94px] h-[41.64px] rounded-[20px] flex justify-center items-center border-2 border-zinc-500">
                                       <div className="text-center font-semibold" style={{ color: secondaryColor }}>Подробнее</div>
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
      </div>
   )
}

export default ProgramSlider
