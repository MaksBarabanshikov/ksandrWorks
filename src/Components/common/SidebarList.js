import {NavLink} from "react-router-dom";
import {sidebarTop,sidebarMiddle,sidebarBottom} from "../../StorageData/sidebarData";

const SidebarList = (props) => {

    if (props.list === "sidebar-top") {
        return (
            <nav className={props.list}>
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
            <nav className={props.list}>
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
            <nav className={props.list}>
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