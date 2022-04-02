import {useState} from "react"
import Block from "../common/Block"
import Notify from "./Notify"
import User from "./User"
import {notifyData} from "../../StorageData/notifyData"
import userImage from "../../image/header/User_light.svg"
import BellImage from "../../image/header/Bell_light.svg"
import "./Header.scss"

const Header = (props) => {
    const [notify, setNotify] = useState([...notifyData])
    const [visibility, setVisibility] = useState({
        "notifyVisible": false,
        "userVisible": false
    })
    const today = new Date()
    let date = today.getDate() + "." + (today.getMonth() + 2) + "." + today.getFullYear();

    const handleSetVisible = (key) => {
        if (key === "notifyVisible") {
            setVisibility(prevState => {
                return {
                    ...prevState,
                    [key]: !visibility[key],
                    "userVisible": false
                }
            })
        } else {
            setVisibility(prevState => {
                return {
                    ...prevState,
                    [key]: !visibility[key],
                    "notifyVisible": false
                }
            })
        }
    }

    const handleRemoveNotify = () => {
        setNotify([])
        handleSetVisible("notifyVisible")
    }

    return (
        <header className="header">
            <Block stylees="header-title">
                <h5>{props.title}</h5>
            </Block>
            <Block stylees="header-buttons">
                <button className="header-btn-notify" onClick={() => handleSetVisible("notifyVisible")}>
                    <img src={BellImage} alt=""/>
                    <span className="header-count">{notify.length}</span>
                </button>
                <button className="header-btn-user" onClick={() => handleSetVisible("userVisible")}>
                    <img src={userImage} alt=""/>
                </button>
                <Block stylees="header-date">
                    <p className="red">
                        Услуга оплачена до {date.toString()}
                    </p>
                </Block>
            </Block>
            <Notify
                notify={notify}
                visibility={visibility.notifyVisible}
                removeNotify={handleRemoveNotify}
            />
            <User visible={visibility.userVisible}/>
        </header>
    )
}

export default Header