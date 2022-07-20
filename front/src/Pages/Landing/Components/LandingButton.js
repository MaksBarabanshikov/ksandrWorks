import {Link} from "react-router-dom";

const LandingButton = ({children, width, height, to}) => {

    const style = {
        width: width,
        height: height
    }

    if (to) {
        return (
            <Link to={to} style={style} className="landing-btn">
                {children}
            </Link>
        )
    }

    return (
        <button
            style={style}
            className='landing-btn'
        >
            {children}
        </button>
    )
}

export default LandingButton