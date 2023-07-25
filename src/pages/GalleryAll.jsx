import React from "react";
import { v4 as uuid4 } from "uuid";

const images = [
    'gallery-all1.png',
    'gallery-all2.png',
    'gallery-all3.png',
    'gallery-all5.png',
    'gallery-all6.png',
    'gallery-all7.png',
];

const GalleryAll = () => {
    return (
        <section style={{height: '100vh'}} className="about_background back_settings relative">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/gallery_title.png" alt="" />
            </div>

            <div className="flex justify-center">
            <div className="grid grid-cols-2">
                {
                    images.map((el, i) => (
                        <img className="max-w-[135px]" key={uuid4()} src={`/image/${el}`} alt="" />
                    ))
                }
            </div>
            </div>
        </section>
    );
}

export default GalleryAll;
