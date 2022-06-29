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

    const content = () => {

        console.log(pages)

        if (isLoading) {
            return <Loader width={50} height={50}/>
        }

        if (pages) {
            return (
                <div className="modal__body_main-slider">
                    <Slider {...settings}>
                        {pages.map(page => (
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
                    </Slider>
                </div>
            )
        }

        return <div>{error.status} {JSON.stringify(error.data)}</div>

    }


    return content()
}
export default HelloModalSlider