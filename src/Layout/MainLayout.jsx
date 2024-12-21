import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="max-h-[calc(100vh-220px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
