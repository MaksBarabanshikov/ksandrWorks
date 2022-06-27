import SelectBlock from "../../Components/common/SelectBlock"
import {selectOptions} from "../../StorageData/sessionData";
import "./Selects.scss"

const Selects = () => {
    return (
        <div className="session-selects">
            {selectOptions.map(item => (
                <SelectBlock item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Selects