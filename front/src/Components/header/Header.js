import {useState} from "react"
import Block from "../common/Block"
import Notify from "./Notify"
import User from "./User"
import {notifyData} from "../../Assets/StorageData/notifyData"
import userImage from "../../Assets/image/header/User_light.svg"
import BellImage from "../../Assets/image/header/Bell_light.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons"
import "./Header.scss"
import Modal from "../Modal/Modal";
import {Link} from "react-router-dom";
import Logo from "../common/Logo";

const Header = (props) => {
    const [notify, setNotify] = useState([...notifyData])
    const [visibility, setVisibility] = useState({
        "notifyVisible": false,
        "userVisible": false
    })

    const today = new Date();
    let date = today.getDate() + "." + (today.getMonth() + 2) + "." + today.getFullYear();

    const handleSetVisible = (key) => {
        if (key === "notifyVisible") {
          return  setVisibility(prevState => {
                return {
                    ...prevState,
                    [key]: !visibility[key],
                    "userVisible": false
                }
            })
        }
         return setVisibility(prevState => {
                return {
                    ...prevState,
                    [key]: !visibility[key],
                    "notifyVisible": false
                }
            })
    }

    const handleRemoveNotify = () => {
        setNotify([])
        handleSetVisible("notifyVisible")
    }

    return (
        <header className="header">
            <Block stylees="header-title">
                <FontAwesomeIcon icon={props.icon}/>
                <h5>{props.title}</h5>
            </Block>
            <Block stylees="header-buttons">
                {props.title === "Хештеги" && <Modal/>}
                <button className="header-btn-notify" onClick={() => handleSetVisible("notifyVisible")}>
                    <img src={BellImage} alt=""/>
                    <span className="header-count">{notify.length}</span>
                </button>
                <button className="header-btn-user" onClick={() => handleSetVisible("userVisible")}>
                    <img src={userImage} alt=""/>
                </button>
                <Block stylees="header-date flex align-center">
                    <Link to="/payment">
                        <div className="flex align-center">
                            <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                            <span>
                            Услуга оплачена до {date.toString()}
                        </span>
                        </div>
                    </Link>
                </Block>
            </Block>
            <Logo/>
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