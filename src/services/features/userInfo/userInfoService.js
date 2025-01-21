import axiosClient from "../../api/axiosClient";

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
