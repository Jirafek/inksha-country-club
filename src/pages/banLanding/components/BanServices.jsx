// import { useTranslation } from 'react-i18next'
import s from './../ban.module.scss'

const GetServices = () => {

   // const { t } = useTranslation()

   const services = [

      [

         {
            title: "Уха из свежепойманной форели в казане",
            price: '5000',
            description: ""

         },
         {
            title: "Казан плова по-узбекски",
            price: '5000',
            description: ""
         },


         {
            title: "Шашлык куриной/мясной на гриле",
            price: '5000',
            description: ""
         },
         {
            title: "Травяной чай в самоваре",
            price: '5000',
            description: ""
         },
         {
            title: "Глинтвейн",
            price: '5000',
            description: ""
         },
         {
            title: "Парковочное место",
            price: 'в сутки 500',
            description: ""
         },
      ]



   ]


   return services
}

const BanServices = () => {

   const services = GetServices()

   return (
      <div id='services' className='relative py-[50px] wrapper text-black  '>
         {/* <div className="max-w-[1282.45px] px-[20px]  py-[40px] mx-auto text-center text-stone-900 text-md font-semibold leading-2 tracking-wide">После бани можно отдохнуть в уютном домике или коттедже. Здесь можно насладиться спокойствием и уединением, отдохнуть от повседневных забот. Уха или плов от шефа станут отличным завершением такого отдыха. Наслаждаясь вкусной кухней, можно насладиться ароматами свежих ингредиентов, подаривших блюдам неповторимый вкус. Это станет идеальным способом расслабиться после бани в уютной обстановке.</div> */}

         <div>
            <div className='text-center text-lg font-bold'>Дополнительные услуги</div>

            <div className={`grid grid-cols-1 ${s.acariMedium} md:grid-cols-2 mt-8 mx-[40px] md:mx-auto gap-x-11 max-w-[1200px] content-center `}>



               {services[0].map((item, i) => {
                  return (
                     <div key={i} className={`justify-between w-full ${s.services_wrapper} gap-2 md:gap-4 items-center py-[10px] md:py-[50px] flex`}>
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


         <div className='text-center w-full mt-[5vh]'>

            <a className="text-black mx-auto font-bold text-md text-center underline" target='_blank' href="/pdf/priceList.pdf">Прайс лист</a>

            <div className='font-semibold mt-[60px] text-md'>После бани можно отдохнуть в уютном домике или коттедже. Здесь можно насладиться спокойствием и уединением, отдохнуть от повседневных забот. Уха или плов от шефа станут отличным завершением такого отдыха. Наслаждаясь вкусной кухней, можно насладиться ароматами свежих ингредиентов, подаривших блюдам неповторимый вкус. Это станет идеальным способом расслабиться после бани в уютной обстановке.</div>
         </div>


      </div>
   )
}

export default BanServices