import axiosClient from "../../api/axiosClient";
import axios from "axios";

const getUserProfile = async () => {
  const response = await axiosClient.get(`/user/profile`);

  localStorage.setItem(
    "SC_user_info",
    JSON.stringify(response.data.result.data)
  );

  return response.data;
};

const funding = async (userData) => {
  const response = await axiosClient.post(``);

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

const userService = { funding, verify_KYC, image_upload, getUserProfile };

export default userService;
