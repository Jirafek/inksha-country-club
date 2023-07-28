import React, { useState } from "react";

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
        <section style={{ backgroundImage: 'url(/image/faq_bg.png)' }} className="relative back_settings h-[851px]">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/faq_title.png" alt="" />
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
                {
                    faq_data.map((el, i) => (
                        <div className="flex items-center">
                            <img onClick={() => handleQuestionClick(i)} src="/image/faq_plus.png" alt="" />
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="rounded-[60px] border border-white w-[270px] py-[9px] monterey text-white text-center flex justify-center font-extrabold items-center text-[15px]" style={{ backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                                    {el.question}
                                </div>
                                <div style={{backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', display: `${expandedQuestion === i ? 'flex' : 'none'}`}} className="flex w-[230px] text-white text-center px-1 rounded-[60px] border border-white justify-center items-center">
                                    {el.answer}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default FAQ;
