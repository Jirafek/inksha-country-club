import React, { useState } from "react";

const Spec = () => {
    const [currentBg, setCurrentBg] = useState('spec_bg.webp');

    const handleChangeImage = () => {
        setCurrentBg(currentBg.includes('2') ? 'spec_bg.webp' : 'spec_bg2.webp')
    }

    return (
        <section id="spec" style={{ backgroundImage: `url(/image/${currentBg})` }} className="section back_settings relative h-[850px] transition-all duration-300 ease-in">
            <button onClick={handleChangeImage} style={currentBg.includes('2') ? { opacity: '1' } : { opacity: '0' }} className="transition-all z-30 duration-300 absolute right-[15px] top-[30px]">
                <img src="/image/close_btn.webp" alt="" />
            </button>
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h1 className="text-[20px] text-white z-10 font-bold">СПЕЦПРЕДЛОЖЕНИЯ</h1>
            </div>
            <div className=" flex justify-center mb-[80px]">
                <p className="text-[#000] text-center monterey text-[18px] w-[230px] mt-[30px]">ДАРИМ ИМЕННИНИКУ САП-ДОСКУ</p>
            </div>
            <div style={currentBg.includes('2') ? { opacity: '1' } : { opacity: '0' }} className="flex items-center ml-[15px] transition-all duration-300">
                <img src="/image/cake.webp" alt="" />
                <p className="w-[157px] text-center">Дарим Сап-доску именнинику на время заезда</p>
                <img src="/image/cake.webp" alt="" />
            </div>
            <button onClick={handleChangeImage} style={currentBg.includes('2') ? { opacity: '0', backgroundImage: 'url(/image/more_info_spec.webp)' } : { opacity: '1', backgroundImage: 'url(/image/more_info_spec.webp)' }} className="back_settings ml-3 relative h-[63px] w-[200px] flex justify-center items-center monterey text-[19px] font-bold">
                Подробнее
            </button>
        </section>
    );
}

export default Spec;
