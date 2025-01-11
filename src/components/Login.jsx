import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [emailId, setEmailId] = useState('elon@gmail.com');
    const [password, setPassword] = useState('Elon@12345');
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
    return (
        <div className="flex justify-center m-6">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
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
                        <input type="password" value={password} className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <div className="card-actions justify-center">
                        <p className="text-red-500">{error}</p>
                        <button className="btn btn-primary" onClick={onLoginHandle}>Login</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Login;