import { useNavigate, useOutletContext } from "react-router-dom";
import usePagination from "../usePagination";

const useTransactionHistoryTable = (transactions) => {
  const { user } = useOutletContext();
  const userInfo = user?.userInfo;
  const navigate = useNavigate();
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = usePagination(transactions);

  const handleRowClick = (id, transaction) => {
    if (
      transaction.type === "Transfer" &&
      transaction.status === "Pending" &&
      !transaction.metadata?.secondTransactionId &&
      transaction.metadata?.transferType !== "Crypto Transfer"
    ) {
      navigate(`/dashboard/transfer-fee?id=${id}`);
      return;
    }
    if (
      transaction.type === "Transfer" &&
      transaction.status === "Pending" &&
      !transaction.metadata.secondTransactionId &&
      transaction.metadata?.transferType === "Crypto Transfer"
    ) {
      navigate(`/dashboard/blockchain-fee?id=${id}`);
      return;
    }
    if (
      transaction.type === "Transfer" &&
      transaction.status === "Pending" &&
      transaction.metadata.secondTransactionId &&
      userInfo.accountLevel !== "Tier 3"
    ) {
      navigate(`/dashboard/upgrade-fee`);
      return;
    }
    if (
      transaction.status === "Approved" ||
      transaction.status === "Failed" ||
      transaction.status === "Pending"
    ) {
      navigate(`/dashboard/receipt/${id}`);
      return;
    }
  };
  return {
    handleRowClick,
    user,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  };
};

export default useTransactionHistoryTable;
