import React from "react";
import { Link } from "react-router-dom";

const blogData = [
    {
        title: 'Икша Кантри Клаб: Ваш идеальный отдых в подмосковье',
        text: 'Мы рады приветствовать тебя в нашей лесной резиденции, расположенной на берегу Икшинского водохранилища, где ты сможешь насладиться отдыхом на природе и забыть обо всех повседневных заботах.'
    },
    {
        title: 'Организуйте корпоратив подмосковье: Икша Кантри Клаб',
        text: 'Ищете идеальное место для организации корпоратива на природе? Икша Кантри Клаб - это отличный выбор для вас и вашей компании. Мы располагаемся на первой линии Икшинского'
    },
    {
        title: 'На свежем воздухе - корпоративы на природе в подмосковье ',
        text: 'Дорогие друзья, хотели бы вы провести незабываемый корпоратив или частное мероприятие на природе, где можно насладиться красотами леса и великолепными видами'
    },
];

const Blog = () => {
    return (
        <section className="section back_settings about_background" id="blog">
            <div className="flex flex-col items-center justify-center relative h-[110px] pt-[25px]">
                <picture>
                    <source srcSet="/avif/blog_title_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-2 left-50% translate-x-[-50%]" src="/image/blog_title_bg.webp" alt="Икша Кантри Клаб" />
                </picture>
                <h2 className="text-[20px] text-white z-10 font-bold">Икша Кантри Клаб</h2>
            </div>
            <div className="flex flex-col items-center px-3 gap-4 mb-4 mt-5">
                {
                    blogData.map((el, i) => {
                        return (
                            <Link to="/blog-all" className="h-[160px] w-full bg-white rounded-[50px] border border-[#AB8E67] pt-5 pb-1 px-7 gap-3 relative" key={el.title}>
                                <h2 className="font-bold text-[16px] text-center">{el.title}</h2>
                                <p className="text-[15px] text-center text-clip">{
                                    el.text.length > 140 ?
                                        el.text.slice(0, 110) + "..."
                                        :
                                        el.text}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <div className="flex justify-center pb-[35px]">
                <Link to="/blog-all" className="w-[218px] h-[62px] flex justify-center items-center back_settings" style={{ backgroundImage: 'url(/image/req_title_bg.webp)' }}>
                    <p className="text-white text-center">посмотреть все</p>
                </Link>
            </div>
        </section>
    );
}

export default Blog;
