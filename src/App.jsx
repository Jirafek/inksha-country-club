import React, { useState, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { text_privicy, text_living } from "./utils/Home/PrivicyTextHelper";
import { updateData, URLData } from "./utils/URLData";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Keitering from "./pages/Keitering";
import DatesChooser from "./pages/DatesChooser";
import GalleryAll from "./pages/GalleryAll";
import HappySlider from "./pages/HappySlider";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound";
import Korporativy from "./pages/Korporativy";
import KorpSlider from "./pages/KorpSlider";
import FAQ from "./pages/FAQ";
import LocationsSlider from "./pages/LocationsSlider";
import BlogAll from "./pages/BlogAll";
import FormCalculate from "./pages/FormCalculate";
import Thanks from "./pages/Thanks";
import Popup from "./pages/Popup";
import Helloween from "./pages/Helloween";
import KorpLanding from "./pages/korpLanding/KorpLanding";
import Cookies from "js-cookie";
import Cookie from './common/Cookie';
import NYLanding from './pages/newYear/NYLanding';
// const Home = lazy(() => import("pages/Home"));
// const Booking = lazy(() => import("pages/Booking"));
// const Keitering = lazy(() => import("pages/Keitering"));
// const DatesChooser = lazy(() => import("pages/DatesChooser"));
// const GalleryAll = lazy(() => import("pages/GalleryAll"));
// const HappySlider = lazy(() => import("pages/HappySlider"));
// const Rules = lazy(() => import("pages/Rules"));
// const NotFound = lazy(() => import("pages/NotFound"));
// const Korporativy = lazy(() => import("pages/Korporativy"));
// const KorpSlider = lazy(() => import("pages/KorpSlider"));
// const FAQ = lazy(() => import("pages/FAQ"));
// const LocationsSlider = lazy(() => import("pages/LocationsSlider"));
// const BlogAll = lazy(() => import("pages/BlogAll"));
// const FormCalculate = lazy(() => import("pages/FormCalculate"));
// const Thanks = lazy(() => import("pages/Thanks"));
// const Popup = lazy(() => import("pages/Popup"));
// const Helloween = lazy(() => import("pages/Helloween"));

function App() {
    const [isCookieOpen, setIsCookieOpen] = useState(true);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const cookieData = {
            utm_source: Cookies.get('utm_source'),
            utm_campaign: Cookies.get('utm_campaign'),
            utm_content: Cookies.get('utm_content'),
        };

        const settedData = [
            cookieData.utm_source !== undefined ? cookieData.utm_source : URLData.utm_source
                ? URLData.utm_source
                : urlParams.get("utm_source") || "Сайт",

            cookieData.utm_campaign !== undefined ? cookieData.utm_campaign : URLData.utm_campaign
                ? URLData.utm_campaign
                : urlParams.get("utm_campaign") || "",

            cookieData.utm_content !== undefined ? cookieData.utm_content : URLData.utm_content
                ? URLData.utm_content
                : urlParams.get("utm_content") || ""
        ];

        updateData(
            ...settedData
        );

        if (cookieData.utm_source === undefined && urlParams.get("utm_source") !== null) {
            Cookies.set('utm_source', urlParams.get("utm_source"), { expires: Infinity });
        }
        if (cookieData.utm_campaign === undefined && urlParams.get("utm_campaign") !== null) {
            Cookies.set('utm_campaign', urlParams.get("utm_campaign"), { expires: Infinity });
        }
        if (cookieData.utm_content === undefined && urlParams.get("utm_content") !== null) {
            Cookies.set('utm_content', urlParams.get("utm_content"), { expires: Infinity });
        }

    }, []);

    return (
        <div className='relative'>
            <Cookie isCookieOpen={isCookieOpen} setIsCookieOpen={setIsCookieOpen} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/keitering" element={<Keitering />} />
                <Route path="/choose-date" element={<DatesChooser />} />
                <Route path="/gallery-all" element={<GalleryAll />} />
                <Route path="/choose-happy" element={<HappySlider />} />
                <Route
                    path="/data-privicy"
                    element={
                        <Rules
                            title="ПОЛИТИКА ДАННЫХ"
                            isNeedButton={false}
                            isNeedPadding={false}
                            text={text_living}
                        />
                    }
                />
                <Route
                    path="/live-rules"
                    element={
                        <Rules
                            title="ПРАВИЛА ПРОЖИВАНИЯ ГОСТЕЙ В ИКША КАНТРИ КЛАБ"
                            isNeedButton={true}
                            isNeedPadding={true}
                            text={text_privicy}
                        />
                    }
                />
                <Route path="/korp" element={<KorpSlider />} />
                <Route path="/korp/book" element={<Korporativy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/locations-about" element={<LocationsSlider />} />
                <Route path="/blog-all" element={<BlogAll />} />
                <Route path="/form/:amount" element={<FormCalculate />} />
                <Route path="/halloween" element={<Helloween />} />
                <Route path="/popup" element={<Popup />} />
                <Route path="/thanks" element={<Thanks />} />
                <Route path="/korp-landing" element={<KorpLanding />} />
                <Route path="/New-Year" element={<NYLanding />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
