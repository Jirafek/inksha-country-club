
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import GradHero from './components/GradHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './grad.module.scss'

// import GradServices from './components/GradServices'
import GradLocations from './components/GradLocations'
import GradGuest from './components/GradGuest'
import GradMap from './components/GradMap'
import GradContacts from './components/GradContacts'
import GradForm from './components/GradForm'



import { StringParam, useQueryParam } from "use-query-params"

import GradProgram from './components/GradProgram'
// import GradModule from './components/GradModule'

import { isItWinterNow } from 'utils/helpers.js'
import GradGallery from './components/GradGallery'
import GradAdd from './components/GradAdd'
import GradKaytering from './components/GradKaytering'

const GradLanding = () => {
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
            <title>Выпускной в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Выпускной в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Выпускной в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Выпускной, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-GradPurple text-white'
            className={`bg-GradPurple font-bold text-white`} />
         <div className={`bg-GradPurple relative w-full h-full`}>

            <div id="znms-service-widget-module"></div>
            {productId && <GradProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <GradHero currentTime={currentTime} />
            <div className={` ${s.programBg}  `}>
               <GradGallery />
               <GradProgram setTime={setTime} currentTime={currentTime} handleProductClick={handleProductClick} />
            </div>
            {/* <GradPhoto /> */}
            <GradLocations />
            <GradKaytering />



            <GradGuest />

            <GradAdd />

            <GradContacts />

            <GradForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className={`bg-GradPurple text-white`} />
      </div>
   )
}

export default GradLanding
