import { Link, useLoaderData } from "react-router-dom";
export default function MyAttemptedAssignment() {
  const data = useLoaderData();
  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-white">
              My Attempted Assignment({data.length})
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
                {data.map((d, index) => (
                  <tr key={d._id}>
                    <th>{index + 1}</th>
                    <td>{d.title}</td>
                    <td>${d.marks}</td>
                    <td>{d.difficulty}</td>
                    <td>
                      <Link
                        to={`/details/${d._id}`}
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
