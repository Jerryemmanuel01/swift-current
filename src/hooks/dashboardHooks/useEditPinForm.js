import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { editProfile, reset } from "../../services/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { editPinSchema } from "../../lib/schema";
import { currenciesTypies, walletAddresses } from "../../lib/utils";
import countryLists from "../../lib/countries.json";
import { fetchUserInfo } from "../../services/features/userInfo/userInfoSlice";

const useEditPinForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      dispatch(fetchUserInfo());
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      pin: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: editPinSchema,
    onSubmit: (values) => {
      if (values.newPassword && !values.confirmPassword) {
        toast.error("Please confirm your new password");
        return;
      }
      const userData = Object.fromEntries(
        Object.entries(values).filter(([_, value]) => value)
      );
      if (
        Object.entries(userData).length === 1 &&
        "currentPassword" in userData
      ) {
        toast.error("Cannot submit only current password");
        return;
      }
      dispatch(editProfile(userData));
    },
  });
  return { formik, isLoading, countryLists, currenciesTypies };

  return {};
};

export default useEditPinForm;
