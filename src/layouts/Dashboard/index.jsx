import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashbordLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashbordLayout;
