import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faHashtag} from "@fortawesome/free-solid-svg-icons/faHashtag";
import MainSliderPost from "../../../Pages/Hashtags/MainSliderPost";
import TopHashtags from "./TopHashtags";
import "../Modal.scss"
import SliderPost from "../../../Pages/Hashtags/SliderPost";

const TopHashtagsModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }
    const handleOpen = () => {
        setIsOpen(true)
    }

    return (
        <>
            <button
                className="header-statistics btn blue-btn"
                onClick={() => handleOpen()}
            >
                <FontAwesomeIcon icon={faHashtag}/>
                <p>Топ Хештегов</p>
            </button>

            <div className={`modal ${isOpen ? "" : "hidden"}`}>
                <div className={`modal__body modal-hashtags ${isOpen ? "open" : ''}`}>
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <div>
                            <h1 style={{marginBottom: 11}} className="title">
                                Ваш пост и хештег
                            </h1>
                            <span>Посмотрите статистику к вашему хештегу</span>
                        </div>

                        <button
                            className="modal__body_close"
                            onClick={() => handleClose()}
                        >
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </button>
                    </div>
                    <div className="modal__body_main">
                        <div className="flex">
                            <SliderPost isSendId={false}/>
                            <div>
                                <h2 className="title">
                                    Статистика по хэштегу
                                </h2>
                                <div className="modal-hashtags_your-hashtag rounded-12">
                                    Хештег находиться в <strong>top 21</strong>
                                </div>
                                {isOpen && <TopHashtags/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHashtagsModal