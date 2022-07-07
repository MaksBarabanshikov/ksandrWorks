import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import "./Modal.scss"

const Modal = () => {
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
                <FontAwesomeIcon icon={faChartPie}/>
                <p>Статистика</p>
            </button>

            <div className={`modal modal-stat ${isOpen ? "" : "hidden"}`}>
                <div className={`modal__body ${isOpen ? "open" : ''}`}>
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <h1 className="title">
                            Статистика блоков по статусам
                        </h1>
                        <button
                            className="modal__body_close"
                            onClick={() => handleClose()}
                        >
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </button>
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
                        <div className="modal__body_main-btn flex">
                            <button className="btn blue-btn">Обновить статусы</button>
                            <button
                                className="btn blue-btn"
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