import React, {useState} from "react";
import Slider from "react-slick";
import NewNextArrow from "../../Components/common/NewNextArrow";
import NewPrevArrow from "../../Components/common/NewPrevArrow";

const MiniSliderPost = ({images}) => {
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NewNextArrow/>,
        prevArrow: <NewPrevArrow/>,
        afterChange: current => setActiveSlide(current)
    }

    return (
        <div className="slider-post__mini-slider">
            <div></div>
            <Slider {...settings} >
                {images.map(img => (
                    <div className="slider-post__mini-slide-item" key={img.id}>
                        <div style={{backgroundImage: `url(${img.media_url})`}}
                             className="slider-post__item-body_img"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default MiniSliderPost