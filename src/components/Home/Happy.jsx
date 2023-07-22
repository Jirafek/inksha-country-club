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

export default Happy;
