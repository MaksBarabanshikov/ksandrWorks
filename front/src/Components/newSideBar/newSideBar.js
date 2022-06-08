import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import FBLogo from "../../image/Logotype-Facebook.svg"
import logo from "../../image/logo.png"
import "./Sidebar.scss"
import {useLocation} from "react-router-dom";
import ReactFacebookLogin from "../../FB/FBConnect";

const Sidebar = () => {
    const location = useLocation()
    return (
        <section className="sidebar">
            <div className="sidebar__main">
                {
                    location.pathname !== '/'?
                    <Block stylees="logo" >
                        <img className="logo-image" src={logo} alt="logo"/>
                        <Block stylees="logo__text">
                            <h6 className="logo__title">
                                TeleSpace
                            </h6>
                        </Block>
                    </Block>:
                    <Block stylees="logo">
                        {ReactFacebookLogin()}
                        <button>
                            <img className="logo-image" src={FBLogo} alt="logo"/>
                        </button>
                        <Block stylees="logo__text">
                            <h3>
                                Account FB
                            </h3>
                            <h6 className="logo__title">
                                ID#415234678
                            </h6>
                        </Block>
                    </Block>
                }

                <Block stylees="column">
                    <SidebarList list="sidebar-top"/>
                    <SidebarList list="sidebar-middle"/>
                    <SidebarList list="sidebar-bottom"/>
                </Block>
            </div>
        </section>
    )
}

export default Sidebar