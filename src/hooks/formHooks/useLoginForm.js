import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login, reset } from "../../services/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../lib/schema";

const useLoginForm = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
    if (isSuccess && message === "Login successful") {
      toast.success(message);
      formik.resetForm();
      navigate("/dashboard");
      dispatch(reset());
    }
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return { formik, isLoading, togglePassword, setTogglePassword, message };
};

export default useLoginForm;
