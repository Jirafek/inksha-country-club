
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import ButterHero from './components/ButterHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './butter.module.scss'

// import ButterServices from './components/ButterServices'
import ButterLocations from './components/ButterLocations'
import ButterGuest from './components/ButterGuest'
import ButterMap from './components/ButterMap'
import ButterContacts from './components/ButterContacts'
import ButterForm from './components/ButterForm'
import ButterServices from './components/ButterServices'
// import ButterProgramPopup from './components/ButterProgram/ButterProgramPopup'

import { StringParam, useQueryParam } from "use-query-params"
// import ButterProgramPopup from './components/butterProgramPlik/ButterProgramPopup'
import ButterProgram from './components/butterProgramPlik/ButterProgram'
// import ButterModule from './components/ButterModule'

import { isItWinterNow } from 'utils/helpers.js'
import ButterGallery from './components/ButterGallery'

const ButterLanding = () => {
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
            <title>Масленица в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Масленица в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Масленица в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Масленица, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-[#ffff] text-ButterDarkBlue'
            className={`bg-white font-bold text-ButterDarkBlue ${s.cormReg}`} />
         <div className={`bg-ButterDarkBlue relative ${s.dudkaReg} w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <ButterProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <ButterHero currentTime={currentTime} />
            <div className={` ${s.programBg}  `}>

               <ButterProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <ButterServices />
               <ButterGallery />
               <ButterMap />

            </div>
            {/* <ButterPhoto /> */}
            <ButterLocations />
            <div className={`${s.guestBg}`}>

               <ButterGuest />
               <ButterContacts />
            </div>
            <ButterForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className={`bg-white ${s.cormReg} text-ButterDarkBlue`} />
      </div>
   )
}

export default ButterLanding
