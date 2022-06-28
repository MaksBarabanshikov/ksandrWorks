import FacebookLogin, {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import FBLogo from "../image/Logotype-Facebook.svg";
import Block from "../Components/common/Block";
import {useDispatch, useSelector} from "react-redux";
import {openModalFB} from "../redux/modules/modalSlice";
import {createTokenAndUserID, createUser, logoutFb} from "../redux/modules/facebookSlice";
import {useSendTokenFbMutation} from "../redux/services/hashtagsApi";


const ReactFacebookLogin = () => {
    const user = useSelector(state => state.facebook.user)
    const [sendTokenFb, {}] = useSendTokenFbMutation()
    const dispatch = useDispatch()

    const FBLogout = () => {
        FacebookLoginClient.logout(() => {
            dispatch(logoutFb())
            console.log('logout completed!')
        })
    }

    let fbContent
    dispatch(openModalFB())

    if (user.isLoggedIn) {
        fbContent = (
            <div className="facebook__account">
                <img src={user.picture} alt=""/>
                <Block stylees="logo__text">
                    <h3>
                        {user.name}
                    </h3>
                    <h6 className="logo__title">
                        {user.email}
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
                    dispatch(createTokenAndUserID({
                        token: response.accessToken,
                        userID: response.userID
                    }))
                    sendTokenFb({
                        accessToken: response.accessToken,
                        userID: response.userID
                    })
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    console.log('Get Profile Success!', response);
                    dispatch(createUser({
                        isLoggedIn: true,
                        userID: response.userID,
                        name: response.name,
                        email: response.email,
                        picture: response.picture.data.url
                    }))
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
