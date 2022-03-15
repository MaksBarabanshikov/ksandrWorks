import classNames from "classnames";

const CardDropMenuItem = ({items, handleSetActive, select}) => {

    return (
        <ul className="card-select-drop-list">
            {items.map(item => {
                return <li key={Math.random()}
                           onClick=
                               {() => {
                                   handleSetActive(item)
                                   select(false)
                               }
                               }
                           className={classNames("card-select-drop-item", {'active': item.selected})}>
                    {item.text}
                </li>
            })}
        </ul>
    )
}

export default CardDropMenuItem