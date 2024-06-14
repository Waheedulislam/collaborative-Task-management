/* eslint-disable react/prop-types */
import axios from "axios";
import { toast } from "react-toastify";

const SingleCompleted = ({ completed, oneDelete }) => {
    const handleDelete = async () => {

        const deleteSuccess = await axios.delete(`http://localhost:5000/completed/${completed?._id}`);
        if (deleteSuccess) {
            alert('Do you want to delete a product ?')

        }
        toast.success("Delete Successfully....!")
        const deleteProduct = oneDelete(completed?._id);
        deleteProduct();
    };
    return (
        <div>

            <div className="card w-80 h-auto c mb-6  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">{completed?.title} </h2>
                    <p>Deadlines : {completed?.deadline}</p>
                    <p>Priority : {completed?.priority}</p>
                    <p>
                        {completed?.description?.length > 30 ? completed?.description?.slice(0, 60) : completed?.description}
                    </p>

                    <button className="btn btn-primary">Edit</button>

                    <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default SingleCompleted;