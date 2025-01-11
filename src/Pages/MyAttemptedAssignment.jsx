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
        .get("https://edu-link-server.vercel.app/submitted", {
          params: { email: userEmail },
          withCredentials: true,
        })
        .then((res) => setMyAttempted(res.data));
    }
  }, [user]);

  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          {myAttempted.length === 0 ? (
            <div className="w-11/12 mx-auto text-center">
              <p className="text-2xl font-bold">
                You haven't attempted any assignments
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3">
                <h2 className="text-xl lg:text-3xl font-bold text-black">
                  My Attempted Assignment({myAttempted.length})
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead className="text-black">
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
                        <td>{attempted.status || "N/A"}</td>
                        <td>{attempted.marks}</td>
                        <td>{attempted.obtainMark || "N/A"}</td>
                        <td>{attempted.feedback || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
