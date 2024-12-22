import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";
import Assignments from "../Pages/Assignments";
import CreateAssignment from "../Pages/CreateAssignment";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyAttemptedAssignment from "../Pages/MyAttemptedAssignment";
import PendingAssignment from "../Pages/PendingAssignment";
import Register from "../Pages/Register";
import PrivateRouter from "../Router/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createAssignment",
        element: (
          <PrivateRouter>
            <CreateAssignment />
          </PrivateRouter>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/myAttemptedAssignment",
        element: (
          <PrivateRouter>
            <MyAttemptedAssignment />
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/assignments"),
      },
      {
        path: "/pendingAssignment",
        element: (
          <PrivateRouter>
            <PendingAssignment />
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/assignments"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
