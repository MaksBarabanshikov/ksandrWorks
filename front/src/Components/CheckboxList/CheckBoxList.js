import Block from "../common/Block";
import Input from "../common/Input";
import {useState} from "react";
import "./CheckBoxList.scss"

const CheckBoxList = ({checkboxs, radio}) => {
    const [checked, setChecked] = useState({...radio})

    const handleSetChecked = (event) => {
        const {name,checked} = event.target

        setChecked(prevState => {
            return {
                ...prevState,
                [name]: checked
            }
        })

    }

    return (
        <Block stylees="checkbox-list">
            {checkboxs.map(item => {
                return <Input key={item.id} stylesLabel={checked[item.name] ? "active" : null} isLabel={item.isLabel}
                              labelText={item.labelText} type={item.type}
                              name={item.name} checked={checked[item.name]}
                              onChange={() => handleSetChecked}/>
            })}
        </Block>
    )
}

export default CheckBoxList