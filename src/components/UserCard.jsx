import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";
const UserCard = ({ user }) => {
    const { firstName, lastName, gender, age, photoUrl, about, _id } = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId,
                {},
                {
                    withCredentials: true
                }
            );
            dispatch(removeUserFromFeed(userId));
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="card bg-base-200 w-96 shadow-xl p-4">
            <figure>
                <img
                    src={photoUrl}
                    alt="photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + ", " + gender} </p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-2">
                    <button className="btn btn-primary mx-2" onClick={() => (handleSendRequest('ignored', _id))}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => (handleSendRequest('interested', _id))}>Interested</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;