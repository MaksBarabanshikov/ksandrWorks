import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HelloModalSlider from "./HelloModalSlider";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {closeModalFB, nextStep} from "../../Utils/redux/modules/modalSlice";

const HelloModal = () => {
    const isOpen = useSelector(state => state.modalFb.isOpen)
    const step = useSelector(state => state.modalFb.step)

    const dispatch = useDispatch()

    return (
        <div className={`modal ${isOpen ? "" : "hidden"}`}>
            <div className={`modal__body hello-modal ${isOpen ? "open" : ''}`}>
                {step === 1 && <div className="step-1">
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <div>
                            <h1 className="title">
                                Перед стартом
                            </h1>
                            <span>
                            Убедитесь что выполняются следующие требования:
                        </span>
                        </div>
                    </div>
                    <div className="modal__body_main">
                        <div className="modal__body_main-tab border-bottom">
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleChevronRight}/>
                                </div>
                                <div>
                                    Ваша учетная запись instagram - это бизнес учетная запись, а не учетная запись
                                    создателя
                                    контента.
                                    <a href="front/src/Components/Modal/HelloModal#">How to create a buisness
                                        account.</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleChevronRight}/>
                                </div>
                                <div>
                                    Ваш бизнес-аккаунт в instagram теперь связан с вашей фан-страницей в Facebook
                                    <a href="front/src/Components/Modal/HelloModal#">Как подключиться к фан-странице
                                        FaceBook.</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleChevronRight}/>
                                </div>
                                <div>
                                    Вы предоставили разрешение на подключение инструментов
                                    <a href="front/src/Components/Modal/HelloModal#">Как предоставить запрошенные
                                        разрешения. </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal__body_main-btn flex">
                            <button
                                className="btn blue-btn"
                                onClick={() => dispatch(nextStep())}
                            >
                                Далее
                            </button>
                        </div>
                    </div>
                </div>}
                {step === 2 && <div className="step-2">
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <div>
                            <h1 className="title">
                                Перед стартом
                            </h1>
                            <span>
                                Подключите свой бизнес-аккаунт Instagram к ipostX
                            </span>
                        </div>
                    </div>
                    <div className="modal__body_main">
                        <div className="modal__body_main-tab">
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleChevronRight}/>
                                </div>
                                <div>
                                    <p>
                                        Нажмите <strong>“Bход через Facebook”,</strong> Вас перенесет на страницу
                                        подключения
                                        аккаунта, где надо будет нажать кнопку <strong>“Продолжить как”</strong>
                                    </p>
                                    <a href="front/src/Components/Modal/HelloModal#">How to create a buisness
                                        account.</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleChevronRight}/>
                                </div>
                                <div>
                                    Выберите аккаунт с которого хотите работать, нажимая стрелки влево и вправо. После
                                    этого
                                    переходите на страницу “Теги”. Меню страниц находиться слева.
                                </div>
                            </div>
                        </div>
                        <HelloModalSlider/>
                    </div>
                </div>}
                {step === 3 && <div className="step-3">
                    <div className="modal__body_top flex justify-content-between align-center border-bottom">
                        <div>
                            <h1 className="title">
                                Перед стартом
                            </h1>
                            <span>
                                Преимущества подключения
                            </span>
                        </div>
                    </div>
                    <div className="modal__body_main">
                        <div className="modal__body_main-tab border-bottom">
                            <div>
                                <div className="modal__body_check">
                                    <FontAwesomeIcon icon={faCheckCircle}/>
                                </div>
                                <div>
                                    Ваши учетные записи в безопасности поскольку интеграция происходит через официальный
                                    API instagram
                                </div>
                            </div>
                        </div>
                        <div className="modal__body_main-btn flex">
                            <button
                                className="btn blue-btn"
                                onClick={() => dispatch(closeModalFB())}
                            >
                                Начать
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default HelloModal