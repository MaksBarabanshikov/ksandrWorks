import React, {useState} from "react";
import Slider from "react-slick"
import NewPrevArrow from "../common/NewPrevArrow";
import NewNextArrow from "../common/NewNextArrow";
import Loader from "../common/Loader";
import {useGetPagesQuery, useSendCurrentPageMutation} from "../../Utils/redux/services/hashtagsApi";
import {createFbPage} from "../../Utils/redux/modules/facebookSlice";
import {nextStep} from "../../Utils/redux/modules/modalSlice";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";

const HelloModalSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const {data: pages, isLoading, isSuccess, error, refetch} = useGetPagesQuery()
    const [sendCurrentPage, {error: postPageError}] = useSendCurrentPageMutation()

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

    return (
        <>
            {
                error && <div className="">
                <h3 className="error-message">
                    ${error.data.message}
                </h3>
                <button
                    className="blue-btn max-w-[50px] mt-2"
                    onClick={() => refetch()}
                >
                    <FontAwesomeIcon icon={faRefresh}/>
                </button>
            </div>
            }
            {postPageError && <h3 className="error-message">${postPageError.data.message}</h3>}
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
            </div>
            <div className="modal__body_btn flex">
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