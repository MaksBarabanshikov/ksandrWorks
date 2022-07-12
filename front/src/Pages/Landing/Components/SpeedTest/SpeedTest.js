import Grid from "../Grid";
import LandingButton from "../LandingButton";
import fire from "../../../../Assets/image/landing/fire.svg";

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
                <strong>давай проверим</strong> <br />
                 шустрик ты или мямлик?
            </h1>
            <div className="landing-speed__content flex align-center">
                <div className="landing-speed__text">
                    В течение 15 минут ты можешь забрать скидку на сервис в 10%
                    <Grid style={styleGrid}/>
                </div>
                <div className="landing-speed__timer">
                    <span className='landing-speed__timer_min'>14:</span>
                    <span className="landing-speed__timer_sec">59</span>
                </div>
            </div>
            <LandingButton width={'365px'} height={'70px'} children={btnChildren}/>
        </section>
    )
}

export default SpeedTest