import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectAuth = ({ element }) => {
  const token = Cookies.get("SC_access_token");
  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return element;
};

export default ProtectAuth;
