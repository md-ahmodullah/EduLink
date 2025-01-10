import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="bg-[url('https://i.ibb.co.com/VMcQ4zF/hero-bg.jpg')] bg-cover bg-no-repeat bg-center bg-black bg-blend-overlay bg-opacity-65 min-h-[500px] flex items-center justify-center">
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
