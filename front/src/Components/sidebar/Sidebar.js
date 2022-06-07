import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import logo from "../../image/logo.png"
import "./Sidebar.scss"

const NewSidebar = () => {
    return (
        <section className="sidebar">
            <Block stylees="logo" >
                <img className="logo-image" src={logo} alt="logo"/>
                <Block stylees="logo__text">
                    <h6 className="logo__title">
                        TeleSpace
                    </h6>
                </Block>
            </Block>
            <Block stylees="column">
                <SidebarList list="sidebar-top"/>
                <SidebarList list="sidebar-middle"/>
                <SidebarList list="sidebar-bottom"/>
            </Block>
        </section>
    )
}

export default NewSidebar