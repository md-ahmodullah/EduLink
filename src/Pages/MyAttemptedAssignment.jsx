import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
export default function MyAttemptedAssignment() {
  const [myAttempted, setMyAttempted] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email;

    if (userEmail) {
      axios
        .get(`http://localhost:5000/mySubmitted?email=${userEmail}`, {
          withCredentials: true,
        })
        .then((res) => setMyAttempted(res.data));
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
                  <th>Status</th>
                  <th>Marks</th>
                  <th>Obtain Marks</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {myAttempted.map((attempted, index) => (
                  <tr key={attempted._id}>
                    <th>{index + 1}</th>
                    <td>{attempted.title}</td>
                    <td>{attempted.status || "Failed To Send"}</td>
                    <td>{attempted.marks}</td>
                    <td>{attempted.obtainMark || "Failed To Send"}</td>
                    <td>{attempted.feedback || "Failed To Send"}</td>
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
