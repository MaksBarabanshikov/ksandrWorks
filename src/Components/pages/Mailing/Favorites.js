import trash from "../../../image/mailing/trash.svg";
import React from "react";

const Favorites = (props) => {
    return(
        <div className="mailing-constructor-drop-favorites favorites">
            <span>Избранное</span>
            <ul className="favorites-list">
                {props.favorites.map(item => {
                    return (
                        <li key={item.id} className="favorites-list-item" onClick={() => props.changeConstructor(item)}>
                            <div className="favorites-item-text">
                                <span>{item.title}</span>
                            </div>
                            <button onClick={() => props.remove(item.id)}>
                                <img src={trash} alt="Удалить"/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites