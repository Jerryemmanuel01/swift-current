import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getPendingTransactions,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";
import usePagination from "../usePagination";

const useApproveTransaction = () => {
  const { pendingTransaction, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.admin);

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = usePagination(pendingTransaction);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPendingTransactions({ stat: "pending" }));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      //   toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");

  const handleRowClick = (id) => {
    navigate(`/admin/transaction-details/${id}`);
  };

  return {
    pendingTransaction,
    isLoading,
    isError,
    handleRowClick,
    navigate,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  };
};

export default useApproveTransaction;
