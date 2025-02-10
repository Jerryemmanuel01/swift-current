import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  cryptoTransfer,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import { cryptoTransferSchema } from "../../../lib/schema";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";
import { walletAddresses } from "../../../lib/utils";

const useCryptoTransferForm = () => {
  const [swapValue, setSwapValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );
  const { user } = useOutletContext();
  const userInfo = user.userInfo;

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
      blockchainNetwork: "",
      walletAddress: "",
      amount: "",
      description: "",
      otp: "",
      pin: "",
    },
    validationSchema: cryptoTransferSchema,
    onSubmit: ({
      amount,
      blockchainNetwork,
      description,
      otp,
      pin,
      walletAddress,
    } = values) => {
      if (amount > userInfo.accountBalance) {
        toast.error("Insufficient Balance");
        return;
      }
      const metadata = {
        blockchainNetwork,
        walletAddress,
      };
      const userData = {
        amount,
        description,
        otp,
        pin,
        metadata
      };
        dispatch(cryptoTransfer(userData));
    },
  });

  const swapBtn = () => {
    setSwapValue("$" + formik.values.amount.toLocaleString());
  };
  return { formik, isLoading, walletAddresses, swapBtn, swapValue };
};

export default useCryptoTransferForm;
