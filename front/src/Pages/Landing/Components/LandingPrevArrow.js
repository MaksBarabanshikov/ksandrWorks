import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

const LandingPrevArrow = (props) => {
    const {className, style, onClick} = props
    return (
        <div
            className={`${className} landing-slider-btn`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
    )
}

export default LandingPrevArrow