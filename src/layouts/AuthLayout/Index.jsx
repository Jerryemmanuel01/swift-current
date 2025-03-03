import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsappContact from "../../components/General/WhatsappContact";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
const AuthLayout = () => {
  return (
    <>
      <Helmet>
        <title>Swift Current - Your Trusted Banking Partner</title>
        <meta
          name="Description"
          content="Swift Current is a secure banking application that offers seamless financial services, including transfer, deposits, Loan and more."
        />
      </Helmet>
      <ScrollRestoration />
      <Header />
      <div className="mt-4">
        <Outlet />
      </div>
      <WhatsappContact />
    </>
  );
};

export default AuthLayout;
