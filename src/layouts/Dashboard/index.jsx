import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const DashbordLayout = () => {
  return (
    <div>
      <Header />
      <section className="flex gap-10">
        <Sidebar />
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default DashbordLayout;
