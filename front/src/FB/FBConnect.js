import FacebookLogin, {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import FBLogo from "../image/Logotype-Facebook.svg";
import getAccessId from "../request/POST/getAccessId";
import React, {useContext, useState} from "react";
import Block from "../Components/common/Block";
import {Context} from "../context/context";


const ReactFacebookLogin = () => {
    const {openModalFB} = useContext(Context)
    let localStorageFB = JSON.parse(localStorage.getItem("FB"))
    if (!localStorageFB) {
        localStorage.setItem("FB", JSON.stringify({
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        }))
    }
    const [data, setData] = useState(localStorageFB)

    const FBLogout = () => {
        FacebookLoginClient.logout(() => {
            setData({
                isLoggedIn: false,
                userID: "",
                name: "",
                email: "",
                picture: ""
            })
            localStorage.removeItem("token_FB")
            localStorage.setItem("FB", JSON.stringify({
                isLoggedIn: false,
                userID: "",
                name: "",
                email: "",
                picture: ""
            }))
            console.log('logout completed!')
        })
    }

    let fbContent

    if (data.isLoggedIn) {
        fbContent = (
            <div className="facebook__account">
                <img src={data.picture} alt=""/>
                <Block stylees="logo__text">
                    <h3>
                        {data.name}
                    </h3>
                    <h6 className="logo__title">
                        {data.email}
                    </h6>
                </Block>
                <button className="blue-btn" onClick={() => FBLogout()}>
                    Выйти
                </button>
            </div>
        )
    } else {
        fbContent = (
            <FacebookLogin
                appId="553616932983819"
                fields="name,email,picture"
                className={"myFBButton"}
                initParams={{
                    cookie: true,
                    xfbml: true,
                    localStorage: true
                }}
                onSuccess={(response) => {
                    getAccessId(response)
                    localStorage.setItem("token_FB", JSON.stringify(response.accessToken))
                    openModalFB()
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                    localStorage.setItem("FB", JSON.stringify({
                        isLoggedIn: true,
                        userID: response.userID,
                        name: response.name,
                        email: response.email,
                        picture: response.picture.data.url
                    }))
                    setData(JSON.parse(localStorage.getItem("FB")))
                }}
                render={({onClick}) => (
                    <img onClick={onClick} className="logo-image" src={FBLogo} alt="logo"/>
                )}
            />)
    }

    return (
        <>
            <div>
                {fbContent}
            </div>
        </>
    )

}

export default ReactFacebookLogin
