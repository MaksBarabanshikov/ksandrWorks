import Select from "react-select"
import {useState} from "react"


const CardSelectItem = ({item}) => {
    const [selectedOption, setSelectedOption] = useState(null)
    return (
        <li className={`card-select-item`}>
            <h4 className="card-select-title">{item.title}</h4>
            <Select
                classNamePrefix="custom-select"
                value={selectedOption}
                onChange={setSelectedOption}
                options={item.options}
                isSearchable={false}
                placeholder={"+"}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />
        </li>
    )
}

export default CardSelectItem