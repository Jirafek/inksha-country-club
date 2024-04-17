import React from 'react'

const PriceBanner = ({ className, prices, isHolyday = false }) => {
   return (
      <div className={` ${className} mt-[50px] font-semibold w-screen flex justify-center items-center bottom-0 z-[20] h-[70px] md:h-[90px] `}>
         {
            isHolyday
               ? <div className='text-white text-center text-md font-semibold'>
                  Проживание в олимпийском домике в выходные: <span className='text-red-600'>{prices.oldPrice}</span> ₽, в будние: <span className='text-red-600'>{prices.newPrice}</span> ₽
               </div>
               : <div className='text-white text-center text-md font-semibold'>
                  Проживание в домике для 6 человек к любому пакету услуг <span className='line-through'> {prices.oldPrice} ₽ </span><span className='text-NYred'> {prices.newPrice} ₽ </span>
               </div>
         }


      </div>
   )
}

export default PriceBanner
