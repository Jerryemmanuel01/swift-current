import axiosClient from "../../api/axiosClient";
// import axios from "axios";

const sign_up = async () => {
  const response = await axiosClient.post(`/auth/register`, data);

  localStorage.setItem("userId", response.data.data._id);

  return response.data;
};

const verify_email = async () => {
  const userId = localStorage.getItem("userId");
  if (userId !== null) {
    const response = await axiosClient.post(`/auth/verify/${userId}`, userData);

    if (response.data.success === true) localStorage.removeItem("userId");

    return response.data;
  }
  return;
};

const login = async () => {
  const response = await axiosClient.post(`/auth/login`, userData);

  // if (response.data.success === true) {
  //   localStorage.setItem("_access_token", response.data.data.accessToken);

  //   localStorage.setItem("_refresh_token", response.data.data.refreshToken);
  // }

  return response.data;
};

const forget_password = async () => {
  const response = await axiosClient.post(`/auth/forgot-password`, userData);

  if (response.data.success === true)
    localStorage.setItem("token", response.data.data);
  return response.data;
};

const reset_password = async () => {
  const response = await axiosClient.post(`/auth/reset-password`, userData);

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
