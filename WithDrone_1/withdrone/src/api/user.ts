import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchMember = async () => {
  const response = await authorizationClient.get(
    `${API.MEMBER}`
  )
  return response.data;
};

export const fetchPost = async () => {
    const response = await (await fetch(API.MEMBER)).json();
    return response;
  };