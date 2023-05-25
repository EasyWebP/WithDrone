import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const makeOneOrder = async (orderInfo: object, productId: number) => {
    const {data} = await authorizationClient.post(`${API.ORDER}/${productId}`, orderInfo);
    return data;
}

export const makeCartOrder = async (orderInfo: object) => {
    const {data} = await authorizationClient.post(API.ORDER, orderInfo);
    return data;
}