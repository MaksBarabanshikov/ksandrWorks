import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import logo from "../../image/Logotype-Facebook.svg"
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <section className="sidebar">
            <Block stylees="logo" >
                <img className="logo-image" src={logo} alt="logo"/>
                <Block stylees="logo__text">
                    <h3>
                        Account FB
                    </h3>
                    <h6 className="logo__title">
                        ID#415234678
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

export default Sidebar