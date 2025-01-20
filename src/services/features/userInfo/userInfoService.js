//restructure slice so it can runonce without altering with other requests
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

const userInfoService = {
  getUserProfile,
};

export default userInfoService;
