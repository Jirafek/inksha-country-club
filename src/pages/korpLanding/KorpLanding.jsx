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
   );
};

export default KorpLanding;
