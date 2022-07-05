import React, {useEffect, useState} from "react";
import Slider from "react-slick"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import Loader from "../common/Loader";
import {useGetPagesQuery, useSendCurrentPageMutation} from "../../redux/services/hashtagsApi";
import {createFbPage} from "../../redux/modules/facebookSlice";
import {nextStep} from "../../redux/modules/modalSlice";
import {useDispatch, useSelector} from "react-redux";

const HelloModalSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const {data: pages, isLoading,isSuccess, error} = useGetPagesQuery()
    const [sendCurrentPage] = useSendCurrentPageMutation()

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

    const dispatch = useDispatch()

    const handlePostPage = async () => {
        await sendCurrentPage({
            fbPage: pages[activeSlide].id
        })
        dispatch(createFbPage({
            fbPage: pages[activeSlide].id
        }))
        dispatch(nextStep())
    }

    console.log(isSuccess)

    return (
        <>
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
                {error && <h3 className="error-message">${error.data.message}</h3>}
            </div>
            <div className="modal__body_main-btn flex">
                <button
                    className="btn blue-btn"
                    onClick={() => handlePostPage()}
                    disabled={!isSuccess}
                >
                    Далее
                </button>
            </div>
        </>
    )
}
export default HelloModalSlider