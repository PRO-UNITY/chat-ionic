import { api } from "../axios/Api";

export const SearchChatMember = async (username: string) => {
  const response = await api.get(`/create_room?username=${username}`);
  return response.data;
};
export const CreateChatMembers = async (data: any) => {
  const response = await api.post(`/create_room`, data);
  return response.data;
};

export const ChatMembers = async () => {
  const response = await api.get(`/rooms`);
  return response.data;
};
