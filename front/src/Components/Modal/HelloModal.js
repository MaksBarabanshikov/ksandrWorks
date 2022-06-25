import {useContext, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HelloModalSlider from "./HelloModalSlider";
import currentFbPage from "../../request/POST/currentFbPage";
import {Context} from "../../context/context";
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {getPost} from "../../redux/modules/instaPostsSlice";

const HelloModal = () => {
    const {isOpenFB, closeModalFB} = useContext(Context)
    const [step, setStep] = useState(1)
    const [sliderId, setSliderId] = useState(null)

    const dispatch = useDispatch()

    const getInstagramPost = () => dispatch(getPost())

    const handleNextStep = () => {
        setStep(step + 1)
    }

    const handleClose = () => {
        closeModalFB()
        setTimeout(() => setStep(1), 500)
    }

    const handlePostPage = () => {
        currentFbPage(sliderId)
        handleNextStep()
    }

    const  handleGetPosts = async () => {
        await getInstagramPost()
        handleClose()
    }

    const getId = id => setSliderId(id)

    return (
        <div className={`modal ${isOpenFB ? "" : "hidden"}`}>
            <div className={`modal__body hello-modal ${isOpenFB ? "open" : ''}`}>
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
                        <button
                            className="modal__body_close"
                            onClick={() => handleClose()}
                        >
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </button>
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
                                onClick={() => handleNextStep()}
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
                        <button
                            className="modal__body_close"
                            onClick={() => handleClose()}
                        >
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </button>
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

                        <HelloModalSlider getId={getId}/>

                        <div className="modal__body_main-btn flex">
                            <button
                                className="btn blue-btn"
                                onClick={() => handlePostPage()}
                            >
                                Далее
                            </button>
                        </div>
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
                        <button
                            className="modal__body_close"
                            onClick={() => handleClose()}
                        >
                            <FontAwesomeIcon icon={faTimesCircle}/>
                        </button>
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
                                onClick={() => handleGetPosts()}
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