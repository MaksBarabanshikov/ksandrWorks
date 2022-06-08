import FacebookLogin from "@greatsumini/react-facebook-login";




const ReactFacebookLogin = () => {
    const componentClicked = data => {
        console.log("data", data)
    }

    const responseFacebook = response => {
        console.log(response)
    }
 return(
     <FacebookLogin
        appId="553616932983819"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
    />
 )

}

export default ReactFacebookLogin
