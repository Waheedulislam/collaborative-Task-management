import googleIcon from '../../assets/photo/google.png'
import auth from '../Firebase/firebase.config'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    console.log(user)

    const handleSignInWithGoogle = () => {
        signInWithGoogle
            ()
    }
    return (
        <div>
            <div>
                <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary font-bold text-xl text-white w-full"><img className='w-8 h-8' src={googleIcon} alt="" /> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;