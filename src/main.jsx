import { domAnimation, LazyMotion } from 'framer-motion';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts.css';
import './index.css';
import './fonts/Lato-Regular.ttf'
import './fonts/MontserratAlternates-Regular.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> <img src="/image/download.gif" alt="" /> </div>}>
        <App />
      </Suspense>
    </LazyMotion>
  </BrowserRouter>
);
