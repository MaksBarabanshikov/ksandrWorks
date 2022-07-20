import React from "react";
import ProcessBar from "../../Components/Modal/ProcessBar";
import {useSelector} from "react-redux";

const HashtagProcess = () => {
    const isOpenProcess = useSelector(state => state.modalFb.isOpenProcess)

    return (
        <div className="hashtag__block">
            <div className="top border-bottom pb-25 mb-20">
                <h1 className="title">
                    Процессы
                </h1>
            </div>
            <div className="main">
                {isOpenProcess && <ProcessBar/>}
                {
                    !isOpenProcess &&
                    <ul className="hashtag__list">
                        <li>
                            <div>Необходимо переподключить токен. Сделайте это по соответствующей кнопке
                            </div>
                        </li>
                        <li>
                            <div>Процесс находиться на паузе</div>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default HashtagProcess
