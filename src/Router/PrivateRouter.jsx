import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { AuthContext } from "../Provider/AuthProvider";
export default function PrivateRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
}
