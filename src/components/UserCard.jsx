const UserCard = ({ user }) => {
    const { firstName, lastName, gender, age, photoUrl, about } = user;
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
                    <button className="btn btn-primary mx-2">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;