import LandingButton from "../LandingButton";
import Grid from "../Grid";

const Form = () => {

    const styleGrid = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-64%, -50%)',
        opacity: 0.4
    }

    return(
        <section className="landing-form">
            <div className="landing-form__container">
                <h1 style={{textAlign: 'center'}}>
                    Лучше <strong> 1 раз попробовать</strong>, чем долго читать.
                </h1>
                <form className="flex align-center">
                    <input type="text" placeholder="Ваше имя"/>
                    <LandingButton width={'203px'} height={'70px'} children={<span>Регистрация</span>}/>
                    <div className="landing-form__text">
                        Регистрируйся и забирай свою бесплатную версию!
                        <Grid style={styleGrid}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form;