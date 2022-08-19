import logo from "../../Assets/image/landing/ipostX.svg";
import locker from "../../Assets/image/landing/auth-locker.svg";
import key from "../../Assets/image/landing/auth-key.svg";
import {Link} from "react-router-dom";

const AuthLeft = () => {

    return (
        <div className="auth__left">
            <div>
                <Link to="/">
                    <img width="107" src={logo} alt="ipostX"/>
                </Link>
                <div className="auth__hero">
                    <img width='590' src={locker} alt="ipostX"/>
                    <img width='400' src={key} alt="ipostX"/>
                </div>
            </div>
        </div>
    )
}

export default AuthLeft
