import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';
import FixedFuter from '../components/Home/FixedFuter';
import { CustomNextArrow, CustomPrevArrow } from "../components/Home/helpers/CustomEventArrows";
import { Helmet } from "react-helmet";

const blogData = [
    {
        title: 'Икша Кантри Клаб: Ваш идеальный отдых в подмосковье',
        image: '/image/blog_1.png',
        text: 'Мы рады приветствовать тебя в нашей лесной резиденции, расположенной на берегу Икшинского водохранилища, где ты сможешь насладиться отдыхом на природе и забыть обо всех повседневных заботах.'
    },
    {
        title: 'Организуйте корпоратив подмосковье: Икша Кантри Клаб',
        image: '/image/blog_2.png',
        text: 'Ищете идеальное место для организации корпоратива на природе? Икша Кантри Клаб - это отличный выбор для вас и вашей компании. Мы располагаемся на первой линии Икшинского'
    },
    {
        title: 'На свежем воздухе - корпоративы на природе в подмосковье',
        image: '/image/blog_3.png',
        text: 'Дорогие друзья, хотели бы вы провести незабываемый корпоратив или частное мероприятие на природе, где можно насладиться красотами леса и великолепными видами'
    },
];

const BlogAll = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow isBottom="470px" />,
        prevArrow: <CustomPrevArrow isBottom="470px" />,

    };
    return (
          <>
      <Helmet>
        <title>Загородный Отдых в Подмосковье - Увлекательные истории от Икша Кантри Клаб</title>
        <meta
          name="description"
          content="Загородный Отдых в Подмосковье - Посетители Икша Кантри Клаб делятся своими незабываемыми впечатлениями. Приезжайте отдохнуть на берегу Икшинского водохранилища
            и убедитесь сами."
        />
            <meta
          name="title"
          content="Загородный Отдых в Подмосковье - Захватывающие истории и впечатления от Икша Кантри Клаб ."
        />
            <meta
          name="keywords"
          content="загородный отдых, загородный клуб, загородный, Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, катание, домик, беседки"
        />
      </Helmet>
        <section style={{ backgroundImage: 'url(/image/about_bg_styled.webp)' }} className="back_settings relative">
            <div className="flex flex-col items-center justify-center relative h-[110px] pt-[25px]">
                <img alt="" className="absolute" src="/image/blog_title_bg.webp" />
                <h2 className="text-[20px] text-white z-10 font-bold">Икша Кантри Клаб</h2>
            </div>
            <Slider className="pb-16" {...settings}>
                {
                    blogData.map((el, i) => (
                        <div key={uuidv4()} className="flex flex-col items-center justify-center mt-3">
                            <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className="bg-[#EAD3B5] border-[2px] border-[#685842] mx-[40px]">
                                <p className="text-center">
                                    {
                                        el.title
                                    }
                                </p>
                            </div>
                            <div className="flex justify-center py-3">
                                <img src={el.image} alt="" />
                            </div>
                            <div className="flex justify-center">
                                <div style={{ backgroundImage: 'url(/image/blog_textholder.png)' }} className="back_settings w-[335px] h-[300px] p-6 relative text-center">
                                    <p>
                                        {
                                            el.text
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <FixedFuter link="#blog" needRotate={true} />
        </section>
               </>
    );
}

export default BlogAll;
