import {
    useExitProcessMutation,
    useGetCommentingMutation,
    useGetDelMutation,
    useGetReplyMutation,
    useGetStatusProcessQuery,
    useLazyStopProcessQuery,
    useRefreshFacebookTokenMutation,
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

const ProcessBarModal = () => {
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

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
        const data = myFavorites.map(f => ({
                text1: f.text1,
                text2: f.text2.join(" "),
            }
        ))

        await sendFavorites({data})
        return startCommenting().unwrap()
    }

    const startQuery = () => {
        console.log("")
        if (isSuccessMethod) {
            if (!dataStatus?.method?.isEnd && !dataStatus?.method?.done) {
                if (status === 200 || status === null) {
                    console.log('isSuccessMethod: ', status)

                    const methodRes = dataStatus.method.method

                    console.log('methodRes: ', methodRes)

                    if (methodRes === "") {
                        return setTimeout(() => sendOnEmpty(), 10000)
                    }

                    if (methodRes === "Com") {
                        return setTimeout(() => startCommenting().unwrap(), 10000)
                    }

                    if (methodRes === "Rep") {
                        return setTimeout(() => startReplying().unwrap(), 10000)
                    }

                    if (methodRes === "Del") {
                        return setTimeout(() => startDel().unwrap(), 10000)
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
        document.body.style.overflow = 'hidden'

        return () =>  {

            document.body.style.overflow = 'auto'
        }
    }, []);

    useEffect(() => {
        startQuery()
        if (errorMethod) {
            return setStatus(null)
        }
    }, [dataStatus,errorMethod])

    useEffect(() => {
        console.log("render")
        if (isSuccessCom || isSuccessRep || isSuccessDel) {

            console.log('setStatus')
            console.log('statusCom', statusCom)
            console.log('statusRep', statusRep)
            console.log('statusDel', statusDel)

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

    useEffect(() => {
        console.log('STATUS:', status)
    }, [status]);


    const dispatch = useDispatch()

    // const handleComplete = (STATUS) => {
    //     setStatus(STATUS)
    // }

    const handleStopProcess = async () => {
        await stopProcess().unwrap()
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
            console.log(status)
            setStatus(200)
            setMessage(null)
        }

        await refetch()
        return startQueryCallback()
    }
    return (
        <div className={`modal`}>
            <div className={`modal__body modal__body-process ${isOpenProcess ? "open" : ''}`}>
                <div className="modal__body_top flex justify-content-between align-center border-bottom">
                    <h1 className="title">
                        Статус
                    </h1>
                </div>
                {
                    dataStatus &&
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


                        {/*{errorCom?.data && <h3 className="error-message">{errorCom.data.message}</h3>}*/}
                        {/*{errorRep?.data && <h3 className="error-message">{errorRep.data.message}</h3>}*/}
                        {/*{errorDel?.data && <h3 className="error-message">{errorDel.data.message}</h3>}*/}

                        <p>
                            Блок {dataStatus.method?.status} из {myFavorites.length}
                        </p>

                        <ProgressBar
                            completed={dataStatus.method?.percent}
                            animateOnRender={true}
                            baseBgColor={'#F3F3F3FF'}
                            bgColor={message === null ? '#0066EAFF' : '#6c757d'}
                            height={'30px'}
                            width={`90%`}
                            margin={'10px auto'}
                        />

                        <div className="modal__body_main-btn flex">
                            {
                                (message || dataStatus.method.done) && <button
                                    style={{maxWidth: '100px'}}
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
                                >
                                    <span style={{display: "block", marginRight: 10}}>Остановить процесс</span>
                                    {(isSuccessStop && !dataStatus.method.done) && <Loader width={20} height={20}/>}
                                </button>
                            }

                            {
                                !!errorRefresh && <h3 className="error-message">{errorRefresh.data.message}</h3>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default ProcessBarModal