
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import ValenHero from './components/ValenHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './valen.module.scss'

// import ValenServices from './components/ValenServices'
import ValenLocations from './components/ValenLocations'
import ValenGuest from './components/ValenGuest'
import ValenMap from './components/ValenMap'
import ValenContacts from './components/ValenContacts'
import ValenForm from './components/ValenForm'
import ValenServices from './components/ValenServices'
// import ValenProgramPopup from './components/ValenProgram/ValenProgramPopup'

import { StringParam, useQueryParam } from "use-query-params"
import ValenProgramPopup from './components/valenProgramPlik/ValenProgramPopup'
import ValenProgram from './components/valenProgramPlik/ValenProgram'
// import ValenModule from './components/ValenModule'

import { isItWinterNow } from 'utils/helpers.js'

const ValenLanding = () => {
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
            <title>14 февраля в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="14 февраля в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="14 февраля в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,14 февраля, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-[#ffff] text-[#FF96B8]'
            className='bg-white acariBold font-bold text-[#FF96B8]' />
         <div className={`bg-[#E8B2C4] relative  w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <ValenProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <ValenHero currentTime={currentTime} />
            <div className={s.programBg}>
               <ValenProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <ValenServices />
            </div>
            {/* <ValenPhoto /> */}
            <ValenMap />
            <ValenLocations />
            <ValenGuest />
            <ValenContacts />
            <ValenForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className='bg-ValenBrown text-[#FF96B8]' />
      </div>
   )
}

export default ValenLanding
