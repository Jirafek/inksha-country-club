import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import BookingCalendar from '../BookPicker';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import VideoPlayer from './VideoPlayer';
import {Link, useLocation} from 'react-router-dom'

const heading = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headingLines = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(100% 0px 0px)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0px 0px)',
    transition: {
      ease: 'easeOut',
      duration: 1.5,
    },
  },
};

const Welcome = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.bronirui-online.ru/js/app.js';
    script.async = true;

    const initializeWidget = () => {
      window.znmsWidget.init('#znms-widget-1', {
        moduleId: 5026,
        index: 0,
        widget: {
          position: {
            top: '100px',
          },
          mobile: {
            absolute: false,
            color: undefined,
            position: {
              top: '100px',
            },
          },
        },
        button: {
          position: {
            bottom: '50px',
            left: '50px',
            right: '50px',
          },
        },
      });

      // Примените ваши стили после инициализации виджета
      const customStyles = `


      .znms-widget__module-form-block__btn {
        background-color: rgba(12, 242, 89, 0.50) !important;
        border-radius: 30px !important;
        border: 1px solid #000 !important;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) !important;
        font-size: 18px !important;
        margin-top: 13px !important;
        height: 35px !important;
        display: flex !important;А
        justify-content: center !important;
        align-items: center !important;
      }
          .znms-widget__main-wrapper {
            background-color: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            --tw-backdrop-blur: none !important;
          }

          .znms-widget__teleporter {
            position: relative;
            bottom: -100px;
          }

          .znms-widget__v-calendar-pane-container {
            z-index: 2000 !important;
          }

          .znms-widget__module-form-block {
            background-color: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            --tw-backdrop-blur: none !important;
            bottom: 20px;
          }

          .znms-widget__module-form-block__title, .znms-widget__widget-btn.znms-widget__v-color4 {
            display: none !important;
          }

          .znms-widget__module-form-block__items--links-container {
            display: none !important;
          }

          .znms-widget__module-form-block__item {
            opacity: 0.9;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            height: 35px !important;
          }

          .znms-widget__v-calendar-popover-content-wrapper {
            z-index: 100 !important;
          }
        `;
      const styleElement = document.createElement('style');
      styleElement.innerHTML = customStyles;
      document.head.appendChild(styleElement);
    };
    script.onload = initializeWidget;
    document.body.appendChild(script);
    setTimeout(() => {

      const doskaContainer = document.querySelector('.doska-container'),
        skyContainer1 = document.querySelector('.sky1'),
        skyContainer2 = document.querySelector('.sky2');

      skyContainer1.classList.add('animate-moveSky1');
      skyContainer2.classList.add('animate-moveSky2');
      doskaContainer.classList.add('animate-moveDoska');
    }, 1500)
  }, []);

  // window.addEventListener("hashchange", function () {
  //   // Получить текущий URL с хэшем
  //   var currentUrlWithHash = window.location.href;
  //
  //   console.log(currentUrlWithHash)
  //
  //   // Можно также получить только хэш
  //   var currentHash = window.location.hash;
  //   console.log(currentHash)
  //
  //   // Здесь ты можешь выполнить действия при изменении ссылки
  //   // Например, управлять z-index для модуля бронирования и контента
  // });

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  }

  useEffect(() => {
    // BookingCalendar([], 'zaezd'); // get data from FireBase
    // BookingCalendar([], 'viezd'); // get data from FireBase
    setTimeout(() => {
      document.querySelector('.animate-moveSky1').style.display = 'none'
      document.querySelector('.animate-moveSky2').style.display = 'none'
    }, 4500)
  }, []);
  return (
    <section id='book' className="welcome relative m-0">
      <picture>
        <source srcSet="/avif/bg1.avif 1x" type="image/avif" />
        <img className="w-full h-[100%] object-cover" src="/image/bg1.webp" alt="Икша Кантри Клаб" />
      </picture>

      {/* <VideoPlayer /> */}
      {/* <div className="absolute z-30 bottom-0 w-full bg-transparent">
      <div className="absolute z-[1] bottom-0 w-full bg-transparent">
        <img className="bg-transparent" src="/image/volna.gif" alt="GIF Image" />
      </div> */}
      <div style={{ transform: 'translateX(-50%)' }} className='absolute top-0 left-1/2 w-[260px] doska-container'>
        <picture>
          <source srcSet="/avif/doska.avif 1x" type="image/avif" />
          <img className='w-full h-full' src="/image/doska.webp" alt="Икша Кантри Клаб" />
        </picture>
        <a className='absolute left-1/2 bottom-[4rem]' style={{ transform: 'translateX(-50%)' }} href="#about">
          <picture>
            <source srcSet="/avif/about.avif 1x" type="image/avif" />
            <img className='w-[80px]' src="/image/about.webp" alt="Икша Кантри Клаб" />
          </picture>

        </a>
        <a className='absolute left-1/2 bottom-[25px]' style={{ transform: 'translateX(-50%)' }} href="tel:+74995055031">
          <picture>
            <source srcSet="/avif/call.avif 1x" type="image/avif" />
            <img className='w-[44px]' src="/image/call.webp" alt="Икша Кантри Клаб" />
          </picture>
        </a>
      </div>
      <picture>
        <source srcSet="/avif/sky1.avif 1x" type="image/avif" />
        <img className='absolute top-0 left-0 sky1 z-[21]' src="/image/sky1.webp" alt="Икша Кантри Клаб" />
      </picture>
      <picture>
        <source srcSet="/avif/sky2.avif 1x" type="image/avif" />
        <img className='absolute top-0 right-0 sky2 z-[21]' src="/image/sky2.webp" alt="Икша Кантри Клаб" />
      </picture>
      <div
        style={{ transform: 'translateX(-50%)' }}
        className='absolute left-1/2 w-full bottom-[8.5rem]'
      >
        <div id="znms-widget-1"></div>
        <Link to="/popup">
          <button className="absolute flex items-center justify-center left-1/2 h-12 w-[3rem] animated_connection_btn bg-green-500 border-[2px] rounded-[48px] border-white pl-2 -translate-x-1/2 -bottom-[8rem]">
            <div className="relative h-12 w-full flex items-center">
              <p className="text-white animated_text_appearing opacity-0">Свяжитесь со мной</p>
              <div className="absolute right-0 top-0">
                <div className="w-12 h-12 bg-green-500 border-[2px] border-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </Link>

      </div>
    </section>
  );
}

export default Welcome;
