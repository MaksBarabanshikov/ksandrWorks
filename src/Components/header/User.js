import logo from "../../image/logo.png"
import subtract from "../../image/header/user/Subtract.svg"
import Block from "../common/Block"
import "./User.scss"

const User = ({visible}) => {
    return (
        <div className={`header-user user user-${visible ? "visible" : ""}`}>
            <form action="#" className="user-form">
                <div className="user-column">
                    <div className="user-head">
                        <h1 className="user-title">
                            Учетная запись
                        </h1>
                        <p className="user-subtitle">
                            В данном окне вы можете изменить свои персональные
                            данные и пароль. Приятного пользования!
                        </p>
                    </div>
                    <div className="user-data">
                        <label className="user-label">
                            <span>Ф.И.О.</span>
                            <input type="text" defaultValue={"Елисеев Венеамин"} required/>
                        </label>
                        <label className="user-label">
                            <span>E-mail</span>
                            <input type="email" defaultValue={"ksandrworks@yandex.ru"} required/>
                        </label>
                        <label className="user-label">
                            <span>Номер телефона</span>
                            <input type="tel" defaultValue={"+7 (999) 666 99-99"} required/>
                        </label>
                    </div>

                    <div className="user-password">
                        <label className="user-label">
                            <span>Старый пароль</span>
                            <input type="password" defaultValue={"Елисеев Венеамин"}/>
                        </label>
                        <label className="user-label">
                            <span>Новый пароль</span>
                            <input type="password" defaultValue={"Елисеев Венеамин"}/>
                        </label>
                    </div>
                </div>
                <div className="user-column">
                    <Block stylees="logo">
                        <img className="logo-image" src={logo} alt="logo"/>
                        <Block stylees="logo__text">
                            <h6 className="logo__title">
                                TeleSpace
                            </h6>
                        </Block>
                    </Block>
                    <img src={subtract} alt=""/>
                    <button type="submit" className="purple-btn" onSubmit={() => console.log("hello")}>
                        Подтвердить
                    </button>
                </div>
            </form>
        </div>
    )
}

export default User