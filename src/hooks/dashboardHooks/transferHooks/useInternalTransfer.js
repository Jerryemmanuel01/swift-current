import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  internalTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate } from "react-router-dom";
import { internalTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";

const useInternalTransfer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success("Transaction Processing... please wait");
      formik.resetForm();
      dispatch(fetchUserInfo());
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      bankName: "Swiftcurrent",
      recipientAccountNumber: "",
      recipientName: "",
      amount: "",
      description: "",
      transactionPin: "",
    },
    validationSchema: internalTransferSchema,
    onSubmit: (values) => {
      console.log(values);

      //   dispatch(internalTransfer(values));
    },
  });
  return {formik, isLoading};
};

export default useInternalTransfer;
