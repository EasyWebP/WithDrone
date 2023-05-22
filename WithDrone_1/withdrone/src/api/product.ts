import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchProduct = async (like: boolean) => {
  const response = await unAuthorizationClient.get(
    `${API.PRODUCT}?like=${like}`
  );
  return response.data;
};