import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  verifyKYC,
  imageUpload,
  reset,
} from "../../services/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { KYCSchema } from "../../lib/schema";
import countryLists from "../../lib/countries.json";
import { IdMedium } from "../../lib/utils";

const useKYCForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      // navigate("/home");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      country: "",
      medium: "",
      number: "",
      photo: null,
    },
    validationSchema: KYCSchema,
    onSubmit: async ({ country, medium, number, photo } = values) => {
      const profileUrl = await dispatch(imageUpload(photo));
     
      if (profileUrl.type === "user/imageUpload/fulfilled") {
        const photourl = profileUrl.payload;
        const userData = { country, medium, number, photourl };
        console.log("Values: ", userData);

        //  dispatch(verifyKYC(values));
      }
    },
  });

  return { formik, isLoading, countryLists, IdMedium, message };
};

export default useKYCForm;
