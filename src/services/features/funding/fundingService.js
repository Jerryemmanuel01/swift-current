import axiosClient from "../../api/axiosClient";

const funding = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/deposit`,
    userData
  );

  return response.data;
};

const fundingService = { funding };

export default fundingService;
