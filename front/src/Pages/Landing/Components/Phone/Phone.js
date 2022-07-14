import phone from '../../../../Assets/image/landing/phone.png'
import blurImg1 from '../../../../Assets/image/landing/bookmark-dynamic-color.png'
import blurImg2 from '../../../../Assets/image/landing/flash-dynamic-color.png'
import MotionSectionXPlus from "../Motion/MotionSectionXPlus";

const Phone = () => {
    return (
        <MotionSectionXPlus classNames="landing-phone">
            <img src={phone} alt=""/>
            <img className="landing-phone__blur1" src={blurImg1} alt=""/>
            <img className="landing-phone__blur2" src={blurImg2} alt=""/>
        </MotionSectionXPlus>
    )
}

export default Phone