import {
    useGetProcessQuery,
    useLazyStopProcessQuery,
    useRepeatGetProcessQuery,
} from "../../redux/services/hashtagsApi";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";

const ProcessBarModal = () => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
    const [stopProcess, {data: message, isLoading, error}] = useLazyStopProcessQuery()

    const dispatch = useDispatch()

    const handleStopProcess = async () => {
        await stopProcess()
        dispatch(closeModalProcess())
    }

    let content = GetStatus()

    return (
        <div className={`modal ${isOpenProcess ? "" : "hidden"}`}>
            <div className={`modal__body ${isOpenProcess ? "open" : ''}`}>
                <div className="modal__body_top flex justify-content-between align-center border-bottom">
                    <h1 className="title">
                        Статус
                    </h1>
                </div>
                <div className="modal__body_main">
                    {content}
                    {RepeatGetStatus()}
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
export const RepeatGetStatus = () => {
    const {data, refetch} = useRepeatGetProcessQuery()
    const refetching = () => {
        const interval = setInterval(() => {
            refetch()
            if (data) {
                if (data.status) {
                    clearInterval(interval)
                }
            }
        }, 30000)
    }

    refetching()

    if (data) {
        if (data.status !== 204) {
            return <>
                <p>
                    {JSON.stringify(data, null, 2)}
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
        }
        return <span>Посты успешно обработаны</span>
    } else {
        return <p>Подготовка к обработке</p>
    }
}


export const GetStatus = () => {
    const {data: status, isLoading} = useGetProcessQuery()

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }
    if (status) {
        return <h1>Готово</h1>
    }
    return <h1>Что-то пошло не так</h1>
}

export default ProcessBarModal