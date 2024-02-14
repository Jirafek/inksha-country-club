
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import ManHero from './components/ManHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './man.module.scss'

// import ManServices from './components/ManServices'
import ManLocations from './components/ManLocations'
import ManGuest from './components/ManGuest'
import ManMap from './components/ManMap'
import ManContacts from './components/ManContacts'
import ManForm from './components/ManForm'
import ManServices from './components/ManServices'
// import ManProgramPopup from './components/ManProgram/ManProgramPopup'

import { StringParam, useQueryParam } from "use-query-params"
import ManProgramPopup from './components/manProgramPlik/ManProgramPopup'
import ManProgram from './components/manProgramPlik/ManProgram'
// import ManModule from './components/ManModule'

import { isItWinterNow } from 'utils/helpers.js'

const ManLanding = () => {
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
            MenuClassName='bg-[#502500] text-white'
            className='bg-ManBrown acariBold font-bold text-white' />
         <div className={`bg-ManGreen ${s.rowdiesReg} relative  w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <ManProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <ManHero currentTime={currentTime} />
            <div className={s.programBg}>
               <ManProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
               <ManServices />
            </div>
            {/* <ManPhoto /> */}
            <ManMap />
            <ManLocations />
            <ManGuest />
            <ManContacts />
            <ManForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className='bg-ManBrown text-white' />
      </div>
   )
}

export default ManLanding
