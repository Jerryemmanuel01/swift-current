import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  fetchUserInfo,
  reset,
} from "../../services/features/userInfo/userInfoSlice";

const useDashboard = () => {
  const [retry, setRetry] = useState(false);
  const dispatch = useDispatch();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userInfo
  );

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [retry]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

//   if (isError) toast.error(message);

  return { user, isLoading, setRetry, isError };
};

export default useDashboard;
