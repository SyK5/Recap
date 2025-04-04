import axios from "../api/axios";

const checkAuthStatus = async () => {
  try {
    const response = await axios.get("/auth", {
      withCredentials: true,
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export default checkAuthStatus;