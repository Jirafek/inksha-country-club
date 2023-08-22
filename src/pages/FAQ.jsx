import React, { useState } from "react";
import FixedFuter from '../components/Home/FixedFuter';
import { Helmet } from "react-helmet";

const faq_data = [
    {
        question: 'КАК ЗАБРОНИРОВАТЬ',
        answer: 'Выберите дату и кол-во гостей, локацию, введите свои имя и телефон, перейдите на страницу оплаты, введите данные карты. Как только мы получим оплату, вам на почту придёт письмо с подтверждением бронирования. С вами свяжется наш менеджер.'
    },
    {
        question: 'КАК ПРОЕХАТЬ',
        answer: 'Мы находимся в 25км от МКАД по Дмитровскому шоссе. Добраться можно на своем транспорте, вбив в навигатор "Икша Кантри Клаб", либо на такси от метро Алтуфьево, либо на электричке от Совёловского вокзала до станции Трудовая и затем 5 минут на такси.'
    },
    {
        question: 'ПРЕДОСТАВЛЯЕТЕ ЛИ ВЫ ПРИНАДЛЕЖНОСТИ ДЛЯ BBQ?',
        answer: 'Да! В бронирование входит мешок угля (2.5кг), розжиг (150мл), решетка и шампура (4шт)'
    },
    {
        question: 'МОЖНО ЛИ ПЕРЕНОСИТЬ БРОНЬ?',
        answer: 'Бронь можно переносить за 24 часа до заезда. Переносить бронь можно только 1 раз.'
    },
    {
        question: 'МОЖНО ЛИ ОТМЕНИТЬ БРОНЬ?',
        answer: 'Отмена брони возможна по согласованию с менеджером за 2 недели до мероприятия.',
    },
    {
        question: 'МОЖНО ЛИ С ПИТОМЦАМИ?',
        answer: 'Мы любим животных. Не забудьте нас предупредить о породе вашего хвостатого при бронировании.',
    },
    {
        question: 'РАБОТАЕТЕ ЛИ ВЫ КРУГЛЫЙ ГОД?',
        answer: 'Да',
    },
    {
        question: 'КАКИЕ МЕРОПРИЯТИЯ МОЖНО ПРОВЕСТИ?',
        answer: 'Мы проводим все виды мероприятий. Если какое-то мероприятие мы не проводим, смотрите первый пункт :).',
    },
    {
        question: 'ЕСТЬ ЛИ ПОДАРОЧНЫЙ СЕРТИФИКАТ?',
        answer: 'Вы можете осуществить бронь даты или услуги в подарок, сообщив об этом менеджеру. При необходимости мы вышлем вам онлайн-сертификат',
    },
    {
        question: 'КАК ЧАСТО УБИРАЮТСЯ В ДОМИКАХ?',
        answer: 'Перед заездом каждого гостя. Локации мы просим оставлять в опрятном состоянии, либо оплачивать клининг. При необходимости для ваших мероприятий предусмотрена работа клинера за доп. плату',
    },
    {
        question: 'МОЖНО ЛИ СО СВОЕЙ ЕДОЙ/НАПИТКАМИ?',
        answer: 'Да!',
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
            <section style={{ backgroundImage: 'url(/image/faq_bg.webp)' }} className="relative back_settings">
                <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                    <img className="absolute" src="/image/titles_bg.webp" alt="" />
                    <h2 className="text-[20px] text-white z-10 font-bold">ВОПРОС-ОТВЕТ</h2>
                </div>
                <div className="flex justify-center flex-col items-center gap-2 pb-[100px]">
                    {
                        faq_data.map((el, i) => (
                            <div className="flex items-center">
                                <img onClick={() => handleQuestionClick(i)} src="/image/faq_plus.webp" alt="" />
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <div className="rounded-[60px] border border-white w-[270px] py-[9px] monterey text-white text-center flex justify-center font-extrabold items-center text-[15px]" style={{ backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                                        {el.question}
                                    </div>
                                    <div style={{ backgroundColor: 'rgba(111, 98, 98, 0.54)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', display: `${expandedQuestion === i ? 'flex' : 'none'}` }} className="flex w-[230px] text-white text-[15px] font-semibold text-center px-1 rounded-[20px] border border-white justify-center items-center">
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
