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
                        <li><div>Загрузите теги, выберите пост для продвижения и запустите процесс</div></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default HashtagProcess