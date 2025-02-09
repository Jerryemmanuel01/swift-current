import axiosClient from "../../api/axiosClient";

const internalTransfer = async (userData) => {  
  const response = await axiosClient.post(
    `/user/transaction/internal-transfer`,
    userData
  );
  
  return response.data;
};

const internationalTransfer = async (userData) => {
  const response = await axiosClient.post(`/user/internal-transfer`, userData);
  console.log(response.data);

  return response.data;
};

const localTransfer = async (userData) => {
  const response = await axiosClient.post(`/user/internal-transfer`, userData);
  console.log(response.data);

  return response.data;
};

const transferService = { internalTransfer, internationalTransfer, localTransfer };

export default transferService;
