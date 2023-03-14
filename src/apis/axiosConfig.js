import axios from "axios";
const axiosApiInstance = axios.create({
  baseURL: process.env.REACT_APP_DACAST_API_BASE_URL,
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      "X-Api-Key": `${process.env.REACT_APP_DACAST_API_KEY}`,
      "X-Format": "default",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApiInstance;
