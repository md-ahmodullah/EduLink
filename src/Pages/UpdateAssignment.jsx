import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
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
      <div className="bg-base-100 min-h-[750px] font-roboto">
        <div className="w-full lg:w-3/5 mx-auto py-12 px-5">
          <div className="bg-transparent p-5 rounded-lg border border-gray-500">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500 text-center">
              Update Campaign
            </h2>
            <div className="space-y-3 pt-8">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={handleUpdate}
              >
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">
                      Assignment Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="title"
                    defaultValue={updateAssignment.title}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg "
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">Marks</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={updateAssignment.marks}
                    name="marks"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg "
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="description"
                    defaultValue={updateAssignment.description}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg "
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">
                      Difficulty Level
                    </span>
                  </label>
                  {updateAssignment?.difficulty && (
                    <select
                      name="difficulty"
                      defaultValue={updateAssignment.difficulty}
                      className="select select-bordered w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg "
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
                    <span className="label-text  text-lg">Date</span>
                  </label>
                  <div className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg  appearance-none">
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
                    <span className="label-text  text-lg">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="photo"
                    defaultValue={updateAssignment.photo}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg "
                    required
                  />
                </div>
                <button className="btn btn-primary w-full hover:btn-warning hover: col-span-1 md:col-span-2 mt-4 text-base">
                  Update Assignment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
