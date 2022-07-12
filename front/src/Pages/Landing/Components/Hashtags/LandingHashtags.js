import LandingHashtagsList from "./LandingHashtagsList";
import LandingHashtagsTitle from "./LandingHashtagsTitle";
import LandingButton from "../LandingButton";
import img from "../../../../Assets/image/landing/bookmark-fav-dynamic-color.png";

const LandingHashtags = () => {
    const buttonChild = <>
        <img src={img} alt=""/>
        <span>Перейти к регистрации</span>
    </>
    return (
        <section className="landing-hashtags">
            <LandingHashtagsTitle/>
            <LandingHashtagsList/>
            <LandingButton children={buttonChild} width='262px' height='70px'/>
        </section>
    )
}

export default LandingHashtags