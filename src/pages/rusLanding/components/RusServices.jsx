// import { useTranslation } from 'react-i18next'
import s from './../rus.module.scss'


const GetServices = () => {

   // const { t } = useTranslation()

   const services = [

      [

         {
            title: "Блины на костре",
            price: '500₽',
            description: ""

         },
         {
            title: "Фотограф для вашего мероприятия",
            price: '10000₽ в час',
            description: ""
         },


         {
            title: "Парильщик (при бронировании бани с купелью от 3-х часов)",
            price: '3000₽',
            description: ""
         },
         {
            title: "Парковочное место",
            price: '500₽ в сутки ',
            description: ""
         },
         {
            title: "Снегоход / квадроцикл",
            price: 'от 5 500 ₽ / час',
            description: ""
         },
         {
            title: "Глинтвейн",
            price: '5000₽',
            description: ""
         },
      ]



   ]


   return services
}





const RusServices = () => {
   const services = GetServices()

   return (
      <div className='text-RusLigthBlue bg-white'>

         <div id='services' className='relative py-[40px] wrapper text-RusGreen  '>
            <div>
               <div className={`text-center text-lg ${s.cormReg} text-ChillHeadBrown font-bold`}>Дополнительные услуги</div>
               <div className={`grid grid-cols-1 ${s.cormReg} md:grid-cols-2 mt-8 mx-[40px] md:mx-auto gap-x-11 max-w-[1200px] content-center `}>

                  {services[0].map((item, i) => {
                     return (
                        <div key={i} className={`justify-between ${s.services_wrapper} w-full gap-2 md:gap-4 items-center py-[10px] md:py-[50px] flex`}>
                           <div className='flex flex-col'>
                              <div className="text-RusGreen text-md leading-[33.80px] tracking-wide">{item.title}</div>

                              <div className="text-zinc-500 text-md- leading-relaxed tracking-tight">{item.description}</div>
                           </div>
                           <div className="text-RusGreen text-md montserrat text-right leading-[33.80px] tracking-wide">{item.price}</div>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div id='znms-service-widget-module'></div>


            <div className='text-center w-full mt-[5vh]'>

               <a className="text-RusRed mx-auto font-bold text-md text-center underline" target='_blank' href="/pdf/priceList.pdf">Прайс лист</a>

               {/* <div className='font-semibold mt-[60px] text-md'>После активного отдыха можно отдохнуть в уютном домике или коттедже. Здесь можно насладиться спокойствием, отдохнуть от повседневных забот. Уха или плов от шефа, а также кальян или чай из самовара станут отличным завершением такого отдыха. </div> */}
            </div>


         </div>
      </div>
   )
}

export default RusServices