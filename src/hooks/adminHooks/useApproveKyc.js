import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getUsers,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";
import usePagination from "../usePagination";
const useApproveKyc = () => {
  const [showModal, setShowModal] = useState(false);

  const { users, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pendingKyc = users?.filter((user) => user.kycStatus === "Pending");
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = usePagination(pendingKyc);
    
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");


  const handleRowClick = (id) => {
    setShowModal(true);
    setTransactionId(id);
  };

  return {
    pendingKyc,
    handleRowClick,
    navigate,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
    showModal,
    setShowModal,
    isLoading,
    isError,
  };
};

export default useApproveKyc;
