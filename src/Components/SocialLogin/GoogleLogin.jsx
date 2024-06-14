import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/photo/google.png'
import auth from '../Firebase/firebase.config'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useEffect } from 'react';

const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    const handleSignInWithGoogle = () => {
        signInWithGoogle()

    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [navigate, user, from])


    return (
        <div>
            <div>
                <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary font-bold text-xl text-white w-full"><img className='w-8 h-8' src={googleIcon} alt="" /> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;