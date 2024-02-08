import axios from "axios";
import { BASE_URL_AUTH } from "../utils/BaseUrl";

export const SignUpUser = async (data: any) => {
  const response = await axios.post(`${BASE_URL_AUTH}auth/signup`, data);
  return response.data;
};
export const SignInUser = async (data: any) => {
  const response = await axios.post(`${BASE_URL_AUTH}auth/sigin`, data);
  return response.data;
};
export const GetAccessToken = async (token: string) => {
  const response = await axios.post(`${BASE_URL_AUTH}auth/token/refresh/`, {
    refresh: token,
  });
  return response.data;
};
