import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLoginHandle = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            },
                {
                    withCredentials: true
                });
            dispatch(addUser(res.data))
            return navigate('/');
        }
        catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    }
    const onSignUpHandle = async () => {
        try {
            const res = await axios.post(BASE_URL + '/signup', {
                firstName, lastName, emailId, password
            }, { withCredentials: true });
            dispatch(addUser(res.data));
            return navigate('/profile');
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="flex justify-center m-6">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                    {!isLogin && <><label className="form-control w-full max-w-xs my-1">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input type="text" value={firstName} className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setFirstName(e.target.value)} />
                    </label>                    <label className="form-control w-full max-w-xs my-1">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input type="text" value={lastName} className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setLastName(e.target.value)} />
                        </label></>}
                    <label className="form-control w-full max-w-xs my-1">
                        <div className="label">
                            <span className="label-text">Email ID</span>
                        </div>
                        <input type="text" value={emailId} className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setEmailId(e.target.value)} />
                    </label>
                    <label className="form-control w-full max-w-xs pb-3">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="pasword" value={password} className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <div className="card-actions justify-center">
                        <p className="text-red-500">{error}</p>
                        <button className="btn btn-primary" onClick={isLogin ? onLoginHandle : onSignUpHandle}>{isLogin ? 'Login' : 'Sign Up'} </button>
                    </div>
                    <p
                        className="m-auto cursor-pointer py-2"
                        onClick={() => setIsLogin((value) => !value)}
                    >
                        {isLogin
                            ? "New User? Signup Here"
                            : "Existing User? Login Here"}
                    </p>
                </div>
            </div>
        </div>);
}

export default Login;