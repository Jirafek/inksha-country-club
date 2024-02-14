
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import BanHero from './components/BanHero'
import { StringParam, useQueryParam } from "use-query-params"

import s from './ban.module.scss'
import BanPhoto from './components/BanPhoto'
// import BanServices from './components/BanServices'
import BanLocations from './components/BanLocations'
import BanGuest from './components/BanGuest'
import BanMap from './components/BanMap'
import BanContacts from './components/BanContacts'
import BanForm from './components/BanForm'
import BanServices from './components/BanServices'
import BanProgram from './components/BanProgram/BanProgram'
import BanProgramPopup from './components/BanProgram/BanProgramPopup'

const BanLanding = () => {
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
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const GetLinks = () => {


      const links = [
         { title: 'Главная', link: "Programa" },
         { title: 'Галерея', link: "photo" },
         { title: 'Стоимость Услуг', link: "services" },
         { title: 'Территория', link: "map" },
         { title: 'Локации', link: "locations" },
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




   return (
      <div className={`montserrat ${s.bg}`}>
         <Helmet>
            <title>Баня в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Баня в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Баня в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Баня, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-white text-black'
            className=' font-bold bg-[#221C1C] text-white' />
         <div className={` ${s.bg} relative  w-full h-full`}>
            <div id="znms-service-widget-module"></div>
            {productId && <BanProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}

            <BanHero />
            <BanPhoto />
            <BanProgram handleProductClick={handleProductClick} />
            <BanServices />
            <BanMap />
            <BanLocations />
            <BanGuest />
            <BanContacts />
            <BanForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} className='bg-black text-white' />
      </div>
   )
}

export default BanLanding
