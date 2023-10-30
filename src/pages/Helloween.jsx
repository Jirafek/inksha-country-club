import Header from "../common/Header";
import Hero from "../components/Hero";
import { Programa } from "components/Programa";
import Tariff from "../components/Tariff";
import Footer from "../common/Footer";
import React, { useState } from "react";

function Helloween() {
   const links = [
   { title: "Программа", link: "Programa" },
   { title: "Тарифы", link: "Tariff" },
   { title: "Связаться со мной", link: "Form" },
];
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
   };
   return (
      <div className="text-white ">
         <Header
            MenuClassName='druk bg-violet'
            links={links}
            className="druk bg-darkViolet"
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
         />
         <div className={`${isMenuOpen ? "blur-sm" : ""}`}>
            <Hero />

            <Programa />

            <Tariff />
            <Footer className='bg-darkViolet druk'/>
         </div>
      </div>
   );
}

export default Helloween;
