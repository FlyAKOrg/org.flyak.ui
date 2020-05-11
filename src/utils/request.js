import axios from "axios";
import { getToken } from "./auth";

const instance = axios.create({
  baseURL: "https://api.dev.flyak.org/",
});

instance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (!config.headers.Authorization) {
      const token = getToken();

      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }
    }

    return newConfig;
  },
  (error) => Promise.reject(error)
);

export default instance;
