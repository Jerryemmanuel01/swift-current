import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingLayout;
