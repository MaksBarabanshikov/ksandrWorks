import React from "react";
import Slider from "react-slick"
import img from "../../image/slider-test.jpg"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";

const HelloModalSlider = () => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NewNextArrow />,
        prevArrow: <NewPrevArrow />
    }

    let images = [
        {src: img, key: 0},
        {src: img, key: 1},
        {src: img, key: 2},
        {src: img, key: 3}
    ]

    return (
        <div className="modal__body_main-slider">
            <Slider {...settings}>
                {images.map(img => (
                    <div className="modal__body-slide-cont" key={img.key}>
                        <div style={{backgroundImage: `url(${img.src})`}} className="modal__body-slide-item"/>
                    </div>
                ))}
            </Slider>
        </div>
)
}
export default HelloModalSlider