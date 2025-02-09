import axiosClient from "../../api/axiosClient";

const resendEmail = async () => {
  const response = await axiosClient.get(`/user/resend-email`);

  return response.data;
};
const verify_email = async (token) => {
  const response = await axiosClient.get(`/auth/verify?token=${token}`);

  return response.data;
};
const editProfile = async (userData) => {
  const response = await axiosClient.patch(`/user/edit-profile`, userData);
  if (response.data.result.data) {
    localStorage.setItem("SC_access_token", response.data.result.data);
  }

  return response.data;
};
const getAccountName = async (userData) => {
  const response = await axiosClient.post(`/user/account-name`, userData);

  return response.data;
};

const userService = {
  resendEmail,
  verify_email,
  editProfile,
  getAccountName,
};

export default userService;
