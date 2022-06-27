import React, {useRef, useState} from "react"
import {SocialData} from "../../StorageData/SocialData"
import Block from "../../Components/common/Block"
import "./MailingConstructor.scss"
import edit from "../../image/mailing/edit.svg"
import trash from "../../image/mailing/trash.svg"
import EditorMessage from "./EditorMessage";
import Favorites from "./Favorites";
import DropListArrow from "../../Components/DropListArrow/DropListArrow";


const MailingConstructor = () => {
    const [message, setMessage] = useState({});
    const [favorites, setFavorites] = useState([])
    const [active, setActive] = useState(false)

    const titleRef = useRef()

    const handleSetMessage = html => {
        if (html === "") {
            return alert("пусто!")
        } else {
            setMessage({...html})
        }
    }

    const handleSetFavorites = html => {
        if (html === null) {
            return alert("пусто!")
        } else {
            const id = new Date().valueOf();
            setFavorites([...favorites,
                {
                    id: id,
                    title: titleRef.current.value,
                    text: html
                }
            ])
        }
    }

    const handleRemoveFavorites = id => {
        setFavorites(favorites.filter(fav => fav.id !== id))
    }

    const handleChangeConstructor = favorites => {
        console.log(favorites)
        console.log(message)
    }

    return (
        <Block stylees="mailing-constructor">
            <h5 className="mailing-constructor-title">
                Конструктор сообщений
            </h5>
            <div className="mailing-constructor-main">
                <div className="mailing-constructor-row flex">
                    <div className="mailing-constructor-cell">
                        Рассылка по лидам
                    </div>
                    <div className="mailing-constructor-cell">
                        <div className="mailing-constructor-text">
                            Платформа:
                            <span>{SocialData[0].text}</span>
                        </div>
                        <img className="networkLogo" src={SocialData[0].img} alt=""/>
                    </div>
                    <div className="mailing-constructor-cell">
                        <button>
                            <img src={edit} alt="Изменить"/>
                        </button>
                        <button>
                            <img src={trash} alt="Удалить"/>
                        </button>
                    </div>
                </div>
                <div className="mailing-constructor-new-message">
                    <button
                        className="mailing-add-message"
                        onClick={() => setActive(!active)}
                    >
                        + Новое сообщение
                    </button>
                    {active? <div className="mailing-constructor-drop-add-message">
                        <div className="mailing-constructor-row">
                            <label htmlFor="constructorTitle">
                                <span>Заголовок</span>
                                <input name="constructorTitle" type="text" defaultValue={'Заголовок'} ref={titleRef}/>
                            </label>
                            <label htmlFor="socialNetwork">
                                <span>Социальная сеть</span>
                                <DropListArrow dropList={SocialData}/>
                            </label>
                        </div>
                        <div className="mailing-constructor-create">
                            <span>Сообщение</span>
                            <EditorMessage handleSetMessage={handleSetMessage} handleSetFavorites={handleSetFavorites}/>
                        </div>
                        <Favorites favorites={favorites} remove={handleRemoveFavorites} changeConstructor={handleChangeConstructor}/>
                    </div>: null}
                </div>
            </div>
        </Block>
    )
}

export default MailingConstructor
