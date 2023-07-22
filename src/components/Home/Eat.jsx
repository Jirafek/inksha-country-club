import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// change TITLE + BACKGROUND

const EatListData = [
    {
        img: '/image/fire.png',
        text: 'плов на костре', 
        openImage: '/image/plov.png'
    },
    {
        img: '/image/fish.png',
        text: 'финская уха на костре',
        openImage: '/image/uha.png'
    },
    {
        img: '/image/cooker.png',
        text: 'шашлык от Шефа',
        openImage: '/image/shah.png'
    },
];

const Eat = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openImage = (image) => {
      setSelectedImage(image);
    };
  
    const closeImage = () => {
      setSelectedImage(null);
    };

    return (
        <section id="eat" style={{ backgroundImage: 'url(/image/bg-happy.png)' }} className="happy_background relative back_settings">
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={closeImage}
          >
            <img src={selectedImage} alt="Opened Image" />
          </div>
        )}
            <div className="m-0 flex flex-col items-center">
                <img src="/image/happy_title.png" alt="" />
            </div>
            <img className="w-full mb-[5px]" src="/image/cook_cooker.png" alt="" />
            <div className="flex justify-center mb-[5px]">
                <div className="back_settings flex flex-col justify-around items-center h-[255px] w-[350px] relative py-3" style={{ backgroundImage: 'url(/image/cook_frame.png)', backgroundSize: 'auto' }}>
                    <h3 className="monterey text-lg font-semibold text-[#161212]">МЫ РАДЫ ПРЕДЛОЖИТЬ ВАМ</h3>
                    <img className="absolute top-[45px] left-[110px]" src="/image/ukr1.png" alt="" />
                    {
                        EatListData.map((el, i) => (
                            <div key={uuidv4()} className="flex gap-[5px] items-center self-start pl-7"  onClick={() => openImage(el.openImage)}>
                                <img src={el.img} alt="" />
                                <p className="text-[17px] text-[#161212] monterey underline">
                                    {el.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center pb-[66px]">
                <div
                    style={{ backgroundColor: 'rgba(166, 143, 129, 0.72)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
                    className="max-w-[360px] w-full h-[105px] rounded-[50px] border-white border py-[10px] flex flex-col items-center justify-center relative"
                >
                    <p className="monterey text-[17px] text-white text-center w-[300px]">Также мы готовы организовать для вас кейтеринг !</p>
                    <img className="absolute bottom-[14px] right-[10px]" src="/image/bulk.png" alt="" />
                    <button
                        style={{ backgroundColor: 'rgba(230, 234, 41, 0.60)' }}
                        className="w-[185px] h-[33px] border-[2px] border-[#645A53] backdrop-blur-[1px] rounded-[10px]"
                    >
                        Подробнее
                    </button>
                </div>
            </div>
            <img className="absolute bottom-0 left-4" src="/image/chair_left.png" alt="" />
            <img className="absolute -bottom-[65px] right-4" src="/image/chair_right.png" alt="" />
        </section>
    );
}

export default Eat;
