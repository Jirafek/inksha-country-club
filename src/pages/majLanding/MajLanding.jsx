
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import MajHero from './components/MajHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './maj.module.scss'

// import MajServices from './components/MajServices'
import MajLocations from './components/MajLocations'
import MajGuest from './components/MajGuest'
import MajMap from './components/MajMap'
import MajContacts from './components/MajContacts'
import MajForm from './components/MajForm'
import MajServices from './components/MajServices'


import { StringParam, useQueryParam } from "use-query-params"

import MajProgram from './components/MajProgram'
// import MajModule from './components/MajModule'

import { isItWinterNow } from 'utils/helpers.js'
import MajGallery from './components/MajGallery'

const MajLanding = () => {
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
            <title>Майские праздники в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Майские праздники в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Майские праздники в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Майские праздники, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-[#ffff] text-MajGreen'
            className={`bg-white font-bold text-MajGreen ${s.cormReg}`} />
         <div className={`bg-MajOrange relative ${s.dudkaReg} w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <MajProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <MajHero currentTime={currentTime} />
            <div className={` ${s.programBg}  `}>

               <MajProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <MajServices />
               <MajGallery />
               <MajMap />

            </div>
            {/* <MajPhoto /> */}
            <MajLocations />
            <div className={`${s.guestBg}`}>

               <MajGuest />
               <MajContacts />
            </div>
            <MajForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className={`bg-white ${s.cormReg} text-MajGreen`} />
      </div>
   )
}

export default MajLanding
