import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faHashtag} from "@fortawesome/free-solid-svg-icons/faHashtag";
import MainSliderPost from "../../../Pages/Hashtags/MainSliderPost";
import TopHashtags from "./TopHashtags";

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

            <div className={`modal modal-stat ${isOpen ? "" : "hidden"}`}>
                <div className={`modal__body ${isOpen ? "open" : ''}`}>
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <div>
                            <h1 className="title">
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
                    <div className="modal__body_main modal-hashtags">
                        <div className="flex">
                            <MainSliderPost/>
                            <div>
                                <h1>
                                    Статистика по хэштегу
                                </h1>
                                <div className="modal-hashtags_your-hashtag">
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