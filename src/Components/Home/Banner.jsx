import { FaBrain, FaUserGraduate } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import heroImg from "../../assets/images/hero-img.png";
export default function Banner() {
  return (
    <div className="bg-blue-200 font-roboto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-10/12 mx-auto min-h-[500px]">
        <div className="flex items-center justify-center">
          <div className="pt-12 lg:py-10 space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Unlock Your Potential by Collaborating Learning and Succeeding
              Together.
            </h1>
            <p className="text-gray-500 w-full lg:w-4/5">
              Collaborate with friends, tackle assignments, and share knowledge
              in a dynamic online group-study platform. Build connections while
              advancing your learning journey
            </p>
            <div className="w-3/4">
              <div className="flex items-center justify-between bg-white py-1.5 px-2 rounded-md">
                <div className="flex items-center gap-2 w-full mr-3">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your topic"
                    className="w-full outline-none"
                  />
                </div>
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-sm btn-primary rounded"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold">
              <p>4.9/5 rating in</p>
              <IoStar className="text-blue-700" />
              <p>Trustpilot</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center min-h-280px pt-0 lg:pt-5 relative">
          <img src={heroImg} alt="" className="h-full" />
          <div className="bg-white backdrop-blur-md bg-opacity-20 p-3 rounded-md flex items-center gap-2 absolute top-44 lg:top-44 right-0 lg:right-12 transform: translate(-50%, -50%)">
            <div className="bg-white rounded-full p-2">
              <LuNotebookText className="text-red-700 text-2xl" />
            </div>
            <div>
              <p className="text-lg font-extrabold">32+</p>
              <p className="text-xs font-medium">Asignment Topics</p>
            </div>
          </div>
          <div className="bg-black backdrop-blur-md bg-opacity-5 p-3 rounded-md flex items-center gap-2 absolute bottom-4 lg:bottom-10 right-0 lg:right-10 transform: translate(-50%, -50%)">
            <div className="bg-white rounded-full p-2">
              <FaUserGraduate className="text-purple-700 text-2xl" />
            </div>
            <div>
              <p className="text-lg font-extrabold">1M+</p>
              <p className="text-xs font-medium">Active Members</p>
            </div>
          </div>
          <div className="bg-black backdrop-blur-md bg-opacity-5 p-3 rounded-md flex items-center gap-2 absolute left-0 lg:left-20 bottom-20 lg:bottom-20 transform: translate(-50%, -50%)">
            <div className="bg-white rounded-full p-2">
              <FaBrain className="text-blue-700 text-2xl" />
            </div>
            <div>
              <p className="text-lg font-extrabold">14+</p>
              <p className="text-xs font-medium">World IQ Contest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
