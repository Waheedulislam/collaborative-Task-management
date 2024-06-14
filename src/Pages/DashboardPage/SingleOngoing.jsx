/* eslint-disable react/prop-types */
import axios from "axios";
import { toast } from "react-toastify";

const SingleOngoing = ({ ongoing, oneDelete }) => {
    const handleDelete = async () => {

        const deleteSuccess = await axios.delete(`http://localhost:5000/ongoing/${ongoing?._id}`);
        if (deleteSuccess) {
            alert('Do you want to delete a product ?')

        }
        toast.success("Delete Successfully....!")
        const deleteProduct = oneDelete(ongoing?._id);
        deleteProduct();
    };
    return (
        <div>

            <div className="card w-80 h-auto c mb-6  shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">{ongoing?.title} </h2>
                    <p>Deadlines : {ongoing?.deadline}</p>
                    <p>Priority : {ongoing?.priority}</p>
                    <p>
                        {ongoing?.description?.length > 30 ? ongoing?.description?.slice(0, 60) : ongoing?.description}
                    </p>

                    <button className="btn btn-primary">Edit</button>

                    <button onClick={handleDelete} className="btn btn-error text-white">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default SingleOngoing;