import CardSelectItem from "./CardSelectItem"
import "./CardSelect.scss"


const CardSelect = () => {
    return (
        <ul className="card-select row flex ">
            <CardSelectItem title="Сервис"/>
            <CardSelectItem title="Страна"/>
            <CardSelectItem title="Прокси"/>
        </ul>
    )
}

export default CardSelect