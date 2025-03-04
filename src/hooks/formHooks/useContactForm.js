import { contactMessageSchema } from "../../lib/schema";
import { useFormik } from "formik";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
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
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success("Message sent to support team");
      formik.resetForm();
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactMessageSchema,
    onSubmit: (values) => {
      dispatch(sendMessage(values));
    },
  });
  return { formik, isLoading };
};

export default useContactForm;
