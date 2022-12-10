import React, {Suspense} from 'react';
import Block from "./Block";
import logo from "../../Assets/image/landing/ipostX.svg";
import {useLocation} from "react-router-dom";
import Loader from "./Loader";

const ReactFacebookLogin = React.lazy(() => import("../../Utils/FB/FBConnect"))

const Logo = () => {
    const location = useLocation()

    if (location.pathname !== '/hashtags') {
        return (
            <Block stylees="logo logo-another">
                <img style={{ filter: "invert(100%)", height: "100px"}} className="logo-image m-auto" src={logo} alt="logo"/>
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