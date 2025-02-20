import axiosClient from "../../api/axiosClient";

const internalTransfer = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/internal-transfer`,
    userData
  );

  return response.data;
};

const internationalTransfer = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/international-transfer`,
    userData
  );

  return response.data;
};

const localTransfer = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/local-transfer`,
    userData
  );

  return response.data;
};

const cryptoTransfer = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/crypto-transfer`,
    userData
  );

  return response.data;
};

const transferFee = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/swift-fee`,
    userData
  );

  return response.data;
};

const upgradeFee = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/account-upgrade`,
    userData
  );

  return response.data;
};

const blockchainFee = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/crypto-swift-fee`,
    userData
  );

  return response.data;
};

const purchaseToken = async (userData) => {
  const response = await axiosClient.post(
    `/user/transaction/purchase-token`,
    userData
  );

  return response.data;
};

const transferService = {
  internalTransfer,
  internationalTransfer,
  localTransfer,
  cryptoTransfer,
  purchaseToken,
  transferFee,
  blockchainFee,
  upgradeFee
};

export default transferService;
