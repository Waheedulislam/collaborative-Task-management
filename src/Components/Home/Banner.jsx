import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.pinimg.com/originals/b8/33/78/b83378fbaf9f0ea218f9a11558b03aa4.gif)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">
                            Simplified project Management manual effort Your Workflow.
                        </h1>
                        <p className="mb-5 text-xl font-bold">
                            TeamBoard facilitates seamless connections for over 250,000 teams,reducing the manual effort in work processes.
                        </p>
                        <Link to={'/dashboard'} className="btn btn-primary">Let’s Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
