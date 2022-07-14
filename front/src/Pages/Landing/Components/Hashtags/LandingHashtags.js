import LandingHashtagsList from "./LandingHashtagsList";
import LandingHashtagsTitle from "./LandingHashtagsTitle";
import LandingButton from "../LandingButton";
import img from "../../../../Assets/image/landing/bookmark-fav-dynamic-color.png";
import MotionSectionX from "../Motion/MotionSectionX";

const LandingHashtags = () => {
    const buttonChild = <>
        <img src={img} alt=""/>
        <span>Перейти к регистрации</span>
    </>
    return (
        <MotionSectionX classNames="landing-hashtags">
            <LandingHashtagsTitle/>
            <LandingHashtagsList/>
            <LandingButton children={buttonChild} width='262px' height='70px'/>
        </MotionSectionX>
    )
}

export default LandingHashtags