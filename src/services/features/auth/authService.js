import axiosClient from "../../api/axiosClient";
import axios from "axios";
import Cookies from "js-cookie";

const sign_up = async (userData) => {
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

const login = async (userData) => {
  const response = await axiosClient.post(`/auth/login`, userData);

  if (response.data.result.data) {
    const token = response.data.result.data;
    Cookies.set("SC_access_token", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
  }

  return response.data;
};

const forget_password = async (userData) => {
  const response = await axiosClient.post(`/auth/forgot-password`, userData);

  return response.data;
};

const reset_password = async ({
  password,
  confirmPassword,
  token,
} = userData) => {
  const data = { password, confirmPassword };

  const response = await axiosClient.patch(
    `/auth/reset-password?token=${token}`,
    data
  );
  return response.data;
};

const logout = async () => {
  const accessToken = Cookies.get("SC_access_token");
  if (accessToken) {
    Cookies.remove("SC_access_token");
    localStorage.removeItem("SC_user_info");
    localStorage.removeItem("SC_all_users");
    localStorage.removeItem("SC_pending_transaction");
    localStorage.removeItem("SC_user_trasactions");
    localStorage.removeItem("SC_all_transaction");
  }

  return { message: "Logout successful" };
};

const authService = {
  sign_up,
  login,
  forget_password,
  reset_password,
  logout,
};

export default authService;
