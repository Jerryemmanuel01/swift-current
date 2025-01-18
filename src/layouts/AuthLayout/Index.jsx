import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsappContact from "../../components/General/WhatsappContact";

const AuthLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <WhatsappContact />
    </>
  );
};

export default AuthLayout;
