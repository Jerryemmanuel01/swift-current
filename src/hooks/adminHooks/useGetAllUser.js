import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  reset,
  getUsers,
} from "../../services/features/adminUser/adminUserSlice";
import { useNavigate } from "react-router-dom";

const useGetAllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      //   toast.success(message);
      dispatch(reset());
      setData(users)
    }
  }, [isSuccess]);

  if (isError) toast.error(message || "Error getting users");

  const [data, setData] = useState(users);
  const [sortOrder, setSortOrder] = useState("asc"); // Track sorting order

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle order
  };

  const handleRowClick = (id) => {
    navigate(`/admin/user-profile/${id}`);
  };

  return {
    users,
    isLoading,
    isError,
    data,
    sortOrder,
    handleSort,
    handleRowClick,
    navigate,
  };
};

export default useGetAllUser;
