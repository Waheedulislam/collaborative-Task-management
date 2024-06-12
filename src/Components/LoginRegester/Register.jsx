import { Link } from "react-router-dom";
import GoogleLogin from "../SocialLogin/GoogleLogin";

const Register = () => {
    return (
        <div className="mt-0 pb-8">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <h1 className="text-6xl font-bold text-center">Register Now.!</h1>
                        <form className="card-body">
                            {/* Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required />
                            </div>

                            {/* Email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"
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
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="flex justify-center">
                                <p className="font-semibold">Already have an account ?</p>
                                <Link to={'/login'} className="pr-48 font-bold ">Login</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
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

export default Register;