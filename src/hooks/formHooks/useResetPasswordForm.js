import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { resetPassword, reset } from "../../services/features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordSchema } from "../../lib/schema";

const useResetPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      if (message === "Reset Token Expired") navigate("/auth/forget-password");
    }
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate("/auth/login");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword(values));
    },
  });
  return { formik, isLoading, message };
};

export default useResetPasswordForm;
