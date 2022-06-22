import {FacebookLoginClient} from "@greatsumini/react-facebook-login";

export function FBCheckConnected() {
    let status
    FacebookLoginClient.getLoginStatus((res) => {
        status = res.status
    })
    return status
}

export default FBCheckConnected