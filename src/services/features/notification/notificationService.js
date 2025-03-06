import axiosClient from "../../api/axiosClient";

const getAllNotifications = async () => {
  const response = await axiosClient.get(`/user/notification`);
  localStorage.setItem(
    "SC_user_notifications",
    JSON.stringify(response.data.result.data)
  );
  return response.data;
};
const getNotification = async (id) => {
  const response = await axiosClient.get(`/user/notification/${id}`);
  return response.data;
};

const notificationService = {
  getAllNotifications,
  getNotification,
};

export default notificationService;
