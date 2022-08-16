import {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import Block from "../../Components/common/Block";
import {useDispatch, useSelector} from "react-redux";
import {logoutFb} from "../redux/modules/facebookSlice";
import {useExitFbMutation} from "../redux/services/hashtagsApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons/faDoorOpen";
import useWindowDimensions from "../hooks/useWindowDimensions";
import FacebookLogo from "../../Components/FacebookLogo/FacebookLogo";


const ReactFacebookLogin = () => {
    const { userID,isLoggedIn, picture, name, email } = useSelector(state => state.facebook.user)
    const [exitFb] = useExitFbMutation()
    const dispatch = useDispatch()
    const { width } = useWindowDimensions()

    const FBLogout = () => {
        FacebookLoginClient.logout(() => {
            dispatch(logoutFb())
            exitFb({
                userID
            })
        })
    }

    let fbContent

    if (isLoggedIn) {
        fbContent = (
            <div className="facebook__account">
                <img className="m-auto" src={picture} alt=""/>
                <Block stylees="logo__text">
                    <h3>
                        {name}
                    </h3>
                    <h6 className="logo__title">
                        {email}
                    </h6>
                </Block>
                <button className="blue-btn" onClick={() => FBLogout()}>
                    {width <= 992 ? <FontAwesomeIcon icon={faDoorOpen}/> : 'Выйти'}
                </button>
            </div>
        )
    } else {
        fbContent = <FacebookLogo hidden={false}/>
    }

    return fbContent

}

export default ReactFacebookLogin
