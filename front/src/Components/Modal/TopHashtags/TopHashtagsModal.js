import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {faHashtag} from "@fortawesome/free-solid-svg-icons/faHashtag";
import TopHashtags from "./TopHashtags";
import "../Modal.scss"
import SliderPost from "../../../Pages/Hashtags/SliderPost";
import {useSelector} from "react-redux";
import CloseModalBtn from "../CloseModalBtn";

const TopHashtagsModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const fbPage = useSelector(state => state.facebook.user.fbPage)

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
                // disabled={!!!fbPage}
            >
                <FontAwesomeIcon icon={faHashtag}/>
                <p>Топ Хештегов</p>
            </button>

            <div className={`modal ${isOpen ? "" : "hidden"}`}>
                <div className={`modal__body modal-hashtags ${isOpen ? "open" : ''}`}>
                    <div className="modal__body_top border-bottom">
                        <div>
                            <h1 style={{marginBottom: 11}} className="title flex justify-between align-middle">
                                Ваш пост и хештег
                                <CloseModalBtn handleClose={handleClose}/>
                            </h1>
                            <span>Посмотрите статистику к вашему хештегу</span>
                        </div>
                    </div>
                    <div className="modal__body_main">
                        <div className="modal__body_main-flex flex">
                            <SliderPost isSendId={false}/>
                            <div className="w-100">
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