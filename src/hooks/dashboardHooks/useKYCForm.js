import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { verifyKYC, reset } from "../../services/features/KYC/KYCSlice";
import { fetchUserInfo } from "../../services/features/userInfo/userInfoSlice";
import { useNavigate } from "react-router-dom";
import { KYCSchema } from "../../lib/schema";
import countryLists from "../../lib/countries.json";
import { IdMedium } from "../../lib/utils";

const useKYCForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.kyc
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      dispatch(fetchUserInfo());
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      issuingCountry: "",
      identityMedium: "",
      identityNumber: "",
      identityCardPhoto: null,
    },
    validationSchema: KYCSchema,
    onSubmit: async (values) => {
      dispatch(verifyKYC(values));
    },
  });

  return { formik, isLoading, countryLists, IdMedium, message };
};

export default useKYCForm;
