import {SocialData} from "../../StorageData/SocialData"
import "./SocialSelect.scss"
import {NavLink} from "react-router-dom";

const SocialSelect = (props) => {
    return (
        <div className="social-select flex">
            {SocialData.map(item => {
                return <NavLink className="social-select-card" key={item.text} to={`/${props.page}/${item.text}`}>
                    <p>{item.text}</p>
                    <img src={item.img} alt=""/>
                </NavLink>
            })
            }
        </div>
    )

}
export default SocialSelect