import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use(
  async (config) => {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjIwNzA1LCJpYXQiOjE3MDcyMTc3MDUsImp0aSI6IjgzYWE3MjkxM2JiMTQ5Y2FhNmEzY2M4MWY3MTI5YWUzIiwidXNlcl9pZCI6MX0.vADgR7seiOYa5QpvNhwrOUr09ZEDpR-o_38RCsi4rK8";
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
