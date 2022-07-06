import {
    useGetProcessQuery,
    useLazyStopProcessQuery, useRefreshFacebookTokenMutation,
    useRepeatGetProcessQuery,
} from "../../Utils/redux/services/hashtagsApi";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../Utils/redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons/faRefresh";
import {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import logo from "../common/Logo";

const ProcessBarModal = ({refresh}) => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const [stopProcess, {isSuccess, error}] = useLazyStopProcessQuery()
    const [status, setStatus] = useState(null)
    const [refreshToken, {error: errorRefresh}] = useRefreshFacebookTokenMutation()

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

    const doubleHandler = async () => {
        if (status === "ErrorAuth") {
            console.log('refresh')
            await FacebookLoginClient.login(res => refreshToken(
                {
                    accessToken: res.authResponse.accessToken,
                    userId: res.authResponse.userID
                }
            ), {
                auth_type: 'rerequest',
                scope: 'rerequest',
            })
            setTimeout(() => refresh(), 2000)
        }
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
                    {status !== null && <RepeatGetStatus status={status}/>}
                    {error?.data && <h3 className="error-message">{error.data.message}</h3>}
                    <div className="modal__body_main-btn flex">
                        {
                            status === "Error" && <button
                                style={{maxWidth: '50px'}}
                                className="btn blue-btn"
                                onClick={() => refresh()}
                            >
                                <FontAwesomeIcon icon={faRefresh}/>
                            </button>
                        }
                        {
                            status === "ErrorAuth" && <button
                                style={{maxWidth: '50px'}}
                                className="btn blue-btn"
                                onClick={() => doubleHandler() }
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
                                style={{maxWidth: '100px'}}
                                className="btn blue-btn"
                                onClick={() => dispatch(closeModalProcess())}
                                disabled={isSuccess}
                            >
                                Выход
                            </button>
                        }

                        {
                            !!errorRefresh && <h3 className="error-message">{errorRefresh.data.message}</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export const RepeatGetStatus = ({status}) => {
    const {data, refetch, error} = useRepeatGetProcessQuery()
    const favorites = useSelector(state => state.favorites.favorites)

    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 15000)

        if ((status !== 'Loading' && !!status) || error) {
            refetch()
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [status, error])

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
            return <span className="success-message">Посты успешно обработаны</span>
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
                error.status === 401 ? setStatus('ErrorAuth') :
                setStatus('Error')
    }, [isLoading, isSuccess, error])

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }
    if (data?.status === 200) {
        return <h1 className="success-message mb-20 mt-20">Готово</h1>
    }
    if (error) {
        return <h1 className="error-message mb-20 mt-20">{error.data.message}</h1>
    }

    return <h1 className="error-message mb-20 mt-20">Что-то пошло не так</h1>
}

export default ProcessBarModal