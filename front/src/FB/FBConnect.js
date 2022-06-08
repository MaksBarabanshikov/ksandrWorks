import FacebookLogin, {FacebookLoginClient} from "@greatsumini/react-facebook-login";
import FBLogo from "../image/Logotype-Facebook.svg";
import getAccessId from "../request/POST/getAccessId";


const ReactFacebookLogin = () => {

    const getLoginClient = () => {
        FacebookLoginClient.getLoginStatus((res) => {
            console.log(res.status);
        });
    }

    FacebookLoginClient.login((res) => {
        console.log("login", res);
    });

    const getProfile = () => {
        FacebookLoginClient.getProfile((res) => {
            console.log(res.id, res.name, res.email);
        });
    }

    const logout = () => {
        FacebookLoginClient.logout(() => {
            console.log('logout completed!');
        });
    }



    return (
        <FacebookLogin
            appId="553616932983819"
            fields="name,email,picture"
            className={"myFBButton"}
            onSuccess={(response) => {
                getAccessId(response).then((data) => console.log("data:", data)).catch((e) => console.log(e))
            }}
            onFail={(error) => {
                console.log('Login Failed!', error);
            }}
            onProfileSuccess={(response) => {
                console.log('Get Profile Success!', response);
            }}
            render={({onClick}) => (
                <img onClick={onClick} className="logo-image" src={FBLogo} alt="logo"/>
            )}
        />
    )

}

export default ReactFacebookLogin
