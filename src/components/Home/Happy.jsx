import React from "react";
import HappyClickableItems from './helpers/HappyClickableItems';
import HappyClickableItemsData from '../../utils/Home/HappyClickableItemsData';

const Happy = () => {
    return (
        <section id="happy" style={{ backgroundImage: 'url(/image/bg-happy.webp)' }} className="happy_background relative back_settings">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h2 className="text-[20px] text-white z-10 font-bold">РАЗВЛЕЧЕНИЯ</h2>
            </div>
            <HappyClickableItems arrayData={HappyClickableItemsData} />
            <img className="w-full absolute -bottom-5 z-20" src="/image/wood_translate.webp" alt="" />
        </section>
    );
}


{/* <div className="flex justify-center items-center w-[148px] h-[168px]">

<img className="rounded-full" src={el.img} alt="" />
</div> */}

export default Happy;
