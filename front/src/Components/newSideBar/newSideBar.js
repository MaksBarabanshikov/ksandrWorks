import Block from "../common/Block"
import SidebarList from "../common/SidebarList"
import "./Sidebar.scss"
import Logo from "../common/Logo";

const Sidebar = () => {
<<<<<<< HEAD
    return (
        <section className="sidebar">
            <div className="sidebar__main">
                <Logo/>
=======
    const location = useLocation()

    return (
        <section className="sidebar">
            <div className="sidebar__main">
                {
                    location.pathname !== '/hashtags' ?
                        <Block stylees="logo">
                            <img className="logo-image" src={logo} alt="logo"/>
                            <Block stylees="logo__text">
                                <h6 className="logo__title">
                                    TeleSpace
                                </h6>
                            </Block>
                        </Block> :
                        <Block stylees="logo">
                            {
                                ReactFacebookLogin()
                            }
                        </Block>
                }

>>>>>>> landing
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