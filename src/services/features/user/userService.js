import axiosClient from "../../api/axiosClient";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { reset } from "./userSlice";
import axios from "axios";

const funding = async (userData) => {
  const response = await axiosClient.post(``);

  return response.data;
};

const verify_KYC = async (userData) => {
  const response = await axiosClient.post(``);

  return response.data;
};

const image_upload = async (photo) => {
  const data = new FormData();
  data.append("file", photo);
  data.append("upload_preset", "swift_current");
  data.append("cloud_name", "duhdvdbdm");

  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
    data
  );

  return response.data.url;
};

const userService = { funding, verify_KYC, image_upload };

export default userService;
