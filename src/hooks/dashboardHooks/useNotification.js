import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  getAllNotifications,
  getNotification,
  reset,
  resetNotification,
} from "../../services/features/notification/notificationSlice";
import toast from "react-hot-toast";

const useNotification = () => {
  const [showModal, setShowModal] = useState(false);

  const { user } = useOutletContext();
  const userInfo = user?.userInfo;
  const {
    notification,
    notifications,
    isLoading,
    isError,
    message,
    isSuccess,
    isNotificationMessage,
    isNotificationLoading,
    isNotificationSuccess,
    isNotificationError,
  } = useSelector((state) => state.notification);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotifications());
    dispatch(resetNotification());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    if (isError) toast.error(message);
  }, [isSuccess, isError]);

  useEffect(() => {
    if (isNotificationError) toast.error(isNotificationMessage);
  }, [isNotificationError]);

  const handleRowClick = (id) => {
    // dispatch(resetNotification());
    dispatch(getNotification(id));
    setShowModal(true);
  };
  //   useEffect(() => {
  //     if (!notification) setShowModal(false);
  //   }, [notification]);

  return {
    userInfo,
    navigate,
    isLoading,
    notifications,
    showModal,
    setShowModal,
    handleRowClick,
    isNotificationLoading,
    notification,
    resetNotification,
  };
};

export default useNotification;
