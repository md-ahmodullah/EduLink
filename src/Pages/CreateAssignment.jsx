import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

export default function CreateAssignment() {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const email = user?.email;

  function validateImageLink(link) {
    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
    return urlRegex.test(link);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const difficulty = form.difficulty.value;
    const datePick = form.date.value;
    const date = new Date(datePick);
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
    const newAssignment = {
      email,
      title,
      marks,
      description,
      difficulty,
      date,
      photo,
    };

    fetch("https://edu-link-server.vercel.app/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your assignment has been saved",
            showConfirmButton: false,
            timer: 2000,
          });
          form.reset();
        }
      });
  };
  return (
    <>
      <div className="min-h-[750px] font-roboto">
        <div className="w-full lg:w-3/5 mx-auto py-12 px-5">
          <div className="p-8 rounded-lg bg-transparent border border-gray-500">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500 text-center">
              Create An Assignment
            </h2>
            <div className="space-y-3 pt-8">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5 font-medium"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="label">
                    <span className="label-text text-lg">Assignment Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="assignment title"
                    name="title"
                    className="w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">Marks</span>
                  </label>
                  <input
                    type="number"
                    placeholder="marks"
                    name="marks"
                    className="w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    className="w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">
                      Difficulty Level
                    </span>
                  </label>
                  <select
                    name="difficulty"
                    className="select select-bordered w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg"
                  >
                    <option className="bg-base-200">Easy</option>
                    <option className="bg-base-200">Medium</option>
                    <option className="bg-base-200">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text  text-lg">Date</span>
                  </label>
                  <div className="w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg appearance-none">
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
                    placeholder="e.g. https://i.ibb.co.com/assignment.png"
                    name="photo"
                    className="w-full bg-transparent outline-none border border-gray-400 px-4 py-2 rounded-lg"
                    required
                  />
                </div>
                <button className="btn btn-outline  w-full hover:btn-warning hover: col-span-1 md:col-span-2 mt-4 text-base">
                  Create Assignment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
