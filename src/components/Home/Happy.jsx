import React from "react";
import HappyClickableItems from './helpers/HappyClickableItems';
import HappyClickableItemsData from '../../utils/Home/HappyClickableItemsData';

const Happy = () => {
    return (
        <section id="happy" style={{backgroundImage: 'url(/image/bg-happy.png)'}} className="happy_background relative back_settings">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/happy_title.png" alt="" />
            </div>
            <HappyClickableItems arrayData={HappyClickableItemsData} />
        </section>
    );
}


{/* <div className="flex justify-center items-center w-[148px] h-[168px]">

<img className="rounded-full" src={el.img} alt="" />
</div> */}

export default Happy;
