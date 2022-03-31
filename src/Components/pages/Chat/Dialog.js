import "./Dialog.scss"
import classNames from "classnames";
import microLogo from "../../../image/chat/micro.svg"
const Dialog = ({person}) => {

    if (person === null) {
        return (
            <div className="dialog-layout">
                <h1 className="dialog-not-selected">
                    Выберите собеседника!
                </h1>
            </div>
        )
    } else {
        return (
            <div className="dialog-layout">
                <div className="dialog-title">
                    <div className="dialog-person">
                        <div className="dialog-person-img">
                            <img src={person.img} alt=""/>
                            <span className="dialog-person-isOnline"/>
                        </div>
                        <div className="dialog-person-text">
                            <p>{person.name}</p>
                            <span>{person.lastMessage}</span>
                        </div>
                    </div>
                    <div className="dialog-options">
                        <span className="dialog-options-circle"/>
                    </div>
                </div>
                <div className="dialog-content">
                    <div className="dialog-content-container">
                        {person.messages.map(message => {
                            return (
                                <div key={message.id} className={classNames('dialog-message-main',`dialog-message-` + message.sender)}>
                                    <p className="dialog-message-text">{message.message}</p>
                                    <span className="triangle"/>
                                    <span className="dialog-message-send">
                                    {message.sentTo}
                                </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="dialog-input">
                    <input type="text" placeholder="Введите ваше сообщение в данное поле ........."/>
                    <button className="dialog--micro">
                        <img src={microLogo} alt=""/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Dialog