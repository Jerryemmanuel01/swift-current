import axiosClient from "../../api/axiosClient";

const resendEmail = async () => {
  const response = await axiosClient.get(`/user/resend-email`);

  return response.data;
};
const verify_email = async (token) => {
  const response = await axiosClient.get(`/auth/verify?token=${token}`);

  return response.data;
};

const userService = {
  resendEmail,
  verify_email,
};

export default userService;
