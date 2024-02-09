import { api } from "../axios/Api";

export const ChatMsgs = async (id: string) => {
  const response = await api.get(`/chat/conversation/${id}`);
  return response.data;
};
export const SendMsg = async (id: number, data: any) => {
  const response = await api.put(`/chat/conversation/${id}`, data);
  return response.data;
};
