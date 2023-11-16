import Header from "common/Header";
import Hero from "./components/KorpHero";
import KorpLocations from "./components/KorpLocations";
import Photo from "./components/KorpPhoto";
import Add from "./components/KorpAdd";
import Form from "./components/KorpForm";
import './index.css'
import Whyus from "./components/KorpWhyus";
import KorpKaytering from "./components/KorpKaytering";
import KorpGuest from "./components/KorpGuest";
import { useState } from "react";
import Footer from "common/Footer";
import { Helmet } from 'react-helmet';
import Cookie from "common/Cookie";
const KorpLanding = () => {
   const links = [
      // { title: "Почему мы", link: "whyus" },
      { title: "Фотографии", link: "photo" },
      { title: "Локации", link: "locations" },
      { title: "Кейтеринг", link: "kay" },
      { title: "Доп услуги", link: "add" },
      { title: "Связаться со мной", link: "Form" },
   ];
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   return (
      <div>
         <Helmet>
            <title>Корпоративы и тимбилдинг в Подмосковье на берегу Икшинского водохранилища - Икша Кантри Клаб</title>
            <meta
               name="description"
               content="Корпоративы и самый эффективный тимбилдинг в Подмосковье с Икша Кантри Клаб - Корпоративные мероприятия а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть и укрепить командый дух на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Постройте свою лучшую команду на природе, недалеко от Москвы"
            />
            <meta
               name="title"
               content="Корпоративы и тимбилдинг в Подмосковье на природе, на берегу Икшинского водохранилища - Икша Кантри Клаб."
            />
            <meta
               name="keywords"
               content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
            />
         </Helmet>


         <div className="montserrat relative">

            <Header
               MenuClassName='montserrat bg-brown'
               isMenuOpen={isMenuOpen}
               toggleMenu={toggleMenu}
               links={links}
               className="montserrat bg-korpHeader text-grey"
            />
            <Hero />
            <Whyus />
            <Photo />
            <KorpLocations />
            <KorpKaytering />
            <KorpGuest />
            <Add />
            <Form />
            <Footer className="montserrat bg-korpHeader" />
         </div>
      </div>
   );
};

export default KorpLanding;
