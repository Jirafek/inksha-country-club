import Header from "../common/Header";
import Hero from "../components/Hero";
import { Programa } from "components/Programa";
import Tariff from "../components/Tariff";
import Footer from "../common/Footer";
import React, { useState } from "react";

function Helloween() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <div className="text-white ">
            <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <div className={`${isMenuOpen ? "blur-sm" : ""}`}>
                <Hero />

                <Programa />

                <Tariff />
                <Footer />
            </div>
        </div>
    );
}

export default Helloween;
