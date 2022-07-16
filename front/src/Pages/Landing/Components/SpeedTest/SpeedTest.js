import Grid from "../Grid";
import LandingButton from "../LandingButton";
import fire from "../../../../Assets/image/landing/fire.svg";
import rotateFace from "../../../../Assets/image/landing/Upside-Down-Face.png";
import rotateFaceWebp from "../../../../Assets/image/landing/Upside-Down-Face.webp";
import smileFace from "../../../../Assets/image/landing/Beaming-Face-Smiling.png";
import smileFaceWebp from "../../../../Assets/image/landing/Beaming-Face-Smiling.webp";
import Timer from "./Timer";
import MotionSectionX from "../Motion/MotionSectionX";
import Image from "react-image-webp";

const SpeedTest = () => {
    const btnChildren = <>
        <img src={fire} alt=""/>
        <span>Активировать предложение</span>
    </>

    const styleGrid = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-64%, -50%)',
        opacity: 0.4
    }

    return (
        <section className="landing-speed">
            <h1>
                <Image
                    className="landing-speed__rotate-face"
                    src={rotateFace}
                    webp={rotateFaceWebp}
                    alt="Эмодзи"
                />
                <strong>давай проверим</strong> <br/>
                шустрик ты или мямлик?
                <Image
                    className="landing-speed__smile-face"
                    src={smileFace}
                    webp={smileFaceWebp}
                    alt="Эмодзи"
                />
            </h1>
            <div className="landing-speed__content flex align-center">
                <div className="landing-speed__text">
                    В течение 15 минут ты можешь забрать скидку на сервис в 10%
                    <Grid style={styleGrid}/>
                </div>
            <Timer/>
            </div>
            <LandingButton width={'365px'} height={'70px'} children={btnChildren}/>
        </section>
    )
}

export default SpeedTest