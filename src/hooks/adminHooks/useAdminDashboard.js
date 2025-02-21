import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getPendingTransactions,
  getTransactions,
  getUsers,
  reset,
} from "../../services/features/adminUser/adminUserSlice";
import { useEffect } from "react";

const useAdminDashboard = () => {
  const dispatch = useDispatch();

  const {
    allTransaction,
    pendingTransaction,
    users,
    isLoading,
    isError,
    message,
    isSuccess,
  } = useSelector((state) => state.admin);

  const pendingKyc = users?.filter((user) => user.kycStatus === "Pending");

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPendingTransactions("pending"));
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      //   toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");

  return { pendingTransaction, users, pendingKyc, allTransaction, isLoading };
};

export default useAdminDashboard;
