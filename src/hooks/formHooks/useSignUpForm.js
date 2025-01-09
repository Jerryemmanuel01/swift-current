import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { signUp, reset } from "../../services/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../lib/schema";
import countryLists from "../../lib/countries.json";
import { accountTypies, currenciesTypies } from "../../lib/utils";

const useSignUpForm = () => {
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

  const handleImageUpload = async (photo) => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "swift_current");
    data.append("cloud_name", "duhdvdbdm");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploadedImageURL = await res.json();

      return uploadedImageURL.url;
    } catch (error) {
      console.error("Error uploading the image:", error);
      toast.error("Failed to upload image. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      country: "",
      account: "",
      password: "",
      confirmPassword: "",
      currency: "",
      photo: null,
      terms: false,
    },
    validationSchema: signUpSchema,
    onSubmit: async ({
      account,
      country,
      currency,
      email,
      firstName,
      lastName,
      password,
      phone,
      photo,
      username,
    } = values) => {
      const profileUrl = await handleImageUpload(photo);

      const userData = {
        account,
        country,
        currency,
        email,
        firstName,
        lastName,
        password,
        phone,
        photo,
        username,
        profileUrl,
      };

      dispatch(signUp(userData));
    },
  });
  return {
    formik,
    isLoading,
    message,
    countryLists,
    accountTypies,
    currenciesTypies,
  };
};

export default useSignUpForm;
