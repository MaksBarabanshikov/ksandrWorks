import SelectBlock from "../../common/SelectBlock"
import "./Selects.scss"

const Selects = () => {
    return (
        <div className="session-selects">
            <SelectBlock placeholder="Выбор страны"/>
            <SelectBlock placeholder="Выбор по активности"/>
            <SelectBlock placeholder="С ...."/>
            <SelectBlock placeholder="По ...."/>
            <SelectBlock placeholder="Выбор формата"/>
            <input className="session-selects-input" type="text" placeholder="Количество действий"/>
        </div>
    )
}

export default Selects