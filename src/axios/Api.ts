import axios from "axios";
import { BASE_URL, TOKEN } from "../utils/BaseUrl";

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use(
  async (config) => {
    const authToken = TOKEN;
    if (authToken) {
      config.headers.Authorization = authToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);
