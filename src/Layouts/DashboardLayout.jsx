import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../Components/Firebase/firebase.config";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import taskIcon from '../assets/photo/task-1.png'
import dashboardIcon from '../assets/photo/dashboard.png'
import userPhoto from '../../src/assets/photo/user-profile-icon-free-vector.jpg'
const DashboardLayout = () => {
    const [signOut] = useSignOut(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        const successSignOut = await signOut();
        if (successSignOut) {
            alert('Do you want to logout...?')
            toast.success('Successfully Logout')

        }
    }
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [navigate, user])
    return (
        <div>
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu bg-gray-100 p-4 w-80 flex flex-col justify-between min-h-screen bg-base-200 text-base-content">
                        <div className="flex justify-center">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL || `${userPhoto}`} />
                                </div>
                            </div>
                            <a className=" ml-5 mt-3 text-center font-semibold text-2xl ">{user?.displayName}</a>
                        </div>
                        <a className=" text-center ">{user?.email}</a>

                        <div className=" mb-80 mt-8">
                            <h1 className=" text-3xl text-center font-semibold">
                                Manage Task
                            </h1>
                            {/* Sidebar content here */}
                            <li><Link to={'/dashboard/dashboardHome'} className="text-xl mt-4" ><img className='w-10 h-10' src={dashboardIcon} alt="" />Dashboard</Link></li>
                            <li><Link to={'/dashboard/task'} className="text-xl"><img className='w-10 h-10' src={taskIcon} alt="" />Task</Link></li>

                        </div>

                        {/* Logout */}
                        <div className="flex justify-center gap-28">
                            <li><Link className="btn btn-primary text-white" to={'/'}>Home</Link></li>
                            <button className="btn btn-error text-white" onClick={handleLogOut}>
                                Log Out
                            </button>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;