import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  internationalTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import countryLists from "../../../lib/countries.json";
import { internationalTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";
import { getTransactions } from "../../../services/features/user/userSlice";

const useInternationalTransferForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstTransactionId, isLoading, isError, message, isSuccess } =
    useSelector((state) => state.transfer);
  const {user} = useOutletContext()

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
        "Transaction is currently pending. To proceed, please complete the required SWIFT fee payment."
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
      swiftCode: "",
      IBANCode: "",
      amount: "",
      chargePriorityFee: "",
      description: "",
      otp: "",
      pin: "",
    },
    validationSchema: internationalTransferSchema,
    onSubmit: ({
      IBANCode,
      accountNumber,
      amount,
      bankName,
      chargePriorityFee,
      country,
      description,
      name,
      otp,
      pin,
      swiftCode,
    } = values) => {
      const metadata = {
        bankName,
        accountNumber: String(accountNumber),
        country,
        swiftCode,
        IBANCode,
      };
      const userData = {
        amount,
        name,
        description,
        chargePriorityFee,
        otp: String(otp),
        pin: String(pin),
        metadata,
      };
      if (amount > user.userInfo.accountBalance) {
        toast.error("Insufficient Balance")
        return
      }      

      dispatch(internationalTransfer(userData));
    },
  });
  return { formik, isLoading, countryLists, chargePriorityOptions };
};

export default useInternationalTransferForm;
