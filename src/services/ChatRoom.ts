import { api } from "../axios/Api";

export const SearchChatMember = async (username: string) => {
  const response = await api.get(`/chat/create_room?username=${username}`);
  return response.data;
};
export const CreateChatMembers = async (data: any) => {
  const response = await api.post(`/chat/create_room`, data);
  return response.data;
};

export const ChatMembers = async () => {
  const response = await api.get(`/chat/rooms`);
  return response.data;
};
