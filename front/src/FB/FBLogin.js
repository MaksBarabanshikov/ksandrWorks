import {FacebookLoginClient} from "@greatsumini/react-facebook-login";

export const FBLogin = () => {
    let status
        FacebookLoginClient.getLoginStatus((res) => {
            status = res
        });
    return status
}