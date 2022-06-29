import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import Loader from "../common/Loader";
import {useGetPagesQuery} from "../../redux/services/hashtagsApi";

const HelloModalSlider = ({getId}) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const {data, isLoading, error} = useGetPagesQuery()

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NewNextArrow/>,
        prevArrow: <NewPrevArrow/>,
        afterChange: current => setActiveSlide(current)
    }

    useEffect(() => {
        if (data) {
            getId(data[activeSlide].id)
        }
    }, [data, activeSlide])

    return (
        <div className="modal__body_main-slider">
            {isLoading && <Loader width={50} height={50}/>}
            {data && <Slider {...settings}>
                {data.map(page => (
                    <div className="modal__body-slide-cont" key={page.id}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }} className="modal__body-slide-item">
                            <span>{page.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>}
            {error && <div>{error.status} {JSON.stringify(error.data)}</div>}
        </div>
    )
}
export default HelloModalSlider