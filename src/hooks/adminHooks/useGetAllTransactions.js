import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getTransactions,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";
import usePagination from "../usePagination";
const useGetAllTransactions = () => {
  const { allTransaction, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.admin);

  const [copied, setCopied] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = usePagination(allTransaction);

  const [showModal, setShowModal] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTransactions({ type: filter }));
  }, [filter]);

  useEffect(() => {
    if (isSuccess) {
      //   toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting Transactions");

  const userTransaction = allTransaction?.find(
    (obj) => obj._id === transactionId
  );

  const handleRowClick = (id) => {
    setShowModal(true);
    setTransactionId(id);
  };

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

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return {
    products,
    allTransaction,
    isLoading,
    isError,
    handleRowClick,
    navigate,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    startIndex,
    showModal,
    setShowModal,
    userTransaction,
    handleCopy,
    copied,
    copiedHash,
    handleFilter,
  };
};

export default useGetAllTransactions;
