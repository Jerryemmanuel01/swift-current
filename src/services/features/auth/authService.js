import { useLocation } from "react-router-dom";
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
  console.log(response.data.result.data);

  if (response.data.result.data) {
    localStorage.setItem("SC_access_token", response.data.result.data);
  }

  return response.data;
};

const forget_password = async (userData) => {
  const response = await axiosClient.post(`/auth/forgot-password`, userData);

  return response.data;
};

const reset_password = async (userData) => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  console.log(token);
  
  const response = await axiosClient.post(`/auth/reset-password?token=${token}`, userData);

  if (response.data.success === true) localStorage.removeItem("token");
  return response.data;
};

const authService = {
  sign_up,
  verify_email,
  login,
  forget_password,
  reset_password,
};

export default authService;
