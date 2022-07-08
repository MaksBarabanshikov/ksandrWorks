import {
    useGetCommentingMutation,
    useGetDelMutation,
    useGetReplyMutation,
    useGetStatusProcessQuery,
    useLazyStopProcessQuery,
    useRefreshFacebookTokenMutation,
    useRepeatGetProcessQuery,
    useSendFavoritesMutation,
} from "../../Utils/redux/services/hashtagsApi";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess, openModalProcess} from "../../Utils/redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons/faRefresh";
import {FacebookLoginClient} from "@greatsumini/react-facebook-login";

const ProcessBarModal = () => {
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

    const {data: dataStatus, isSuccess: isSuccessMethod, error: errorMethod, refetch} = useGetStatusProcessQuery() //process/status

    const [sendFavorites] = useSendFavoritesMutation()
    const [refreshToken, {error: errorRefresh}] = useRefreshFacebookTokenMutation()

    const [stopProcess, {error, isSuccess}] = useLazyStopProcessQuery()
    const [startCommenting, {data: statusCom, error: errorCom, isSuccess: isSuccessCom}] = useGetCommentingMutation()
    const [startReplying, {data: statusRep, error: errorRep, isSuccess: isSuccessRep}] = useGetReplyMutation()
/*
    const [startDel, {data: statusDel, error: errorDel, isSuccess: isSuccessDel}] = useLazyGetDelQuery()
*/
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
        return startCommenting()
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'auto'
    }, []);

    useEffect(() => {
        if (isSuccessMethod) {
            if (!dataStatus.method.isEnd && !dataStatus.method.Done) {
                if (
                    status?.statusCom === 200 ||
                    status?.statusRep === 200 ||
                    status?.statusDel === 200 ||
                    status === null
                ) {
                    const methodRes = dataStatus.method.method
                    console.log('methodRes: ', methodRes)

                    if (methodRes === "") {
                        return setTimeout(() => sendOnEmpty(), 10000)
                    }

                    if (methodRes === "Com") {
                        return setTimeout(() => startCommenting(), 10000)
                    }

                    if (methodRes === "Rep") {
                        return setTimeout(() => startReplying(), 10000)
                    }

                    if (methodRes === "Del") {
                        return setTimeout(() => startDel(), 10000)
                    }
                }

                if (status === 401) {

                }
            }
        }
        if (errorMethod) {
            return setStatus(null)
        }
    }, [dataStatus, errorMethod])

    useEffect(() => {
        if (isSuccessCom || isSuccessRep || isSuccessDel) {
            console.log('setStatus')

            console.log('statusCom', statusCom)
            console.log('statusRep', statusRep)
            console.log('statusDel', statusDel)

            statusCom ? setStatus({statusCom: statusCom.status}) :
                statusRep ? setStatus({statusRep: statusRep.status}) :
                    setStatus({statusDel: statusDel.status})
        }

    }, [
        isSuccessCom,
        isSuccessRep,
        isSuccessDel,
    ]);

    useEffect(() => {
        if (errorCom || errorRep || errorDel) {
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
        await stopProcess()
    }

    // const doubleHandler = async () => {
    //     if (status === "ErrorAuth") {
    //         console.log('refresh')
    //         await FacebookLoginClient.login(res => refreshToken(
    //             {
    //                 accessToken: res.authResponse.accessToken,
    //                 userId: res.authResponse.userID
    //             }
    //         ), {
    //             auth_type: 'rerequest',
    //             scope: 'rerequest',
    //         })
    //         setTimeout(() => refresh(), 2000)
    //     }
    // }

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
                {
                    dataStatus &&
                    <div className="modal__body_main">
                        {(!dataStatus.method?.isEnd && !dataStatus.method.Done && !message) && <Loader width={50} height={50}/>}
                        {dataStatus.method?.isEnd && <h1>Готово</h1>}
                        {dataStatus.method?.Done && <h1>Пауза</h1>}

                        {message && <h3 className="error-message">{message}</h3>}


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
                            bgColor={'#0066EAFF'}
                            height={'30px'}
                            width={`90%`}
                            margin={'10px auto'}
                        />

                        {status !== null && <RepeatGetStatus status={status}/>}
                        {error?.data && <h3 className="error-message">{error.data.message}</h3>}
                        <div className="modal__body_main-btn flex">
                            {
                                dataStatus.method?.isEnd && <button
                                    style={{maxWidth: '100px'}}
                                    className="btn blue-btn"
                                    onClick={() => dispatch(closeModalProcess())}
                                >
                                    Выход
                                </button>
                            }

                            {
                                (dataStatus.method?.done) ||
                                (status !== null && status !== 200
                                ) &&
                                <>
                                    <button
                                        style={{maxWidth: '100px'}}
                                        className="btn blue-btn"
                                        onClick={() => refetch()}
                                    >
                                        <FontAwesomeIcon icon={faRefresh}/>
                                    </button>
                                    <button
                                        style={{maxWidth: '100px'}}
                                        className="btn blue-btn"
                                        onClick={() => dispatch(closeModalProcess())}
                                    >
                                        Закрыть
                                    </button>
                                </>
                            }

                            {!dataStatus.method.done &&
                                <button
                                    style={{maxWidth: '200px'}}
                                    className="btn blue-btn"
                                    onClick={() => handleStopProcess()}
                                >
                                    Остановить процесс
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
export const RepeatGetStatus = ({status}) => {

    return <>
    </>

}

// export const GetStatus = ({setStatus}) => {
//     const {data, isLoading, isSuccess, error} = useGetProcessQuery()
//
//     useEffect(() => {
//         isLoading ? setStatus('Loading') :
//             isSuccess ? setStatus('Success') :
//                 error.status === 401 ? setStatus('ErrorAuth') :
//                 setStatus('Error')
//     }, [isLoading, isSuccess, error])
//
//     if (isLoading) {
//         return <Loader width={50} height={50}/>
//     }
//     if (data?.status === 200) {
//         return <h1 className="success-message mb-20 mt-20">Готово</h1>
//     }
//     if (error) {
//         return <h1 className="error-message mb-20 mt-20">{error.data.message}</h1>
//     }
//
//     return <h1 className="error-message mb-20 mt-20">Что-то пошло не так</h1>
// }

export default ProcessBarModal