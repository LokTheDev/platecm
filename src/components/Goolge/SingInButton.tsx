import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FBauth } from "../../firebase/firebase";
import GoogleButton from "react-google-button";
import { useContext } from "react";
import { userContext } from "../../store/userStore";


const SignInButton = () => {

    const UserStore = useContext(userContext);
    
    return (
        <GoogleButton onClick={UserStore.LogInWithGoogleBtn}/>
    )
}

export default SignInButton;