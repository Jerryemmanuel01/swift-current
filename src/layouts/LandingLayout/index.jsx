import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";
import { Outlet, ScrollRestoration } from "react-router-dom";

const LandingLayout = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingLayout;
