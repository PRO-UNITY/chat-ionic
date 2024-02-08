import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";
import { getToken, storage } from "../storage";
import { GetAccessToken } from "../services";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const authToken = await getToken();
    if (authToken) {
      config.headers.Authorization = authToken.access;
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
      const refreshToken = await getToken();
      GetAccessToken(refreshToken.refresh).then((res) => {
        storage.set("token", res);
      });
    }
    return Promise.reject(error);
  }
);
