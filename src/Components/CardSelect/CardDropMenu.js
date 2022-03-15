import Block from "../common/Block";
import {dropMenuCountries} from "../../StorageData/dropMenuData";
import CardDropMenuItem from "./CardDropMenuItem";
import {useState} from "react";

const CardDropMenu = (props) => {
    const cloneDropMenu = JSON.parse(JSON.stringify(dropMenuCountries))
    const [activeItem, setActiveItem] = useState(cloneDropMenu)

    const handleSetActive = (item) => {
        const addActive = JSON.parse(JSON.stringify(cloneDropMenu))
        item.selected = true
        for (const key in addActive) {
            if (addActive[key].text === item.text) {
                addActive[key].selected = true
                setActiveItem(addActive)
            }
        }
    }

    return(
        <Block stylees="card-select-drop">
            <p className="card-select-drop-title">Выберите город</p>
                <CardDropMenuItem items={activeItem} handleSetActive={handleSetActive} select={props.select} />
        </Block>
    )
}
export default CardDropMenu