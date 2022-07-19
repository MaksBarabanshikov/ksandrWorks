import FacebookLogin from "@greatsumini/react-facebook-login";
import {createTokenAndUserID, createUser} from "../../Utils/redux/modules/facebookSlice";
import {openModalFB} from "../../Utils/redux/modules/modalSlice";
import FBLogo from "../../Assets/image/Logotype-Facebook.svg";
import {useSendTokenFbMutation} from "../../Utils/redux/services/hashtagsApi";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import facebook from "../../Assets/image/landing/facebook.svg";

const FacebookLogo = ({hidden}) => {
    const [sendTokenFb, {}] = useSendTokenFbMutation()
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const style = () => {
        if (hidden) {
            return {
                visibility: 'hidden',
                opacity: '0',
                position: 'absolute',
                zIndex: '-1000'
            }
        } else {
            return {}
        }
    }

    const currentButton = (onClick) => {
        if (location.pathname === '/auth') {
            return <button onClick={onClick} className='auth-btn auth-btn_2auth '>
                        <img src={facebook} alt="facebook"/>
                        <span>Войти с помощью FaceBook</span>
                   </button>
        }
        if (location.pathname === '/register') {
            return <button onClick={onClick} className='auth-btn auth-btn_2auth '>
                     <img src={facebook} alt="facebook"/>
                     <span>Регистрация с помощью FaceBook</span>
                   </button>
        }
    }

    if (location.pathname !== '/hashtags') {
        return (
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
                    navigate('/hashtags')
                    dispatch(openModalFB())
                }}
                render={({onClick}) => (
                    currentButton(onClick)
                )}
            />
        )
    }

    return (
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
                <img onClick={onClick} style={style()} className="logo-image" src={FBLogo} alt="logo"/>
            )}
        />
    )
}

export default FacebookLogo


