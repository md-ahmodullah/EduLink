import axios from "axios";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import createPageLotti from "/public/createPage.json";
export default function UpdateAssignment() {
  const [startDate, setStartDate] = useState(new Date());
  const [updateAssignment, setUpdateAssignment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://edu-link-server.vercel.app/assignments/${id}`, {
        withCredentials: true,
      })
      .then((res) => setUpdateAssignment(res.data));
  }, []);

  const navigate = useNavigate();
  function validateImageLink(link) {
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
    return urlRegex.test(link);
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const isValid = validateImageLink(photo);
    if (!isValid) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Image URL",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    const updatedAssignment = {
      title,
      marks,
      description,
      difficulty,
      date,
      photo,
    };
    console.log(updatedAssignment);

    fetch(
      `https://edu-link-server.vercel.app/assignments/${updateAssignment._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedAssignment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your assignment has been updated",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/assignments");
        }
      });
  };

  return (
    <>
      <div className="bg-blue-50 font-roboto">
        <div className="py-12 px-0 lg:px-5">
          <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            <div className="bg-transparent p-5 rounded-lg border border-gray-300 shadow-md col-span-2">
              <h2 className="text-xl md:text-3xl font-bold text-black text-center">
                Update Assignment
              </h2>

              <div className="space-y-3 pt-8">
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  onSubmit={handleUpdate}
                >
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Assignment Title
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="title"
                      defaultValue={updateAssignment.title}
                      className="w-full bg-white shadow-md outline-none px-4 py-2 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Marks
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      defaultValue={updateAssignment.marks}
                      name="marks"
                      className="w-full bg-white shadow-md outline-none  px-4 py-2 rounded-lg "
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="description"
                      defaultValue={updateAssignment.description}
                      className="w-full bg-white shadow-md outline-none  px-4 py-2 rounded-lg "
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Difficulty Level
                      </span>
                    </label>
                    {updateAssignment?.difficulty && (
                      <select
                        name="difficulty"
                        defaultValue={updateAssignment.difficulty}
                        className="w-full bg-white shadow-md outline-none px-4 py-2.5 rounded-lg "
                      >
                        <option value="Easy" className="bg-base-200">
                          Easy
                        </option>
                        <option value="Medium" className="bg-base-200">
                          Medium
                        </option>
                        <option value="Hard" className="bg-base-200">
                          Hard
                        </option>
                      </select>
                    )}
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Date
                      </span>
                    </label>
                    <div className="w-full bg-white shadow-md outline-none  px-4 py-2 rounded-lg  appearance-none">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="outline-none bg-transparent"
                        name="date"
                        required
                        // style={{
                        //   colorScheme: "dark",
                        // }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-gray-500 font-bold text-lg">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      name="photo"
                      defaultValue={updateAssignment.photo}
                      className="w-full bg-white shadow-md outline-none  px-4 py-2 rounded-lg "
                      required
                    />
                  </div>
                  <button className="btn btn-primary w-full hover:btn-warning hover: col-span-1 md:col-span-2 mt-4 text-base">
                    Update Assignment
                  </button>
                </form>
              </div>
            </div>
            <div>
              <Lottie animationData={createPageLotti} loop={true} />
            </div>
          </div>
          <Link
            to="/assignments"
            className="btn btn-outline font-bold text-blue-600 m-5"
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
}
