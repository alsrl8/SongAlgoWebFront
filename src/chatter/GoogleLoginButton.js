import {useGoogleLogin} from "@react-oauth/google";

const GoogleLoginButton = () => {

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
        },
        onError: errorResponse => console.log(errorResponse),
        flow: 'auth-code',
    });

    return (
        <>
            <p onClick={() => googleLogin()}>Hello world! </p>
        </>
    );
};

export default GoogleLoginButton