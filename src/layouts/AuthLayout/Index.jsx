import React from "react";
import { Outlet } from "react-router-dom";
import WhatsappContact from "../../components/General/WhatsappContact";

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <WhatsappContact />
    </>
  );
};

export default AuthLayout;
