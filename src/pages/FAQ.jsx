import React, { useState } from "react";
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";

const faq_data = [
    {
        question: 'КАК ЗАБРОНИРОВАТЬ',
        answer: 'Нажмите на кнопку на главном экране'
    },
    {
        question: 'КАК ПРОЕХАТЬ',
        answer: 'Посмотрите видео в разделе контакты'
    },
    {
        question: 'МОЖНО ЛИ ПЕРЕНОСИТЬ БРОНЬ?',
        answer: 'Да, можно!'
    },
    {
        question: 'МОЖНО  ЛИ С ПИТОМЦАМИ?',
        answer: 'Конечно'
    },
    {
        question: 'РАБОТАЕТЕ ЛИ ВЫ КРУГЛЫЙ ГОД?',
        answer: 'Всегда!'
    },
    {
        question: 'КАКИЕ МЕРОПРИЯТИЯ МОЖНО ПРОВЕСТИ?',
        answer: 'По вашим желаниям - любые'
    },
    {
        question: 'ЕСТЬ ЛИ ПОДАРОЧНЫЙ СЕРТИФИКАТ?',
        answer: 'Конечно!'
    },
    {
        question: 'КАК ЧАСТО УБИРАЮТСЯ В ДОМИКАХ?',
        answer: 'Каждый день'
    },
    {
        question: 'МОЖНО ЛИ СО СВОЕЙ ЕДОЙ/ НАПИТКАМИ?',
        answer: 'Да, конечно'
    },
];

const FAQ = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setExpandedQuestion(index === expandedQuestion ? null : index);
    };
    return (
         <>
      <Helmet>
        <title>Отдых в Подмосковье с Икша Кантри Клаб - Вопросы и Ответы</title>
        <meta
          name="description"
          content="Отдых в Подмосковье с Икша Кантри Клаб - Отвечаем на частые вопросы наши клиентов. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами."
        />
            <meta
          name="title"
          content="Отдых в Подмосковье с Икша Кантри Клаб - FAQ (Частые вопросы и ответы)."
        />
            <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, катание, домик, беседки"
        />
      </Helmet>
        <section style={{ backgroundImage: 'url(/image/faq_bg.webp)' }} className="relative back_settings h-[851px]">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h1 className="text-[20px] text-white z-10 font-bold">ВОПРОС-ОТВЕТ</h1>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
                {
                    faq_data.map((el, i) => (
                        <div className="flex items-center">
                            <img onClick={() => handleQuestionClick(i)} src="/image/faq_plus.webp" alt="" />
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="rounded-[60px] border border-white w-[270px] py-[9px] monterey text-white text-center flex justify-center font-extrabold items-center text-[15px]" style={{ backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                                    {el.question}
                                </div>
                                <div style={{ backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', display: `${expandedQuestion === i ? 'flex' : 'none'}` }} className="flex w-[230px] text-white text-center px-1 rounded-[60px] border border-white justify-center items-center">
                                    {el.answer}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <FixedFuter link="/#contacts" needRotate={true} />
        </section>
              </>
    );
}

export default FAQ;
