import axiosClient from "../../api/axiosClient";

const internalTransfer = async (userData) => {
  const response = await axiosClient.post(
    `/user/internal-transfer`,
    userData
  );
  console.log(response.data);

  return response.data;
};

const transferService = {internalTransfer};

export default transferService;
