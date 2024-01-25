import GoogleLoginButton from "./GoogleLoginButton";
import {GoogleOAuthProvider} from "@react-oauth/google";

const Auth = ({userName, setUserName}) => {
    const clientId = '297952994958-e2mg151ea9g89lqm339cqo2hlljfup6j.apps.googleusercontent.com'
    return <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton userName={userName} setUserName={setUserName}/>
    </GoogleOAuthProvider>

}

export default Auth