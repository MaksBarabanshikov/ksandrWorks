import LandingHashtagsList from "./LandingHashtagsList";
import LandingHashtagsTitle from "./LandingHashtagsTitle";
import LandingButton from "../LandingButton";
import imgSvg from "../../../../Assets/image/landing/bookmark-fav-dynamic-color.svg";
import MotionSectionX from "../Motion/MotionSectionX";

const LandingHashtags = () => {


    const buttonChild = <>
        <img src={imgSvg} alt="Кнопка"/>
        <span>Перейти к регистрации</span>
    </>
    return (
        <MotionSectionX classNames="landing-hashtags">
            <LandingHashtagsTitle/>
            <LandingHashtagsList/>
            <LandingButton to='/register' children={buttonChild} width='262px' height='70px'/>
        </MotionSectionX>
    )
}

export default LandingHashtags