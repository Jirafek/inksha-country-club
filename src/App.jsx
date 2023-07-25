// import NotFound from 'pages/NotFound';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Home = lazy(() => import('pages/Home'));
const Booking = lazy(() => import('pages/Booking'));
const Keitering = lazy(() => import('pages/Keitering'));
const DatesChooser = lazy(() => import('pages/DatesChooser'));
const GalleryAll = lazy(() => import('pages/GalleryAll'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/keitering' element={<Keitering />} />
      <Route path='/choose-date' element={<DatesChooser />} />
      <Route path='/gallery-all' element={<GalleryAll />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
