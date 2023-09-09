import React from "react";
import GallerySlider from './helpers/GallerySlider';
import Slider from './helpers/Slider';

const Gallery = () => {
    const images = [
        {
            avif: '/avif/gallery_back1.avif',
            webp: '/image/gallery_back1.webp'
        },
        {
            avif: '/avif/gallery_back2.avif',
            webp: '/image/gallery_back2.webp'
        },
        {
            avif: '/avif/gallery_back3.avif',
            webp: '/image/gallery_back3.webp'
        },
        {
            avif: '/avif/gallery_back4.avif',
            webp: '/image/gallery_back4.webp'
        },
        {
            avif: '/avif/gallery_back5.avif',
            webp: '/image/gallery_back5.webp'
        },
        {
            avif: '/avif/gallery_back6.avif',
            webp: '/image/gallery_back6.webp'
        },
        {
            avif: '/avif/gallery_back7.avif',
            webp: '/image/gallery_back7.webp'
        },
        {
            avif: '/avif/gallery_back8.avif',
            webp: '/image/gallery_back8.webp'
        },
        {
            avif: '/avif/gallery_back9.avif',
            webp: '/image/gallery_back9.webp'
        }
    ];
    return (
        <section className="section about_background back_settings relative" id="gallery">
            <div className="flex flex-col items-center justify-center relative h-[90px] z-10">
                <picture>
                    <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
                    <img className="absolute top-0 left-0" src="/image/titles_bg.webp" alt="Икша Кантри Клаб" />
                </picture>

                <h2 className="text-[20px] text-white z-10 font-bold">ГАЛЕРЕЯ</h2>
            </div>
            <GallerySlider images={images} />

            <picture>
                <source srcSet="/avif/gallery_translate_layer.avif 1x" type="image/avif" />
                <img className="absolute -bottom-[2px] w-full" src="/image/gallery_translate_layer.webp" alt="Икша Кантри Клаб" />
            </picture>
            {/* <Slider images={images} /> */}
        </section>
    );
}

export default Gallery;
