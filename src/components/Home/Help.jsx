import React from "react";

const Help = () => {
    return (
        <section id="help" style={{ backgroundImage: 'url(/image/bron_how_bg.webp)' }} className="section back_settings flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center mt-[35px]">
                <picture>
                    <source srcSet="/avif/bron_textholder.avif 1x" type="image/avif" />
                    <img src="/image/bron_textholder.webp" alt="Икша Кантри Клаб" />
                </picture>

            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-3 items-center mr-16">
                    <div style={{ backgroundImage: 'url(/image/bron_num_bg.webp)' }} className="back_settings w-[60px] h-[62px] font-extrabold flex justify-center items-center monterey text-[20px] text-white">1</div>
                    <p className="text-white text-[22px] font-semibold" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>ЗАПОЛНИ ФОРМУ</p>
                </div>

                <picture>
                    <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
                    <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
                </picture>

                <div className="flex gap-3 items-center mr-16">
                    <div style={{ backgroundImage: 'url(/image/bron_num_bg.webp)' }} className="back_settings w-[60px] h-[62px] font-extrabold flex justify-center items-center monterey text-[20px] text-white">2</div>
                    <p className="text-white text-[22px] font-semibold" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>ПРОВЕРЬ ПОЧТУ</p>
                </div>

                <picture>
                    <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
                    <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
                </picture>

                <div className="flex gap-3 items-center mr-16">
                    <div style={{ backgroundImage: 'url(/image/bron_num_bg.webp)' }} className="back_settings w-[60px] h-[62px] font-extrabold flex justify-center items-center monterey text-[20px] text-white">3</div>
                    <p className="text-white text-[22px] font-semibold" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>ОПЛАТИ</p>
                </div>

                <picture>
                    <source srcSet="/avif/str_down.avif 1x" type="image/avif" />
                    <img src="/image/str_down.webp" alt="Икша Кантри Клаб" />
                </picture>

                <picture>
                    <source srcSet="/avif/bron_ok.avif 1x" type="image/avif" />
                    <img src="/image/bron_ok.webp" alt="Икша Кантри Клаб" />
                </picture>

                <p style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className="text-white w-[290px] pb-20 text-[19px] font-extrabold text-center">ОЖИДАЙ ЗВОНКА ОТ ОПЕРАТОРА</p>
            </div>
        </section>
    );
}

export default Help;
