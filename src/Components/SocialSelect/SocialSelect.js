import {SocialData} from "../../StorageData/SocialData"
import "./SocialSelect.scss"
import {NavLink} from "react-router-dom";

const SocialSelect = () => {
    return (
        <div className="social-select flex">
            {SocialData.map(item => {
                return <NavLink className="social-select-card" key={item.text} to={`/parsing/${item.text}`}>
                    <p>{item.text}</p>
                    <img src={item.img} alt=""/>
                </NavLink>
            })
            }
        </div>
    )

}
export default SocialSelect