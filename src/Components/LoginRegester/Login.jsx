import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import auth from "../Firebase/firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [navigate, user, from])
    console.log(loading, error)



    return (
        <div>

            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <h1 className="text-6xl font-bold text-center">Login Now !</h1>

                            {/* Email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required />
                            </div>

                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="flex justify-center">
                                <p className="font-semibold">Do not have any account ?</p>
                                <Link to={'/register'} className="pr-48 font-bold ">Register</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="flex flex-col justify-center w-full ">
                                <div className="divider divider-neutral">OR</div>
                            </div>

                        </form>
                        <div className="mx-7 mb-5">
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;