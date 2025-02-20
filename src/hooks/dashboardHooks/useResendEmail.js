import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { resendEmail, reset } from "../../services/features/user/userSlice";

const useResendEmail = () => {
  const dispatch = useDispatch();

  const { isError, message, isResendEmailSuccess, isResendEmailLoading } =
    useSelector((state) => state.user);

  const resendEmailbtn = () => {
    return dispatch(resendEmail());
  };

  useEffect(() => {
    if (isResendEmailSuccess) {
      toast.success(message);
      dispatch(reset());
    }
  }, [isResendEmailSuccess]);

  if (isError) toast.error(message);

  return { resendEmailbtn, isResendEmailLoading };
};

export default useResendEmail;
