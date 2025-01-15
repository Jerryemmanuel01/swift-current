import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login, reset } from "../../services/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../lib/schema";
import { walletAddresses } from "../../lib/utils";


const useFundingForm = () => {
  const [copied, setCopied] = useState(false);
  const [qrCode, setQrCode] = useState("");

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
      amount: "",
      network: "",
      address: "",
      transactionId: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Values: ", values);
      navigate("/dashboard");
      //    dispatch(login(values));
    },
  });

  const handleCopy = () => {
    if (formik.values.address) {
      navigator.clipboard
        .writeText(formik.values.address)
        .then(() => {
          setCopied(true);
          toast.success("Wallet address copied");
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
        .catch((error) => {
          toast.error("Failed to copy text: ", error);
        });
      return;
    }
    toast.error("Please select a blockchain network");
  };

  const findAddressByNetwork = (network) => {
    return walletAddresses.find((wallet) => wallet.network === network)
      ?.address;
  };
  const findQRCodeByNetwork = (network) => {
    setQrCode(walletAddresses.find((qrCode) => qrCode.network === network)?.qrCode);
  };

  return {
    formik,
    handleCopy,
    copied,
    findAddressByNetwork,
    findQRCodeByNetwork,
    walletAddresses,
    qrCode,
    setQrCode
  };
};

export default useFundingForm;
