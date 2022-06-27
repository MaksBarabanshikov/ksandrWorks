import {hashtagsApi, useGetProcessQuery, useRepeatGetProcessQuery} from "../../redux/services/hashtagsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../redux/modules/modalSlice";
import Loader from "../common/Loader";
import React, {useEffect, useState} from "react";

const ProcessBarModal = () => {
    const [state, setState] = useState(null);
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
    const {data: status, isLoading, refetch} = useRepeatGetProcessQuery()
    setInterval(() => refetch(), 5000)
    if (isLoading) {
        return <Loader width={50} height={50}/>
    }
    if (status) {
        return <h1>Осталось: {status}</h1>
    }
    return <h1>Что-то пошло не так</h1>
}

export const GetStatus = () => {
    const {data: status, isLoading} = useRepeatGetProcessQuery()

    if (isLoading) {
        return <Loader width={50} height={50}/>
    }
    if (status) {
        return <h1>Готово</h1>
    }
    return <h1>Что-то пошло не так</h1>
}

export default ProcessBarModal