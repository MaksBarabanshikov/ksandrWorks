import Select from "react-select";
import {useState} from "react";

const SelectBlock = ({item}) => {
    const [selectedOption, setSelectedOption] = useState(null)

    if (item.type === "select") {
        return (
            <div className="app-select">
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={item.options}
                    placeholder={item.placeholder}
                />
            </div>
        )
    }
    return (
        <input
            className="session-selects-input"
            type="text"
            placeholder={item.placeholder}
        />
    )
}

export default SelectBlock