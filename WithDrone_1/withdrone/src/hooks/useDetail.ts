import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toastMsg from "../components/Toast";
import { addCart, fetchProduct, getLike } from "../api/product";
import { ChangeEvent, useState } from "react";

interface dataInfo {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
  shippingCompany: string;
  imagePath: string;
  detailImageUrl1: string;
  detailImageUrl2: string;
  category: string;
  status: string;
  liked: boolean;
}

export default function useDetail() {
  const navigate = useNavigate();
  // const { id } = useParams();
  const { state } = useLocation();
  console.log("state", state);
  const [detailData, setDetailData] = useState<dataInfo | null>(null);
  const [productId, setProductId] = useState<number>(state);
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState<boolean | undefined>(undefined);
  const payload = { productId: productId };
  // console.log("ididiidid", id);

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const mutateLike = useMutation(["getLike"], getLike, {
    onSuccess: (data) => {
      console.log("data", data);
      setLike(data.like);
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
  const getDetailData = async () => {
    const data = await fetchProduct(productId);
    setDetailData(data);
  };
  const addToCart = async () => {
    const data = await addCart({ productId, count: quantity });
    console.log("장바구니 확인", data);
  };

  return {
    mutateLike,
    detailData,
    setDetailData,
    productId,
    setProductId,
    handleQuantityChange,
    handleIncrease,
    handleDecrease,
    quantity,
    like,
    payload,
    getDetailData,
    addToCart,
    setLike,
  };
}
