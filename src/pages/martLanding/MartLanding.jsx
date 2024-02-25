
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import MartHero from './components/MartHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './mart.module.scss'

// import MartServices from './components/MartServices'
import MartLocations from './components/MartLocations'
import MartGuest from './components/MartGuest'
import MartMap from './components/MartMap'
import MartContacts from './components/MartContacts'
import MartForm from './components/MartForm'
import MartServices from './components/MartServices'
// import MartProgramPopup from './components/MartProgram/MartProgramPopup'

import { StringParam, useQueryParam } from "use-query-params"
import MartProgramPopup from './components/martProgramPlik/MartProgramPopup'
import MartProgram from './components/martProgramPlik/MartProgram'
// import MartModule from './components/MartModule'

import { isItWinterNow } from 'utils/helpers.js'

const MartLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [currentTime, setTime] = useState(isItWinterNow() === '_winter' ? 'Зима' : 'Лето')

   useEffect(() => {
      const script = document.createElement("script")
      script.src = "//widget.bronirui-online.ru/js/app.js"
      script.async = true

      const initializeWidget = () => {
         window.znmsWidget.init("#znms-service-widget-module", {
            moduleId: 5026,
            type: 'booking-services',
         })


      }
      script.onload = initializeWidget



      document.body.appendChild(script)

   }, [])


   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const GetLinks = () => {
      const links = [
         { title: 'Главная', link: "Programa" },
         { title: 'Пакеты услуг', link: "proga" },
         { title: 'Стоимость Услуг', link: "services" },
         { title: 'Локации', link: "locations" },
         { title: 'Контакты', link: "contacts" },
         { title: 'Связаться со мной', link: "Form" },
      ]

      return links
   }

   const GetFooterLinks = () => {

      const links = [
         { title: 'Договор оферты', link: "public/pdf/oferta.pdf" },
         { title: 'Правила проживания', link: "/rules" },
      ]

      return links
   }
   const footerLinks = GetFooterLinks()
   const links = GetLinks()


   const [productId, setProductId] = useQueryParam('productId', StringParam)

   const handleProductClick = (productId) => {
      setProductId(productId)
   }
   useEffect(() => {
      if (productId === undefined) {
         document.body.style.overflow = 'auto'

      } else {
         document.body.style.overflow = 'hidden'
      }

   }, [productId])



   return (
      <div className={`montserrat `}>
         <Helmet>
            <title>8 марта в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="8 марта в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="8 марта в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,8 марта, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-[#ffff] text-MartPink'
            className='bg-white acariBold font-bold text-MartPink' />
         <div className={`bg-MartPink relative ${s.nunito} w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <MartProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <MartHero currentTime={currentTime} />
            <div className={` ${s.programBg}  `}>

               <MartProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <MartServices />
               <MartMap />

            </div>
            {/* <MartPhoto /> */}
            <MartLocations />
            <div className={`${s.guestBg}`}>

               <MartGuest />
               <MartContacts />
            </div>
            <MartForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className='bg-MartBrown text-MartPink' />
      </div>
   )
}

export default MartLanding
