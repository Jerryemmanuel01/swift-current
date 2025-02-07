import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { funding, reset } from "../../services/features/funding/fundingSlice";
import { useNavigate } from "react-router-dom";
import { editProfileSchema } from "../../lib/schema";
import { currenciesTypies, walletAddresses } from "../../lib/utils";
import countryLists from "../../lib/countries.json";
import { fetchUserInfo } from "../../services/features/userInfo/userInfoSlice";

const useEditProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.user
  );

  const { user } = useSelector((state) => state.userInfo);

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
      firstName: user.userInfo.firstName,
      lastName: user.userInfo.lastName,
      userName: user.userInfo.userName,
      email: user.userInfo.email,
      country: user.userInfo.country,
      phone: user.userInfo.phone,
      occupation: user.userInfo.occupation,
      currency: user.userInfo.currency,
    },
    validationSchema: editProfileSchema,
    onSubmit: (values) => {
      const userData = Object.fromEntries(
        Object.entries(values).filter(([_, value]) => value)
      );
      console.log(userData);

      //   dispatch(funding(userData));
    },
  });
  return { formik, isLoading, countryLists, currenciesTypies };
};

export default useEditProfileForm;
