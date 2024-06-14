import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Components/Firebase/firebase.config";
import { Link } from "react-router-dom";
import plusIcon from '../../assets/photo/plus_icon.png'
import { useEffect, useState } from "react";
import axios from "axios";
import SingleTask from "./SingleTask";
import SingleOngoing from "./SingleOngoing";
import SingleCompleted from "./SingleCompleted";
import userPhoto from '../../assets/photo/user-profile-icon-free-vector.jpg'

const Task = () => {
    const [user] = useAuthState(auth)

    const [tasks, setTasks] = useState();
    const [ongoing, setOngoing] = useState();
    const [completed, setCompleted] = useState();
    console.log(tasks)


    useEffect(() => {
        // task 
        async function load() {
            const data = await axios.get('https://collaborative-task-server.onrender.com/task')

            if (data?.status == 200) {
                setTasks(data?.data)
            }
        }
        load()

        // Ongoing 
        async function ongoingLoad() {
            const data = await axios.get('https://collaborative-task-server.onrender.com/ongoing')

            if (data?.status == 200) {
                setOngoing(data?.data)
            }
        }
        ongoingLoad()

        // Completed 
        async function completedLoad() {
            const data = await axios.get('https://collaborative-task-server.onrender.com/completed')

            if (data?.status == 200) {
                setCompleted(data?.data)
            }
        }
        completedLoad()


    }, [])
    // task 
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task._id !== id));
    }
    // ongoing
    const handleDeleteOngoing = (id) => {
        setOngoing(ongoing.filter((ongoing) => ongoing._id !== id));
    }
    // completed
    const handleDeleteCompleted = (id) => {
        setCompleted(completed.filter((completed) => completed._id !== id));
    }
    return (
        // navbar start 
        <>
            <div className="navbar px-10  bg-base-100 py-10">
                <div className="flex-1 navbar-start">

                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <h1 className="text-3xl font-semibold ml-28">TeamBoard Software</h1>
                </div>
                <div className="flex-none gap-2">
                    <a className="btn btn-ghost text-xl ">{user?.displayName}</a>

                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || `${userPhoto}`} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            {/* navbar end  */}
            <div className="navbar bg-base-100 my-4 px-10">
                <div className="flex-1">
                    <h1 className=" text-3xl text-center font-semibold">
                        Web Developer Task
                    </h1>
                </div>
                <div >
                    <Link className="btn btn-outline text-white btn-primary" to={'/dashboard/addTask'} ><img className=' w-12 h-12 ' src={plusIcon} alt="" />Add a Task</Link>
                </div>
            </div>
            {/* nabvar 2 end */}




            {/* task  */}



            <div className=" grid  gap-6  grid-cols-1 md:grid-cols-1 md:mx-w-full lg:grid-cols-3 justify-items-center lg:gap-2">
                {/* card 1  */}
                <div className="mr-5">

                    <div className=" bg-base-100 mb-2 border-2 flex justify-center">
                        <h2 className="card-title mr-8">To-Do List</h2>

                        <Link to={'/dashboard/addTask'} ><img className='ml-24 w-12 h-12' src={plusIcon} alt="" /></Link>

                    </div>
                    {
                        tasks?.map(task => <SingleTask key={task?.id} task={task} oneDelete={handleDeleteTask} />)
                    }


                </div>



                {/* card 2  */}



                <div className="mr-5">
                    <div className=" bg-base-100 mb-2 border-2 flex justify-center">
                        <h2 className="card-title mr-8">Ongoing list</h2>

                        <Link to={'/dashboard/OngoingList'} ><img className='ml-24 w-12 h-12' src={plusIcon} alt="" /></Link>

                    </div>

                    {
                        ongoing?.map(ongoing => <SingleOngoing key={ongoing?.id} ongoing={ongoing} oneDelete={handleDeleteOngoing} />)
                    }


                </div>

                {/* card 3  */}
                <div>
                    <div className=" bg-base-100 mb-2 border-2 flex justify-center">
                        <h2 className="card-title mr-8">Completed list</h2>

                        <Link to={'/dashboard/CompletedList'} ><img className='ml-24 w-12 h-12' src={plusIcon} alt="" /></Link>

                    </div>
                    {
                        completed?.map(completed => <SingleCompleted key={completed?.id} completed={completed} oneDelete={handleDeleteCompleted} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Task;
