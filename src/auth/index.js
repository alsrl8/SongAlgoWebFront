import GoogleLoginButton from "./GoogleLoginButton";
import {GoogleOAuthProvider} from "@react-oauth/google";

const Auth = ({userName, setUserName, setIsChatInputValid}) => {
    const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
    return <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton userName={userName} setUserName={setUserName} setIsChatInputValid={setIsChatInputValid}/>
    </GoogleOAuthProvider>

}

export default Auth