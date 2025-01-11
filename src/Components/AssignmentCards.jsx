import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete, MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
export default function AssignmentCards({ assignment, handleDelete }) {
  const { _id, title, marks, description, difficulty, photo, date } =
    assignment;

  const formatDate = () => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-base-100 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4">
      <figure>
        <img
          src={photo}
          alt={title}
          className="h-[180px] w-full object-cover rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tr-none"
        />
      </figure>
      <div className="px-5 md:p-3">
        <h2 className="text-base font-bold pb-2">{title}</h2>
        <div className="pb-3">
          {/* <div className="flex items-center gap-2 font-medium">
            <FaMarker />
            <p className="font-bold">{marks}</p>
          </div> */}
          <div className="flex items-center gap-2 font-medium">
            <MdOutlineDateRange />
            <p className="font-semibold">{formatDate()}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 pb-4">
          <Link to={`/details/${_id}`} className="">
            <FaEye className="text-xl text-green-700" title="View" />
          </Link>
          <Link to={`/update/${_id}`} className="">
            <FaEdit className="text-xl text-blue-600" title="Edit" />
          </Link>
          <button onClick={() => handleDelete(_id)} className="">
            <MdDelete className="text-xl text-red-600" title="Delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
