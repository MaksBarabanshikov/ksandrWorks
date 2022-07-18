import logo from "../../Assets/image/landing/ipostX.svg";
import locker from "../../Assets/image/landing/auth-locker.svg";
import key from "../../Assets/image/landing/auth-key.svg";
import Gradient from "../Landing/Components/Gradient";

const AuthLeft = () => {
    const styleGradient1 = {
        position: 'absolute',
        top: -100,
        right: -250,
        width: '532.09px',
        height: '484px',
    }
    const styleGradient2 = {
        position: 'absolute',
        bottom: -100,
        left: -250,
        width: '532.09px',
        height: '484px',
    }

    return (
        <div className="auth__left">
            <div>
                <img src={logo} alt="ipostX"/>
                <div className="auth__hero">
                    <img src={locker} alt="ipostX"/>
                    <img src={key} alt="ipostX"/>
                </div>
                <Gradient style={styleGradient1}/>
                <Gradient style={styleGradient2}/>
            </div>
        </div>
    )
}

export default AuthLeft
