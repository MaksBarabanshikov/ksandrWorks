import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const NewPrevArrow = (props) => {
    const {className, style, onClick} = props
    return (
        <div
            className={`${className} new-slider-btn black-opacity`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
    )
}

export default NewPrevArrow