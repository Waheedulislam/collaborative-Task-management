/* eslint-disable react/prop-types */

import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleTask = ({ task, oneDelete }) => {
    const handleDelete = async () => {

        const deleteSuccess = await axios.delete(`https://collaborative-task-server.onrender.com/task/${task?._id}`);
        if (deleteSuccess) {
            alert('Do you want to delete a product ?')

        }
        toast.success("Delete Successfully....!")
        const deleteProduct = oneDelete(task?._id);
        deleteProduct();
    };
    return (
        <div>

            <div className="card w-80 h-auto c mb-6  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">{task?.title} </h2>
                    <p>Deadlines : {task?.deadline}</p>
                    <p>Priority : {task?.priority}</p>
                    <p>
                        {task?.description?.length > 30 ? task?.description?.slice(0, 60) : task?.description}
                    </p>
                    <button className="btn btn-primary">Edit</button>

                    <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default SingleTask;