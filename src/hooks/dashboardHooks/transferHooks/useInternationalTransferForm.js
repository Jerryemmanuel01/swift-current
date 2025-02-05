import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  internalTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate } from "react-router-dom";
import countryLists from "../../../lib/countries.json";
import { internationalTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";

const useInternationalTransferForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );

  const chargePriorityOptions = [
    {
        charge: "SHARED",
        value: "Shared"
    },
    {
        charge: "OUR",
        value: "Our"
    },
  ]

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
      bankName: "",
      recipientAccountNumber: "",
      recipientName: "",
      country: "",
      swiftCode: "",
      ibanCode: "",
      amount: "",
      chargePriority:"",
      description: "",
      tokenId:"",
      transactionPin: "",
    },
    validationSchema: internationalTransferSchema,
    onSubmit: (values) => {
      console.log(values);

      //   dispatch(internalTransfer(values));
    },
  });
  return { formik, isLoading, countryLists, chargePriorityOptions };
};

export default useInternationalTransferForm;
