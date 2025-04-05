import axios from "../api/axios";

const checkAuthStatus = async () => {
  try {
    const response = await axios.get("/auth/check", {
      withCredentials: true,
    });
    return response.status === 200;
  } catch (error) {
    const errMessage = error.response?.data?.message || error.message;
    return console.log("❌ Benutzer nicht authentifiziert:", errMessage);
  }
};

export default checkAuthStatus;
