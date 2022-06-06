import trash from "../../../image/mailing/trash.svg";
import React from "react";

const Favorites = ({favorites, changeConstructor , remove}) => {
    return(
        favorites[0] ? <div className="mailing-constructor-drop-favorites favorites">
            <span>Избранное</span>
            <ul className="favorites-list">
                {favorites.map(item => {
                    return (
                        <li key={item.id} className="favorites-list-item" onClick={() => changeConstructor(item)}>
                            <div className="favorites-item-text">
                                <span>{item.title}</span>
                            </div>
                            <button onClick={() => remove(item.id)}>
                                <img src={trash} alt="Удалить"/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div> : null
    )
}

export default Favorites