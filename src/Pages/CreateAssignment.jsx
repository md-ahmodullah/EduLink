import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
export default function CreateAssignment() {
  const { user } = useContext(AuthContext);

  const email = user?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const newAssignment = {
      email,
      title,
      marks,
      description,
      difficulty,
      date,
      photo,
    };

    fetch("http://localhost:5000/assignment", {
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
      <div className="bg-base-100 min-h-[750px] font-poppins">
        <div className="w-full lg:w-3/5 mx-auto py-12 px-5">
          <div className="p-8 rounded-lg bg-base-300">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 text-center">
              Create An Assignment
            </h2>
            <div className="space-y-3 pt-8">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Assignment Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="assignment title"
                    name="title"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">Marks</span>
                  </label>
                  <input
                    type="number"
                    placeholder="marks"
                    name="marks"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Description
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Difficulty Level
                    </span>
                  </label>
                  <select
                    name="difficulty"
                    className="select select-bordered w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                  >
                    <option className="bg-base-200">Easy</option>
                    <option className="bg-base-200">Medium</option>
                    <option className="bg-base-200">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="date"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200 appearance-none"
                    style={{
                      colorScheme: "dark",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. https://i.ibb.co.com/assignment.png"
                    name="photo"
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <button className="btn btn-outline text-yellow-400 w-full hover:btn-warning hover:text-black col-span-1 md:col-span-2 mt-4 text-base">
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
