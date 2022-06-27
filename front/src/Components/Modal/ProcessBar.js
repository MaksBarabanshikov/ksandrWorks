import {useGetProcessQuery, useRepeatGetProcessQuery} from "../../redux/services/hashtagsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../redux/modules/modalSlice";
import Loader from "../common/Loader";
import ProgressBar from "@ramonak/react-progress-bar";

const ProcessBarModal = () => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)

    let content = GetStatus()

    const dispatch = useDispatch()

    return (
        <div className={`modal ${isOpenProcess ? "" : "hidden"}`}>
            <div className={`modal__body ${isOpenProcess ? "open" : ''}`}>
                <div className="modal__body_top flex justify-content-between align-center border-bottom">
                    <h1 className="title">
                        Статус
                    </h1>

                    <button
                        className="modal__body_close"
                        onClick={() => dispatch(closeModalProcess())}
                    >
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </button>
                </div>
                <div className="modal__body_main">
                    {content}
                    {RepeatGetStatus()}
                    <div className="modal__body_main-btn flex">
                        <button
                            className="btn blue-btn"
                            onClick={() => dispatch(closeModalProcess())}
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
    const {data, isLoading, refetch, error} = useRepeatGetProcessQuery()
    setInterval(() => refetch(), 10000)
    if (data) {
        return <>
            <p>status: {data.status}</p>
            <hr/>
            <p>commentId: {data.commentId}</p>
            <hr/>
            <p>commentId: {data.commentId}</p>
            <hr/>
            <p>replyId: {data.replyId}</p>
            <hr/>
            <p>deleteStatus: {data.deleteStatus}</p>
            <hr/>
            <ProgressBar completed={data.percent}/>
        </>
    } else {
        return <p className="mt-20">Подготовка к обработке</p>
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