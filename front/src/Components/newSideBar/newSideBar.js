import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import "./Sidebar.scss"
import Logo from "../common/Logo";
import Container from "../common/Container";

const Sidebar = () =>
    <section className="sidebar">
        <Container>
            <div className="sidebar__main">
                <Logo/>
                <Block stylees="sidebar__navigation column">
                    <SidebarList list="sidebar-top"/>
                    <SidebarList list="sidebar-middle"/>
                    <SidebarList list="sidebar-bottom"/>
                </Block>
            </div>
        </Container>
    </section>

export default Sidebar