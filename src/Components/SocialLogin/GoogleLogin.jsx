import googleIcon from '../../assets/photo/google.png'
const GoogleLogin = () => {
    return (
        <div>
            <div>
                <button className="btn btn-outline btn-primary font-bold text-xl text-white w-full"><img className='w-8 h-8' src={googleIcon} alt="" /> Login With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;