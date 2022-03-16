import "./Input.scss"
import classNames from "classnames";

const Input = (props) => {
    if (props.isLabel && props.type !== "checkbox") {
        return (
            <label className={classNames("input-label", props.stylesLabel)}>
                <span>{props.labelText}</span>
                <input className={props.stylees} type={props.type} placeholder={props.placeholder}/>
            </label>
        )
    } else if (props.type === "checkbox") {
        return (
            <label className={classNames("input-label", props.stylesLabel)}>
                <span>{props.labelText}</span>
                <input className={props.stylees} type={props.type} name={props.name} defaultChecked={props.checked}
                       onChange={props.onChange()}/>
            </label>
        )
    } else {
        return <input className={props.stylees} type={props.type} placeholder={props.placeholder}/>
    }
}

export default Input