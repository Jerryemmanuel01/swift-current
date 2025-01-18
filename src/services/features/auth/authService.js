import axiosClient from "../../api/axiosClient";
import axios from "axios";

const sign_up = async (userData) => {
  console.log("authSlice: ", userData);
  const { profileImage, ...rest } = userData;
  const data = new FormData();
  data.append("file", profileImage);
  data.append("upload_preset", "swift_current");
  data.append("cloud_name", "duhdvdbdm");

  const uploadImage = await axios.post(
    "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
    data
  );
  const photoUrl = uploadImage.data.url;

  if (photoUrl === "" || undefined) throw new Error("Error uploading image");

  userData = { ...rest, profileImage: photoUrl };

  const response = await axiosClient.post(`/auth/register`, userData);

  return response.data;
};

const verify_email = async (userData) => {
  const userId = localStorage.getItem("userId");
  if (userId !== null) {
    const response = await axiosClient.post(`/auth/verify/${userId}`, userData);

    if (response.data.success === true) localStorage.removeItem("userId");

    return response.data;
  }
  return;
};

const login = async (userData) => {
  const response = await axiosClient.post(`/auth/login`, userData);

  // if (response.data.success === true) {
  //   localStorage.setItem("_access_token", response.data.data.accessToken);

  //   localStorage.setItem("_refresh_token", response.data.data.refreshToken);
  // }

  return response.data;
};

const forget_password = async (userData) => {
  const response = await axiosClient.post(``, userData);

  // if (response.data.success === true)
  //   localStorage.setItem("token", response.data.data);
  return response.data;
};

const reset_password = async (userData) => {
  const response = await axiosClient.post(`/auth/reset-password`, userData);

  if (response.data.success === true) localStorage.removeItem("token");
  return response.data;
};

const authService = {
  sign_up,
  image_upload,
  verify_email,
  login,
  forget_password,
  reset_password,
};

export default authService;
