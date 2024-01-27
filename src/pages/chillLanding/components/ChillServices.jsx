// import { useTranslation } from 'react-i18next'
import s from './../chill.module.scss'


const GetServices = () => {

   // const { t } = useTranslation()

   const services = [

      [

         {
            title: "Кальянщик на день",
            price: '11 000',
            description: ""

         },
         {
            title: "Фотограф для вашего мероприятия",
            price: 'в час 10000',
            description: ""
         },


         {
            title: "Парильщик (при бронировании бани с купелью от 3-х часов)",
            price: '3000',
            description: ""
         },
         {
            title: "Казан плова по-узбекски от шефа",
            price: '5000',
            description: ""
         },
         {
            title: "Уха из свежепойманной форели в казане",
            price: '5000',
            description: ""
         },
         {
            title: "Шеф-повар на день",
            price: 'продукты + 5000',
            description: ""
         },
      ]



   ]


   return services
}





const ChillServices = () => {





   const services = GetServices()

   return (
      <div id='services' className='relative py-[100px] wrapper text-black  '>
         <div>
            <div className='text-center text-md+ text-ChillHeadBrown font-bold'>Дополнительные услуги</div>
            <div className={`grid grid-cols-1 ${s.acariMedium} md:grid-cols-2 mt-8 mx-[40px] md:mx-auto gap-x-11 max-w-[1200px] content-center `}>



               {services[0].map((item, i) => {
                  return (
                     <div key={i} className={`justify-between ${s.services_wrapper} w-full gap-2 md:gap-4 items-center py-[10px] md:py-[50px] flex`}>
                        <div className='flex flex-col'>
                           <div className="text-black text-md   leading-[33.80px] tracking-wide">{item.title}</div>

                           <div className="text-zinc-500 text-md-  leading-relaxed tracking-tight">{item.description}</div>
                        </div>
                        <div className="text-black text-md montserrat  leading-[33.80px] tracking-wide">{item.price}₽</div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div id='znms-service-widget-module'></div>


         <div className='text-center w-full mt-[5vh]'>

            <a className="text-black mx-auto font-bold text-md text-center underline" target='_blank' href="/pdf/priceList.pdf">Прайс лист</a>

            <div className='font-semibold mt-[60px] text-md'>После активного отдыха можно отдохнуть в уютном домике или коттедже. Здесь можно насладиться спокойствием, отдохнуть от повседневных забот. Уха или плов от шефа, а также кальян или чай из самовара станут отличным завершением такого отдыха. </div>
         </div>


      </div>
   )
}

export default ChillServices