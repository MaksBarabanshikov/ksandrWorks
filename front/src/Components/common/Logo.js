import Block from "./Block";
import logo from "../../Assets/image/logo.png";
import ReactFacebookLogin from "../../Utils/FB/FBConnect";
import {useLocation} from "react-router-dom";

const Logo = () => {
    const location = useLocation()

    if (location.pathname !== '/hashtags') {
        return (
            <Block stylees="logo">
                <img className="logo-image m-auto" src={logo} alt="logo"/>
                <Block stylees="logo__text">
                    <h6 className="logo__title">
                        TeleSpace
                    </h6>
                </Block>
            </Block>
        )
    } else {
        return (
            <div className="logo">
                {
                    ReactFacebookLogin()
                }
            </div>
        )
    }

}

export default Logo