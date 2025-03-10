import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  fetchUserInfo,
  reset,
} from "../../services/features/userInfo/userInfoSlice";
import { useNavigate } from "react-router-dom";
import {
  getTransactions,
  reset as userReset,
} from "../../services/features/user/userSlice";
import {
  getAllNotifications,
  reset as notificationReset,
} from "../../services/features/notification/notificationSlice";

const useDashboardInfo = () => {
  const [retry, setRetry] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userInfo
  );
  const {
    isLoading: userLoading,
    isError: userError,
    message: userMessage,
    isSuccess: userSuccess,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(getTransactions());
    dispatch(getAllNotifications());

    const interval = setInterval(() => {
      dispatch(getAllNotifications());
    }, 10000);

    return () => clearInterval(interval);
  }, [retry]);

  useEffect(() => {
    if (isSuccess) {
      // toast.success(`Welcome ${user.userInfo?.firstName}`);
      dispatch(reset());
      dispatch(userReset());
      dispatch(notificationReset());
    }
  }, []);

  if (isError || (userError && message)) toast.error(message);

  if (message === "Authorization token required") {
    navigate("/auth/login");
    dispatch(reset());
  }
  return { user, isLoading, setRetry, isError };
};

export default useDashboardInfo;
