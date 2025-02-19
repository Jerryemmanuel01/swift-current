import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  localTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  internationalTransferSchema,
  localTransferSchema,
} from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";

const useLocalTransferForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useOutletContext();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );

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
      toast.success("Transaction Processing... please wait");
      formik.resetForm();
      dispatch(fetchUserInfo());
      navigate("/dashboard/transfer-fee");
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
        otp,
        pin,
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
