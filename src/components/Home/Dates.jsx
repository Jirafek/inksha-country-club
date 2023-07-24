import React from "react";

// GEt data from firebase

const Dates = () => {
    return (
        <section id="dates" style={{ backgroundImage: 'url(/image/dates_bg.png)' }} className="back_settings relative">
            <div className="flex flex-col items-center">
                <img src="/image/dates_title.png" alt="" />
            </div>
            <div className="flex justify-center mb-3">
                <img className="heart" src="/image/heart_dates.png" alt="" />
            </div>
            <div className="flex justify-center mb-3">
                <div style={{backgroundImage: 'url(/image/dates_test_bg.png)'}} className="back_settings w-[313px] h-[152px] py-3 px-[18px] text-center monterey font-medium text-[14px]">
                Романтическая атмосфера, закат на воде, ужин при свечах и рассвет над кронами деревьев, именно так и должно выглядеть идеальное свидание, и вы знаете где его провести.
                </div>
            </div>
            <div className="flex justify-center relative mb-[30px]">
                <div style={{backgroundImage: 'url(/image/dates_photo_cup.png)'}} className="back_settings w-[330px] h-[205px] flex justify-center items-center z-20">
                </div>
                <img style={{transform: 'translateX(-50%) translateY(-50%)'}} className="w-[310px] absolute left-1/2 top-1/2" src="/image/dates_people_photo.png" alt="" />
            </div>
            <div className="flex justify-center pb-32">
                <button style={{backgroundImage: 'url(/image/choose_date.png)'}} className="back_settings w-[205px] h-[70px]"></button>
            </div>
        </section>
    );
}

export default Dates;
