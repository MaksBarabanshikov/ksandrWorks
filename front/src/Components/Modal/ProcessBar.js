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

const ProcessBarModal = () => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const [stopProcess, {data: message, isSuccess, error}] = useLazyStopProcessQuery()
    const [status, setStatus] = useState(null)

    const dispatch = useDispatch()

    const handleComplete = (bool) => {
        setStatus(bool)
    }

    const handleStopProcess = async () => {
        await stopProcess()
    }

    useEffect(() => {
        console.log(status)
        console.log(isSuccess)
        if (isSuccess && status) {
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
                    <GetStatus completed={handleComplete}/>
                    <RepeatGetStatus completed={status} isExit={isSuccess}/>
                    {error?.data && <h3 className="error-message">{error.data.message}</h3>}
                    <div className="modal__body_main-btn flex">
                        <button
                            style={{maxWidth: '200px'}}
                            className="btn blue-btn"
                            onClick={() => handleStopProcess()}
                            disabled={isSuccess}
                        >
                            Остановить процесс
                        </button>
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

        if (completed || isExit || error) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [completed, isExit])

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
                    margin={'10px 0'}
                />
            </>
        } else {
            return <span>Посты успешно обработаны</span>
        }
    } else {
        return <p>Подготовка к обработке</p>
    }
}

export const GetStatus = ({completed}) => {
    const {data, isLoading, isSuccess, error, refetch} = useGetProcessQuery()

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }

    if (isSuccess) {
        console.log(isSuccess)
        completed(isSuccess)
    }

    if (data?.status === 200) {
        return <h1>Готово</h1>
    }

    if (error) {
        return <h3 className="error-message">{error.data.message}</h3>
    }
    return <h1>Что-то пошло не так</h1>
}

export default ProcessBarModal