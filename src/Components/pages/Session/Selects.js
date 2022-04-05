import SelectBlock from "../../common/SelectBlock"
import {selectOptions} from "../../../StorageData/sessionData";
import "./Selects.scss"

const Selects = () => {
    return (
        <div className="session-selects">
            {selectOptions.map(item => (
                <SelectBlock item={item}/>
            ))}
        </div>
    )
}

export default Selects