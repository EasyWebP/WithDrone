import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import {
  fetchProduct,
  getCartList,
  getLikeList,
  getOrderList,
} from "../api/product";
import { useEffect, useState } from "react";

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
export default function useMypage() {
  const navigate = useNavigate();
  const [likeData, setLikeData] = useState<LikeProps>();
  const [orderData, setOrderData] = useState<OrderProps>();
  const [cartData, setCartData] = useState<OrderProps>();

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
  return {
    handleLogout,
    getLikelist,
    likeData,
    getOrderlist,
    orderData,
    getCartlist,
    cartData,
  };
}
