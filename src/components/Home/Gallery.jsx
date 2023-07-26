import React from "react";
import GallerySlider from './helpers/GallerySlider';
import Slider from './helpers/Slider';

const Gallery = () => {
    const images = [
        '/image/gallery_back1.png',
        '/image/gallery_back2.png',
        '/image/gallery_back3.png',
        '/image/gallery_back4.png',
        '/image/gallery_back5.png',
        '/image/gallery_back6.png',
        '/image/gallery_back7.png',
        '/image/gallery_back8.png',
        '/image/gallery_back9.png',
    ];
    return (
        <section className="about_background back_settings relative" id="gallery">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/gallery_title.png" alt="" />
            </div>
            <GallerySlider images={images} />
            <img className="absolute -bottom-[2px] w-full" src="/image/gallery_translate_layer.png" alt="" />
            {/* <Slider images={images} /> */}
        </section>
    );
}

export default Gallery;
