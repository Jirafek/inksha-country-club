import React from "react";
import GallerySlider from './helpers/GallerySlider';
import Slider from './helpers/Slider';

const Gallery = () => {
    const images = [
        '/image/gallery_back1.webp',
        '/image/gallery_back2.webp',
        '/image/gallery_back3.webp',
        '/image/gallery_back4.webp',
        '/image/gallery_back5.webp',
        '/image/gallery_back6.webp',
        '/image/gallery_back7.webp',
        '/image/gallery_back8.webp',
        '/image/gallery_back9.webp',
    ];
    return (
        <section className="section about_background back_settings relative" id="gallery">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <img className="absolute" src="/image/titles_bg.webp" alt="" />
                <h2 className="text-[20px] text-white z-10 font-bold">ГАЛЕРЕЯ</h2>
            </div>
            <GallerySlider images={images} />
            <img className="absolute -bottom-[2px] w-full" src="/image/gallery_translate_layer.webp" alt="" />
            {/* <Slider images={images} /> */}
        </section>
    );
}

export default Gallery;
