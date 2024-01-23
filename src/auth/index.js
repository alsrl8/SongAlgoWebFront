import GoogleLoginButton from "../chatter/GoogleLoginButton";
import {GoogleOAuthProvider} from "@react-oauth/google";

const Auth = () => {
    const clientId = '297952994958-e2mg151ea9g89lqm339cqo2hlljfup6j.apps.googleusercontent.com'
    return <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton/>
    </GoogleOAuthProvider>

}

export default Auth