import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";
import { getToken } from "../storage";
import { useHistory } from "react-router-dom"; // ionic-da ishlatish

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const authToken = await getToken();
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
      console.log("log out");
    }
    return Promise.reject(error);
  }
);
