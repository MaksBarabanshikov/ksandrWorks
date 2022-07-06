import FacebookLogin, {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import FBLogo from "../../Assets/image/Logotype-Facebook.svg";
import Block from "../../Components/common/Block";
import {useDispatch, useSelector} from "react-redux";
import {openModalFB} from "../redux/modules/modalSlice";
import {createTokenAndUserID, createUser, logoutFb} from "../redux/modules/facebookSlice";
import {useExitFbMutation, useSendTokenFbMutation} from "../redux/services/hashtagsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import useWindowDimensions from "../../hooks/useWindowDimensions";


const ReactFacebookLogin = () => {
    const user = useSelector(state => state.facebook.user)
    const [sendTokenFb, {}] = useSendTokenFbMutation()
    const [exitFb] = useExitFbMutation()
    const dispatch = useDispatch()
    const { width } = useWindowDimensions()

    const FBLogout = () => {
        FacebookLoginClient.logout(() => {
            dispatch(logoutFb())
            exitFb({
                userID: user.userID
            })
        })
    }

    let fbContent

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
                    {width <= 992 ? <FontAwesomeIcon icon={faDoorOpen}/> : 'Выйти'}
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

                onProfileSuccess={(response) => {
                    dispatch(createUser({
                        isLoggedIn: true,
                        userID: response.userID,
                        name: response.name,
                        email: response.email,
                        picture: response.picture.data.url
                    }))
                    dispatch(openModalFB())
                }}
                render={({onClick}) => (
                    <img onClick={onClick} className="logo-image" src={FBLogo} alt="logo"/>
                )}
            />)
    }

    return fbContent

}

export default ReactFacebookLogin
