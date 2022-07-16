import logo from '../../Assets/image/landing/ipostX.svg'
import Gradient from "../Landing/Components/Gradient"
import './Auth.scss'

const Auth = () => {

    const styleGradient1 = {
        position: 'absolute',
        top: -50,
        right: 0,
        width: '532.09px',
        height: '484px',
    }
    const styleGradient2 = {
        position: 'absolute',
        bottom: 0,
        left: -40,
        width: '532.09px',
        height: '484px',
    }

    return (
        <section className="auth">
            <div className="auth__left">
                <img src={logo} alt="ipostX"/>
                <Gradient style={styleGradient1}/>
                <Gradient style={styleGradient2}/>
            </div>
            <div className="auth__right">
                <div className="auth__right_cont">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, maiores.</h1>
                </div>
            </div>
        </section>
    )
}

export default Auth
