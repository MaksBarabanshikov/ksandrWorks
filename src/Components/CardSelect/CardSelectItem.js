import {useState} from "react";
import CardDropMenu from "./CardDropMenu";
import classNames from "classnames";

const CardSelectItem = (props) => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible)
    }

    return (
        <li className={classNames("card-select-item", {"active": visible})}>
            <h4 className="card-select-title">{props.title}</h4>

            <span className="card-select-add" onClick={handleVisible}>+</span>
            <CardDropMenu select={handleVisible}/>
        </li>
    )
}

export default CardSelectItem