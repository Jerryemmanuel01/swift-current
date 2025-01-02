import { contactMessageSchema } from "../../lib/schema";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  sendMessage,
} from "../../services/features/support/supportSlice";

const useContactForm = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.support
  );

  useEffect(() => {
    if (isError) alert(message);
    if (isSuccess) alert("Submitted Successfully");
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      title: "",
      message: "",
    },
    validationSchema: contactMessageSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(sendMessage(values));
      resetForm();
    },
  });
  return { formik, isLoading };
};

export default useContactForm;
