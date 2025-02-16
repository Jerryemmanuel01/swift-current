import axiosClient from "../../api/axiosClient";

const getUsers = async () => {
  const response = await axiosClient.get(`/user`);
    localStorage.setItem(
      "SC_all_users",
      JSON.stringify(response.data.result.data)
    );

  return response.data;
};

const adminUserService = { getUsers };

export default adminUserService;
