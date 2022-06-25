import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import axios from "axios";

const HelloModalSlider = ({getId}) => {
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
                setData(res.data)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (data.length){
            getId(data[activeSlide].id)
            console.log("data:",data)
        }
    },[data])

    if (!loading) {
        return (
            <div className="modal__body_main-slider">
                <Slider {...settings}>
                    {data.map(d => (
                        <div className="modal__body-slide-cont" key={d.id}>
                            <div className="modal__body-slide-item">
                                <span>{d.name}</span>
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