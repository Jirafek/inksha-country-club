import React from "react";
import HappyClickableItems from './helpers/HappyClickableItems';
import HappyClickableItemsData from '../../utils/Home/HappyClickableItemsData';

const Happy = () => {
    return (
        <section id="happy" style={{ backgroundImage: 'url(/image/bg-happy.webp)' }} className="section happy_background relative back_settings">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-50% translate-x-[-50%]" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>

                <h2 className="text-[20px] text-white z-10 font-bold">РАЗВЛЕЧЕНИЯ</h2>
            </div>
            <HappyClickableItems arrayData={HappyClickableItemsData} />

            <picture>
                <source srcSet="/avif/wood_translate.avif 1x" type="image/avif" />
                <img className="w-full absolute -bottom-5" src="/image/wood_translate.webp" alt="Икша Кантри Клаб" />
            </picture>
        </section>
    );
}


{/* <div className="flex justify-center items-center w-[148px] h-[168px]">

<img className="rounded-full" src={el.img} alt="" />
</div> */}

export default Happy;
