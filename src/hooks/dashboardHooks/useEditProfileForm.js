import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { editProfile, reset } from "../../services/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { editProfileSchema } from "../../lib/schema";
import { currenciesTypies } from "../../lib/utils";
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
      firstName: user.userInfo.firstName,
      lastName: user.userInfo.lastName,
      email: user.userInfo.email,
      country: user.userInfo.country,
      phone: String(user.userInfo.phone),
      occupation: user.userInfo.occupation,
      currency: user.userInfo.currency,
    },
    validationSchema: editProfileSchema,
    onSubmit: (values) => {
      const userData = Object.fromEntries(
        Object.entries(values).filter(([_, value]) => value)
      );
      const changedValues = Object.fromEntries(
        Object.entries(userData).filter(
          ([key, value]) => value !== formik.initialValues[key]
        )
      );
      console.log(changedValues);
      if (Object.keys(changedValues).length === 0) {
        toast.error("No changes made on profile");
        return;
      }

      dispatch(editProfile(changedValues));
    },
  });
  return { formik, isLoading, countryLists, currenciesTypies };
};

export default useEditProfileForm;
