import axiosClient from "../../api/axiosClient";
import axios from "axios";

const resendEmail = async () => {
  const response = await axiosClient.get(`/user/resend-email`);

  return response.data;
};
const verify_email = async (token) => {
  const response = await axiosClient.get(`/auth/verify?token=${token}`);

  return response.data;
};

const funding = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/deposit`,
    userData
  );
  console.log(response.data);

  return response.data;
};

const verify_KYC = async (userData) => {
  const response = await axiosClient.post(``);

  return response.data;
};

const image_upload = async (photo) => {
  const data = new FormData();
  data.append("file", photo);
  data.append("upload_preset", "swift_current");
  data.append("cloud_name", "duhdvdbdm");

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
    data
  );

  return response.data.url;
};

const userService = {
  funding,
  verify_KYC,
  image_upload,
  resendEmail,
  verify_email,
};

export default userService;
