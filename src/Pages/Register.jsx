import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLink } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import signupLottie from "/public/signup.json";

export default function Register() {
  const { user, setUser, createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const photoURL = data.get("photo");
    const email = data.get("email");
    const password = data.get("password");

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setErrMessage("Must be at least 6 char including upper & lower case");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const newUser = {
          displayName: name,
          photoURL: photoURL,
          email: email,
          password: password,
        };
        setUser(newUser);
        Swal.fire("Register Successfully!");
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then((result) => {
            const newUser = result.user;
            setUser(newUser);
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message?.split("auth/")[1];
            const displayError = errorMessage?.split(").")[0];
            setErrMessage(displayError);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message?.split("auth/")[1];
        const displayError = errorMessage?.split(").")[0];
        setErrMessage(displayError);
      });
  };

  const handleGoogleSignup = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire("Sign-up Successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split("auth/")[1];
        const displayError = errorMessage.split(").")[0];
        setErrMessage(displayError);
      });
  };
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="bg-base-100 min-h-[500px] font-roboto">
        <div className="py-10 lg:py-14 font-poppins px-0 md:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-11/12 md:w-10/12 mx-auto">
          <div className="bg-transparent rounded-lg w-full shrink-0 shadow-2xl py-6 px-5">
            <div className="text-center px-5">
              <h1 className="text-2xl font-semibold text-blue-500">
                Register Your Account
              </h1>
            </div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base ">
                      Name
                    </span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-transparent border border-gray-300">
                    <MdDriveFileRenameOutline className="" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="grow "
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base ">
                      Photo URL
                    </span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-transparent border border-gray-300">
                    <FaLink className="text-sm " />
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="grow "
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base ">
                      Email
                    </span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-transparent border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 "
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      className="grow "
                      placeholder="Email"
                      required
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base ">
                      Password
                    </span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2 bg-transparent border border-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70 "
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type={isShow ? "text" : "password"}
                      name="password"
                      className="grow "
                      placeholder="Password"
                      required
                    />
                    {isShow ? (
                      <FaEyeSlash
                        className="text-xl md:text-lg "
                        onClick={handleShow}
                      />
                    ) : (
                      <FaEye
                        className="text-xl md:text:lg "
                        onClick={handleShow}
                      />
                    )}
                  </label>
                </div>
                <div className="form-control inline-block space-x-2 pt-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox-warning"
                    required
                  />
                  <span className="text-sm ">
                    Agree to the Terms and Conditions
                  </span>
                </div>
                <div className="flex w-full flex-col border-opacity-50 form-control mt-3">
                  <div>
                    {errMessage && (
                      <span className="text-xs text-red-500 flex items-center gap-1 pb-3">
                        <IoWarning className="text-2xl" /> {errMessage}
                      </span>
                    )}
                  </div>
                  <button className="btn btn-primary font-semibold hover:btn-warning hover:text-black">
                    Register
                  </button>
                  <div className="divider  before:bg-gray-400 after:bg-gray-400">
                    OR
                  </div>
                  <button
                    onClick={handleGoogleSignup}
                    className="btn btn-primary mb-3 hover:btn-warning hover:text-black"
                  >
                    <FaGoogle /> Sign Up with Google
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center text-xs  font-medium">
              <p className="pr-2 ">Already have an account?</p>
              <Link to="/auth/login" className="text-blue-500 underline">
                Log In
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Lottie animationData={signupLottie} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
