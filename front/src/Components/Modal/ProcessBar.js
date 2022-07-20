import {
    useExitProcessMutation,
    useGetCommentingMutation,
    useGetDelMutation,
    useGetReplyMutation,
    useGetStatusProcessQuery,
    useLazyStopProcessQuery,
    useRefreshFacebookTokenMutation, useSendCurrentPostIdMutation,
    useSendFavoritesMutation,
} from "../../Utils/redux/services/hashtagsApi";

import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../Utils/redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";
import {useCallback, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons/faRefresh";
import {FacebookLoginClient} from "@greatsumini/react-facebook-login";

const ProcessBar = () => {
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)
    const [isStop, setIsStop] = useState(true)

    const {data: dataStatus, isSuccess: isSuccessMethod, error: errorMethod, refetch} = useGetStatusProcessQuery() //process/status

    const [sendFavorites] = useSendFavoritesMutation()
    const [refreshToken, {error: errorRefresh}] = useRefreshFacebookTokenMutation()

    const [stopProcess, {isSuccess: isSuccessStop}] = useLazyStopProcessQuery()
    const [startCommenting, {data: statusCom, error: errorCom, isSuccess: isSuccessCom}] = useGetCommentingMutation()
    const [startReplying, {data: statusRep, error: errorRep, isSuccess: isSuccessRep}] = useGetReplyMutation()

    const [exitProcess] = useExitProcessMutation()
    const [startDel, {data: statusDel, error: errorDel, isSuccess: isSuccessDel}] = useGetDelMutation()

    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const myFavorites = useSelector(state => state.favorites.favorites)

    const sendOnEmpty = async () => {
        const data = myFavorites.filter((favorites) => favorites.selected).map(f => ({
                text1: f.text1,
                text2: f.text2.join(" "),
            }
        ))

        await sendFavorites({data})
        return startCommenting().unwrap()
    }

    const startQuery = () => {
        if (isSuccessMethod) {
            if (!dataStatus?.method?.isEnd && !dataStatus?.method?.done) {
                if (status === 200 || status === null) {

                    const methodRes = dataStatus.method.method


                    if (methodRes === "") {
                        return setTimeout(() => sendOnEmpty(), 2000)
                    }

                    if (methodRes === "Com") {
                        return setTimeout(() => startCommenting().unwrap(), 60000)
                    }

                    if (methodRes === "Rep") {
                        return setTimeout(() => startReplying().unwrap(), 2000)
                    }

                    if (methodRes === "Del") {
                        return setTimeout(() => startDel().unwrap(), 2000)
                    }
                }

                if (status === 401) {

                }
            }
        }
    }

    const startQueryCallback = useCallback(
        () => {
            startQuery()
        },
        [dataStatus],
    );

    useEffect(() => {
        if (isSuccessStop && dataStatus.method.done) {
            setIsStop(false)
        }
    }, [isSuccessStop, dataStatus]);

    useEffect(() => {
        startQuery()
        if (errorMethod) {
            return setStatus(null)
        }
    }, [dataStatus, errorMethod])

    useEffect(() => {
        if (isSuccessCom || isSuccessRep || isSuccessDel) {
            statusCom ? setStatus(statusCom.status) :
                statusRep ? setStatus(statusRep.status) :
                    setStatus(statusDel.status)
        }

    }, [
        isSuccessCom,
        isSuccessRep,
        isSuccessDel,
    ]);

    useEffect(() => {
        if (errorCom || errorRep || errorDel) {

            errorCom ? setStatus(errorCom?.status) :
                errorRep ? setStatus(errorRep?.status) :
                    setStatus(errorDel?.status)

            errorCom ? setMessage(errorCom.data.message) :
                errorRep ? setMessage(errorRep.data.message) :
                    setMessage(errorDel.data.message)
        }
    }, [
        errorCom,
        errorRep,
        errorDel
    ])

    const dispatch = useDispatch()

    const handleStopProcess = async () => {
        await stopProcess().unwrap()
        setIsStop(true)
    }

    const handleClose = async () => {
        await exitProcess()
        return dispatch(closeModalProcess())
    }

    const handleRefresh = async () => {
        if (status === 401) {
            await FacebookLoginClient.login(res => refreshToken(
                {
                    accessToken: res.authResponse.accessToken,
                    userId: res.authResponse.userID
                }
            ), {
                auth_type: 'rerequest',
                scope: 'rerequest',
            })

            setStatus(200)
            setMessage(null)
        }

        if (status !== 401 && status !== 200) {
            setStatus(200)
            setMessage(null)
        }

        await refetch()
        return startQueryCallback()
    }

    if (dataStatus) {
        return (
            <div className="modal__body_main">
                {
                    (!dataStatus.method?.isEnd && !dataStatus.method.done && !message)
                    &&
                    <Loader width={50} height={50}/>
                }
                {
                    dataStatus.method?.isEnd && <h1 className="mt-20 mb-20">Готово</h1>
                }
                {
                    dataStatus.method?.done && <h1 className="mt-20 mb-20">Пауза</h1>
                }

                {
                    message && <h3 className="error-message mt-20 mb-20">{message}</h3>
                }

                <p>
                    Блок {dataStatus?.method?.status} из {myFavorites.length}
                </p>

                <ProgressBar
                    completed={dataStatus?.method?.percent}
                    animateOnRender={true}
                    baseBgColor={'#F3F3F3FF'}
                    bgColor={message === null ? '#0066EAFF' : '#6c757d'}
                    height={'30px'}
                    width={`100%`}
                    margin={'10px auto'}
                />

                <div className="modal__body_main-btn flex">
                    {
                        (message || dataStatus.method.done) && <button
                            style={{maxWidth: '50px'}}
                            className="btn blue-btn"
                            onClick={() => handleRefresh()}
                        >
                            <FontAwesomeIcon icon={faRefresh}/>
                        </button>
                    }
                    {
                        (dataStatus.method?.isEnd || dataStatus.method?.done || message) && <button
                            style={{maxWidth: '100px'}}
                            className="btn blue-btn"
                            onClick={() => handleClose()}
                        >
                            Выход
                        </button>
                    }

                    {(!dataStatus.method.done && !dataStatus.method.isEnd && !!!message) &&
                        <button
                            style={{maxWidth: '200px', justifyContent: 'center'}}
                            className="btn blue-btn flex align-center"
                            onClick={() => handleStopProcess()}
                            disabled={isSuccessStop && !dataStatus.method.done && isStop}
                        >
                            <span style={{display: "block", marginRight: 10}}>Остановить процесс</span>
                            {(isSuccessStop && !dataStatus.method.done && isStop) && <Loader width={20} height={20}/>}
                        </button>
                    }

                    {
                        !!errorRefresh && <h3 className="error-message">{errorRefresh.data.message}</h3>
                    }
                </div>
            </div>
        )
    }

    if (!dataStatus) {
        return <p className="error-message">Что-то пошло не так</p>
    }

}
export default ProcessBar