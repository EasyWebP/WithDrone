import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchMember = async () => {
  const response = await authorizationClient.get(`${API.MEMBER}`);
  return response.data;
};

export const authSignup = async (userData: object) => {
    const { data } = await unAuthorizationClient.post(API.SIGNUP, userData);
    return data;
  };

export const makeOrder = async () => {
    
}