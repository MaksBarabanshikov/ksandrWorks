import "./Instruction.scss"
import posterLogo from "../../../image/video.jpg"
import Header from "../../header/Header";
import React from "react";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";

const pagesNum = [
    {id: 0 , page: 1 , active: true},
    {id: 1 , page: 2 , active: false},
    {id: 2 , page: 3 , active: false}
]

const Instruction = () => {
    return (
        <>
            <Header title="Инструкция" icon={faBookOpen}/>
            <div className="instruction">
                <div className="instruction-title">
                    <h6>Как работать с программой. Вступление и краткое обучение за 5 минут!</h6>
                    <span>
                    Для пополнения счета вы можете использовать все доступные способы оплаты. Вы можете пополнить счет с помощью
                    банковской карты, с помощью электронного кошелька, с помощью криптовалютного счета. В случае, если вам не подходит
                    ни один из вышеперечисленных способов оплаты - вы можете оплатить с помощью электронной кассы.
                </span>
                </div>
                <div className="instruction-video">
                    <video poster={posterLogo} src="front/src/Components/pages/Instruction/Instruction#"/>

                    <ul className="instruction-video-buttons">

                        {pagesNum.map(pages => {
                            return(
                                <li className={pages.active ? "active": null} key={pages.id}>{pages.page}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Instruction