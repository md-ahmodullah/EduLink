import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AssignmentCards from "../Components/AssignmentCards";
import { AuthContext } from "../Provider/AuthProvider";
export default function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [difficulty, setDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://edu-link-server.vercel.app/assignments?difficulty=${difficulty}&search=${searchQuery}`
      )
      .then((res) => setAssignments(res.data));
  }, [difficulty, searchQuery]);

  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://edu-link-server.vercel.app/assignments/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your assignment has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "You are not authorized to delete this assignment.",
                icon: "error",
              });
            }
            setAssignments((prev) =>
              prev.filter((assignment) => assignment._id !== _id)
            );
          });
      }
    });
  };

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    // const filteredByDifficulty =
    //   selectedDifficulty === "All"
    //     ? data
    //     : data.filter(
    //         (assignment) => assignment.difficulty === selectedDifficulty
    //       );

    // setAssignments(filteredByDifficulty);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // const filteredAssignments = data.filter((assignment) =>
    //   assignment.title.toLowerCase().includes(query)
    // );
    // setAssignments(filteredAssignments);
  };

  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="px-2 w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-black">
              All Assignments({assignments.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
              <div className="col-span-1 md:col-span-3">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Search"
                    onChange={handleSearchChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <div className="col-span-1">
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={handleDifficultyChange}
                >
                  <option>All</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {assignments.map((assignment) => (
              <AssignmentCards
                key={assignment._id}
                assignment={assignment}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
