import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import logo from "../../image/logo.jpg"
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Block stylees="logo" >
                <img className="logo-image" src={logo} alt="logo"/>
                <Block stylees="logo__text">
                    <h6 className="logo__title">
                        KsandrWorks
                    </h6>
                    <p className="logo__subtitle">
                        UI Designer
                    </p>
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

export default Sidebar