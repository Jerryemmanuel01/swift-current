import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  fetchUserInfo,
  reset,
} from "../../services/features/userInfo/userInfoSlice";
import { useNavigate } from "react-router-dom";

const useDashboardInfo = () => {
  const [retry, setRetry] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userInfo
  );

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [retry]);

  useEffect(() => {
    if (isSuccess) {
      // toast.success(`Welcome ${user.userInfo?.firstName}`);
      dispatch(reset());
    }
  }, []);

  if (isError && message) toast.error(message);

  if (message === "Authorization token required") {
    navigate("/auth/login");
    dispatch(reset())
  }
  return { user, isLoading, setRetry, isError };
};

export default useDashboardInfo;
