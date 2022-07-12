import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const LandingNextArrow = (props) => {
    const { className,  style, onClick } = props
    return (
        <div
            className={`${className} landing-slider-btn`}
            style={{...style}}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleRight}/>
        </div>
    )
}


export default LandingNextArrow