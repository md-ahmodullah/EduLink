import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function UpdateAssignment() {
  const updateAssignment = useLoaderData();
  console.log(updateAssignment);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const difficulty = form.difficulty.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const updatedAssignment = {
      title,
      marks,
      description,
      difficulty,
      date,
      photo,
    };
    fetch(`http://localhost:5000/assignments/${updateAssignment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedAssignment),
    })
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
          <div className="bg-base-300 p-5 rounded-lg ">
            <h2 className="text-xl md:text-3xl font-bold text-yellow-400 text-center">
              Update Campaign
            </h2>
            <div className="space-y-3 pt-8">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={handleUpdate}
              >
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Assignment Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    name="title"
                    defaultValue={updateAssignment.title}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white text-lg">Marks</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    defaultValue={updateAssignment.marks}
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
                    placeholder=""
                    name="description"
                    defaultValue={updateAssignment.description}
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
                    defaultValue={updateAssignment.difficulty}
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
                    placeholder=""
                    defaultValue={updateAssignment.date}
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
                    placeholder=""
                    name="photo"
                    defaultValue={updateAssignment.photo}
                    className="w-full bg-transparent outline-none border border-gray-300 px-4 py-2 rounded-lg text-gray-200"
                    required
                  />
                </div>
                <button className="btn btn-outline text-yellow-400 w-full hover:btn-warning hover:text-black col-span-1 md:col-span-2 mt-4 text-base">
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
