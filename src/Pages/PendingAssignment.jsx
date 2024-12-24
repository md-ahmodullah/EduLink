import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
export default function PendingAssignment() {
  const [pending, setPending] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    axios
      .get("http://localhost:5000/submitted?status=Pending", {
        withCredentials: true,
      })
      .then((res) => setPending(res.data));
  }, []);

  const handleEvaluate = (assignment) => {
    setSelectedAssignment(assignment);
    if (assignment.email === email) {
      Swal.fire({
        icon: "warning",
        title: "Action Not Allowed",
        text: "You cannot evaluate your own assignment.",
      });
      return;
    }
    document.getElementById("my_modal_5").showModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainMark = form.obtainMark.value;
    const feedback = form.feedback.value;
    const status = "Completed";
    const markedData = { obtainMark, feedback, status, email };
    form.reset();
    axios
      .patch(
        `http://localhost:5000/submitted/${selectedAssignment._id}`,
        markedData
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your assignment has been submitted!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
    setPending((prev) =>
      prev.filter((pendingItem) => pendingItem._id !== selectedAssignment._id)
    );
    document.getElementById("my_modal_5").close();
  };
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-white">
              Pending Assignment({pending.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-gray-400">
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Examinee Name</th>
                  <th>Marks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pending.map((d, index) => (
                  <tr key={d._id}>
                    <th>{index + 1}</th>
                    <td>{d.title}</td>
                    <td>{d.name || "Failed To Send"}</td>
                    <td>{d.marks}</td>
                    <td>
                      <button
                        onClick={() => handleEvaluate(d)}
                        className="btn btn-info hover:btn-warning"
                      >
                        Give Marks
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center pb-3">
              Review Assignment
            </h3>
            <p>
              {selectedAssignment && (
                <a
                  href={selectedAssignment.submitLinks}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  {selectedAssignment.submitLinks}
                </a>
              )}
            </p>
            <p>
              {selectedAssignment && (
                <p className="">{selectedAssignment.submitNotes}</p>
              )}
            </p>

            <div className="modal-action justify-center">
              <form
                onSubmit={handleSubmit}
                method="dialog"
                className="w-full space-y-4"
              >
                <div>
                  <input
                    type="number"
                    name="obtainMark"
                    placeholder="Marks"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="feedback"
                    placeholder="Give Feedback"
                    className="input input-bordered w-full"
                  />
                </div>
                <button className="btn btn-primary w-full">Submit</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );
}
