import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // wichtig für Cookies / Auth / nutz ich fast überall brauch ich :)
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
