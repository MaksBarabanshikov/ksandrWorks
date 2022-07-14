import LandingHashtagsList from "./LandingHashtagsList";
import LandingHashtagsTitle from "./LandingHashtagsTitle";
import LandingButton from "../LandingButton";
import imgPng from "../../../../Assets/image/landing/bookmark-fav-dynamic-color.png";
import imgWebp from "../../../../Assets/image/landing/bookmark-fav-dynamic-color.webp";
import MotionSectionX from "../Motion/MotionSectionX";
import Image from "react-image-webp";

const LandingHashtags = () => {
    const buttonChild = <>
        <Image
            src={imgPng}
            webp={imgWebp}
            alt="fire"
        />
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