import axios from "axios";
import axiosClient from "../../api/axiosClient";

const verify_KYC = async (userData) => {
  const { identityCardPhoto, ...rest } = userData;
  const data = new FormData();
  data.append("file", identityCardPhoto);
  data.append("upload_preset", "swift_current");
  data.append("cloud_name", "duhdvdbdm");

  const uploadImage = await axios.post(
    "https://api.cloudinary.com/v1_1/duhdvdbdm/image/upload",
    data
  );
  const photoUrl = uploadImage.data.url;

  if (photoUrl === "" || undefined) throw new Error("Error uploading image");

  userData = { ...rest, identityCardPhoto: photoUrl };

  const response = await axiosClient.patch(`/user/kyc`, userData);

  return response.data;
};

const KYCService = { verify_KYC };

export default KYCService;
