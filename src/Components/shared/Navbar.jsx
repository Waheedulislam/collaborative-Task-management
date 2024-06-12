import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="px-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <Link to={"/"} className="btn btn-ghost">
                                Home
                            </Link>

                            <Link to={""} className="btn btn-ghost">
                                Features
                            </Link>
                            <Link to={""} className="btn btn-ghost">
                                Product Gide
                            </Link>
                            <Link to={""} className="btn btn-ghost">
                                Templates
                            </Link>
                            <Link to={""} className="btn btn-ghost">
                                Dashboard
                            </Link>
                            <div className="flex mt-2 justify-center">
                                <Link to={"/login"} className="btn btn-ghost mr-2">
                                    Login
                                </Link>
                                <Link to={"/register"} className="btn btn-ghost">
                                    Register
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-2xl font-bold">
                        TeamBoard Software
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="mr-20">
                            <Link to={"/"} className="btn btn-ghost mr-2">
                                Home
                            </Link>

                            <Link to={""} className="btn btn-ghost mr-2">
                                Features
                            </Link>
                            <Link to={""} className="btn btn-ghost mr-2">
                                Product Gide
                            </Link>
                            <Link to={""} className="btn btn-ghost mr-2">
                                Templates
                            </Link>
                            <Link to={""} className="btn btn-ghost mr-2">
                                Dashboard
                            </Link>
                        </div>
                        <div className="ml-20">
                            <Link to={"/login"} className="btn btn-ghost mr-2">
                                Login
                            </Link>
                            <Link to={"/register"} className="btn  btn-ghost">
                                Register
                            </Link>
                        </div>
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;
