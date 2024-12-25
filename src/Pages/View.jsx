import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoBarChart } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
export default function View() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://edu-link-server.vercel.app/assignments/${id}`, {
        withCredentials: true,
      })
      .then((res) => setDetails(res.data));
  }, []);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const status = "Pending";
  const { title, marks, description, difficulty, date, photo } = details;
  const handleSubmit = () => {
    const submitLinks = document.getElementById("submitLinks").value;
    const submitNotes = document.getElementById("submitNotes").value;
    const submittedAssignment = {
      email,
      name,
      title,
      marks,
      description,
      difficulty,
      date,
      photo,
      submitLinks,
      submitNotes,
      status,
    };

    fetch("https://edu-link-server.vercel.app/submitted", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your assignment has been submitted!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <>
      <section className="bg-blue-50 mb-2 font-poppins">
        <div className="w-10/12 mx-auto py-16 space-y-12">
          <h2 className="text-base lg:text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-3">
            Assignment Details :{" "}
            <span className="text-orange-600">{title}</span>
          </h2>
          <div className="grid grid-cols-1">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={photo}
                  alt={title}
                  className="w-full h-[300px] object-cover"
                />
              </figure>
              <div className="card-body bg-white">
                <h2 className="text-2xl font-semibold text-black">{title}</h2>
                <p className="text-base text-gray-500 py-1">{description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BiCategory className="text-base" />
                    <p className="text-base text-gray-700 font-medium">
                      {difficulty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoBarChart />
                    <p className="text-base text-gray-700 font-medium">
                      {marks}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <PiFlagFill className="text-red-600" />
                  <p className="text-red-600 font-semibold">Deadline</p>
                  <span className="text-sm text-red-600 font-semibold">
                    {date}
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <Link
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn btn-primary w-full"
              >
                Take Assignment
              </Link>
            </div>
          </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center pb-3">
              Submit Your Assignment
            </h3>

            <div className="modal-action justify-center">
              <form method="dialog" className="w-full space-y-5">
                <div>
                  <input
                    id="submitLinks"
                    type="text"
                    placeholder="google docs link..."
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <textarea
                    id="submitNotes"
                    placeholder="Your Notes..."
                    className="textarea textarea-bordered textarea-lg w-full"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn btn-primary w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </section>
    </>
  );
}
