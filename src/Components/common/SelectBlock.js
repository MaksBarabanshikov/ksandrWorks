import Select from "react-select";
import {useEffect, useState} from "react";

const options = [
    {value: "Россия", label: "Россия"},
    {value: "Украина", label: "Украина"},
    {value: "Беларусь", label: "Беларусь"},
    {value: "Эстония", label: "Эстония"},
]

const SelectBlock = (props) => {
    const [selectedOption, setSelectedOption] = useState(null)

  return(
      <div className="app-select">
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={props.placeholder}
        />
      </div>
  )
}

export default SelectBlock