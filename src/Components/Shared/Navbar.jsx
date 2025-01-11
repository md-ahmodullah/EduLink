import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/pendingAssignment">Pending Assignments</NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 font-roboto lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 small"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Link>
              <img
                src={logo}
                alt="logo"
                className="hidden md:grid w-11 h-11 object-cover"
              />
            </Link>
            <Link className="text-2xl md:text-3xl font-bold text-black">
              Edu<span className="text-primary">Link</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>
        <div className="navbar-end items-center gap-3">
          <ThemeToggle />
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="border-2 border-gray-400 p-0.5 rounded-full">
                    <img
                      alt="Profile pic"
                      src={user?.photoURL}
                      referrerPolicy="no-referrer"
                      title={user?.displayName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 profile-drop"
                >
                  <li>
                    <NavLink to="/createAssignment">Create Assignment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/myAttemptedAssignment">
                      My Assignments
                    </NavLink>
                  </li>
                </ul>
              </div>
              <a
                className="btn btn-primary text-white"
                onClick={() => logOut()}
              >
                Log Out
              </a>
            </>
          ) : (
            <Link to="/auth/login" className="btn btn-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
