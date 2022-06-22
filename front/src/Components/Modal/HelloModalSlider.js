import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import img from "../../image/slider-test.jpg"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import axios from "axios";

const HelloModalSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

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
        axios.get(`/api/hashtags/get-pages`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (!loading) {
        return (
            <div className="modal__body_main-slider">
                <Slider {...settings}>
                    {data.map(d => (
                        <div className="modal__body-slide-cont" key={d.id}>
                            <div className="modal__body-slide-item">
                                {d.name}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        )

    } else {
        return <p>Загрузка...</p>
    }

}
export default HelloModalSlider