import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsappContact from "../../components/General/WhatsappContact";
import Header from "../LandingLayout/Header";
const AuthLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <WhatsappContact />
    </>
  );
};

export default AuthLayout;
