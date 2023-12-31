import { useEffect, useRef } from "react"
// import { useInView } from 'react-intersection-observer'
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { v4 as uuidv4 } from 'uuid'
const GallerySlider = ({ images }) => {
  const sliderRef = useRef(null)

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // })
  // console.log(inView)
  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.slickGoTo(0) // сбросить слайдер на первый слайд при обновлении компонента
    }
  }, [images])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true, // Добавляем centerMode
    centerPadding: "100px", // Расстояние между слайдами
    beforeChange: (_, nextSlide) => {
      // console.log('changed')
      tiltSlider(nextSlide)
    },
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
          centerMode: true,
        },
      },
    ],
  }

  const tiltSlider = (slideIndex) => {
    const slider = document.querySelector(".slick-slider")
    if (slider) {
      const slideWidth = slider.offsetWidth
      const slideHeight = slider.offsetHeight
      const tiltAngle = Math.atan(slideHeight / slideWidth)
      const tiltAngleDeg = tiltAngle * (180 / Math.PI)
      const transformOrigin = `${slideWidth}px ${slideHeight}px 0`
      const transform = `translate(-50%, -50%) rotate(${-tiltAngleDeg}deg)`
      slider.style.transformOrigin = transformOrigin
      slider.style.transform = transform
      slider.style.marginLeft = window.innerWidth < 370 ? '450px' : '400px'
    }
  }

  const handleImageClick = (index) => {
    console.log(`Clicked on image at index ${index}`)
  }

  return (
    <div className="gallery-slider" style={{ height: "500px", overflow: "hidden" }}>
      <Slider className="w-[900px] z-20" {...settings} ref={sliderRef}>
        {images.map(({ avif, webp }, index) => (
          <Link to="/gallery-all" key={uuidv4()} className="flex items-center justify-center">
            <picture>
              <source srcSet={`${avif} 1x`} type="image/avif" />
              <img
                src={webp}
                alt={`Слайд №${index + 1}`}
                onClick={() => handleImageClick(index)}
                style={{ transform: 'rotate(30deg)' }}
              />
            </picture>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default GallerySlider
