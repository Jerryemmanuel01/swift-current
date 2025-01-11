import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashbordLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-6">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default DashbordLayout;
