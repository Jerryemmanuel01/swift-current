import axiosClient from "../../api/axiosClient";

const getUsers = async () => {
  const response = await axiosClient.get(`/user`);
  localStorage.setItem(
    "SC_all_users",
    JSON.stringify(response.data.result.data)
  );

  return response.data;
};
const getPendingTransactions = async (options) => {
  const response = await axiosClient.get(
    `/user/transaction/all?status=${options?.stat}&type=${options?.type}`
  );
  
  return response.data;
};
const approveTransactions = async (data) => {
  const response = await axiosClient.patch(
    `/user/transaction/approve-transfer`, data
  );

  return response.data;
};

const adminUserService = {
  getUsers,
  getPendingTransactions,
  approveTransactions,
};

export default adminUserService;
