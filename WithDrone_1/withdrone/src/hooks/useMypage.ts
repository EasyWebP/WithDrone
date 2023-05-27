import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import {
  getCartList,
  getLike,
  getLikeList,
  getOrderList,
} from "../api/product";
import { useState } from "react";

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

  const handleLogout = () => {
    authLogout().then((isLogout) => {
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
    setOrderData(data);
  };

  const getCartlist = async () => {
    const data = await getCartList();
    setCartData(data);
  };

  const mutateDeleteLike = useMutation(["getLike"], getLike, {
    onSuccess: (data) => {
      if (data.like) {
        toastMsg("찜 목록에 추가 되었습니다! 👏");
      } else {
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

  return {
    handleLogout,
    getLikelist,
    likeData,
    getOrderlist,
    orderData,
    getCartlist,
    cartData,
    mutateDeleteLike,
  };
}
