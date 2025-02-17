import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getPendingTransactions,
  approveTransaction,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";

const useApproveTransaction = () => {
  const [copied, setCopied] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [pinForm, setPinForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [action, setAction] = useState("");
  const [pin, setPin] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pendingTransaction, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getPendingTransactions());
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
  };
};

export default useApproveTransaction;
