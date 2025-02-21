import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectTransfer = ({ element }) => {
  const { user } = useSelector((state) => state.userInfo);

  const kycStatus = user?.userInfo.kycStatus;
  if (kycStatus !== "Complete") {
    toast.error("Complete your kyc")
    return <Navigate to="/dashboard/KYC" />;
  }
  return element;
};

export default ProtectTransfer;
