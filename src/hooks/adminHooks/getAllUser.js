import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { reset, getUsers } from "../../services/features/adminUser/adminUserSlice"

import { useNavigate } from "react-router-dom";

const getAllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (isSuccess) {
    //   toast.success(message);
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isError && message) toast.error(message);

  return { users, isLoading, isError };
};

export default getAllUser;
