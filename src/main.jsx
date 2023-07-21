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
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
);
