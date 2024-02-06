import axios from "axios";
import { BASE_URL } from "../utils/BaseUrl";

export const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use(
  async (config) => {
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MjE2ODQyLCJpYXQiOjE3MDcyMTM4NDIsImp0aSI6IjFmMzJhY2E4MDVlZDRlMThhNmUxZWY5MGYxZTJkNjdiIiwidXNlcl9pZCI6MX0.4zhtOKiI38w4oxhHeiGfxRs9t0mcOPVSQSWzzCF3Mu4";
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
