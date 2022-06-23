import CardSelectItem from "./CardSelectItem"
import "./CardSelect.scss"
import {dropMenuData} from "../../StorageData/dropMenuData";

const CardSelect = () => {
    return (
        <ul className="card-select">
            {dropMenuData.map(item => (
                <CardSelectItem
                    item={item}
                    key={item.id}
                />
            ))}
        </ul>
    )
}

export default CardSelect