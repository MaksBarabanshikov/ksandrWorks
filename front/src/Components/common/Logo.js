import React, {Suspense} from 'react';
import Block from "./Block";
import logo from "../../Assets/image/logo.png";
import {useLocation} from "react-router-dom";
import Loader from "./Loader";

const ReactFacebookLogin = React.lazy(() => import("../../Utils/FB/FBConnect"))

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
                <Suspense fallback={<Loader width={20} height={20}/>}>
                    <ReactFacebookLogin/>
                </Suspense>
            </div>
        )
    }

}

export default Logo