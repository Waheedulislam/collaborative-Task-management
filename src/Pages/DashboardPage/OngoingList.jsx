import DatePicker from "react-datepicker";
import addTaskGif from '../../assets/photo/gif.gif'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const OngoingList = () => {
    const [deadline, setDeadline] = useState(new Date());

    const handleCreateOngoing = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;

        const ongoingData = {
            title,
            priority,
            deadline,
            description,
        };
        console.log(ongoingData)
        const success = await axios.post('https://collaborative-task-server.onrender.com/ongoing', ongoingData);
        if (success) {
            alert('Do you want to make a product ?')
        }
        toast.success("Product Added Successfully....!")
        form.reset();
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen ">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={addTaskGif} alt="" />

                        </div>
                        <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                            <form onSubmit={handleCreateOngoing} className="card-body">
                                <h1 className="text-4xl font-bold text-center">Add a Ongoing List !</h1>
                                {/* title  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Title</span>
                                    </label>
                                    <input type="text"
                                        required
                                        placeholder="Title"
                                        name='title'
                                        className="input input-bordered w-full " />
                                </div>
                                {/* description */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </label>
                                    <input
                                        name="description"
                                        type="text"
                                        required
                                        placeholder="Description"
                                        className="input input-bordered input-lg w-full " />
                                </div>
                                {/* priority */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Description</span>
                                    </label>
                                    <input type="text"
                                        required
                                        placeholder="priority"
                                        name='priority'
                                        className="input input-bordered w-full "
                                    />

                                </div>
                                {/* deadlines */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Deadlines</span>
                                    </label>

                                    <DatePicker
                                        selected={deadline}
                                        name='deadline'
                                        onChange={(date) => setDeadline(date)}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add a Task</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OngoingList;