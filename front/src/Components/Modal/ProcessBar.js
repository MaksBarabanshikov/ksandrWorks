import {
    useGetProcessQuery,
    useLazyStopProcessQuery,
    useRepeatGetProcessQuery,
} from "../../redux/services/hashtagsApi";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons/faRefresh";

//todo кнопка готово и выход при ошибке

const ProcessBarModal = () => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const [stopProcess, {isSuccess, error}] = useLazyStopProcessQuery()
    const [status, setStatus] = useState(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'auto'
    }, []);

    const dispatch = useDispatch()

    const handleComplete = (STATUS) => {
        setStatus(STATUS)
    }

    const handleStopProcess = async () => {
        await stopProcess()
    }

    useEffect(() => {
        if (isSuccess && status === 'Success') {
            dispatch(closeModalProcess())
        }
    }, [status])

    return (
        <div className={`modal`}>
            <div className={`modal__body ${isOpenProcess ? "open" : ''}`}>
                <div className="modal__body_top flex justify-content-between align-center border-bottom">
                    <h1 className="title">
                        Статус
                    </h1>
                </div>
                <div className="modal__body_main">
                    <GetStatus setStatus={handleComplete}/>
                    {status !== null && <RepeatGetStatus status={status} isExit={isSuccess}/>}
                    {error?.data && <h3 className="error-message">{error.data.message}</h3>}
                    <div className="modal__body_main-btn flex">
                        {
                            status === "Error" && <button
                                style={{maxWidth: '50px'}}
                                className="btn blue-btn"
                                onClick={() => dispatch(closeModalProcess())}
                            >
                                <FontAwesomeIcon icon={faRefresh}/>
                            </button>
                        }
                        {status === 'Loading' &&
                            <button
                                style={{maxWidth: '200px'}}
                                className="btn blue-btn"
                                onClick={() => handleStopProcess()}
                            >
                                Остановить процесс
                            </button>
                        }
                        {
                            status !== "Loading" && <button
                                style={{maxWidth: '200px'}}
                                className="btn blue-btn"
                                onClick={() => dispatch(closeModalProcess())}
                                disabled={isSuccess}
                            >
                                Готово
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export const RepeatGetStatus = ({completed, isExit}) => {
    const {data, refetch, error} = useRepeatGetProcessQuery()
    const favorites = useSelector(state => state.favorites.favorites)

    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 15000)

        if (completed !== 'Loading' || isExit || error) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [completed, isExit, error])

    if (error?.data?.message) {
        return <h3 className="error-message">{error.data.message}</h3>
    }

    if (data) {
        if (data.status !== 204) {
            return <>
                <p>
                    Блок {data.process.status} из {favorites.length}
                </p>
                <ProgressBar
                    completed={data.process.percent}
                    animateOnRender={true}
                    baseBgColor={'#F3F3F3FF'}
                    bgColor={'#0066EAFF'}
                    height={'30px'}
                    width={`90%`}
                    margin={'10px auto'}
                />
            </>
        } else {
            return <span>Посты успешно обработаны</span>
        }
    } else {
        return <p>Подготовка к обработке</p>
    }
}

export const GetStatus = ({setStatus}) => {
    const {data, isLoading, isSuccess, error} = useGetProcessQuery()

    useEffect(() => {
        isLoading ? setStatus('Loading') :
            isSuccess ? setStatus('Success') :
                setStatus('Error')
    }, [isLoading, isSuccess, error])

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }

    if (data?.status === 200) {
        return <h1>Готово</h1>
    }

    if (error) {
        return <h1 className="error-message mb-20 mt-20">{error.data.message}</h1>
    }
    return <h1>Что-то пошло не так</h1>
}

export default ProcessBarModal