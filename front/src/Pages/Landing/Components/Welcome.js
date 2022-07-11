import LandingButton from "./LandingButton";
import fire from '../../../Assets/image/landing/fire.svg'
import Grid from "./Grid";
import Gradient from "./Gradient";

const Welcome = () => {

    const btnChildren = <>
        <img src={fire} alt=""/>
        <span>Активировать предложение</span>
    </>

    const style1 = {
        top: -100,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -10
    }
    const style2 = {
        top: 0,
        right: 0,
        zIndex: -10
    }

    const gradientStyle = {
        width: '100%',
        top: 0,
        right: 0,
        zIndex: 10000
    }

    return (
        <section className="landing-welcome flex">
            <div className="landing-welcome__content">
                <h1>Получай горячих клиентов Instagram</h1>
                <h2>24/7 уже в первую неделю</h2>

                <div className='landing-welcome__activate'>
                    <p className="text-white">
                        Благодаря инструментам <strong>ipostX</strong> ты настроишь дополнительный
                        канал продаж в своем бизнесе и выйдешь но новый уровень дохода
                    </p>
                    <LandingButton width={'100%'} height={'70px'} children={btnChildren}/>
                    <Grid style={style1}/>
                </div>
            </div>
            <Gradient style={gradientStyle}/>
            <Grid style={style2}/>
        </section>
    )
}

export default Welcome