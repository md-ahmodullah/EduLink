import { FaShareSquare } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";
import { GrResources } from "react-icons/gr";
export default function Value() {
  return (
    <div className="w-10/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
      <div className="flex items-center gap-2">
        <div className="bg-red-200 p-2 rounded-full">
          <GrResources className="text-xl text-black" />
        </div>
        <p className="text-xl text-black font-bold">5000+ Resources</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 p-2 rounded-full">
          <FcCollaboration className="text-xl text-white" />
        </div>
        <p className="text-xl text-black font-bold">Easy Collaboration</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 p-2 rounded-full">
          <FaShareSquare className="text-xl text-black" />
        </div>
        <p className="text-xl text-black font-bold">Knowledge Sharing</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-purple-200 p-2 rounded-full">
          <FaUserGroup className="text-xl text-black" />
        </div>
        <p className="text-xl text-black font-bold">Pro-active Groups</p>
      </div>
    </div>
  );
}
