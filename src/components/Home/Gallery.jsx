import React from "react";
import GallerySlider from './helpers/GallerySlider';
import Slider from './helpers/Slider';

// change TITLE

const Gallery = () => {
    const images = [
        '/image/gallery_back.png',
        '/image/gallery_back.png',
        '/image/gallery_back.png',
    ];
    return (
        <section className="about_background back_settings relative" id="gallery">
            <div className="m-0 flex flex-col items-center">
                <img src="/image/happy_title.png" alt="" />
            </div>
            <GallerySlider images={images} />
            <div className="pb-[240px]"></div>
            {/* <Slider images={images} /> */}
        </section>
    );
}

export default Gallery;
