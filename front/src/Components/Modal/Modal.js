import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import "./Modal.scss"
import {useSelector} from "react-redux";
import CloseModalBtn from "./CloseModalBtn";

const Modal = () => {
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
                <FontAwesomeIcon icon={faChartPie}/>
                <p>Статистика</p>
            </button>

            <div className={`modal modal-stat ${isOpen ? "" : "hidden"}`}>
                <div className={`modal__body ${isOpen ? "open" : ''}`}>
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <h1 className="title">
                            Статистика блоков по статусам
                        </h1>
                        <CloseModalBtn handleClose={handleClose}/>
                    </div>
                    <div className="modal__body_main">
                        <div className="modal__body_main-cont border-bottom">
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                            <div className="modal__pane">
                                <h1 className="title">
                                    0
                                </h1>
                                <span>Сохраненных</span>
                            </div>
                        </div>
                        <div className="modal__body_main-btn flex pt-2">
                            <button className="btn blue-btn mr-4">Обновить статусы</button>
                            <button
                                className="btn blue-btn ml-4"
                                onClick={() => handleClose()}
                            >
                                Выйти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal