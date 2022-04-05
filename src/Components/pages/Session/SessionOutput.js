import Button from "../../common/Button";
import edit from "../../../image/result/rename.svg"
import trash from "../../../image/mailing/trash.svg"
import Avatar1 from "../../../image/chat/avatar.png"
import Avatar2 from "../../../image/chat/avatar2.png"
import Avatar3 from "../../../image/chat/avatar3.png"
import Avatar4 from "../../../image/chat/avatar4.png"
import "./SessionOutput.scss"
import SessionOutputItem from "./SessionOutputItem";
import {useEffect, useState} from "react";

const sessionField = [
    {
        id: 0,
        img: Avatar1,
        fio: "Елисеев Е.Е",
        tel: "+79996669999",
        country: "Росиия",
        status: "Активен",
        days: 7,
        invite: 7,
        mailing: 7,
        type: "Внешний",
        reg: "02.02.2022",
        checked: false
    },
    {
        id: 1,
        img: Avatar2,
        fio: "Елисеев Е.Е",
        tel: "+79996669999",
        country: "Росиия",
        status: "Активен",
        days: 7,
        invite: 7,
        mailing: 7,
        type: "Внешний",
        reg: "02.02.2022",
        checked: false
    },
    {
        id: 2,
        img: Avatar3,
        fio: "Елисеев Е.Е",
        tel: "+79996669999",
        country: "Росиия",
        status: "Активен",
        days: 7,
        invite: 7,
        mailing: 7,
        type: "Внешний",
        reg: "02.02.2022",
        checked: false
    },
    {
        id: 3,
        img: Avatar4,
        fio: "Елисеев Е.Е",
        tel: "+79996669999",
        country: "Росиия",
        status: "Активен",
        days: 7,
        invite: 7,
        mailing: 7,
        type: "Внешний",
        reg: "02.02.2022",
        checked: false
    },
    {
        id: 4,
        img: Avatar1,
        fio: "Елисеев Е.Е",
        tel: "+79996669999",
        country: "Росиия",
        status: "Активен",
        days: 7,
        invite: 7,
        mailing: 7,
        type: "Внешний",
        reg: "02.02.2022",
        checked: false
    }
]

const SessionOutput = () => {
    const [mainChecked, setMainChecked] = useState(false)
    const [session, setSession] = useState([...sessionField])

    const handleSetMainChecked = () => {
        setMainChecked(!mainChecked)
    }

    const handleSetChecked = (id) => {
        setSession(
            session.map(item => {
                if (item.id === id) {
                    item.checked = !item.checked
                }
                return item
            })
        )
    }

    const handleExportSession = () => {

    let selectedSession = []
        session.map(item => {
            if (item.checked) {
                selectedSession = [...selectedSession, item]
            }
        })
        alert(JSON.stringify(selectedSession, null, 2))
    }

    useEffect(() => {
        setSession(
            session.map(item => {
                item.checked = mainChecked
                return item
            })
        )
    },[mainChecked])

    return (
        <div className="session-container">
            <div className="session-top">
                <div className="session-top-title">
                    <h5>
                        Сессии:<span>{session.length}</span>
                    </h5>
                </div>
                <button className="green-btn">
                    Проверить аккаунты
                </button>
                <button className="purple-btn">
                    Импорт
                </button>
                <button className="purple-btn" onClick={ handleExportSession }>
                    Экспорт
                </button>
            </div>
            <div className="session-middle">
                <span>Все</span>
                <button>
                    <img src={edit} alt=""/>
                </button>
                <button>
                    <img src={trash} alt=""/>
                </button>
            </div>
            <div className="session-bottom">
                <div className="session-bottom-title">
                    <div className="session-cell">
                        <input type="checkbox"
                               checked={mainChecked}
                               onChange={handleSetMainChecked}/>
                    </div>
                    <div className="session-cell">
                        <span>Фото</span>
                    </div>
                    <div className="session-cell">
                        <span>ФИО</span>
                    </div>
                    <div className="session-cell">
                        <span>Номер</span>
                    </div>
                    <div className="session-cell">
                        <span>Страна</span>
                    </div>
                    <div className="session-cell">
                        <span>Статус</span>
                    </div>
                    <div className="session-cell">
                        <span>Дней</span>
                    </div>
                    <div className="session-cell">
                        <span>Инвайтов</span>
                    </div>
                    <div className="session-cell">
                        <span>Рассылок</span>
                    </div>
                    <div className="session-cell">
                        <span>Тип</span>
                    </div>
                    <div className="session-cell">
                        <span>Регистрация</span>
                    </div>

                </div>
                <div className="session-main">
                    {
                        session.map(item => (
                            <SessionOutputItem key={item.id}
                                               session={item}
                                               setChecked={handleSetChecked}
                                               mainCheck={mainChecked}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SessionOutput