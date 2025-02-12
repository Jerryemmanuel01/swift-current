import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logout, resetToken } from "../../services/features/auth/authSlice";
import { resetUser } from "../../services/features/userInfo/userInfoSlice";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const logoutBtn = () => {
    if (!isLoading) {
      dispatch(resetToken())
      dispatch(logout());
      dispatch(resetUser());
      navigate("/auth/login", { replace: true });
    }
  };

  useEffect(() => {
    if (isSuccess && message === "Logout successful") {
      toast.success(message);
    }
  }, [isSuccess]);

  return { logoutBtn };
};

export default useLogout;
