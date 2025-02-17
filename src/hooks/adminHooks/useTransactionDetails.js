import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  approveTransaction,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate, useParams } from "react-router-dom";

const useTransactionDetails = () => {
  const { pendingTransaction, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.admin);
  const [copied, setCopied] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [pinForm, setPinForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const transaction = pendingTransaction?.find((obj) => obj._id === id);

  const [action, setAction] = useState("");
  const [pin, setPin] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate("/admin/approve-transaction");
    }
  }, [isSuccess]);

  if (isError) toast.error(message);

  const handleCopy = (id, type) => {
    if (id) {
      navigator.clipboard
        .writeText(id)
        .then(() => {
          if (type === "hash") {
            setCopiedHash(true);
          } else {
            setCopied(true);
          }
          toast.success("Copied");
          setTimeout(() => {
            setCopied(false), setCopiedHash(false);
          }, 2000); // Reset after 2 seconds
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
      _id: transaction?._id,
      action,
      pin,
    };
    if (pin.length < 4) {
      toast.error("Pin must be up to 4 digit");
      return;
    }
    dispatch(approveTransaction(userData));
  };

  return {
    pendingTransaction,
    isLoading,
    isError,
    navigate,
    showModal,
    setShowModal,
    handleCopy,
    copied,
    copiedHash,
    handleAction,
    setPinForm,
    pinForm,
    handleSubmit,
    pin,
    setPin,
    handleChange,
    transaction,
  };
};

export default useTransactionDetails;
