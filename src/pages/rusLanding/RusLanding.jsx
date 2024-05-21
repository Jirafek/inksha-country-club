
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import RusHero from './components/RusHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './rus.module.scss'

// import RusServices from './components/RusServices'
import RusLocations from './components/RusLocations'
import RusGuest from './components/RusGuest'
import RusMap from './components/RusMap'
import RusContacts from './components/RusContacts'
import RusForm from './components/RusForm'
import RusServices from './components/RusServices'


import { StringParam, useQueryParam } from "use-query-params"

import RusProgram from './components/RusProgram'
// import RusModule from './components/RusModule'

import { isItWinterNow } from 'utils/helpers.js'
import RusGallery from './components/RusGallery'

const RusLanding = () => {
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
   // useEffect(() => {
   //    if (productId === undefined) {
   //       document.body.style.overflow = 'auto'

   //    } else {
   //       document.body.style.overflow = 'hidden'
   //    }

   // }, [productId])



   return (
      <div className={`montserrat `}>
         <Helmet>
            <title>День России в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="День России в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="День России в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,День России, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-RusDarkBlue text-white'
            className={`bg-RusDarkBlue font-bold text-white `} />
         <div className={`bg-RusLigthBlue relative  w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <RusProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <RusHero currentTime={currentTime} />
            <div className={` ${s.programBg}  `}>

               <RusProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <RusServices />
               <RusGallery />
               <RusMap />

            </div>
            {/* <RusPhoto /> */}
            <RusLocations />
            <div className={`${s.guestBg}`}>

               <RusGuest />
            </div>
            <RusContacts />
            <RusForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className={`bg-RusDarkBlue text-white`} />
      </div>
   )
}

export default RusLanding
