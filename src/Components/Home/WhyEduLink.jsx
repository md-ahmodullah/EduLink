import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase, FaRegCalendarDays } from "react-icons/fa6";
import { HiDocumentSearch } from "react-icons/hi";
import SectionHeading from "../Reusable Component/SectionHeading";
export default function WhyEduLink() {
  return (
    <section className="bg-blue-50">
      <div className="w-10/12 mx-auto py-16">
        <SectionHeading
          title={"Why EduLink is No.1 Choice?"}
          subTitle={
            "Uncover the reasons why EduLink is the leading choice for online learning."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 shadow-md">
            <div className="bg-blue-100 p-2 rounded-full">
              <FaRegCalendarDays className="text-2xl text-black" />
            </div>
            <h2 className="text-xl font-bold">5 Years of Smooth Journey</h2>
            <p className="text-gray-500">
              Reflecting on 5 years of empowering students and achieving
              academic success together. Let's Work and Succeed Together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 shadow-md">
            <div className="bg-purple-200 p-2 rounded-full">
              <FaUserGraduate className="text-2xl text-black" />
            </div>
            <h2 className="text-xl font-bold">100+ Expert Mentors</h2>
            <p className="text-gray-500">
              100+ expert mentors provide direct support, ensuring each
              student's unique needs are met and their potential is unlocked.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 shadow-md">
            <div className="bg-orange-200 p-2 rounded-full">
              <FaBriefcase className="text-2xl text-black" />
            </div>
            <h2 className="text-xl font-bold">Job Opportunities</h2>
            <p className="text-gray-500">
              We connect talented students with top employers. Explore exciting
              job openings and build your professional network through our
              platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col items-start gap-4 shadow-md">
            <div className="bg-green-200 p-2 rounded-full">
              <HiDocumentSearch className="text-2xl text-black" />
            </div>
            <h2 className="text-xl font-bold">Research & Innovation</h2>
            <p className="text-gray-500">
              Prepare for the future by exploring innovative learning approaches
              and developing the research skills needed to thrive in a rapidly
              changing world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
