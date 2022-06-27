// // import {useGetProcessQuery} from "../../redux/services/hashtagsApi";
// // import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// // import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
// // import {useDispatch, useSelector} from "react-redux";
// // import {closeModalProcess} from "../../redux/modules/modalSlice";
//
// const ProcessBar = () => {
//     // const {data: status,error, isLoading } = useGetProcessQuery()
//     // const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)
//     //
//     // const dispatch = useDispatch()
//
//     return(
//         <div>
//             123123
//
//
//             {/*<div className={`modal__body`}>*/}
//             {/*    <div className="modal__body_top flex justify-content-between align-center border-bottom">*/}
//             {/*        <h1 className="title">*/}
//             {/*            Статус*/}
//             {/*        </h1>*/}
//             {/*        <button*/}
//             {/*            className="modal__body_close"*/}
//             {/*            onClick={() => dispatch(closeModalProcess())}*/}
//             {/*        >*/}
//             {/*            <FontAwesomeIcon icon={faTimesCircle}/>*/}
//             {/*        </button>*/}
//             {/*    </div>*/}
//             {/*    <div className="modal__body_main">*/}
//             {/*        {isLoading && <h1>Идёт загрузка</h1>}*/}
//             {/*        {error && <h1>{error}</h1>}*/}
//             {/*        {status && <div className="border-bottom">*/}
//             {/*            <h1>Осталось: {status}</h1>*/}
//             {/*        </div>}*/}
//             {/*        <div className="modal__body_main-btn flex">*/}
//             {/*            <button*/}
//             {/*                className="btn blue-btn"*/}
//             {/*                onClick={() => dispatch(closeModalProcess())}*/}
//             {/*            >*/}
//             {/*                Остановить процесс*/}
//             {/*            </button>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
//     )
// }
//
// export default ProcessBar()
import {useGetProcessQuery} from "../../redux/services/hashtagsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {closeModalProcess} from "../../redux/modules/modalSlice";
const ProcessBarModal = () => {

    const {data: status,error, isLoading } = useGetProcessQuery()
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)

    const dispatch = useDispatch()

    return(
        <div className={`modal ${isOpenProcess? "" : "hidden"}`}>
            <div className={`modal__body ${isOpenProcess? "open" : ''}`}>
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
                    {isLoading && <h1>Идёт загрузка...</h1>}
                    {error && <h1>Произошла ошибка</h1>}
                    {status && <div className="border-bottom">
                        <h1>Осталось: {status}</h1>
                    </div>
                    }
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

export default ProcessBarModal