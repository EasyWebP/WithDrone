import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

export const fetchProductList = async (
  category?: string,
  like?: boolean,
  price?: boolean,
  status?: string,
  pageable?: { page?: number; size?: number; sort?: string[] }
) => {
  const { page, size, sort } = pageable ?? {};

  let url = `${API.PRODUCT}?`;

  if (
    category !== undefined ||
    like !== undefined ||
    price !== undefined ||
    status !== undefined ||
    pageable !== undefined
  ) {
    if (category !== undefined) {
      url += `category=${category}&`;
    }

    if (like !== undefined) {
      url += `like=${like}&`;
    }

    if (price !== undefined) {
      url += `price=${price}&`;
    }

    if (status !== undefined) {
      url += `status=${status}&`;
    }

    if (pageable !== undefined) {
      if (page !== undefined) {
        url += `page=${page}&`;
      }

      if (size !== undefined) {
        url += `size=${size}&`;
      }

      if (sort !== undefined && sort.length > 0) {
        const sortParams = sort.map((s) => `sort=${s}`).join("&");
        url += `${sortParams}&`;
      }
    }

    // 마지막 & 지움
    url = url.slice(0, -1);
  }

  const response = await unAuthorizationClient.get(url);
  return response.data;
};

// export const fetchProductList = async (category?: string, like?: boolean, price?: boolean, status?: string, pageable?: { page: number, size: number, sort: string[] }) => {
//     const { page, size, sort } = pageable ?? {};
//     const url = `${API.PRODUCT}?category=${category}&like=${like}&price=${price}&status=${status}`;
//   const response = await unAuthorizationClient.get(url);
//   return response.data;
// };
// &page=${page}&size=${size}&sort=${sort.join(',')}

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
export const getLikeList = async () => {
  const { data } = await authorizationClient.get(`${API.LIKE}`);
  return data;
};
export const getOrderList = async () => {
  const { data } = await authorizationClient.get(`${API.ORDER}`);
  return data;
};
export const getCartList = async () => {
  const { data } = await authorizationClient.get(`${API.CART}`);
  return data;
};

export const deleteCarts = async (cartItemId: number) => {
  const { data } = await authorizationClient.delete(
    `${API.CART}/${cartItemId}`
  );
  return data;
};
