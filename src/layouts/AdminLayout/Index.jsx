import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.userInfo);
  const role = user?.userInfo.role;
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (path.startsWith("/admin") && role === "User") {
      navigate("/dashboard");
    }
  }, []);

  console.log(path);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
