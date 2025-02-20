import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  internalTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import {
  getAccountName,
  reset as userReset,
} from "../../../services/features/user/userSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import { internalTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";

const useInternalTransfer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );
  const {
    accountName,
    isGetAccountNameError,
    isGetAccountNameLoading,
    message: userMessage,
  } = useSelector((state) => state.user);
  const { user } = useOutletContext();
  const userInfo = user.userInfo;

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      dispatch(fetchUserInfo());
      dispatch(userReset());
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      bankName: "Swiftcurrent",
      accountNumber: "",
      recipientName: "Emmanuel",
      amount: "",
      description: "",
      pin: "",
    },
    validationSchema: internalTransferSchema,
    onSubmit: ({ accountNumber, amount, description, pin } = values) => {
      if (amount > userInfo.accountBalance) {
        toast.error("Insufficient Balance");
        return;
      }
      const userData = {
        amount,
        accountNumber,
        description,
        pin,
      };

      dispatch(internalTransfer(userData));
    },
  });
  useEffect(() => {
    if (String(formik.values.accountNumber).length == 10) {
      dispatch(getAccountName({ accountNumber: formik.values.accountNumber }));
      if (isGetAccountNameError) {
        toast.error(userMessage);
        return;
      }
    } else {
      dispatch(userReset());
    }
    formik.setFieldValue("recipientName", accountName);
  }, [
    formik.values.accountNumber,
    accountName,
    isGetAccountNameError,
    userMessage,
  ]);

  return { formik, isLoading, isGetAccountNameLoading };
};

export default useInternalTransfer;
