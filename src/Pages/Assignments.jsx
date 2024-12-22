import { useLoaderData } from "react-router-dom";
import AssignmentCards from "../Components/AssignmentCards";
export default function Assignments() {
  const data = useLoaderData();

  return (
    <>
      <section className="bg-transparent mb-2 font-poppins">
        <div className="w-full px-2 md:w-11/12 lg:w-10/12 mx-auto py-16 space-y-12">
          <div className="flex items-center justify-between border-b-2 border-blue-200 pb-3">
            <h2 className="text-xl lg:text-3xl font-bold text-white">
              All Assignments({data.length})
            </h2>
          </div>
          <div className="flex flex-col gap-9">
            {data.map((d) => (
              <AssignmentCards key={d._id} d={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
