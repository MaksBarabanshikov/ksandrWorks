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
    const [stopProcess, {data: message, isLoading, error}] = useLazyStopProcessQuery()
    const [status, setStatus] = useState(null)

    const dispatch = useDispatch()

    const [myError, setError] = useState(null)

    const handleComplete = (bool) => {
        setStatus(bool)
    }

    const handleStopProcess = async () => {
        await stopProcess()
        dispatch(closeModalProcess())
    }

    return (
        <div className={`modal ${isOpenProcess ? "" : "hidden"}`}>
            <div className={`modal__body ${isOpenProcess ? "open" : ''}`}>
                <div className="modal__body_top flex justify-content-between align-center border-bottom">
                    <h1 className="title">
                        Статус
                    </h1>
                </div>
                <div className="modal__body_main">
                    <GetStatus completed={handleComplete}/>
                    <RepeatGetStatus completed={status}/>
                    <div className="modal__body_main-btn flex">
                        <button
                            className="btn blue-btn"
                            onClick={() => handleStopProcess()}
                        >
                            Остановить процесс
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const RepeatGetStatus = ({completed}) => {
    const {data, refetch, error} = useRepeatGetProcessQuery()
    const favorites = useSelector(state => state.favorites.favorites)


    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 15000)

        if (error) {
            clearInterval(interval)
        }

        if (completed) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    },[completed])

    if (error?.data?.message) {
        return <h3 className="error-message">{error.data.message}</h3>
    }

    console.log("render")

    if (data) {
        if (data.status !== 204) {
            return <>
                <p>
                    Блок {data.process.status + 1} из {favorites.length}
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
    const {data, isLoading, isSuccess, error} = useGetProcessQuery()

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }
    if (isSuccess) {
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