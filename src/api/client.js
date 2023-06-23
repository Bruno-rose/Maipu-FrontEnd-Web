import axios from "axios";

const baseURL = process.env.API_URL || "http://localhost:3000";
const client = axios.create({ baseURL });

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.name) return Promise.reject(error?.response?.data?.name);
    return Promise.reject(error);
  }
);

export default client;