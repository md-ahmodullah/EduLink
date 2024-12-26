import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/85YGfRG/image5.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-2/3 mx-auto">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold text-orange-500">
            Learn Together, Grow Together
          </h1>
          <p className="mb-5">
            Collaborate with friends, tackle assignments, and share knowledge in
            a dynamic online group-study platform. Build connections while
            advancing your learning journey
          </p>
          <Link to="/auth/login" className="btn btn-primary btn-wide text-base">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
