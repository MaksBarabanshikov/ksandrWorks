import {NavLink} from "react-router-dom";
import {sidebarTop,sidebarMiddle,sidebarBottom} from "../../StorageData/sidebarData";

const SidebarList = (props) => {

    if (props.list === "sidebar-top") {
        return (
            <nav className={`${props.list} sidebar-cont`}>
                {
                    sidebarTop.map(item =>
                    <NavLink key={item.text} to={item.path}>
                        <img src={item.img} alt=""/>
                        <p className="sidebar-list__text">{item.text}</p>
                    </NavLink>
                )}
            </nav>
        )
    }
    else if (props.list === "sidebar-middle") {
        return (
            <nav className={`${props.list} sidebar-cont`}>
                {
                    sidebarMiddle.map(item =>
                    <NavLink key={item.text} to={item.path}>
                        <img src={item.img} alt=""/>
                        <p className="sidebar-list__text">{item.text}</p>
                    </NavLink>
                )}
            </nav>
        )
    }
    else if (props.list === "sidebar-bottom") {
        return (
            <nav className={`${props.list} sidebar-cont`}>
                {
                    sidebarBottom.map(item =>
                    <NavLink key={item.text} to={item.path}>
                        <img src={item.img} alt=""/>
                        <p className="sidebar-list__text">{item.text}</p>
                    </NavLink>
                )}
            </nav>
        )
    }
}

export default SidebarList