import React from 'react'
import funImg from 'images/housing/fun.webp'

const GetFun = () => {
   return [
      { img: funImg },
      { img: undefined, title: "Свидания", text: "Романтическая атмосфера, закат на воде, ужин при свечах и рассвет над кронами деревьев, именно так и должно выглядеть идеальное свидание, и вы знаете, где его провести" },
      { img: undefined, title: "Активный отдых", text: "В здоровом теле - здоровый дух, а в здоровой атмосфере - здоровый спорт, свежий воздух, русская баня, шашлык или барбекю - идеальный выбор для любителей активного отдыха" },
      { img: undefined, title: "Вечерние мероприятия", text: "Насладитесь вечером в компании друзей на наших караоке-вечеринках, посиделках у костра и других мероприятиях, которые добавят в ваш отдых немного веселья и развлечений" },
      { img: undefined, title: "Экскурсии и путешествия", text: "Отправляйтесь в захватывающие экскурсии и путешествия в окрестностях Икша Кантри Клаба, чтобы открыть  для себя местные достопримечательности и природные красоты" },
      { img: undefined, title: "Пикники и барбекю", text: "Еда на природе всегда вкуснее, а в компании друзей и семьи - еще вкуснее, устройте пикник вашей мечты у нас, незабываемые впечатления вам гарантированны" }
   ]
}

const HousingEntertainment = () => {
   const funItems = GetFun()

   return (
      <div id="fun" key="fun" className='md:pl-[60px] p-5 border-y border-brown pt-[60px]'>
         <div className='flex justify-between gap-1 mb-[20px] items-center'>
            <div className='flex gap-[40px] text-center md:text-start flex-col'>
               <h2 className='font-bold text-36px'>РАЗВЛЕЧЕНИЯ И<span className='text-brown'> МЕРОПРИЯТИЯ</span></h2>
               <p className='text-24px'>В Икша Кантри Клабе мы гордимся широким спектром развлекательных программ и мероприятий для всех наших гостей</p>
            </div>
         </div>

         <div className='grid grid-cols-1 md:grid-cols-2 items-center w-full md:px-[80px]'>
            {funItems.map((item, i) => (
               <div key={i} className=' border-t w-full h-full py-[30px] justify-center place-content-center place-items-center border-brown'>

                  {item.img === undefined ? (
                     <div className={`${(i + 1) % 2 === 0 ? "md:text-right md:justify-end md:ml-5" : "md:text-left md:mr-5"} text-center  justify-center flex flex-col`}>
                        <div className='font-bold text-brown text-24px'>{item.title}</div>
                        <div className='text-20px'>{item.text}</div>
                     </div>
                  ) : (
                     <div>
                        <img src={item.img} className='rounded-[10px] md:h-auto object-cover h-[40vh]' alt="" />
                     </div>
                  )}

               </div>
            ))}
         </div>
      </div>
   )
}

export default HousingEntertainment
