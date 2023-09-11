import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';
import BookingCalendar from '../BookPicker';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import VideoPlayer from './VideoPlayer';
import { useLocation } from 'react-router-dom'

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
            bottom: -50px;
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
        <a className='absolute left-1/2 bottom-[25px]' style={{ transform: 'translateX(-50%)' }} href="tel:+79859091202">
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
        <m.form
          initial='hidden'
          // whileInView='visible'
          // viewport={{ once: true }}
          // variants={heading}
          onSubmit={handleSubmit(onSubmit)}
          className='px-16 hidden'>
          <m.div className='relative w-full mb-2'> {/*  variants={headingLines} */}
            <picture>
              <source srcSet="/avif/calendar.avif 1x" type="image/avif" />
              <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.webp" alt="Икша Кантри Клаб" />
            </picture>
            <input style={errors.zaezd && { borderColor: 'red' }} {...register("zaezd", { required: true })} id='zaezd' placeholder='ЗАЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.div className='relative w-full mb-2'>
            <picture>
              <source srcSet="/avif/calendar.avif 1x" type="image/avif" />
              <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/calendar.webp" alt="Икша Кантри Клаб" />
            </picture>
            <input style={errors.viezd && { borderColor: 'red' }} {...register("viezd", { required: true })} id='viezd' placeholder='ВЫЕЗД' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.div className='relative w-full mb-2'>
            <picture>
              <source srcSet="/avif/persone.avif 1x" type="image/avif" />
              <img style={{ transform: 'translateY(-50%)' }} className='absolute top-1/2 left-[15px]' src="/image/persone.webp" alt="Икша Кантри Клаб" />
            </picture>
            <input style={errors.people && { borderColor: 'red' }} {...register("people", { required: true })} placeholder='КОЛИЧЕСТВО ЧЕЛОВЕК' className='w-full outline-none rounded-[30px] border-2 border-black bg-opacity-75 bg-gray-300 shadow-md pl-12 input_for_calendar h-9' type="text" />
          </m.div>
          <m.button type='submit' className='w-full rounded-[30px] border border-black bg-[#0CF259] bg-opacity-50 shadow-md monterey text-white font-semibold text-lg h-9'>
            Посмотреть
          </m.button>
        </m.form>
      </div>
    </section>
  );
}

export default Welcome;
