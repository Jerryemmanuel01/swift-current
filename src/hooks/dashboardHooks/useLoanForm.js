import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { loan, reset } from "../../services/features/transfer/transferSlice";
import { useNavigate } from "react-router-dom";
import { loanFormSchema } from "../../lib/schema";

const useLoanForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } =
    useSelector((state) => state.transfer);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate(`/dashboard`);
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      amount: "",
      description: "",
      sourceOfIncome: "",
      monthlyIncome: "",
    },
    validationSchema: loanFormSchema,
    onSubmit: ({
      amount,
      description,
      monthlyIncome,
      sourceOfIncome,
    } = values) => {
      const metadata = {
        sourceOfIncome,
        monthlyIncome,
      };
      const userData = {
        amount,
        description,
        metadata,
      };

      dispatch(loan(userData));
    },
  });
  return { formik, isLoading };
};

export default useLoanForm;
