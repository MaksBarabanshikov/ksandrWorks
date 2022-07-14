import Grid from "../Grid";
import LandingButton from "../LandingButton";
import fire from "../../../../Assets/image/landing/fire.svg";
import rotateFace from "../../../../Assets/image/landing/Upside-Down-Face.png";
import smileFace from "../../../../Assets/image/landing/Beaming-Face-Smiling.png";
import Timer from "./Timer";
import MotionSectionX from "../Motion/MotionSectionX";

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
        <MotionSectionX classNames="landing-speed">
            <h1>
                <img className="landing-speed__rotate-face" src={rotateFace} alt="Эмодзи"/>
                <strong>давай проверим</strong> <br/>
                шустрик ты или мямлик?
                <img className="landing-speed__smile-face" src={smileFace} alt="Эмодзи"/>
            </h1>
            <div className="landing-speed__content flex align-center">
                <div className="landing-speed__text">
                    В течение 15 минут ты можешь забрать скидку на сервис в 10%
                    <Grid style={styleGrid}/>
                </div>
            <Timer/>
            </div>
            <LandingButton width={'365px'} height={'70px'} children={btnChildren}/>
        </MotionSectionX>
    )
}

export default SpeedTest