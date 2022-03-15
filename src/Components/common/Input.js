import "./Input.scss"

const Input = (props) => {
    if (props.isLabel) {
        return (
            <label className="input-label">
                {props.labelText}
                <input className={props.stylees} type={props.type} placeholder={props.placeholder} checked={props.checked} />
            </label>
        )
    } else {
        return <input className={props.stylees} type={props.type} placeholder={props.placeholder} checked={props.checked} />
    }
}

export default Input