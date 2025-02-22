import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getUsers,
  approveKYC,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";
import usePagination from "../usePagination";
const useApproveKyc = () => {
  const [showModal, setShowModal] = useState(false);
  const [showKycPhoto, setShowKycPhoto] = useState(false);
  const [userId, setUserId] = useState("");
  const [action, setAction] = useState("");

  const {
    users,
    isLoading,
    isError,
    isSuccess,
    message,
    isKycLoading,
    isKycError,
    isKycSuccess,
  } = useSelector((state) => state.admin);
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
    if (isSuccess) dispatch(reset());
  }, [isSuccess]);

  useEffect(() => {
    if (isKycSuccess) {
      toast.success(message);
      setShowModal(false);
      setShowKycPhoto(false);
      dispatch(getUsers());
      dispatch(reset());
    }
  }, [isKycSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");
  if (isKycError) toast.error(message || "Error approving this action");

  const userKyc = products?.find((obj) => obj._id === userId);

  const handleRowClick = (id) => {
    setShowModal(true);
    setUserId(id);
  };

  const handleAction = (type) => {
    setAction(type);
  };

  const userData = {
    email: userKyc?.email,
    kycStatus: action,
  };

  useEffect(() => {
    if (userKyc && action) {
      dispatch(approveKYC(userData));
    }
  }, [action]);

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
    isKycLoading,
    isError,
    userKyc,
    showKycPhoto,
    setShowKycPhoto,
    handleAction,
  };
};

export default useApproveKyc;
