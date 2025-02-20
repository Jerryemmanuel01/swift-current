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

  const {
    isEditProfileLoading,
    isEditProfileSuccess,
    isEditProfileError,
    message,
  } = useSelector((state) => state.user);
  useEffect(() => {
    if (isEditProfileError) toast.error(message);
    if (isEditProfileSuccess) {
      toast.success(message);
      formik.resetForm();
      dispatch(fetchUserInfo());
      navigate("/dashboard");
    }
    dispatch(reset());
    return;
  }, [isEditProfileSuccess, isEditProfileError, message]);

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
  return { formik, isEditProfileLoading, countryLists, currenciesTypies };

  return {};
};

export default useEditPinForm;
