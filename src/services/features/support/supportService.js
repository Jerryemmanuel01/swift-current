import axiosClient from "@/services/api/axiosClient";

const send_message = async (data) => {
  const response = await axiosClient.post("/contact-us", data);

  return response.data;
};

const supportService = {
    send_message
}

export default supportService;