import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
   getTransactions,
  reset,
} from "../../services/features/user/userSlice";
import { getUserInfo } from "../../services/features/userInfo/userInfoSlice";

const useDashboard = () => {
  const [retry, setRetry] = useState(false);
  const dispatch = useDispatch();

  const { isGetTransactionsLoading, isGetTransactionsError, message, isGetTransactionsSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getTransactions());
    dispatch(getUserInfo());
  }, [retry]);

  useEffect(() => {
    if (isGetTransactionsSuccess) {
      dispatch(reset());
    }
  }, [isGetTransactionsSuccess]);

  if (isGetTransactionsError) toast.error(message);

  return { isGetTransactionsLoading, setRetry, isGetTransactionsError };
};

export default useDashboard;
