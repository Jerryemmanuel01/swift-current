import { useState } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  getAccountName,
  reset as userReset,
} from "../../services/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { internalTransferSchema } from "../../lib/schema";
import {
  creditUser,
  debitUser,
  reset,
} from "../../services/features/adminUser/adminUserSlice";

const useFundsManagementForm = () => {
  const [action, setAction] = useState("Credit");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFundsLoading, isFundsError, isFundsSuccess, message } = useSelector(
    (state) => state.admin
  );

  const {
    accountName,
    isGetAccountNameError,
    isGetAccountNameLoading,
    message: userMessage,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (isFundsSuccess) {
      toast.success(message);
      formik.resetForm()
      dispatch(reset());
    }
  }, [isFundsSuccess]);

  if (isFundsError) toast.error(message || "Error performing this action");

  const formik = useFormik({
    initialValues: {
      accountNumber: "",
      recipientName: "",
      amount: "",
      description: "",
      pin: "",
    },
    validationSchema: internalTransferSchema,
    onSubmit: ({ accountNumber, amount, description, pin } = values) => {
      const userData = {
        amount,
        accountNumber,
        description,
        pin,
      };

      if (action === "Credit") dispatch(creditUser(userData));
      if (action === "Debit") dispatch(debitUser(userData));
    },
  });
  useEffect(() => {
    if (String(formik.values.accountNumber).length == 10) {
      dispatch(getAccountName({ accountNumber: formik.values.accountNumber }));
      if (isGetAccountNameError) {
        toast.error(userMessage);
        return;
      }
    } else {
      dispatch(userReset());
    }
    formik.setFieldValue("recipientName", accountName);
  }, [
    formik.values.accountNumber,
    accountName,
    isGetAccountNameError,
    userMessage,
  ]);

  return { action, setAction, formik, isGetAccountNameLoading, isFundsLoading };
};

export default useFundsManagementForm;
