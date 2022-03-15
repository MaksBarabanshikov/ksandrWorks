import {useState} from "react";
import CardDropMenu from "./CardDropMenu";

const CardSelectItem = (props) => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(!visible)
    }

    return (
        <li className="card-select-item">
            <h4 className="card-select-title">{props.title}</h4>

            <span className="card-select-add" onClick={onClick}/>
            {visible ?  <CardDropMenu/> : null}

        </li>
    )
}

export default CardSelectItem