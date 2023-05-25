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

  if (category !== undefined || like !== undefined || price !== undefined || status !== undefined || pageable !== undefined) {
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
        const sortParams = sort.map((s) => `sort=${s}`).join('&');
        url += `${sortParams}&`;
      }
    }

    // 마지막 & 지움
    url = url.slice(0, -1);
  }

  console.log("!!", url);

  const response = await unAuthorizationClient.get(url);
  return response.data;
};

  
// export const fetchProductList = async (category?: string, like?: boolean, price?: boolean, status?: string, pageable?: { page: number, size: number, sort: string[] }) => {
//     const { page, size, sort } = pageable ?? {};
//     const url = `${API.PRODUCT}?category=${category}&like=${like}&price=${price}&status=${status}`;
//     console.log("!!", url)
//   const response = await unAuthorizationClient.get(url);
//   return response.data;
// };
// &page=${page}&size=${size}&sort=${sort.join(',')}

export const fetchProduct = async (id: number) => {
  const response = await unAuthorizationClient.get(
    `${API.PRODUCT}/${id}`
  );
  return response.data;
};