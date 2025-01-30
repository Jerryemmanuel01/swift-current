import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logout, reset } from "../../services/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );
  const logoutBtn = () => {
    if (!isLoading) dispatch(logout());
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      navigate("/auth/login", { replace: true });
      dispatch(reset());
    }
  }, [isSuccess]);

  return { logoutBtn };
};

export default useLogout;
