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
        <section className="about_background back_settings relative" id="gallery">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/gallery_title.webp" alt="" />
            </div>
            <GallerySlider images={images} />
            <img className="absolute -bottom-[2px] w-full" src="/image/gallery_translate_layer.webp" alt="" />
            {/* <Slider images={images} /> */}
        </section>
    );
}

export default Gallery;
