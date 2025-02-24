import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logout, reset, resetToken } from "../../services/features/auth/authSlice";
import { resetUser } from "../../services/features/userInfo/userInfoSlice";
import { resetUsers } from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";
import { resetUserTransactions } from "../../services/features/user/userSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message, isLogoutSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLogoutSuccess) {
      toast.success(message);
      dispatch(resetToken());
      dispatch(resetUser());
      dispatch(resetUsers());
      dispatch(resetUserTransactions());
      dispatch(reset())
      navigate("/auth/login", { replace: true });
    }
  }, [isLogoutSuccess]);

  const logoutBtn = () => {
    if (!isLoading) {
      dispatch(logout());
    }
  };

  return { logoutBtn };
};

export default useLogout;
