import Block from "../common/Block";
import userImage from "../../image/header/User_light.svg"
import BellImage from "../../image/header/Bell_light.svg"
import {useEffect, useState} from "react";
// import "./Header.scss"

let push = "1"

const Header = (props) => {
    const [notify, setNotify] = useState("")

    const today = new Date()
    let date = today.getDate() + "."+ (today.getMonth() + 2) +"." + today.getFullYear();

    useEffect(() => {
        if (notify !== push) {
            setNotify(push)
        }
    })

    return(
        <header className="header">
            <Block stylees="header-title">
                <h5>{props.title}</h5>
            </Block>
            <Block stylees="header-buttons">
                <button className="header-btn-notify">
                    <img src={BellImage} alt=""/>
                    <span className="header-count">{notify}</span>
                </button>
                <button className="header-btn-user">
                    <img src={userImage} alt=""/>
                </button>
                <Block stylees="header-date">
                    <p className="red">
                        Услуга оплачена до {date.toString()}
                    </p>
                </Block>
            </Block>
        </header>
    )
}

export default Header