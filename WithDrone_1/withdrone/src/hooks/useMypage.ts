import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteCarts,
  fetchProduct,
  getCartList,
  getLike,
  getLikeList,
  getOrderList,
} from "../api/product";
import { useEffect, useState } from "react";
import QUERYKEYS from "../constants/querykey";

interface LikeProps {
  content: {
    id: number;
    name: string;
    price: number;
    manufacturer: string;
    imagePath: string;
    status: string;
  }[];
}
interface OrderProps {
  count: number;
  imagePath: string;
  manufacturer: string;
  orderDate: string;
  orderNumber: string;
  productName: string;
  price: number;
  status: string;
}
interface CartProps {
  cartItemId: number;
  productId: number;
  count: number;
  imagePath: string;
  manufacturer: string;
  productName: string;
  price: number;
  status: string;
}
export default function useMypage() {
  const navigate = useNavigate();
  const [likeData, setLikeData] = useState<LikeProps>();
  const [orderData, setOrderData] = useState<OrderProps>();
  const [cartData, setCartData] = useState<CartProps>();

  // const payload = { productId: productId };

  const handleLogout = () => {
    authLogout().then((isLogout) => {
      console.log(isLogout);
      if (isLogout.result === "LOGOUT") {
        localStorage.clear();
        navigate(`/`);
      }
    });
    toastMsg("로그아웃");
  };
  const getLikelist = async () => {
    const data = await getLikeList();
    setLikeData(data);
  };
  const getOrderlist = async () => {
    const data = await getOrderList();
    console.log("주문내역조회", data);
    setOrderData(data);
  };
  const getCartlist = async () => {
    const data = await getCartList();
    console.log("장바구니 내역 조회", data);
    setCartData(data);
  };

  const queryClient = useQueryClient();
  const mutateDeleteLike = useMutation(["getLike"], getLike, {
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries([QUERYKEYS.GET_LIKE_LIST]);
      if (data.like) {
        toastMsg("찜 목록에 추가 되었습니다! 👏");
      } else {
        queryClient.invalidateQueries([QUERYKEYS.GET_LIKE_LIST]);
        toastMsg("찜 목록에서 삭제 되었습니다! 👏");
      }
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  const mutateDeleteCarts = useMutation(["deleteCarts"], deleteCarts, {
    onSuccess: () => {
      toastMsg("장바구니에서 해당 제품이 삭제 되었습니다! 👏");
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });
  return {
    handleLogout,
    getLikelist,
    likeData,
    getOrderlist,
    orderData,
    getCartlist,
    cartData,
    mutateDeleteLike,
    mutateDeleteCarts,
  };
}
