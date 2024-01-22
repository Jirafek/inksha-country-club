
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
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }

   const GetLinks = () => {
      // const { t } = useTranslation()
      // const links = [
      //    { title: t('baning.header.Main'), link: "Programa" },
      //    { title: t('baning.header.Gallery'), link: "Tariff" },
      //    { title: t('baning.header.Price'), link: "Form" },
      //    { title: t('baning.header.Terr'), link: "Form" },
      //    { title: t('baning.header.Locations'), link: "Form" },
      //    { title: t('baning.header.Call'), link: "Form" },

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

   const links = GetLinks()


   const [productId, setProductId] = useQueryParam('productId', StringParam)

   const handleProductClick = (productId) => {
      setProductId(productId)
   }




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
            MenuClassName='bg-white text-black'
            className='bg-white font-bold text-black' />
         <div className={` bg-white relative  w-full h-full`}>

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

         <Footer className='bg-black text-white' />
      </div>
   )
}

export default BanLanding
