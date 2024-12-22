import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

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
          <NavLink to="/createAssignment">Create Assignment</NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 font-roboto w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <Link>
              <img
                src="https://i.ibb.co.com/T4WL71H/logo-edulink.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
            </Link>
            <Link className="text-3xl font-bold">EduLink</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Profile pic"
                      src={user?.photoURL}
                      title={user?.displayName}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
                >
                  <li>
                    <NavLink to="/myAttemptedAssignment">
                      Attempted Assignments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pendingAssignment">
                      Pending Assignments
                    </NavLink>
                  </li>
                </ul>
              </div>
              <a className="btn" onClick={() => logOut()}>
                Log Out
              </a>
            </>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}