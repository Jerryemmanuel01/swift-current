import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { verifyEmail, reset } from "../../services/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

const useVerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const [retry, setRetry] = useState(false);

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, [retry]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError) {
    toast.error(message);
    navigate("/home");
    dispatch(reset())
  }

  return { isLoading, isError, setRetry };
};

export default useVerifyEmail;
