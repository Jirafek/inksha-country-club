// import NotFound from 'pages/NotFound';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import {text_privicy, text_living} from './utils/Home/PrivicyTextHelper';

const Home = lazy(() => import('pages/Home'));
const Booking = lazy(() => import('pages/Booking'));
const Keitering = lazy(() => import('pages/Keitering'));
const DatesChooser = lazy(() => import('pages/DatesChooser'));
const GalleryAll = lazy(() => import('pages/GalleryAll'));
const HappySlider = lazy(() => import('pages/HappySlider'));
const Rules = lazy(() => import('pages/Rules'));
const NotFound = lazy(() => import('pages/NotFound'));
const Korporativy = lazy(() => import('pages/Korporativy'));
const FAQ = lazy(() => import('pages/FAQ'));
const LocationsSlider = lazy(() => import('pages/LocationsSlider'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/keitering' element={<Keitering />} />
      <Route path='/choose-date' element={<DatesChooser />} />
      <Route path='/gallery-all' element={<GalleryAll />} />
      <Route path='/choose-happy' element={<HappySlider />} />
      <Route path='/data-privicy' element={<Rules title="ПОЛИТИКА ДАННЫХ" isNeedButton={false} isNeedPadding={false} text={text_living} />} />
      <Route path='/live-rules' element={<Rules title="ПРАВИЛА ПРОЖИВАНИЯ ГОСТЕЙ В ИКША КАНТРИ КЛАБ" isNeedButton={true} isNeedPadding={true} text={text_privicy}  />} />
      <Route path='/korp' element={<Korporativy />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/locations-about' element={<LocationsSlider />} />
      <Route path='*' element={<NotFound />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
