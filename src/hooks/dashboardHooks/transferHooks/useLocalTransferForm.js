import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  localTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import { localTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";
import { getTransactions } from "../../../services/features/user/userSlice";

const useLocalTransferForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useOutletContext();

  const { firstTransactionId, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.transfer);

  const chargePriorityOptions = [
    {
      charge: "SHARED",
      value: "Shared",
    },
    {
      charge: "OUR",
      value: "Our",
    },
  ];

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(
        "Transaction pending. To proceed, please complete the required SWIFT fee payment."
      );
      formik.resetForm();
      dispatch(fetchUserInfo());
      dispatch(getTransactions());
      navigate(
        `/dashboard/transfer-fee?id=${firstTransactionId.transactionId}`
      );
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
      name: "",
      country: "",
      sortCode: "",
      branchNumber: "",
      amount: "",
      chargePriorityFee: "",
      description: "",
      otp: "",
      pin: "",
    },
    validationSchema: localTransferSchema,
    onSubmit: ({
      accountNumber,
      amount,
      bankName,
      branchNumber,
      chargePriorityFee,
      country,
      description,
      name,
      otp,
      pin,
      sortCode,
    } = values) => {
      const metadata = {
        bankName,
        accountNumber: String(accountNumber),
        sortCode,
        branchNumber,
      };
      const userData = {
        amount,
        chargePriorityFee,
        country,
        description,
        name,
        otp: String(otp),
        pin: String(pin),
        metadata,
      };
      if (amount > user.userInfo.accountBalance) {
        toast.error("Insufficient Balance");
        return;
      }

      dispatch(localTransfer(userData));
    },
  });
  return { formik, isLoading, chargePriorityOptions };
};

export default useLocalTransferForm;
