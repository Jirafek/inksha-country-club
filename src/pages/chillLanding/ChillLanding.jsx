
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import ChillHero from './components/ChillHero'
// import { BooleanParam, useQueryParam } from "use-query-params"

import s from './chill.module.scss'

// import ChillServices from './components/ChillServices'
import ChillLocations from './components/ChillLocations'
import ChillGuest from './components/ChillGuest'
import ChillMap from './components/ChillMap'
import ChillContacts from './components/ChillContacts'
import ChillForm from './components/ChillForm'
import ChillServices from './components/ChillServices'
// import ChillProgramPopup from './components/ChillProgram/ChillProgramPopup'

import { StringParam, useQueryParam } from "use-query-params"
import ChillProgramPopup from './components/chillProgramPlik/ChillProgramPopup'
import ChillProgram from './components/chillProgramPlik/ChillProgram'

const ChillLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const GetLinks = () => {
      // const { t } = useTranslation()
      // const links = [
      //    { title: t('chilling.header.Main'), link: "Programa" },
      //    { title: t('chilling.header.Gallery'), link: "Tariff" },
      //    { title: t('chilling.header.Price'), link: "Form" },
      //    { title: t('chilling.header.Terr'), link: "Form" },
      //    { title: t('chilling.header.Locations'), link: "Form" },
      //    { title: t('chilling.header.Call'), link: "Form" },

      // ]

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
      // const { t } = useTranslation()
      // const links = [
      //    { title: t('chilling.header.Main'), link: "Programa" },
      //    { title: t('chilling.header.Gallery'), link: "Tariff" },
      //    { title: t('chilling.header.Price'), link: "Form" },
      //    { title: t('chilling.header.Terr'), link: "Form" },
      //    { title: t('chilling.header.Locations'), link: "Form" },
      //    { title: t('chilling.header.Call'), link: "Form" },

      // ]

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
      <div className={`montserrat ${s.bg}`}>
         <Helmet>
            <title>Новый год в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Новый год в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Новый год в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье,Новый год, Праздник, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>
         <Header
            isMenuOpen={isMenuOpen}
            links={links}
            toggleMenu={toggleMenu}
            MenuClassName='bg-ChillBrown text-white'
            className='bg-ChillBrown acariBold font-bold text-white' />
         <div className={`${s.bg} bg-white relative  w-full h-full`}>


            {productId && <ChillProgramPopup productId={productId} onClose={() => setProductId(undefined)} />}
            <ChillHero />

            <ChillProgram handleProductClick={handleProductClick} />
            <ChillServices />
            <ChillMap />
            <ChillLocations />
            <ChillGuest />
            <ChillContacts />
            <ChillForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} isMediaOpen={false} className='bg-ChillBrown text-white' />
      </div>
   )
}

export default ChillLanding
