import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  transferFee,
  reset,
} from "../../../services/features/transfer/transferSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import { fundingSchema } from "../../../lib/schema";
import { walletAddresses } from "../../../lib/utils";
import { fetchUserInfo } from "../../../services/features/userInfo/userInfoSlice";
import { getTransactions } from "../../../services/features/user/userSlice";

const useTransferFee = (rate, userTransaction) => {
  const [copied, setCopied] = useState(false);
  const [qrCode, setQrCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.transfer
  );
  const { user } = useOutletContext();
  const tier = user.userInfo.accountLevel;

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      dispatch(fetchUserInfo());
      dispatch(getTransactions());

      if (tier !== "Tier 3") {
        navigate("/dashboard/upgrade-fee");
      } else {
        navigate("/dashboard");
      }
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      amount: rate,
      blockchainNetwork: "",
      walletAddress: "",
      transactionId: "",
    },
    validationSchema: fundingSchema,
    onSubmit: ({
      amount,
      blockchainNetwork,
      transactionId,
      walletAddress,
    } = values) => {
      if (formik.values.blockchainNetwork === "") {
        toast.error("Blockchain Network is required");
        return;
      }
      const metadata = {
        blockchainNetwork,
        walletAddress,
        transactionId,
        firstTransactionId: userTransaction._id,
      };
      const userData = { amount, metadata };

      dispatch(transferFee(userData));
    },
  });

  const handleCopy = () => {
    if (formik.values.walletAddress) {
      navigator.clipboard
        .writeText(formik.values.walletAddress)
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

  const findAddressByNetwork = (blockchainNetwork) => {
    return walletAddresses.find(
      (wallet) => wallet.blockchainNetwork === blockchainNetwork
    )?.walletAddress;
  };
  const findQRCodeByNetwork = (blockchainNetwork) => {
    setQrCode(
      walletAddresses.find(
        (qrCode) => qrCode.blockchainNetwork === blockchainNetwork
      )?.qrCode
    );
  };

  return {
    formik,
    handleCopy,
    copied,
    findAddressByNetwork,
    findQRCodeByNetwork,
    walletAddresses,
    qrCode,
    setQrCode,
    isLoading,
  };
};

export default useTransferFee;
