import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchProductList = async (like: boolean, price: boolean) => {
  const response = await unAuthorizationClient.get(
    `${API.PRODUCT}?like=${like}`
  );
  return response.data;
};

export const fetchProduct = async (id: number) => {
  const { data } = await authorizationClient.get(`${API.PRODUCT}/${id}`);
  return data;
};

export const getLike = async (productId: object) => {
  const { data } = await authorizationClient.post(`${API.LIKE}`, productId);
  return data;
};

export const addCart = async (product: object) => {
  const { data } = await authorizationClient.post(`${API.CART}`, product);
  return data;
};
