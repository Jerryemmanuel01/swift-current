import { useFormik } from "formik";
import { useEffect } from "react";
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
    if (isError) console.log(message);

    if (isError) toast.error(message);
    if (isSuccess) {
      toast.success(message);
      formik.resetForm();
      navigate("/auth/sign-up-success");
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError, message]);

  // const handleImageUpload = async (photo) => {
  //   const data = new FormData();
  //   data.append("file", photo);
  //   data.append("upload_preset", "swift_current");
  //   data.append("cloud_name", "duhdvdbdm");

  //   try {
  //     const res = await fetch(
  //       "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
  //       {
  //         method: "POST",
  //         body: data,
  //       }
  //     );
  //     const uploadedImageURL = await res.json();

  //     return uploadedImageURL.url;
  //   } catch (error) {
  //     console.error("Error uploading the image:", error);
  //     toast.error("Failed to upload image. Please try again.");
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phone: "",
      country: "",
      accountType: "",
      password: "",
      confirmPassword: "",
      currency: "",
      profileImage: null,
      terms: false,
    },
    validationSchema: signUpSchema,
    onSubmit: async ({
      accountType,
      country,
      currency,
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      phone,
      profileImage,
      userName,
    } = values) => {
      const userData = {
        accountType,
        country,
        currency,
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
        phone,
        profileImage,
        userName,
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
