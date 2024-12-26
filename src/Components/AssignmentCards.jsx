import { Link } from "react-router-dom";
export default function AssignmentCards({ assignment, handleDelete }) {
  const { _id, title, marks, description, difficulty, photo, date } =
    assignment;

  return (
    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12">
      <figure className="col-span-1 md:col-span-3 lg:col-span-5">
        <img
          src={photo}
          alt={title}
          className="h-[350px] w-full object-cover"
        />
      </figure>
      <div className="card-body col-span-1 md:col-span-4 lg:col-span-5">
        <h2 className="card-title">{title}</h2>
        <div className="space-y-3">
          <p>{description}</p>
          <p>Marks : {marks}</p>
          <p>Difficulty Level : {difficulty}</p>
          <p>Date : {date}</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 flex justify-evenly items-center md:flex-col">
        <Link to={`/details/${_id}`} className="btn btn-primary">
          View
        </Link>
        <Link to={`/update/${_id}`} className="btn btn-warning">
          Update
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </div>
    </div>
  );
}
