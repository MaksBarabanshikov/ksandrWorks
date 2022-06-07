import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const NewNextArrow = (props) => {
    const { className,  style, onClick } = props
    return (
        <div
            className={`${className} new-slider-btn black-opacity`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    )
}


export default NewNextArrow