import {
    useGetProcessQuery,
    useGetStatusProcessQuery,
    useLazyGetCommentingQuery, useLazyGetDelQuery,
    useLazyGetReplyQuery,
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

const ProcessBarModal = ({refresh}) => {
    const [status, setStatus] = useState(null)
    const {data: dataStatus, isSuccess: isSuccessMethod, refetch} = useGetStatusProcessQuery()
    const [sendFavorites] = useSendFavoritesMutation()
    const [refreshToken, {error: errorRefresh,}] = useRefreshFacebookTokenMutation()
    const [stopProcess, {error, isSuccess}] = useLazyStopProcessQuery()
    const [startCommenting, {data: dataCom, error: errorCom, isSuccess: isSuccessCom }] = useLazyGetCommentingQuery()
    const [startReplying, {data: dataRep, error: errorRep, isSuccess: isSuccessRep }] = useLazyGetReplyQuery()
    const [startDel, {data: dataDel, error: errorDel, isSuccess: isSuccessDel }] = useLazyGetDelQuery()

    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const myFavorites = useSelector(state => state.favorites.favorites)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'auto'
    }, []);

    useEffect(() => {
        if (isSuccessMethod) {
            const methodRes = dataStatus.method.method
            if (methodRes === "") {
                const data = myFavorites.map(f => ({
                        text1: f.text1,
                        text2: f.text2.join(" "),
                    }
                ))
                sendFavorites({data})
                startCommenting()
            }

            if (methodRes === "Com") {
                startCommenting()
            }

            if (methodRes === "Rep") {
                startReplying()
            }

            if (methodRes === "Del") {
                startDel()
            }
        }
    }, [isSuccessMethod])

    useEffect(() => {
        if (isSuccessCom) {
            console.log(dataCom)
            if (dataCom.status === 200) {
                return refetch()
            }
        }
        if (isSuccessRep) {
            console.log(dataRep)
            if (dataRep.status === 200) {
                return refetch()
            }
        }
        if (isSuccessDel) {
            console.log(dataDel)
            if (dataDel.status === 200) {
                return refetch()
            }
        }

    }, [isSuccessCom, isSuccessRep, isSuccessDel]);


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
                    {/*<GetStatus setStatus={handleComplete}/>*/}
                    {/*{(method.isEnd || method.done) && <Loader width={50} height={50}/>}*/}
                    {errorCom?.data && <h3 className="error-message">{errorCom.data.message}</h3>}
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