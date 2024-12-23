import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function MyAttemptedAssignment() {
  const [myAttempted, setMyAttempted] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      fetch(`http://localhost:5000/submitted?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setMyAttempted(data));
    }
  }, [user]);
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-white">
              My Attempted Assignment({myAttempted.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-gray-400">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Marks</th>
                  <th>Difficulty</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myAttempted.map((attempted, index) => (
                  <tr key={attempted._id}>
                    <th>{index + 1}</th>
                    <td>{attempted.title}</td>
                    <td>${attempted.marks}</td>
                    <td>{attempted.difficulty}</td>
                    <td>
                      <Link
                        to={`/details/${attempted._id}`}
                        className="btn btn-primary hover:btn-warning"
                      >
                        See More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
