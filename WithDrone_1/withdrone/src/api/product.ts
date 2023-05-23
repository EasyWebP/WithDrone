import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchProductList = async (like: boolean, price: boolean) => {
  const response = await unAuthorizationClient.get(
    `${API.PRODUCT}?like=${like}`
  );
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const response = await unAuthorizationClient.get(
    `${API.PRODUCT}/${id}`
  );
  return response.data;
};