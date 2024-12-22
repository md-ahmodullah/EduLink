import { Link } from "react-router-dom";
export default function AssignmentCards({ assignment, handleDelete }) {
  const { _id, title, marks, description, difficulty, photo, date } =
    assignment;

  return (
    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-12">
      <figure className="col-span-5">
        <img
          src={photo}
          alt={title}
          className="h-[350px] w-full object-cover"
        />
      </figure>
      <div className="card-body col-span-5">
        <h2 className="card-title">{title}</h2>
        <div className="space-y-3">
          <p>{description}</p>
          <p>Marks : {marks}</p>
          <p>Difficulty Level : {difficulty}</p>
          <p>Date : {date}</p>
        </div>
      </div>
      <div className="card-actions col-span-2 flex flex-col items-center justify-evenly">
        <Link to={`/details/${_id}`} className="btn btn-primary">
          View
        </Link>
        <Link to={`/update/${_id}`} className="btn btn-warning">
          Edit
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </div>
    </div>
  );
}
