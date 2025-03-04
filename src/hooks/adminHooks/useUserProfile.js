import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getUsers,
  updateRole,
  updateStatus,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate, useParams } from "react-router-dom";

const useUserProfile = () => {
  const {
    users,
    isStatusLoading,
    isError,
    message,
    isSuccess,
    isRoleLoading,
    isRoleError,
    isRoleSuccess,
  } = useSelector((state) => state.admin);
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showKycPhoto, setShowKycPhoto] = useState(false);
  const [action, setAction] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    if (isRoleSuccess) {
      dispatch(getUsers());
      dispatch(reset());
      toast.success(message);
    }
  }, [isSuccess, isRoleSuccess]);

  if (isRoleError)
    toast.error(message || "Error updating user profile, try again");

  const user = users?.find((obj) => obj._id === id);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(user?.accountNumber)
      .then(() => {
        setCopied(true);
        toast.success("Account number copied");
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        toast.error("Failed to copy text: ", error);
      });

    return;
  };

  const handleChange = (e) => {
    setAction(e.target.value);
  };

  const handleStaus = (e) => {
    setStatus(e.target.value);
  };

  const userData = {
    email: user?.email,
    role: action,
  };

  useEffect(() => {
    if (action == user?.role || !action) {
      return;
    }
    if (action && user?.email) {
      dispatch(updateRole(userData));
    }
  }, [action]);

  useEffect(() => {
    if (status == user?.status || !status) {
      return;
    }
    if (status && user?.email) {
      dispatch(updateStatus({ action: status, email: user?.email }));
    }
  }, [status]);

  return {
    copied,
    showModal,
    setShowModal,
    user,
    navigate,
    handleCopy,
    handleChange,
    isRoleLoading,
    showKycPhoto,
    setShowKycPhoto,
    handleStaus,
    isStatusLoading,
  };
};

export default useUserProfile;
