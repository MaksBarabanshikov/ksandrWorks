import ReviewsList from "./ReviewsList";
import MotionSectionXPlus from "../Motion/MotionSectionXPlus";
import Gradient from "../Gradient";

const Reviews = () => {

    const gradientStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-25%)",
        left: '-20%',
        width: '532.09px',
        height: '484px',
    }
    const gradientStyle2 = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-25%)",
        right: '-25%',
        width: '532.09px',
        height: '484px',
    }

    return (
        <MotionSectionXPlus classNames='landing-reviews'>
            <h1><strong>отзывы</strong> наших клиентов</h1>
            <ReviewsList/>
            <div className="landing-reviews__gradients">
                <Gradient style={gradientStyle}/>
                <Gradient style={gradientStyle2}/>
            </div>
        </MotionSectionXPlus>
    )
}

export default Reviews