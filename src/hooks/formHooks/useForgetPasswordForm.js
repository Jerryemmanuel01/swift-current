import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { forgetPassword, reset } from "../../services/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { forgetPasswordSchema, loginSchema } from "../../lib/schema";

const useForgetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate("/home");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: (values) => {
      console.log("Values: ", values);
      //    dispatch(forgetPassword(values));
    },
  });
  return { formik, isLoading, message };
};

export default useForgetPasswordForm;
