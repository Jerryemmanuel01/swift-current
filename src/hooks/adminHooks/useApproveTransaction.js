import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getPendingTransactions,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";

const useApproveTransaction = () => {
  const [copied, setCopied] = useState(false);
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

  if (isError) toast.error(message || "Error getting users");

  const handleRowClick = (id) => {
    const transaction = pendingTransaction?.find((obj) => obj.id === id);
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handleCopy = (id) => {
    if (id) {
      navigator.clipboard
        .writeText(id)
        .then(() => {
          setCopied(true);
          toast.success("Copied");
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
        .catch((error) => {
          toast.error("Failed to copy text: ", error);
        });
      return;
    }
    toast.error("Failed to copy text");
  };

  const handleAction = (type) => {
    setAction(type);
    setPinForm(true);
  };

  const handleChange = (e) => {
    // Allow only numbers and limit to 4 or 6 digits
    const newValue = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPin(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: selectedTransaction?.id,
      action,
      pin
    };
    console.log(userData);
    
  };

  return {
    pendingTransaction,
    isLoading,
    isError,
    navigate,
    showModal,
    setShowModal,
    handleRowClick,
    selectedTransaction,
    handleCopy,
    copied,
    handleAction,
    setPinForm,
    pinForm,
    handleSubmit,
    pin,
    setPin,
    handleChange,
  };
};

export default useApproveTransaction;
