import {useGoogleLogin} from "@react-oauth/google";

const GoogleLoginButton = () => {


    const googleLogin = useGoogleLogin({
        // flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            console.log(codeResponse);
        },
        onError: errorResponse => console.log(errorResponse),
    });

    return (
        <>
            <p onClick={() => googleLogin()}>Hello world! </p>
        </>
    );
};

export default GoogleLoginButton