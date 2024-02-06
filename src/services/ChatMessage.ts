import { api } from "../axios/Api";

export const ChatMsgs = async (id: string) => {
  const response = await api.get(`/conversation/${id}`);
  return response.data;
};
export const SendMsg = async (id: number, data: any) => {
  const response = await api.put(`/conversation/${id}`, data);
  return response.data;
};
