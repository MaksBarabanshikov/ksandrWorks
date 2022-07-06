import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import "./Sidebar.scss"
import Logo from "../common/Logo";

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="sidebar__main">
                <Logo/>
                <Block stylees="sidebar__navigation column">
                    <SidebarList list="sidebar-top"/>
                    <SidebarList list="sidebar-middle"/>
                    <SidebarList list="sidebar-bottom"/>
                </Block>
            </div>
        </section>
    )
}

export default Sidebar