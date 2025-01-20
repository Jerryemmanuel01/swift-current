import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { resendEmail, reset } from "../../services/features/user/userSlice";

const useResendEmail = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );

  const resendEmailbtn = () => {
    return dispatch(resendEmail());
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) toast.error(message);

  return { resendEmailbtn, isLoading };
};

export default useResendEmail;
