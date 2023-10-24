import React, { useState, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { text_privicy, text_living } from "./utils/Home/PrivicyTextHelper";
import { updateData } from "./utils/URLData";

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
   return (
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
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

export default App;
