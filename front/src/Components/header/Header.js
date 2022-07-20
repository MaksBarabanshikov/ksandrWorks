import React, {useState, Suspense} from "react"
import Block from "../common/Block"
import Notify from "./Notify"
import User from "./User"
import {notifyData} from "../../Assets/StorageData/notifyData"
import userImage from "../../Assets/image/header/User_light.svg"
import BellImage from "../../Assets/image/header/Bell_light.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons"
import "./Header.scss"
import {Link} from "react-router-dom";
import Logo from "../common/Logo";
import Loader from "../common/Loader";

const StatisticModal = React.lazy(() => import ("../Modal/Modal"))
const TopHashtagsModal = React.lazy(() => import('../Modal/TopHashtags/TopHashtagsModal'))

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
            return setVisibility(prevState => {
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
                {props.title === "Хештеги" &&
                    <Suspense fallback={<Loader width={30} height={30}/>}>
                        <TopHashtagsModal/>
                    </Suspense>
                }
                {props.title === "Хештеги" &&
                    <Suspense fallback={<Loader width={30} height={30}/>}>
                        <StatisticModal/>
                    </Suspense>}
                <button className="header-btn-notify" onClick={() => handleSetVisible("notifyVisible")}>
                    <img width="24" className="m-auto" src={BellImage} alt=""/>
                    <span className="header-count">{notify.length}</span>
                </button>
                <button className="header-btn-user" onClick={() => handleSetVisible("userVisible")}>
                    <img width='24' className="m-auto" src={userImage} alt=""/>
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