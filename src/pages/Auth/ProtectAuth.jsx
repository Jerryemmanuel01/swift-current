import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectAuth = ({ element }) => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  return element;
};

export default ProtectAuth;
