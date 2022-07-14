import Grid from "../Grid";
import MotionSectionXPlus from "../Motion/MotionSectionXPlus";

const Video = () => {
    const styleGrid = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-64%, -50%)',
        opacity: 0.4
    }

    return (
        <MotionSectionXPlus classNames="landing-video">
            <h1>Мы подготовили для вас короткий <strong>видео ролик</strong></h1>
            <div className="flex justify-content-between align-center">
                <div className="landing-video__text">
                    Чтобы вы наглядно увидели как работать с сервисом IpostX
                    <Grid style={styleGrid}/>
                </div>

                <video style={{width: 753}}>

                </video>
            </div>
        </MotionSectionXPlus>
    )
}

export default Video