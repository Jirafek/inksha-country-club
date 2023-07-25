import React, { useState } from "react";

const Spec = () => {
    const [currentBg, setCurrentBg] = useState('spec_bg.png');

    const handleChangeImage = () => {
        setCurrentBg(currentBg.includes('2') ? 'spec_bg.png' : 'spec_bg2.png')
    }

    return (
        <section id="spec" style={{ backgroundImage: `url(/image/${currentBg})` }} className="back_settings relative h-[850px] transition-all duration-300 ease-in">
            <button onClick={handleChangeImage} style={currentBg.includes('2') ? { opacity: '1' } : { opacity: '0' }} className="transition-all z-30 duration-300 absolute right-[15px] top-[30px]">
                <img src="/image/close_btn.png" alt="" />
            </button>
            <div style={currentBg.includes('2') ? { opacity: '0' } : { opacity: '1' }} className="m-0 flex flex-col items-center transition-all duration-300">
                <img src="/image/spec_bg_title.png" alt="" />
            </div>
            <div className=" flex justify-center mb-[80px]">
                <p className="text-[#000] text-center monterey text-[18px] w-[230px] mt-[30px]">ДАРИМ ИМЕННИНИКУ САП-ДОСКУ</p>
            </div>
            <div style={currentBg.includes('2') ? { opacity: '1' } : { opacity: '0' }} className="flex items-center ml-[15px] transition-all duration-300">
                <img src="/image/cake.png" alt="" />
                <p className="w-[157px] text-center">Дарим Сап-доску именнинику на время заезда</p>
                <img src="/image/cake.png" alt="" />
            </div>
            <button onClick={handleChangeImage} style={currentBg.includes('2') ? { opacity: '0', backgroundImage: 'url(/image/more_info_spec.png)' } : { opacity: '1', backgroundImage: 'url(/image/more_info_spec.png)' }} className="back_settings ml-3 relative h-[63px] w-[200px] flex justify-center items-center monterey text-[19px] font-bold">
                Подробнее
            </button>
        </section>
    );
}

export default Spec;
