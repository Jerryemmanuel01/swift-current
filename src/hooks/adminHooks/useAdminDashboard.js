import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import {
  getPendingTransactions,
  getTransactions,
  getUsers,
  reset,
} from "../../services/features/adminUser/adminUserSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
    const options = {
      stat: "pending",
      // type: filter,
    };
    dispatch(getUsers({}));
    dispatch(getPendingTransactions({ stat: "pending" }));
    dispatch(getTransactions({ type: "all" }));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      //   toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");

  const dashboardCardInfos = [
    {
      bg: "bg-gradient-to-br from-primary/80 to-secondary",
      title: "Total Users",
      icon: FaUserAlt,
      disc: "Users",
      value: users?.length?.toLocaleString(),
      tooltip: "Total User",
      to: "/admin/get-users",
    },
    {
      bg: "bg-gradient-to-br from-[#dd4343]/70 to-[#dd4343]",
      title: "Total Transactions",
      icon: GrTransaction,
      disc: "Transactions",
      value: allTransaction?.length?.toLocaleString(),
      tooltip: "Total Transactions",
      to: "/admin/get-transactions",
    },
    {
      bg: "bg-gradient-to-br from-[#2e90eb]/70 to-[#2e90eb]",
      title: "Pending KYC",
      icon: VscWorkspaceTrusted,
      disc: "KYC",
      value: pendingKyc?.length?.toLocaleString(),
      tooltip: "Pending KYC",
      to: "/admin/approve-kyc",
    },
    {
      bg: "bg-gradient-to-br from-[#6762da]/70 to-[#6762da]",
      title: "Pending Transactions",
      icon: MdPendingActions,
      disc: "Pending",
      value: pendingTransaction?.length?.toLocaleString(),
      tooltip: "Total User",
      to: "/admin/approve-transaction",
    },
  ];

  return {
    pendingTransaction,
    users,
    pendingKyc,
    allTransaction,
    isLoading,
    dashboardCardInfos,
  };
};

export default useAdminDashboard;
