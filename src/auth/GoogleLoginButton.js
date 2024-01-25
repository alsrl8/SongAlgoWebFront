import {useGoogleLogin} from "@react-oauth/google";

const GoogleLoginButton = ({userName, setUserName}) => {

    const googleLogin = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const data = {
                code: codeResponse.code,
            };

            try {
                const response = await fetch(process.env.REACT_APP_USER_SERVER_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const responseData = await response.json();
                setUserName(responseData.ClientInfo.name);
            } catch (error) {
                console.error('Error sending data to server:', error);
            }
        },
        onError: errorResponse => console.log(errorResponse),
        flow: 'auth-code',
    });

    return (
        <>
            <p onClick={() => googleLogin()}> {userName === '' ? 'Google Login' : userName} </p>
        </>
    );
};

export default GoogleLoginButton