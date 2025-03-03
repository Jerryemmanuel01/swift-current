import Header from "./Header";
import Footer from "./Footer";
import { memo } from "react";
import Headroom from "react-headroom";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LandingLayout = () => {
  return (
    <>
      <Helmet>
        <title>Swift Current - Your Trusted Banking Partner</title>
        <meta name="Description" content="Swift Current is a secure banking application that offers seamless financial services, including transfer, deposits, Loan and more." />
      </Helmet>
      <Headroom>
        <Header />
      </Headroom>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

export default memo(LandingLayout);
