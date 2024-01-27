
// import "./index.css"

import Footer from "common/Footer"
import Header from "common/Header"

import { useState } from 'react'

import { Helmet } from 'react-helmet'
// import { useTranslation } from 'react-i18next'
import FishHero from './components/FishHero'

import s from './fishing.module.scss'
import FishPhoto from './components/FishPhoto'
import FishServices from './components/FishServices'
import FishLocations from './components/FishLocations'
import FishGuest from './components/FishGuest'
import FishMap from './components/FishMap'
import FishContacts from './components/FishContacts'
import FishForm from './components/FishForm'

const FishingLanding = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
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

   const GetLinks = () => {
      // const { t } = useTranslation()
      // const links = [
      //    { title: t('fishing.header.Main'), link: "Programa" },
      //    { title: t('fishing.header.Gallery'), link: "Tariff" },
      //    { title: t('fishing.header.Price'), link: "Form" },
      //    { title: t('fishing.header.Terr'), link: "Form" },
      //    { title: t('fishing.header.Locations'), link: "Form" },
      //    { title: t('fishing.header.Call'), link: "Form" },

      // ]

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
   const footerLinks = GetFooterLinks()
   const links = GetLinks()
   return (
      <div className={`montserrat ${s.main}`}>
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
            MenuClassName='bg-FBlack text-grey'
            className='bg-black font-bold text-grey' />
         <div className='bg-FBlack relative  w-full h-full'>
            <FishHero />
            <FishPhoto />
            <FishServices />
            <FishMap />
            <FishLocations />
            <FishGuest />
            <FishContacts />
            <FishForm />


         </div>
         {/* </div> */}

         <Footer FooterLinks={footerLinks} className='bg-FBlack text-grey' />
      </div>
   )
}

export default FishingLanding
