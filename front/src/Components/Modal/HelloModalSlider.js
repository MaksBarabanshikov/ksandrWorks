import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import Loader from "../common/Loader";
import {useGetPagesQuery} from "../../redux/services/hashtagsApi";

const HelloModalSlider = ({getId}) => {
    const [activeSlide, setActiveSlide] = useState(0)
    const {data: pages, isLoading, error} = useGetPagesQuery()

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
        if (pages) {
            getId(pages[activeSlide].id)
        }
    }, [pages, activeSlide])

    return (
        <div className="modal__body_main-slider">
            {isLoading && <Loader width={50} height={50}/>}
            {pages && <Slider {...settings}>
                {pages.map(page => (
                    <div className="modal__body-slide-cont" key={page.id}>
                        <div
                            style={
                                {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }
                            }
                            className="modal__body-slide-item"
                        >
                            <span>{page.name}</span>
                        </div>
                    </div>
                ))}
            </Slider>}
            {error && <div>{JSON.stringify(error.data.message)}</div>}
        </div>
    )
}
export default HelloModalSlider